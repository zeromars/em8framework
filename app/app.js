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
