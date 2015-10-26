define(['path/to/module2', 'underscore', 'jQuery'], function(module2ref) {
	var module2 = new module2ref();
	var showName = function(n) {
  		var temp = _.template("<p>Hello <%= name %></p>");
  		$("body").append(temp({name: n}));
	};
	var showRealName = function(n) {
  		var temp = _.template("<p>I'm Captain <%= name %></p>");
  		$("body").append(temp({name: n}));
	};
	return {
		mod: module2.getModule1Name(),
		showRealName: showRealName,
  		showName: showName
	};
});