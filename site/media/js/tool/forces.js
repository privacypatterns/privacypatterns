var root, qroot, css = document.styleSheets[0], rules = {}, temp, headers = {}, exclusive = false, inexclusiveCSSRule, wizardItems = [], categories = [], attributes = [];
// Load Google Dependencies - no longer used, still compatible though
//google.load("visualization", "1", { packages: ["corechart"] });
//google.setOnLoadCallback(drawChart);
// Old way
////google.charts.load('current', {});
////google.charts.setOnLoadCallback(drawChart);

// When using Google Sheets, comment out window.onload
window.onload = load;

function load(){
	//var clientF = new XMLHttpRequest(), clientQ = new XMLHttpRequest();
	//clientF.open('GET', '/Forces.tsv');
	//clientQ.open('GET', '/Questions.tsv');
	//clientF.onreadystatechange = function() {
	//	if (clientF.readyState === 4)
	//		handleForceQueryResponse(clientF.responseText);
	//};
	//clientQ.onreadystatechange = function() {
	//	if (clientQ.readyState === 4)
	//		handleQuestionQueryResponse(clientQ.responseText);
	//};
	//clientF.send();
	//clientQ.send();

	// Use fetch (see https://caniuse.com/#search=fetch)
	fetch("Forces.tsv")
		.then( response => response.text() )
		.then( text => handleForceQueryResponse(text) );
	fetch("Questions.tsv")
		.then( response => response.text() )
		.then( text => handleQuestionQueryResponse(text) );
}

function updateVisibility(){
	// Should unhide when filters change
	restoreHidden();
    var selected, selector = "";
    // Start by clearing the report
    selected = document.querySelectorAll(
      '#report li, span.category');
    for (var i = 0; i < selected.length; i++){
        // What bubbleUpToggle used to do, but per element
        // headers now have classes so they are also affected
        selected[i].style.display = "";
    }

    // For the only style filter, categories must be selected
    // Only the attributes which meet at least one category are shown
    if (exclusive){
        for (var i = 0; i < categories.length; i++)
          for (var j = 0; j < attributes.length; j++)
            selector += ", #report .header." + categories[i]
              + "" + attributes[j] +
                        ", #report ." + categories[i]
              + "." + attributes[j] + ":not(.header)";
    }
    // For the all style filter, categories are added to results
    // Any active categories and attributes are shown
    else {
        for (var i = 0; i < categories.length; i++)
          selector += ", #report ." + categories[i];
        for (var i = 0; i < attributes.length; i++)
          selector += ", #report ." + attributes[i];
    }

    // Set visibility for all elements which meet the criteria
    // Remove leading comma and space (better than ifs in forloops)
    selected = document.querySelectorAll(
        selector[0] == ',' ? selector.substring(2) : "#nothing");
    for (var i = 0; i < selected.length; i++){
        // What bubbleUpToggle used to do, but per element
        // headers now have classes so they are also affected
        selected[i].style.display = "inherit";
    }
    // Update: one nice bonus, count of relevant forces
    // Unfortunately also has headers in count, must subtract them
    root.element.children[0].children[2].textContent =
        document.querySelectorAll('.force[style*="display: inherit"]')
        .length;
}

// Variant of toggle, calls toggle after updating any applicable 'only' rule
function toggleCat(element){
    if (element.classList.contains('active'))
      for (var i = 0; i < element.classList.length; i++){
        if (element.classList[i] != "active" &&
          element.classList[i] != "answer"){
            categories.splice(
              categories.indexOf(element.classList[i]), 1);
            element.classList.remove('active');
        }
      }
    else
      for (var i = 0; i < element.classList.length; i++){
        if (element.classList[i] != "active" &&
          element.classList[i] != "answer"){
            categories.push(element.classList[i]);
            element.classList.add('active');
        }
      }
    // Update, handle visibility independent of onclick toggles
    updateVisibility();
}

