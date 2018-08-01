var texts=[],shapes=[],connections=[],paper,radius=10,vPadding=2,hPadding=8,cPadding=15,maxNudges=1,patternBorderColor='#efefef',patternBorderSelColor='#999',dimmedTextColor='#999',textColor='#000',hypertextColor='#42599E',isClicked=false,dragging=false,resizeTimeout
maxWidth=0,maxHeight=0;window.onload=function(){var holder=document.getElementById('holder'),patternDict={},hoverDown=function(){down(this,true);},draggerDown=function(){down(this);},hoverUp=function(){up(this);},draggerUp=function(){},down=function(a,hover=false){if(isClicked)return;if(!hover)isClicked=true;if(a.type!="text"){a=a.data('text');a.attr('cursor','move');a.animate({'fill':textColor},200,">");a.node.style.textDecoration='none';}
else if(!dragging&&!isClicked){dimPatterns();a.animate({'fill':hypertextColor},200,">");a.node.style.textDecoration='underline';a.attr('cursor','pointer');}
setoxy(a.data('shape'));showConnections(a.data('relationships'));a.data('shape').attr('stroke',patternBorderSelColor);a.data('shape').toFront();a.toFront();},move=function(dx,dy){dragging=true;nudgeShape(this.type=="text"?this.data('shape'):this,dx,dy);},up=function(a){if(isClicked)return;if(a.type=="text"){a.node.style.textDecoration='none';a=a.data('shape');}
dimPatterns(false);a.attr('stroke',patternBorderColor);showConnections(a.data('text').data('relationships'),false);},mouseUp=function(){if(!dragging&&this.type=="text"){location.href=this.data('url')+".html";}
isClicked=false;dragging=false;},relations=[];paper=Raphael(holder,holder.clientWidth,holder.clientHeight);var center={x:paper.width/5,y:paper.height/5};for(var i=inputData.length;i--;){addPattern(inputData[i][0],inputData[i][1].substring(inputData[i][1].indexOf('/patterns/')),inputData[i][3]);texts[texts.length-1].data('relationships',[]);var _rels=texts[texts.length-1].data('relationships');if(inputData[i][2]){for(var j in inputData[i][2]){var str_r=inputData[i][2][j];for(var k=str_r.length;k--;)
if(inputData.length==1){_rels.push([str_r[k][0].toLowerCase(),j]);addPattern(str_r[k][1],str_r[k][0],str_r[k][2]);}
else _rels.push([str_r[k].toLowerCase(),j]);}}}
for(var i=texts.length;i--;){var _rels=texts[i].data('relationships');texts[i].data('relationships',[]);if(_rels)
for(var j=_rels.length;j--;){if(inputData.length==1)
var pattern=patternDict[_rels[j][0]];else var pattern=patternDict["/patterns/"+_rels[j][0]];if(pattern){if(inputData.length==1){connections.push(paper.connection(texts[i],pattern,paper.text(0,0,_rels[j][1])));pattern.data('relationships').push(connections[connections.length-1]);}
else{connections.push(paper.connection(texts[i],pattern,null,null,"#000"));connections[connections.length-1].line.attr('stroke-opacity',0);}
texts[i].data('relationships').push(connections[connections.length-1]);}}}
for(var i=0,ii=relations.length;i<ii;i++){var r=relations[i].getBBox().width/2+vPadding;relations[i].data('shape',paper.ellipse(relations[i].attrs.x,relations[i].attrs.y,r,r));relations[i].data('shape').data('text',relations[i]);setupShape(relations[i],Raphael.getColor());}
for(var i=0,ii=texts.length;i<ii;i++){var bb=texts[i].getBBox();if(bb.height>maxHeight)maxHeight=bb.height;if(bb.width>maxWidth)maxWidth=bb.width;texts[i].data('shape',paper.rect(texts[i].attrs.x-bb.width/2-hPadding,texts[i].attrs.y-bb.height/2-vPadding,bb.width+hPadding*2,bb.height+vPadding*2,radius));shapes.push(texts[i].data('shape'));texts[i].data('shape').data('text',texts[i]);setupShape(texts[i],texts[i].data('fill'));}
maxWidth+=cPadding;maxHeight+=cPadding;shapes.sort(sortCheckByWidth);organizeCells();function addPattern(name,url,colors){texts.push(paper.text(center.x+Math.random()*100,center.y+Math.random()*100,name));texts[texts.length-1].attr('cursor',"move");texts[texts.length-1].data('url',url);patternDict[url.toLowerCase()]=texts[texts.length-1];if(colors){for(var j=colors.length;j--;)
if(catColors[colors[j]]){texts[texts.length-1].data('fill',catColors[colors[j]]);break;}}}
function sortCheckByWidth(a,b){if(a.getBBox().width>b.getBBox().width)
return 1;if(a.getBBox().width<b.getBBox().width)
return-1;return 0;}
function setupShape(text,color){function hexmult(hex,mult){var i=parseInt((parseInt(hex,16))*mult);var s=(i>254?254:i<0?0:i).toString(16);if(s.length<2)s='0'+s;return s;}
if(color){text.data('shape').attr({fill:color,stroke:patternBorderColor,"fill-opacity":1,"stroke-width":vPadding,cursor:"move"});}
else{color=Raphael.getColor();text.data('shape').attr({fill:'#'
+hexmult(color.substring(1,3),4)
+hexmult(color.substring(3,5),4)
+hexmult(color.substring(5,7),4),stroke:patternBorderColor,"fill-opacity":1,"stroke-width":vPadding,cursor:"move"});}
text.data('shape').drag(move,draggerDown,draggerUp);text.drag(move,draggerDown,draggerUp);text.data('shape').hover(hoverDown,hoverUp);text.hover(hoverDown,hoverUp);text.toFront();text.mouseup(mouseUp);text.data('shape').mouseup(mouseUp);}
function setoxy(shape){shape.ox=shape.type=="ellipse"?shape.attr("cx"):shape.attr("x");shape.oy=shape.type=="ellipse"?shape.attr("cy"):shape.attr("y");}
function showConnections(elements,show=true){if(!show)
for(var i=elements.length;i--;){if(inputData.length>1)
elements[i].line.attr('stroke-opacity',0);else{elements[i].line.text.attr('opacity',0);elements[i].line.rect.attr('opacity',0);}
elements[i].to.data('shape').attr('stroke',patternBorderColor);}
else{for(var i=elements.length;i--;){elements[i].line.attr('stroke-opacity',1);if(inputData.length>1)
elements[i].line.toFront();else{elements[i].line.text.attr('opacity',1);elements[i].line.rect.attr('opacity',1);}}
for(var i=elements.length;i--;){elements[i].to.data('shape').attr('stroke',patternBorderSelColor);if(inputData.length>1){elements[i].to.data('shape').toFront();elements[i].to.toFront();elements[i].to.animate({'fill':textColor},200,">");}}}}
function dimPatterns(dim=true){if(!dim){for(var i=texts.length;i--;){texts[i].animate({'fill':textColor},200,">");}}
else{for(var i=texts.length;i--;){texts[i].animate({'fill':dimmedTextColor},200,">");}}}};window.onresize=function(){if(resizeTimeout)
window.clearTimeout(resizeTimeout);resizeTimeout=window.setTimeout(function(){var holder=document.getElementById('holder');paper.setSize(holder.clientWidth,57);organizeCells();if(resizeTimeout)
resizeTimeout=null;},200);};function organizeCells(){var grid=[],h=cPadding,cellHeight=paper.height/
parseInt(paper.height/maxHeight);for(;h<paper.height-maxHeight;){grid.push([]);h+=cellHeight;}
var holder=document.getElementById('holder');for(i=shapes.length;i--;){while(!fillNextEmptyCell(shapes[i])){holder.style.height=(paper.height+maxHeight+cPadding)+"px";paper.setSize(holder.clientWidth,holder.clientHeight);grid.push([]);h+=cellHeight;}}
for(i=grid.length;i--;){var freeSpace=(paper.width-grid[i].next)/(grid[i].length+1);for(k=0,offset=freeSpace;k<grid[i].length;k++){grid[i][k].x+=offset;moveShape(grid[i][k].shape,grid[i][k].x,grid[i][k].y);offset+=freeSpace;}}
function fillNextEmptyCell(shape){var col,bbWidth=shape.getBBox().width;if(bbWidth+cPadding+cPadding>paper.width){var text=shape.data('text');text.data('fullText',text.attrs.text);text.attr({text:text.attr('text').substring(0,text.attr('text').length/1.5)+'...'});shape.attr({width:text.getBBox().width+hPadding*2});}
for(j=0,minX=paper.width;j<grid.length;j++){if(!grid[j].next)
grid[j].next=cPadding;if(!grid[j].y)
grid[j].y=(j*maxHeight)+((j+1)*cPadding);if(grid[j].next<minX&&grid[j].next+bbWidth+cPadding<paper.width)
{minX=grid[j].next;col=grid[j];}}
if(!col)
return false;col.next+=bbWidth+cPadding;col.push({x:minX,y:col.y,d:1,shape:shape,column:col,rowRum:col.length});moveShape(shape,minX,col.y);return true;}
function moveShape(shape,x,y){var animate=true;var BBoxTxt=shape.data('text').getBBox(),BBoxA=shape.getBBox();if(shape.data('text')){if(animate){shape.animate({x:x,y:y},200,">",updateConnections);shape.data('text').animate({x:x+BBoxTxt.width/2+hPadding,y:y+BBoxTxt.height/2+vPadding},200,">",updateConnections);}
else{shape.attr({x:x,y:y});shape.data('text').attr({x:x+BBoxTxt.width/2+hPadding,y:y+BBoxTxt.height/2+vPadding});}}
updateConnections();function updateConnections(){for(var i=connections.length;i--;){shape.paper.connection(connections[i]);}
shape.paper.safari();}}}
function nudgeShape(shape,dx,dy,animate=false){var BBoxTxt=shape.data('text').getBBox(),BBoxA=shape.getBBox();if(shape.data('text')){if(shape.ox+dx+BBoxA.width>shape.paper.width||shape.oy+dy+BBoxA.height>shape.paper.height||shape.ox+dx<0||shape.oy+dy<0)
return;if(animate){shape.animate({x:shape.ox+dx,y:shape.oy+dy},200,">",updateConnections);shape.data('text').animate({x:shape.ox+dx+BBoxTxt.width/2+hPadding,y:shape.oy+dy+BBoxTxt.height/2+vPadding},200,">",updateConnections);}
else{shape.attr({x:shape.ox+dx,y:shape.oy+dy});shape.data('text').attr({x:shape.ox+dx+BBoxTxt.width/2+hPadding,y:shape.oy+dy+BBoxTxt.height/2+vPadding});}}
updateConnections();function updateConnections(){for(var i=connections.length;i--;){shape.paper.connection(connections[i]);}
shape.paper.safari();}}
Raphael.fn.connection=function(shapeA,shapeB,text,rect,line,bg){if(shapeA.line&&shapeA.from&&shapeA.to){line=shapeA;shapeA=line.from;shapeB=line.to;text=line.line.text;rect=line.line.rect;}
var BBoxA=shapeA.getBBox(),BBoxB=shapeB.getBBox(),startX=BBoxA.x+BBoxA.width/2,startY=BBoxA.y+BBoxA.height/2,endX=BBoxB.x+BBoxB.width/2,endY=BBoxB.y+BBoxB.height/2;var path=["M",startX.toFixed(3),startY.toFixed(3),"C",startX,startY,endX,endY,endX.toFixed(3),endY.toFixed(3)].join(",");if(text){var center=Raphael.getPointAtLength(path,Raphael.getTotalLength(path)/2);text.attr({x:center.x,y:center.y});if(rect)rect.attr({x:center.x-9,y:center.y-2});else{rect=paper.rect(center.x-9,center.y-3,18,5);rect.attr({fill:"#FFF",stroke:null,opacity:0});text.attr({font:'8px "Arial"',opacity:0});}}
if(line&&line.line){line.bg&&line.bg.attr({path:path});line.line.attr({path:path});}
else{var color=typeof line=="string"?line:"#000";var connection={bg:bg&&bg.split&&this.path(path).attr({stroke:bg.split("|")[0],fill:"none","stroke-width":bg.split("|")[1]||3}),line:this.path(path).attr({stroke:color,fill:"none"}),from:shapeA,to:shapeB};if(text){connection.line.rect=rect;connection.line.text=text;rect.toFront();text.toFront();}
return connection;}};