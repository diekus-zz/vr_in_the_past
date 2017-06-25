var accessLog = [];

/*AFRAME.registerComponent('alpha-test', {
  dependencies: ['material'],
  init: function () {
    //this.el.getObject3D('mesh').material.alphaTest = 0.5;
  }
});*/

function updateLog(objId){

  if(accessLog != null || accessLog != ''){
    var found = false;
    for(var i=0; i < accessLog.length; i++){
      if(accessLog[i] === objId){
        found = true;
      }
    }
    if(!found){
      accessLog.push(objId);
    }
  }
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// timer in days / 4 weeks
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
//https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object

// Set the date we're counting down to
//var countDownDate = new Date("Jun 14, 2017 20:20:00").getTime();

var d1 = new Date (),
d2 = new Date ( d1 );
d2.setMinutes ( d1.getMinutes() + 21 );

//alert ( d2 );
countDownDate = d2;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for minutes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Output the result in an element with id="timerPl"
  document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:' + minutes  +' Day(s)/\n 4 Weeks');

  // If the count down is over, write some text
  if (minutes < 1) {
    clearInterval(x);
    document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Out of\n Funds');
  }
}, 1000);
