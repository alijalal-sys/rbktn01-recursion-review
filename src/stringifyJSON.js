function stringifyJSON(obj){
	if(typeof obj !== 'object' || obj == null){
		if(typeof obj === 'string'){
			return '"' + obj + '"';
		}
		return String(obj);
	}
	if(Array.isArray(obj)){
		return stringifyArray(obj)
	}
	if(Object.keys(obj).length === 0){
		return "{}";
	}
	return stringJSON(obj);
}

var stringJSON = function(obj) {

	  var str = '{';
	  for(var key in obj){
	  	if(typeof obj[key] === 'function' || obj[key]=== undefined){
	  		continue;
	  	}
	  	if(Array.isArray(obj[key])){
	  		str += '"' + key + '":' + stringifyArray(obj[key])+',';
	  	} else if(typeof obj[key]==='object' && obj[key]!==null){
	  		str += '"' + key +'":' +stringJSON(obj[key]) + ','
	  	}else if(typeof obj[key]==='string'){
	  		str += '"' + key +'":' +'"' + obj[key] + '"' + ','
	  	}else
	  		str += '"' + key +'":' +obj[key] +','
	  }

	  if(str[str.length - 1] === ',')
	  	str = str.slice(0,str.length - 1)
	  
	  return str + '}';
	};


	function stringifyArray(array) {
		str = '[';
		for(var elm of array){
			if(typeof elm === 'function' || elm === undefined){
	  		continue;
	  	}
			if(Array.isArray(elm)){
				str += stringifyArray(elm) + ',';
			} else if(typeof elm === 'object')
				str +=  stringJSON(elm) + ','
			else if(typeof elm === 'string'){
				str += '"' + elm + '"' + ','
			} else
				str += elm + ','
		}

		if(str[str.length - 1] === ',')
			str = str.slice(0,str.length-1);
		str += ']';

		return str;
	}