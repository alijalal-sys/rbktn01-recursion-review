// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var arr = [];
	function deepSearch(elm){
		console.log(elm, elm.classList.contains(className))
		if(elm.classList.contains(className) && arr.indexOf(elm) < 0){
			arr.push(elm);
		}
		for(var child of elm.childNodes){
			console.log(child, child.classList)
			if(child.classList !== undefined){
				if(child.classList.contains(className) && arr.indexOf(child) < 0){
					arr.push(child);
				}
			}
			if(child.childNodes.length > 0){
				deepSearch(child);
			}
		}
	}
	deepSearch(document.body);
	return arr;
};
