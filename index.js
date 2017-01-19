
if (!String.prototype.sprintf) {
	String.prototype.sprintf = function () {
		var args = Array.prototype.slice.call(arguments);
		return this.replace(/%s/g, function() { return args.shift();});
	};
}

var str = 'This %s a %s';
//str.sprintf('is', 'test');
console.log(str.sprintf('is', 'test'));
