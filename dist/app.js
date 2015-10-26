require.config({
    paths: {
        'jQuery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});
require(['module1', 'path/to/module2', 'jQuery', 'underscore', 'template'], function (module1ref, module2ref, $, _, template) {

    // do something with the loaded modules
    var module1 = new module1ref(),
          module2 = new module2ref();
    console.log(module1.getName() === module2.getModule1Name()); // true
    console.log('jQuery version:', $.fn.jquery); // 1.9.0
	template.showName("Jack");
});
require(['template'], function (template) {
	template.showRealName("Sparrow");
});
require(['template'], function (template) {
	console.log(template.mod);
});
/*
requirejs
typescript
history.js
hammer.js
underscore

flexbox
bourbon

casperjs
phantomcss
phantomjs
istanbul

mocha
chai
sinon
*/

define(['jQuery'], function ($) {
    var returnedModule = function () {
        var _name = 'module1 name';
        console.log('mod 1');
        console.log($.fn.jquery);
        console.log('end mod 1');
        this.getName = function () {
            return _name;
        }        
    };
 
    return returnedModule;
 
});
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
define(['module1'], function (module1ref) {
    var module1 = new module1ref();
    var returnedModule = function () {
        this.getModule1Name = function () {
            return module1.getName();
        }
    };
  
    return returnedModule;
  
});