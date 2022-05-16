function app(){
    var name;
    this.setName = function(uname){
        name = uname;
    };
 
    this.sayHello = function(){
        console.log('Hello '+name);
    }
}
 
module.exports = app;