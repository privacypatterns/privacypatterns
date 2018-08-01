// Global lists
var texts = [], shapes = [], connections = [], paper,
    // Settings
    radius = 10, vPadding = 2, hPadding = 8, cPadding = 15,
    maxNudges = 1, patternBorderColor = '#efefef', patternBorderSelColor = '#999', dimmedTextColor = '#999', textColor = '#000', hypertextColor = '#42599E',
    // Global state for hover, drag, & resize Timeout
    isClicked = false, dragging = false, resizeTimeout
    // Storing the largest found shape to re/create grid
    maxWidth = 0, maxHeight = 0;

// Main entry point, set up
window.onload = function () {
    //Get element first, get actual size, declarations begin here
    var holder = document.getElementById('holder'),
        // Dictionary for accessing related patterns by name
        patternDict = {},
        // Events for hover, drag, click
        hoverDown = function() {down(this, true);},
        draggerDown = function() {down(this);},
        hoverUp = function() {up(this);},
        draggerUp = function() {}, // handled by hover up
        down = function (a, hover = false) {
            // Don't do anything if we only lost focus
            if (isClicked) return;
            // If this is drag and not hover, then mousedown happened
            if (!hover) isClicked = true;

            // Treat text and its shape the same, inverse to up
            if (a.type != "text") {
                a = a.data('text');
                a.attr('cursor', 'move');
                a.animate({'fill': textColor}, 200,">");
                a.node.style.textDecoration = 'none';
            }
            // If neither dragging or mousedown, show link
            else if (!dragging && !isClicked) {
                dimPatterns();
                a.animate({'fill': hypertextColor}, 200,">");
                a.node.style.textDecoration = 'underline';
                a.attr('cursor', 'pointer');
            }
            // Access shape x and y by ox and oy, accounts for ellipse
            setoxy(a.data('shape'));
            showConnections(a.data('relationships'));
            a.data('shape').attr('stroke', patternBorderSelColor);
            a.data('shape').toFront();
            a.toFront();
        },
        move = function (dx, dy) {
            dragging = true;
            nudgeShape(this.type == "text" ? this.data('shape') : this,
                dx, dy);
        },
        up = function (a) {
            // This happens after hover only (mouse leave)
            // Don't do anything if we only lost focus
            if (isClicked) return;
            // Treat text and its shape the same, except underline
            if (a.type == "text"){
                a.node.style.textDecoration = 'none';
                a = a.data('shape');
            }
            // Undim patterns
            dimPatterns(false);
            // Apply default border color
            a.attr('stroke', patternBorderColor);
            // Stop showing connections
            showConnections(
                a.data('text').data('relationships'), false);
        },
        mouseUp = function () {
            if(!dragging && this.type == "text"){
                location.href =
                // While we can use the below with Hyde, it isnt needed
                    //"{{site.url}}" +
                    this.data('url') + ".html";
            }
            isClicked = false;
            dragging = false;
        },
        // Optional ellipses for relationship type shorthands
        relations = [];

    // The RaphaelJS canvas (global)
    paper = Raphael(
        holder, holder.clientWidth, holder.clientHeight);
    // The center of the canvas
    var center = {x: paper.width/5, y: paper.height/5};
    // end of declarations and assignment


    for (var i = inputData.length; i--;){
        // Add the pattern in question as a texts item
        addPattern(inputData[i][0], inputData[i][1].substring(
            inputData[i][1].indexOf('/patterns/')
            ), inputData[i][3]);
        // Setup intial relationships array (later actual connections)
        texts[texts.length-1].data('relationships', []);
        var _rels = texts[texts.length-1].data('relationships');

        // Add any given relationships
        if (inputData[i][2]){
          // For each dictionary key, j
          for (var j in inputData[i][2]){
              var str_r = inputData[i][2][j];
              for (var k = str_r.length; k--;)
                // Add pattern and type relations pairs for later
                // Only pattern pages need to show the relation type
                // and related patterns (outside their category)
                if (inputData.length == 1){
                    _rels.push(
                    [str_r[k][0].toLowerCase(), j]);
                    // Add related patterns
                    addPattern(str_r[k][1], str_r[k][0], str_r[k][2]);
                }
                else _rels.push(
                    [str_r[k].toLowerCase(), j]);
          }
        }

    }

    // Setup actual relationship connections
    for (var i = texts.length; i--;) {
        // Get the relationship pairs of connected pattern and type
        var _rels = texts[i].data('relationships');
        // Reset for housing the connections themselves
        texts[i].data('relationships', []);
        // Loop through pairs, add connection lines, and reference
        if (_rels)
            for (var j = _rels.length; j--;){
                if (inputData.length == 1)
                    var pattern = patternDict[_rels[j][0]];
                else var pattern = patternDict["/patterns/"+_rels[j][0]];
                // Add white (not visible) lines which follow patterns
                // Provided that the pattern exists in this category
                if (pattern){
                    // Individual pattern pages treated differently
                    if (inputData.length == 1){
                        connections.push(
                          paper.connection(texts[i], pattern,
                          paper.text(0,0,_rels[j][1])));
                        // Allow for access to these lines per relation
                        pattern.data('relationships').push(
                            connections[connections.length-1]);
                    }
                    else {
                        connections.push(
                          paper.connection(texts[i], pattern,
                          null, null, "#000"));
                        // Make connections invisible by default
                        connections[connections.length-1].line
                            .attr('stroke-opacity', 0);
                    }
                    // Allow for access to these lines per pattern
                    // Note individual patterns use this and above
                    texts[i].data('relationships').push(
                        connections[connections.length-1]);
                }
            }
    }

    // Add relationship circles if defined
    for (var i = 0, ii = relations.length; i < ii; i++) {
        // Get bounding box of text for correct shape size
        var r = relations[i].getBBox().width/2 + vPadding;
        // this is half the size, because it is a radius
        // Add vPadding (twice) as this is the stroke-width

        // Give each text a ellipse which surrounds it
        relations[i].data('shape', paper.ellipse(
            relations[i].attrs.x,
            relations[i].attrs.y,
            r,
            r
        ));
        // Add those ellipses to a list (not right now)
        //s.push(texts[i].data('shape'));

        // Let those rects reference their text
        relations[i].data('shape').data('text', relations[i]);

        // Give them color, strokewidth and the drag cursor
        setupShape(relations[i], Raphael.getColor());
    }

    // Go through the texts to give them shape and events
    for (var i = 0, ii = texts.length; i < ii; i++) {
        // Get bounding box of text for correct shape size
        var bb = texts[i].getBBox();
        // set max height and width
        if (bb.height > maxHeight) maxHeight = bb.height;
        if (bb.width > maxWidth) maxWidth = bb.width;

        // Give each text a rect which surrounds it
        texts[i].data('shape', paper.rect(
            texts[i].attrs.x - bb.width/2 - hPadding,
            texts[i].attrs.y - bb.height/2 - vPadding,
            bb.width + hPadding*2,
            bb.height + vPadding*2,
            radius
            ));
        // Add those rects to a list
        shapes.push(texts[i].data('shape'));
        // Let those rects reference their text
        texts[i].data('shape').data('text', texts[i]);
        // Give them color, strokewidth and the drag cursor
        setupShape(
            texts[i], texts[i].data('fill'));
    }

    // Add padding between grid cells
    maxWidth += cPadding;
    maxHeight += cPadding;

    // Reorder the shapes so that the largest are first to be placed
    shapes.sort(sortCheckByWidth);

    // First time cell organizing
    organizeCells();

    // Repeated pattern adding as texts, and patternDict item
    function addPattern(name, url, colors) {
        texts.push(paper.text(center.x + Math.random() * 100, center.y + Math.random() * 100, name));
        texts[texts.length - 1].attr('cursor', "move");
        // Must use data instead of href, as this always places text
        // behind the shape, and prevents clicking if drag enabled
        texts[texts.length - 1].data('url', url);
        // Allow access using url as key for relationships
        patternDict[url.toLowerCase()] = texts[texts.length - 1];

        // Set color if provided
        if (colors){
            // Multiple colors might exist, due to multiple tactics
            // Just take the first one (from the end)
            for (var j = colors.length; j--;)
                if (catColors[colors[j]]){
                    texts[texts.length-1].data(
                        'fill', catColors[colors[j]]);
                    break;
                }
        }
    }
    // Custom sort check places wider pattern names first
    function sortCheckByWidth(a, b){
            if (a.getBBox().width > b.getBBox().width)
                return 1;
            if (a.getBBox().width < b.getBBox().width)
                return -1;
            return 0;
    }
    // Repeated part of shape loops below
    function setupShape(text, color) {
        // make shape fill lighter than border
        function hexmult(hex, mult){
            var i = parseInt((parseInt(hex, 16))*mult);
            var s = (i>254?254:i<0?0:i).toString(16);
            if (s.length < 2) s = '0' + s;
            return s;
        }
        if (color){
            text.data('shape').attr({
                fill: color,
                stroke: patternBorderColor,
                "fill-opacity": 1,
                "stroke-width": vPadding,
                cursor: "move"
            });
        }
        else {
            color = Raphael.getColor();
            text.data('shape').attr({
                fill: '#'
                +hexmult(color.substring(1,3),4)
                +hexmult(color.substring(3,5),4)
                +hexmult(color.substring(5,7),4),
                stroke: patternBorderColor,
                "fill-opacity": 1,
                "stroke-width": vPadding,
                cursor: "move"
            });
        }
        // Give them drag events (both the text and shape)
        text.data('shape').drag(move, draggerDown, draggerUp);
        text.drag(move, draggerDown, draggerUp);
        // Same for hover
        text.data('shape').hover(hoverDown, hoverUp);
        text.hover(hoverDown, hoverUp);
        text.toFront();
        // Determine when mouseUp occurs so that we can
        // prevent unintentional extra hovers/dragUp
        text.mouseup(mouseUp);
        text.data('shape').mouseup(mouseUp);
    }
    // Dragger function sets ox and oy based on shape type
    // Access shape x and y by ox and oy, accounts for ellipse
    function setoxy(shape){
        shape.ox = shape.type == "ellipse" ? shape.attr("cx") : shape.attr("x");
        shape.oy = shape.type == "ellipse" ? shape.attr("cy") : shape.attr("y");
    }
    // Show/hide relationship lines and highlight the related patterns
    function showConnections(elements, show = true){
        if (!show)
        // Change strokes on hide connections, but not for pattern page
            for (var i = elements.length; i--;){
            // Individual patterns keep lines visible
                if (inputData.length > 1)
                    elements[i].line.attr('stroke-opacity', 0);
                else {
                    elements[i].line.text.attr('opacity', 0);
                    elements[i].line.rect.attr('opacity', 0);
                }
                elements[i].to.data('shape').attr(
                    'stroke', patternBorderColor);
            }
        else {
        // First show lines, bring them to front if not pattern page
            for (var i = elements.length; i--;){
                elements[i].line.attr('stroke-opacity', 1);
            // Individual patterns keep lines visible, so they should
            // not overlap the rest of the connecting patterns
                if (inputData.length > 1)
                    elements[i].line.toFront();
                else {
                    elements[i].line.text.attr('opacity', 1);
                    elements[i].line.rect.attr('opacity', 1);
                }
            }
        // The rest should be even more to front, to account for lines
        // This does not need individual pattern page specifics
            for (var i = elements.length; i--;){
            // Use selected border color to highlight the connection
                elements[i].to.data('shape').attr('stroke',
                  patternBorderSelColor);

                if (inputData.length > 1) {
                  elements[i].to.data('shape').toFront();
                  elements[i].to.toFront();
            // Make sure related pattern text is normal color
            // Note that if some aspects are animated, others which
            // depend on their state must also animate at the same rate
                  elements[i].to.animate({'fill': textColor}, 200,">");
                }
            }
        }
    }
    // Un/dim all patterns in texts to dimmed/textColor
    function dimPatterns(dim = true){
        if (!dim){
            for (var i = texts.length; i--;){
                // Gradually undim (make text textColor)
                texts[i].animate({'fill': textColor}, 200,">");
            }
        }
        else {
            for (var i = texts.length; i--;){
                // Gradually dim (make text dimmedTextColor)
                texts[i].animate({'fill': dimmedTextColor}, 200,">");
            }
        }
    }
};

