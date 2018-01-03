var EventEmitter = require('events').EventEmitter;

// define Lane
function Lane01(){

  // 関数の参照渡し
  this.display = console.log;
  this.detect = function(n){
    this.emit(n.toString() + 'pins');
  };

  // events
  this.on('10pins', function(){
    this.display("Strike! Congratulations!");
  });
  this.on('0pins', function(){
    this.display("Gutter... Dont mind...");
  });
}
Lane01.prototype = new EventEmitter();

// Lets play!
var lane01 = new Lane01();
lane01.detect(10);
lane01.detect(0);
console.log("Thanks to Play!");



// define Lane
function Lane02(){

  // 関数の参照渡し
  this.display = console.log;
  this.detect = function(n){
    this.emit(n.toString() + 'pins');
  };

  // events
  this.on('10pins', function(){
    process.nextTick(this.display.bind(this, "Strike! Congratulations"));
  });
  this.on('0pins', function(){
     process.nextTick(this.display.bind(this, "Gutter... Don't mind..."));
  });
}
Lane02.prototype = new EventEmitter();

// Lets play!
var lane02 = new Lane02();
lane02.detect(10);
lane02.detect(0);
console.log("Thanks to Play!");
