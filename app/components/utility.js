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

// penality for each try
var minutes = 0; // day eq in-game minute
var daysSpentLearning = 0;
var daysSpentInTotal = 0;
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
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // pass 1 more day if learning thorugh alertInfo
  minutes = minutes - daysSpentLearning;
  daysSpentInTotal = 20 - minutes;

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  //console.log('daysSpentLearning ' + daysSpentLearning + ' minutes ' + minutes + ' seconds ' + seconds);
  // Output the result in an element with id="timerPl"
  document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:' + minutes  +' Day(s)/\n 4 Weeks');

  //alert('min b4 penality ' + minutes);

  //alert('min after penality ' + minutes);
  // If the count down is over, write some text


  /*if(minutes == 20 && seconds < 58 && seconds > 56)
    alertInfo(minutes + ' days remaining');*/

  if(minutes == 4 && seconds < 50 && seconds > 48)
    alertInfo(minutes + ' days remaining');

  if(minutes == 3 && seconds < 50 && seconds > 48)
      alertInfo(minutes + ' days remaining');

  if(minutes == 2 && seconds < 50 && seconds > 48)
      alertInfo(minutes + ' days remaining');

  if(minutes == 1 && seconds < 50 && seconds > 48)
      alertInfo(minutes + ' day remaining');

  if (minutes < 1) {
    clearInterval(x);
    document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Out of\n Funds');
    window.open('/', '_self');
  }
  //daysSpentLearning = 0;
}, 1000);

// Alert plane
function alertInfo(infoTxt){

  var sceneEl =  document.querySelector('a-scene');

  if(!sceneEl.querySelector('#alertInfoPl')){


    // create a plane entity
    var entityEl = document.createElement('a-entity');
    //entityEl.setAttribute('do-something-once-loaded', '');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 0.5,
      width: 4//,
      //depth: -1
    });

//document.querySelector('a-camera')
//sceneEl.querySelector('#posCam')
//document.querySelector('a-cursor')
    var xCamOffset = document.querySelector('a-camera').getAttribute('position').x-20;
    var yCamOffset = document.querySelector('a-camera').getAttribute('position').y-20;

    entityEl.setAttribute('position', {
      x: 0,//5,//xCamOffset, //-30
      y: -0.3,//-5,//yCamOffset,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
      z: -4.5//40
    });

    entityEl.setAttribute('id','alertInfoPl');
    //entityEl.setAttribute('onclick',"removePl('alertInfoPl')");

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('material', 'opacity', '0.8');
    entityEl.setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 30; letterSpacing: 1; value: ' + infoTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');//sceneEl.querySelector('#posCam');//

    //entityEl.setAttribute('rotation', cameraEl.getAttribute('rotation'));

    //document.querySelector('#posCam').appendChild(entityEl);
    document.querySelector('a-camera').appendChild(entityEl);
    //sceneEl.appendChild(entityEl);

    //Add animation of scaling down to zero
    var animationEl = document.createElement('a-animation');

    //animationEl.setAttribute('begin', '');
    animationEl.setAttribute('delay', '1000');
    animationEl.setAttribute('dur', '1000');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '1 1 1');
    animationEl.setAttribute('to', '0 0 0');
    entityEl.appendChild(animationEl);

    //document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));


  } else {

    //document.querySelector('#posCam').removeChild(sceneEl.querySelector('#briefPl'));
    document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));
    //sceneEl.removeChild(sceneEl.querySelector('#briefPl'));
  }



}

function removePl(alertInfoPl){

  if(document.querySelector('a-scene').querySelector('#'+alertInfoPl)!= null)
    document.querySelector('a-camera').removeChild(document.querySelector('a-camera').querySelector('#'+alertInfoPl));

}

// Component to change to random color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    //var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      //alert('click');

      tip(this.getAttribute('text').value);

      //document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));
      //var randomIndex = Math.floor(Math.random() * COLORS.length);
      //this.setAttribute('material', 'color', COLORS[randomIndex]);
      //console.log('I was clicked at: ', evt.detail.intersection.point);
    });
    this.el.addEventListener('mouseenter', function (evt) {
      //alert('mouseenter');

      //tlPrId, objCl
      //alert(this.getAttribute('id'));
      //alert(this.getAttribute('class'));

      //var randomIndex = Math.floor(Math.random() * COLORS.length);
      //this.setAttribute('material', 'color', COLORS[randomIndex]);
      //console.log('I was clicked at: ', evt.detail.intersection.point);
    });
    this.el.addEventListener('mouseleave', function (evt) {
      //alert('mouseleave');

      if(document.querySelector('a-scene').querySelector('#alertInfoPl') != null)
      document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#alertInfoPl'));
      //var randomIndex = Math.floor(Math.random() * COLORS.length);
      //this.setAttribute('material', 'color', COLORS[randomIndex]);
      //console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