// Use a global timer on resize to change size & reorganize Cells
window.onresize = function() {
    // If running then cancel and make new
    if (resizeTimeout)
        window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(
        function() {
            var holder = document.getElementById('holder');
            paper.setSize(holder.clientWidth, 57);
            organizeCells();
            if (resizeTimeout)
                resizeTimeout = null;
        }, 200);
};

// Sort cells in a growing grid, equally distributing them, and then
// any remaining space. They are placed in reducing order of width
function organizeCells(){
    // Shape organizing so they don't overlap
    // Create a grid of possible positions based on text/shape sizes
    var grid = [], h = cPadding, cellHeight = paper.height
        / parseInt(paper.height / maxHeight);

    // Create rows for the current height given
    for (; h < paper.height - maxHeight; ){
        // Add another column
        grid.push([]);
        // Next loop considers added space
        h += cellHeight;
    }

    // Place the cells
    var holder = document.getElementById('holder');
    for (i = shapes.length; i--;){
        // So long as we fail to place a cell in given space, add more
        while (!fillNextEmptyCell(shapes[i])){
            // Increase by the height of padding and cell
            holder.style.height = (paper.height + maxHeight + cPadding) + "px";
            paper.setSize(holder.clientWidth, holder.clientHeight);
            // Add another row
            grid.push([]);
            // Next loop considers added space
            h += cellHeight;
        }
    }

    // With next for each y we can get remaining space for each row
    for (i = grid.length; i--;){
        // Get free space per cell, later adding it to offset
        var freeSpace =
            (paper.width - grid[i].next) / (grid[i].length + 1);

        // Move everything increasingly to the right
        for (k = 0, offset = freeSpace; k < grid[i].length; k++){
            grid[i][k].x += offset;
            moveShape(grid[i][k].shape, grid[i][k].x, grid[i][k].y);
            offset += freeSpace;
        }
    }

    // See if a cell can be placed (in the emptiest row), else false
    function fillNextEmptyCell(shape){
        // Find the next empty cell most to the left
        var col, bbWidth = shape.getBBox().width;
        // For very wide patterns / small screens
        if (bbWidth + cPadding + cPadding > paper.width){
            var text = shape.data('text');
            text.data('fullText', text.attrs.text);
            text.attr({text: text.attr('text').substring(
                0, text.attr('text').length/1.5)+'...'});
            shape.attr({width: text.getBBox().width + hPadding * 2});
        }
        for (j = 0, minX = paper.width; j < grid.length; j++){
            // cPadding used on either side
            if (!grid[j].next)
                grid[j].next = cPadding;
            if (!grid[j].y)
                grid[j].y = (j*maxHeight) + ((j+1)*cPadding);
            if (grid[j].next < minX &&
                grid[j].next + bbWidth + cPadding < paper.width)
                {
                    minX = grid[j].next;
                    col = grid[j];
                }
        }
        // Only if there are cells free to fill
        if (!col)
            return false;

        // Set the next available slot
        col.next += bbWidth + cPadding;
        // Add reference to shape, to shift around later
        col.push({x: minX, y: col.y, d: 1, shape: shape,
            column: col, rowRum : col.length});
        // Same approach as initial rationing
        moveShape(shape, minX, col.y);

        // There was space for the shape
        return true;
    }
    // Move a shape and it's text to given coordinates (not relative)
    function moveShape(shape, x, y){
        // Once script completes, moves everything smoothly
        var animate = true;
        // Get bounding box of the text for position
        var BBoxTxt = shape.data('text').getBBox(),
            BBoxA = shape.getBBox();
        if (shape.data('text')) {
            if (animate) {
                // Move shape surrounding text primarily
                shape.animate({
                    x: x,
                    y: y
                },200,">", updateConnections);
                // Move text with shape
                shape.data('text').animate({
                    x: x + BBoxTxt.width / 2 + hPadding,
                    y: y + BBoxTxt.height / 2 + vPadding
                },200,">", updateConnections);
            }
            else {
                // Move shape surrounding text primarily
                shape.attr({
                    x: x,
                    y: y
                });
                // Move text with shape
                shape.data('text').attr({
                    x: x + BBoxTxt.width / 2 + hPadding,
                    y: y + BBoxTxt.height / 2 + vPadding
                });
            }
        }
        updateConnections();

        function updateConnections() {
            for (var i = connections.length; i--;) {
                shape.paper.connection(connections[i]);
            }
            shape.paper.safari();
        }
    }
}