// Use the added classes for each attribute to show or hide forces
function toggleAttr(element, toggleCat = false){
        // Toggling off, remove active class, remove inactive attributes
        if (element.classList.contains('active')){
          element.classList.remove('active');
          //Only do the below for attributes// --or inexclusive cats--
          if (!toggleCat)// || !exclusive) // cats handled differently now
            for (var i = 0; i < element.classList.length; i++)
              if (element.classList[i] != "active" &&
                element.classList[i] != "answer")
                  // Remove (a single instance) of the attribute
                  attributes.splice(
                  attributes.indexOf(element.classList[i]), 1);
        }
        // Toggling on, add the active class, add active attributes
        else {
          element.classList.add('active');
          // Only do the below for attributes// --or inexclusive cats--
          if (!toggleCat)// || !exclusive) // cats handled differently now
            for (var i = 0; i < element.classList.length; i++)
              if (element.classList[i] != "active" &&
                element.classList[i] != "answer")
                // Add to attributes list
                // Don't check if already in use, duplicates are useful:
                // If different answers include the same attribute, removing
                // one should not remove the attribute for the other as well
                attributes.push(element.classList[i]);
        }
        // Update, handle visibility independent of onclick toggles
        updateVisibility();
}

// Custom sort check keeps headers on top of forces
function sortCheckByHeader(a, b){
          if (a.category > b.category)
              return -1;
          if (a.category < b.category)
              return 1;
          return 0;
}

// Call recursive un/check on each checkbox in forces (root)
function showhideall(element){
        if (element.checked){
          setChecksRecursively(root, true);
          root.element.children[0].children[1].textContent =
            "Hide All Relevant Forces";
        }
        else {
          setChecksRecursively(root, false);
          root.element.children[0].children[1].textContent =
            "Show All Relevant Forces"
        }
}

// Move down the hierarchy to set each checkbox element of a node
function setChecksRecursively(node, checked){
        if (node.children.length > 0){
          node.checkbox.checked = checked;
          for (var i = node.children.length - 1; i >= 0; i--){
            setChecksRecursively(node.children[i], checked);
          }
        }
}

// Toggle the class to show/hide the sibling element (patterns)
function patterns(element){
        if (element.classList.contains("hide")){
          element.classList.remove("hide");
          element.innerText = element.innerText.replace("show", "hide");
        }
        else {
          element.classList.add("hide");
          element.innerText = element.innerText.replace("hide", "show");
        }
}

// No longer used, data now maintained on GitHub in TSV
// Make use of Google Charts API to get Sheets through a callback
function drawChart() {
        var query;
        // Optionally, we can only refresh on a querystring, or serverside
        //if (location.search.search('refresh')>0){
          //Get Questions, Answers, Attributes
          query = new google.visualization.Query("Questions.json");
//"https://docs.google.com/spreadsheets/d/1GUaSaCinhmQhPhMmCVWQ_JXq_NtVSJoMYSG2Im5JR7Y/gviz/tq?gid=2028164175&headers=1&range=A1:D200");
          query.send(handleQuestionQueryResponse);

        //Get Forces, Categories, Headers, Attributes from new (Light) Sheet
        // Frc/Qu, ParQu, LenTM, GenCat, PattFm, RecNum, ArtTitl, ArtHL, Attr
        //   if (false) {// Using old sheet
        //     queryString =
        //         encodeURIComponent('SELECT D, E, G, J, I, A, B, F, K');
        //     query = new google.visualization.Query(
        //         "https://docs.google.com/spreadsheets/d/151Kti-sS07W5Xe1R8pSHEB4yxtBTDeRBQZ1aiX39ae4/gviz/tq?gid=1627440606&headers=1&range=A1:U300&tq="
        //         + queryString);
        //   }
        //  // Using light sheet
        //  else {
            // queryString =
            //     encodeURIComponent('SELECT E, D, J, G, F, A, H, I, C');
            query = new google.visualization.Query("Forces.json");
// "https://docs.google.com/spreadsheets/d/1GUaSaCinhmQhPhMmCVWQ_JXq_NtVSJoMYSG2Im5JR7Y/gviz/tq?gid=2090855297&headers=1&range=A1:J250&tq="
//                 + queryString);
        //  }
          //query.setQuery('select E, D, J, G, F, A, H, I, C');
          query.send(handleForceQueryResponse);
        // Below can load a file from the server instead of from Google
        // }
        // else {
        //   query = new google.visualization.Query(location.protocol ==
        //     location.href.replace('forces.html', 'questions.json'));
        //   query.send(handleQuestionQueryResponse);

        //   query = new google.visualization.Query(location.protocol ==
        //     location.href.replace('forces.html', 'forces.json'));
        //   query.send(handleForceQueryResponse);
        // }

}

