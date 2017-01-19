
if (!String.prototype.sprintf) {
	String.prototype.sprintf = function () {
		var args = Array.prototype.slice.call(arguments),
			str = this.replace(/%s/g, function(r, i, s) {
				return args.shift();
			});
		return str;
	};
}

var str = 'This %s a %s';
//str.sprintf('is', 'test');
console.log(str.sprintf('is', 'test'));