// Move a shape and its text relatively (unlike organizeC...moveShape)
function nudgeShape(shape, dx, dy, animate = false) {
    // Get bounding box of the text for position
    var BBoxTxt = shape.data('text').getBBox(),
        BBoxA = shape.getBBox();
    if (shape.data('text')) {
        // Check if movement would be outside canvas
        if (//shape != s[selected] &&
          shape.ox + dx + BBoxA.width > shape.paper.width ||
          shape.oy + dy + BBoxA.height > shape.paper.height ||
          shape.ox + dx < 0 || shape.oy + dy < 0)
            return;
        if (animate) {
            // Move shape surrounding text primarily
            shape.animate({
                x: shape.ox + dx,
                y: shape.oy + dy
            },200,">", updateConnections);
            // Move text with shape
            shape.data('text').animate({
                x: shape.ox + dx + BBoxTxt.width / 2 + hPadding,
                y: shape.oy + dy + BBoxTxt.height / 2 + vPadding
            },200,">", updateConnections);
        }
        else {
            // Move shape surrounding text primarily
            shape.attr({
                x: shape.ox + dx,
                y: shape.oy + dy
            });
            // Move text with shape
            shape.data('text').attr({
                x: shape.ox + dx + BBoxTxt.width / 2 + hPadding,
                y: shape.oy + dy + BBoxTxt.height / 2 + vPadding
            });
        }
    }

    updateConnections();

    function updateConnections() {
        for (var i = connections.length; i--;) {
            shape.paper.connection(connections[i]);
        }
        shape.paper.safari();
    }
}