// Callback for forces. Populate hierarchy and display forces with
// related information as children of headers/categories
function handleForceQueryResponse(response) {
		var data, tsv = 0;
		// TSV Variant
		if (typeof response === 'string' || response instanceof String){
			// tsv needs to skip header
			tsv = 1;
			// restore linebreaks .replace('  ', '\n\n')
			// populate data with rows
			data = response.split('\r\n');
			// populate rows with values
			for (var i = 0; i < data.length; i++)
				data[i] = data[i].split('\t');
			// exclude headers from count
			data.getNumberOfRows = function() {return data.length;};
			data.getFormattedValue = function(row, column){
				switch (column){
					// fix order TODO: make order consistent
					// 'select E, D, J, G, F, A, H, I, C'
					//         4, 3, 9, 6, 5, 0, 7, 8, 2
					case 0: return this[row][4];
					case 1: return this[row][3];
					case 2: return this[row][9];
					case 3: return this[row][6];
					case 4: return this[row][5];
					case 5: return this[row][0];
					case 6: return this[row][7];
					case 7: return this[row][8];
					case 8: return this[row][2];
					default: return this[row][0];
				}
			}
		}
		// Original Google Sheets variant
        else if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
		else data = response.getDataTable();

        var ul = document.createElement("ul");
        // Update: Give ul a unique name for specificity
        ul.id = "report";
        document.getElementById('forces').appendChild(ul);

        var list = [];
        var dict = {};

        // Populate root with data from table (exclude headers)
        for (var i = data.getNumberOfRows() - 1; i >= tsv; i--){
          list.push({
            id: data.getFormattedValue(i,0),
            parent: data.getFormattedValue(i,1),
            children: [],
            childCategories: [],
            category: data.getFormattedValue(i,3),
            patterns: data.getFormattedValue(i,4),
            recital: data.getFormattedValue(i,5),
            article: data.getFormattedValue(i,6),
            articleLink: data.getFormattedValue(i,7),
            subcategory: data.getFormattedValue(i,8),
            visibleNodes: 0});
          dict[data.getFormattedValue(i,0)] = list[list.length-1];
          if (list[list.length-1].parent =="")
            root = list[list.length-1];
        }
        // Allow access of parent node from a child node (root)
        for (var i = list.length - 1; i >= 0; i--){
          if (list[i].parent != ""){
            dict[list[i].parent].children.push(list[i]);
            list[i].parent = dict[list[i].parent];
          }
        }

        // Each checkbox/label combination for LIs must be unique
        var id = 0;
        populateTree(root, ul);
        // Recursively traverse the hierarchy and render it
        function populateTree(node, parentElement) {
          node.element = document.createElement("li");
          // Update: Add class to element for css specificity
          node.element.classList.add("header");

          if (node.children.length > 0){
            // Allow getElementsByClassName to find node
            headers[id] = node;
            // Each parent node gets a hidden checkbox for
            // collapsing or showing its children nodes
            node.checkbox = document.createElement("input");
            node.checkbox.id = id;
            node.checkbox.setAttribute("type", "checkbox");
            node.element.appendChild(node.checkbox);
            node.label = document.createElement("label");
            node.label.setAttribute("for", id++);
            node.label.textContent = node.id;
            node.element.appendChild(node.label);
            parentElement.appendChild(node.element);
            // Each parent has a single unordered list within it
            // Reference to this UL is kept for the following loop
            var subul = document.createElement("ul");
            node.element.appendChild(subul);
            // Allow removal of subjectively irrelevant category
            // (we should change this to hide instead of delete)
            if (node != root)
              subul.insertAdjacentHTML("beforebegin",
'<button class="break" type="button" title=\
  "Stop showing these forces" onClick="remove(this)">x</button>');
            // Make sure parents appear above children
            node.children.sort(sortCheckByHeader);
            // Continue recursion on each child
            for (var i = node.children.length - 1; i >= 0; i--){
              populateTree(node.children[i], subul);
            }
          }
          else {
            // This is a leaf node
            // do not append yet, first check heading
            //parentElement.appendChild(node.element);

            // Bold heading for each combination, not to repeat
            category = node.category+': '+node.subcategory;
            // Do classname replace once Update: separate classes
            cClasses = node.category
                .replace(/ /g, '_').replace(/,_*/g, ' ');
            aClasses = node.subcategory
                .replace(/ /g, '_').replace(/,_*/g, ' ');
            classes = cClasses + ' ' + aClasses;
            // Add the force's attributes for future exclusion
            node.element.className = "force " + classes;

            // Limited to string comparison, subs in different order are !=
            if (!node.parent.childCategories.includes(category))
            {
                // Only appendChild if its a heading and child
                parentElement.appendChild(node.element);
                // Headings also need classes for future exclusion
                node.element.insertAdjacentHTML("beforebegin",
                    '<span class="category ' + classes + '">' +
                    category + '</span>');
                node.parent.childCategories.push(category);
                // Access node out of order
                if (!node.parent.childCatNodes)
                    node.parent.childCatNodes = {};
                node.parent.childCatNodes[category] = node.element;
            }
            // Now that we know the right heading exists, put it under it
            else parentElement.insertBefore(
                node.element, node.parent.childCatNodes[category]);

            // Allow removal of subjectively irrelevant force
            // (we should change this to hide instead of delete)
            node.element.innerHTML =
'<button type="button" class="break" title=\
  "Stop showing this force" onClick="remove(this)">x</button>';

            // Some are related to articles instead of recitals
            if (node.recital == ""){
              // Specific html for Article based force
              node.element.innerHTML +=
                '<span class="prebreak">' + node.id.trim()
                .replace(node.article, '<a href="'
                  + node.articleLink + '">' + node.article + '</a>')
                .replace("Recital A", "Art. ")
                .replace(tsv==0?"\n\n":"  ",'</span>\n<span class="postbreak">') +
'; </span><span class="patternToggle hide" onClick="patterns(this)">show&nbsp;privacy&nbsp;patterns</span><span class="patterns">'
                  + node.patterns + '</span>';
            }
            // Normal way to show recital below
            else {
              // Specific html for Recital based force
              node.element.innerHTML +=
                '<span class="prebreak">' + node.id.trim()
                  .replace(node.article, '<a href="' +
                    node.articleLink + '">' + node.article + '</a>')
                  .replace('Recital ' + node.recital,
                    '<a href="https://gdpr-info.eu/recitals/no-' + node.recital + '">Recital ' + node.recital + '</a>')
                  .replace(tsv==0?"\n\n":"  ",
                    '</span>\n<span class="postbreak">') +
'; </span><span class="patternToggle hide" onClick="patterns(this)">show&nbsp;privacy&nbsp;patterns</span><span class="patterns">'
                    + node.patterns + '</span>';
            }

            // Update: Below is a rewrite of force visibility, specifically
            // their headers. Instead of the original parent recursion in
            // the now deprecated bubbleUpToggle, do it only to populate
            // headings with the classes of their children
            cClasses.split(' ').forEach(function(category){
              aClasses.split(' ').forEach(
                function(element){
                    addHeaderClasses(category+element);
                    //node.element.classList.add(category+element);
                    });
              });
            classes.split(' ').forEach(function(element){
                addHeaderClasses(element)
              });
            function addHeaderClasses (cssClass, n = node) {
                if (n.parent)
                  if (!n.parent.element.classList.contains(cssClass)){
                    n.parent.element.classList.add(cssClass);
                    addHeaderClasses(cssClass, n.parent);
                  }
            }
          }
        }
        // By default first list item is expanded
        root.checkbox.checked = true;
        // Add the toggle for showing/hiding all (relevant) forces
        root.element.insertAdjacentHTML('afterbegin',
'<div class="showhideall">\
  <input id="all" type="checkbox" onChange="showhideall(this)" title=\
    "Toggle between collapsing all headers or showing all filtered forces">\
      <label for="all">Show All Relevant Forces</label>\
      (<label>0</label>)</div>');
}

