// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className,node) {
//   // your code here
//   var arrProps, children;
//   arrProps = [];
//   node = node || document.body;
//   if (node.classList && node.classList.contains(className)){
//     arrProps.push(node);
//   }
//   children = node.childNodes;
//   if (children){
//     children.forEach(function(element){
//     		var child = element;
//         arrProps = arrProps.concat(getElementsByClassName(className,child));
//     })
//   }
//   return arrProps;
// };


var getElementsByClassName = function(className,node) {

  var nodes = [];
  node = node || document.body;

  // compare node's classname with className
  var parts = node.className.split(' ');
  if( parts.indexOf( className ) >= 0){
    //if matched, save node
    nodes.push( node );
  }

  // iterate over children
  for( var i = 0;i < node.children.length; i++ ){
    //for each child, invoke getElementsByClassName
    var childResults = getElementsByClassName (className, node.children[i] );
    nodes = nodes.concat ( childResults );
  }

  return nodes;
}