// Move connections with their shapes/text and relationship type
// Based on RaphaelJS Graffle Demo
// http://dmitrybaranovskiy.github.io/raphael/graffle.html
Raphael.fn.connection = function (shapeA, shapeB, text, rect, line, bg){
    // For when called with one parameter only
    if (shapeA.line && shapeA.from && shapeA.to) {
        line = shapeA;
        shapeA = line.from;
        shapeB = line.to;
        // Add references to text and rect (even if they may be null)
        text = line.line.text;
        rect = line.line.rect;
    }

    // Get center of each shape
    var BBoxA = shapeA.getBBox(), BBoxB = shapeB.getBBox(),
        startX = BBoxA.x + BBoxA.width/2,
        startY = BBoxA.y + BBoxA.height/2,
        endX = BBoxB.x + BBoxB.width/2,
        endY = BBoxB.y + BBoxB.height/2;

    // Use straight lines instead of curves (original demo)
    var path = ["M", startX.toFixed(3), startY.toFixed(3), "C", startX,  startY, endX, endY, endX.toFixed(3), endY.toFixed(3)].join(",");

    // If text is provided, set it up. Same with the rect behind it
    if (text){
        // Place them in the middle of the line
        var center = Raphael.getPointAtLength(path,
            Raphael.getTotalLength(path)/2);
        text.attr({x: center.x, y: center.y});
        if (rect) rect.attr({x: center.x - 9, y: center.y - 2});
        else {
            rect = paper.rect(center.x - 9, center.y - 3, 18, 5);
            rect.attr({fill: "#FFF", stroke: null, opacity: 0});
            text.attr({font: '8px "Arial"', opacity: 0});
        }
    }

    // Update the line or create new connection
    if (line && line.line) {
        line.bg && line.bg.attr({ path: path });
        line.line.attr({ path: path });
    }
    else {
        var color = typeof line == "string" ? line : "#000";
        var connection = {
            bg: bg && bg.split && this.path(path).attr({ stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3 }),
            line: this.path(path).attr({ stroke: color, fill: "none" }),
            from: shapeA,
            to: shapeB
        };
        // No longer send lines to back, we do that when needed
        // connection.line.toBack();
        // Instead bring text and its background rect to front
        // Also allow access on subsequent calls
        if (text){
            connection.line.rect = rect;
            connection.line.text = text;
            rect.toFront();
            text.toFront();
        }
        return connection;
    }
};