// Callback for Questions filter. Populate hierarchy and display
// Answers as options for questions classed with their attributes
// Add those classes to a list that helps us modify them later
// Refer to handleForceQueryResponse for more comments
function handleQuestionQueryResponse(response){
		var data, tsv = 0;
		// TSV Variant
		if (typeof response === 'string' || response instanceof String){
			// tsv needs to skip header
			tsv = 1;
			// populate data with rows
			//console.log(JSON.stringify(response));
			data = response.split('\r\n');
			//populate rows with values
			for (var i = 0; i < data.length; i++)
				data[i] = data[i].split('\t');
			// exclude headers from count
			data.getNumberOfRows = function() {return data.length;};
			data.getFormattedValue = function(row, column){
				// order consistent
				return this[row][column];
			}
		}
		// Original Google Sheets variant
        else if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
		else data = response.getDataTable();

        var ul = document.createElement("ul");
        document.getElementById('questions').appendChild(ul);

        var list = [];
        var dict = {};

        // Populate list and dict from Google Sheets data table
        for (var i = data.getNumberOfRows() - 1; i >= tsv; i--){
          list.push({
            id: data.getFormattedValue(i,0),
            parent: data.getFormattedValue(i,1),
            attributes: data.getFormattedValue(i,2)
                            .replace(/ /g, '_').split(',_'),
            detail: data.getFormattedValue(i,3),
            children: []});
          dict[data.getFormattedValue(i,0)] = list[list.length-1];
          // Global accessible questions root node
          if (list[list.length-1].parent =="")
            qroot = list[list.length-1];
        }
        for (var i = list.length - 1; i >= 0; i--){
          if (list[i].parent != ""){
            dict[list[i].parent].children.push(list[i]);
            list[i].parent = dict[list[i].parent];
          }
        }
        var id = 0;
        populateTree(qroot, ul);

        // Recursively traverse the hierarchy and render it
        function populateTree(node, parentElement) {
          node.element = document.createElement("li");
          var hasGrandChild = false;
          for (var i = node.children.length - 1; i >= 0; i--){
            if (node.children[i].children.length > 0){
              hasGrandChild = true;
              break;
            }
          }
          if (!hasGrandChild){
            // add to list of filter questions
			wizardItems.push(node.element);
            parentElement.appendChild(node.element);
            node.element.classList.add("question");
            node.element.classList.add("hide");
			// Add both title and detail for wizard
            node.element.innerHTML +=
				'<button class="prebreak" onClick="showWizard(' +
				(wizardItems.length - 1) + ')" title=\
                "Click to see full question">' + node.id.trim() +
				'</button><span class="detail">' +
				node.detail + '</span>';
			// Add clarification on answer style
			node.element.innerHTML +=
              '<div class="help">Select all that apply:</div>';
            for (var i = node.children.length - 1; i >= 0; i--){
              if (node.children[i].attributes.length > 0
               && node.children[i].attributes[0] != ""){
                var str = '<button class="answer ';
                // Add attribute CSS classes (note we now just use selectors)
                for (
                  var j = node.children[i].attributes.length -1; j >= 0; j--)
                    str += node.children[i].attributes[j] + ' ';

                // Add the attribute/answer
                node.element.insertAdjacentHTML("beforeend", str +
                '" type="button" title="Toggle this attribute" onClick=\
                "toggleAttr(this)">'+node.children[i].id+'</button>');
              }
            }
          }
          else {
            // Top level (i.e. the Categories, not the answers)
            node.label = document.createElement("label");
            node.label.textContent = node.id;
            node.element.appendChild(node.label);
            parentElement.appendChild(node.element);
            var subul = document.createElement("ul");
            node.element.appendChild(subul);
            // Each top level answer/attribute (category)
            for (var i = node.children.length - 1; i >= 0; i--){
              if (node.children[i].attributes.length > 0 && node.children[i].attributes[0] != ""){
                // Could be class="category ', but css works with answer
                // Headings already use this class name, so requires refactor
                var str = '<button class="answer ';
                for (
                  var j = node.children[i].attributes.length -1; j >= 0; j--)
                    str += node.children[i].attributes[j] + ' ';
                // Update: Unique function for categories (for 'only')
                // Add the category
                node.label.insertAdjacentHTML("afterend", str + '" type="button" title="Toggle this category" onClick="toggleCat(this)">'+node.children[i].id+'</button>');
              }
              // Continue populating the tree with non-categories (questions)
              // and attributes (answers)
              else populateTree(node.children[i], subul);
            }
            return;
          }
        }

        // New button for changing from (default) inclusive filter
        // TODO: Can move into actual css later
        //css.insertRule('.header, .category, .force {display: none;}', 0);
        //inexclusiveCSSRule = css.cssRules[0].style;
        ul.firstChild.firstChild.insertAdjacentHTML('beforebegin',
          'Show <button id="inexclusive" type="button" onClick=\
            "toggleAllOnly(this)" title=\
"Toggle whether highlighted categories show all forces in that category, or only show those meeting the other filters as well"><b>all</b>/only</button>');

		// Add wizard navigation
		ul.insertAdjacentHTML('beforeend',
			'<button class="wizard previous" onClick="prevWizard()" title=\
              "See the previous question (cycles to last if first)">\
              Previous</button>\
            <button class="wizard next" onClick="nextWizard()" title=\
              "See the next question (cycles to first if last)">Next</button>\
            <button class="wizard showallfilters" onClick="showFilters()" \
              title="Show the all the answers as filters"\
              >Show All Filters</button>\
            <button class="wizard showwizard" onClick="showWizard()">\
              Back to Wizard</button><div style="clear:both"></div>');
		// Access UL for hiding wizard navigation with filter style
		wizardItems.ul = ul;
		// Show the first wizard item
		wizardItems.index = 0;
		wizardItems[wizardItems.index].className = 'question wizard';
}

