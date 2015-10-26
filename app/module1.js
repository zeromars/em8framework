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