// Wizard functionality
function prevWizard(){
	wizardItems[wizardItems.index].className = 'question hide';
	if (wizardItems.index == 0)
		wizardItems.index = wizardItems.length-1;
	else wizardItems.index--;
	wizardItems[wizardItems.index].className = 'question wizard';
}
function nextWizard(){
	wizardItems[wizardItems.index].className = 'question hide';
	if (wizardItems.index == wizardItems.length-1)
		wizardItems.index = 0;
	else wizardItems.index++;
	wizardItems[wizardItems.index].className = 'question wizard';
}
function showWizard(index = wizardItems.index){
	wizardItems.ul.className = '';
	for (var i = wizardItems.length; i-- > 0;)
		wizardItems[i].className = 'question hide';
	wizardItems.index = index;
	wizardItems[wizardItems.index].className = 'question wizard';
}
function showFilters(){
	wizardItems.ul.className = 'filter';
	for (var i = wizardItems.length; i-- > 0;)
		wizardItems[i].className = 'question';
}

// New button for changing from (default) inclusive filter
// Alternate between inclusive and exclusive filtering of forces
function toggleAllOnly(element){
        if (exclusive){
          element.innerHTML = "<b>all</b>/only";
          document.getElementById('forces').classList.remove('only');
        }
        else {
          element.innerHTML = "all/<b>only</b>";
          document.getElementById('forces').classList.add('only');
        }
        exclusive = !exclusive;
        updateVisibility();
}

// Unhide hidden forces from remove(element)
// Like updateVisibility, iterates through list based on css
function restoreHidden(){
		var selected;
		selected = document.querySelectorAll('.hidden');
		for (var i = 0; i < selected.length; i++){
          // What bubbleUpToggle used to do, but per element
          // headers now have classes so they are also affected
          selected[i].classList.remove('hidden');
		}
}

// Hide forces the user does not want shown
// Used to be: Completely remove elements from the DOM (old way, should hide)
function remove(element){
		// The remove button should hide its parent and any related elements
		element.parentElement.classList.add('hidden');
		// children are hidden along with it, but the header requires more logic
		// if there's a header for this element, which is not also for sibling LIs
		// (if there even is an unhidden one), hide it too (headers are SPANs)
		// Hidden headers don't need to hide anything else
		if (element.parentElement.classList.contains('header')) return;
		// We use the sibling reference to follow the linked siblings
		var currentSibling = element.parentElement.previousSibling;
		// If any previous LI siblings exist which are not hidden, we need it
		while (currentSibling != null && currentSibling.tagName == "LI")
			if (!currentSibling.classList.contains('hidden')){
				//headerNeeded = true;
				// In this case we still need the header
				// Nothing further to do
				return;
			}
			else currentSibling = currentSibling.previousSibling;
		// If we get this far, the last currentSibling is the header
		var header = currentSibling;
		// No LIs above need the header, but are there any below/after that do
		currentSibling = element.parentElement.nextSibling;
		while (currentSibling != null && currentSibling.tagName == "LI")
			if (!currentSibling.classList.contains('hidden')){
				// Turns out we still need the header, nothing more to do
				return;
			}
			else currentSibling = currentSibling.nextSibling;
		// If we get this far, we don't need the header, hide it
		header.classList.add('hidden');
/*      // if next sibling is a ul we are hiding a whole question
        if (element.nextSibling.tagName == "UL"){
          if (element.parentElement.previousSibling === null && element.parentElement.nextSibling === null){
            // no more forces, so remove question
            element.parentElement.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.parentElement);
            // can't remove child anymore so just return
            return;
          }
          element.parentElement.parentElement.removeChild(element.parentElement);
          // don't process further
          return;
        }

        if (element.parentElement.nextSibling === null || !element.parentElement.nextSibling.classList.contains("force")){
          if (element.parentElement.previousSibling.classList.contains("category"))
            // no more forces, so remove category title
            element.parentElement.parentElement.removeChild(element.parentElement.previousSibling);
            if (element.parentElement.previousSibling === null && element.parentElement.nextSibling === null){
                 // no more forces, so remove question
                 element.parentElement.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.parentElement);
                 // can't remove child anymore so just return
                 return;
            }
        }
        element.parentElement.parentElement.removeChild(element.parentElement); */
}
