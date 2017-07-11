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
var exploredByDay = 0;
var firstSiteExcavatedByDay = 0;
var secondSiteExcavatedByDay = 0;
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
  daysSpentInTotal = 21 - minutes;

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  //console.log('daysSpentLearning ' + daysSpentLearning + ' minutes ' + minutes + ' seconds ' + seconds);
  // Output the result in an element with id="timerPl"
  document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 10; letterSpacing: 10; value: Day ' + daysSpentInTotal  +'/\n 4 Weeks');
  //document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:' + minutes  +' Day(s)/\n 4 Weeks');

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

//alert('called 1');

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
    entityEl.setAttribute('material', 'opacity', '0');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 30; letterSpacing: 1; value: ' + infoTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');//sceneEl.querySelector('#posCam');//

    //entityEl.setAttribute('rotation', cameraEl.getAttribute('rotation'));

    //document.querySelector('#posCam').appendChild(entityEl);

    //sceneEl.appendChild(entityEl);

    //Add animation of scaling up to one for dur eq delay of scaling down
/*    var animationEl1 = document.createElement('a-animation');

    animationEl1.setAttribute('dur', '1000');
    animationEl1.setAttribute('attribute', 'scale');
    animationEl1.setAttribute('from', '0 0 0');
    animationEl1.setAttribute('to', '1 1 1');
    entityEl.appendChild(animationEl1);*/


    //Add animation of scaling down to zero
    var animationEl2 = document.createElement('a-animation');
    animationEl2.setAttribute('delay', '2000');
    animationEl2.setAttribute('dur', '1000');
    animationEl2.setAttribute('attribute', 'scale');
    animationEl2.setAttribute('from', '1 1 1');
    animationEl2.setAttribute('to', '0 0 0');
    entityEl.appendChild(animationEl2);

    document.querySelector('a-camera').appendChild(entityEl);
    //document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));

    //setTimeout(document.querySelector('a-camera').removeChild(entityEl), 3000);
  } else {
//alert('called 2');

    //document.querySelector('#posCam').removeChild(sceneEl.querySelector('#briefPl'));
    document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));
    //sceneEl.removeChild(sceneEl.querySelector('#briefPl'));
  }



}

function removePl(elementInfoPl){

  if(elementInfoPl!= null)
    document.querySelector('a-camera').removeChild(elementInfoPl);

}

function visItAnimation(entityEl, isVisible){

  if (!isVisible) {
//alert('scaling down');
    var animationEl2 = document.createElement('a-animation');
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'opacity');
    animationEl2.setAttribute('from', '1');
    animationEl2.setAttribute('to', '0');
    //alert(entityEl.getAttribute('text').opacity);
    //entityEl.getAttribute('text').opacity = 0.1;
    //animationEl2.setAttribute('text', 'opacity', '0');
    entityEl.appendChild(animationEl2);

  }
  if (isVisible) {

    var animationEl1 = document.createElement('a-animation');

    animationEl1.setAttribute('dur', '3000');
    animationEl1.setAttribute('attribute', 'opacity');
    animationEl1.setAttribute('from', '0');
    animationEl1.setAttribute('to', '1');
    //animationEl1.setAttribute('text', 'opacity', '0.1');
    entityEl.appendChild(animationEl1);
  }
}


function scaleItAnimation(entityEl, isVisible){

  if (!isVisible) {
//alert('scaling down');
    var animationEl2 = document.createElement('a-animation');
    animationEl2.setAttribute('dur', '1000');
    animationEl2.setAttribute('attribute', 'scale');
    animationEl2.setAttribute('from', '1 1 1');
    animationEl2.setAttribute('to', '0 0 0');
    entityEl.appendChild(animationEl2);
  }
  if (isVisible) {

    var animationEl1 = document.createElement('a-animation');

    animationEl1.setAttribute('dur', '1000');
    animationEl1.setAttribute('attribute', 'scale');
    animationEl1.setAttribute('from', '0 0 0');
    animationEl1.setAttribute('to', '1 1 1');
    entityEl.appendChild(animationEl1);
  }
}

// Component to change to random color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    //var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      //alert('click');
//alert(this.getAttribute('id'));
      exploreWithPic(this.getAttribute('id'));
      //tip(this.getAttribute('id'));
      //tip(this.getAttribute('text').value);

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

// Component to change to random color on click.
AFRAME.registerComponent('tlpr-listener', {
  init: function () {

    this.el.addEventListener('click', function (evt) {

      //alert('clicked');
      //exploreWithPic(this.getAttribute('id'));
    });
    this.el.addEventListener('mouseenter', function (evt) {

      if(document.querySelector('a-scene').querySelector('#tlExcaAni') != null
      || document.querySelector('a-scene').querySelector('#prExcaAni') != null
      || toolSelectedId != 'tool1Pl'
      || processSelectedId != 'process1Pl') return false;
      //alert('mouse entered');
      // attach tool to cursor
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('geometry', {
        primitive: 'box',
        height: 0.5,
        width: 0.5,
        depth: -0.5
      });
      entityEl.setAttribute('position', {
        x: 0.4,
        y: 0,
        z: -5
      });

      entityEl.setAttribute('id','tlExcaAni');
      entityEl.setAttribute('material', 'color', '#cccccc');
      entityEl.setAttribute('material', 'src', '#tool1Image');
      entityEl.setAttribute('opacity', '0.8');
      entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: T1');

      var cameraEl = document.querySelector('a-camera');

      var animationEl = document.createElement('a-animation');
      entityEl.appendChild(animationEl);
      animationEl.setAttribute('begin', '');
      animationEl.setAttribute('attribute', 'scale');
      animationEl.setAttribute('from', '0 0 0');
      animationEl.setAttribute('to', '1 1 1');

      var animationEl2 = document.createElement('a-animation');
      entityEl.appendChild(animationEl2);
      animationEl2.setAttribute('delay', '1000');
      animationEl2.setAttribute('begin', '');
      animationEl2.setAttribute('dur', '3000');
      animationEl2.setAttribute('attribute', 'rotation');
      animationEl2.setAttribute('from', '0 0 0');
      animationEl2.setAttribute('to', '0 360 0');
      animationEl2.setAttribute('repeat', 'indefinite');

      document.querySelector('a-camera').appendChild(entityEl);

      // attach process to cursor
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('geometry', {
        primitive: 'box',
        height: 0.5,
        width: 0.5,
        depth: -0.5
      });
      entityEl.setAttribute('position', {
        x: -0.4,
        y: 0,
        z: -5
      });

      entityEl.setAttribute('id','prExcaAni');
      entityEl.setAttribute('material', 'color', '#cccccc');
      entityEl.setAttribute('material', 'src', '#process1Image');
      entityEl.setAttribute('opacity', '0.8');
      entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: P1');

      var cameraEl = document.querySelector('a-camera');

      var animationEl = document.createElement('a-animation');
      entityEl.appendChild(animationEl);
      animationEl.setAttribute('begin', '');
      animationEl.setAttribute('attribute', 'scale');
      animationEl.setAttribute('from', '0 0 0');
      animationEl.setAttribute('to', '1 1 1');

      var animationEl2 = document.createElement('a-animation');
      entityEl.appendChild(animationEl2);
      animationEl2.setAttribute('delay', '1000');
      animationEl2.setAttribute('begin', '');
      animationEl2.setAttribute('dur', '3000');
      animationEl2.setAttribute('attribute', 'rotation');
      animationEl2.setAttribute('from', '0 0 0');
      animationEl2.setAttribute('to', '0 360 0');
      animationEl2.setAttribute('repeat', 'indefinite');

      document.querySelector('a-camera').appendChild(entityEl);


    });
    this.el.addEventListener('mouseleave', function (evt) {


      //alert('mouse left');
      if(document.querySelector('a-scene').querySelector('#tlExcaAni') != null)
      document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#tlExcaAni'));

      if(document.querySelector('a-scene').querySelector('#prExcaAni') != null)
      document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#prExcaAni'));
    });
  }
});

function attachTlPrToCam(idNum){
  //alert('attached');

  if (idNum == 3 || idNum == 4) return false;

  //alert('idNum' + idNum);
  //alert('toolSelectedId' + toolSelectedId);
  //alert('processSelectedId' + processSelectedId);

  if(idNum == 1 && toolSelectedId == 'tool2Pl'&& processSelectedId == 'process2Pl'){

    //alert('mouse entered');
    // attach tool to cursor
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
      primitive: 'box',
      height: 0.5,
      width: 0.5,
      depth: -0.5
    });
    entityEl.setAttribute('position', {
      x: 0.4,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','tlExcaAniLarge');
    //color='#cccccc'
    entityEl.setAttribute('material', 'color', '#cccccc');
    //entityEl.setAttribute('material', 'src', '#tool2Image');
    entityEl.setAttribute('opacity', '0.8');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: T2');

    var cameraEl = document.querySelector('a-camera');

    var animationEl = document.createElement('a-animation');
    entityEl.appendChild(animationEl);
    animationEl.setAttribute('begin', '');
    animationEl.setAttribute('duration', '1000');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '0 0 0');
    animationEl.setAttribute('to', '1 1 1');

    var animationEl2 = document.createElement('a-animation');
    entityEl.appendChild(animationEl2);
    animationEl2.setAttribute('delay', '1000');
    animationEl2.setAttribute('begin', '');
    animationEl2.setAttribute('dur', '4000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '6000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);

    // attach process to cursor
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
      primitive: 'box',
      height: 0.5,
      width: 0.5,
      depth: -0.5
    });
    entityEl.setAttribute('position', {
      x: -0.4,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','prExcaAniLarge');
    entityEl.setAttribute('material', 'color', '#cccccc');
    //entityEl.setAttribute('material', 'src', '#process2Image');
    entityEl.setAttribute('opacity', '0.8');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: P2');

    var cameraEl = document.querySelector('a-camera');

    var animationEl = document.createElement('a-animation');
    entityEl.appendChild(animationEl);
    animationEl.setAttribute('begin', '');
    animationEl.setAttribute('duration', '1000');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '0 0 0');
    animationEl.setAttribute('to', '1 1 1');

    var animationEl2 = document.createElement('a-animation');
    entityEl.appendChild(animationEl2);
    animationEl2.setAttribute('delay', '1000');
    animationEl2.setAttribute('begin', '');
    animationEl2.setAttribute('dur', '4000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '6000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);

  }

  if(idNum == 2 && toolSelectedId == 'tool3Pl'&& processSelectedId == 'process3Pl'){

    //alert('mouse entered');
    // attach tool to cursor
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
      primitive: 'box',
      height: 0.5,
      width: 0.5,
      depth: -0.5
    });
    entityEl.setAttribute('position', {
      x: 0.4,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','tlExcaAniLarge');
    entityEl.setAttribute('material', 'color', '#cccccc');
    //entityEl.setAttribute('material', 'src', '#tool3Image');
    entityEl.setAttribute('opacity', '0.8');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: T3');

    var cameraEl = document.querySelector('a-camera');

    var animationEl = document.createElement('a-animation');
    entityEl.appendChild(animationEl);
    animationEl.setAttribute('begin', '');
    animationEl.setAttribute('duration', '1000');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '0 0 0');
    animationEl.setAttribute('to', '1 1 1');

    var animationEl2 = document.createElement('a-animation');
    entityEl.appendChild(animationEl2);
    animationEl2.setAttribute('delay', '1000');
    animationEl2.setAttribute('begin', '');
    animationEl2.setAttribute('dur', '4000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '6000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);

    // attach process to cursor
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
      primitive: 'box',
      height: 0.5,
      width: 0.5,
      depth: -0.5
    });
    entityEl.setAttribute('position', {
      x: -0.4,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','prExcaAniLarge');
    entityEl.setAttribute('material', 'color', '#cccccc');
    //entityEl.setAttribute('material', 'src', '#process3Image');
    entityEl.setAttribute('opacity', '0.8');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: P3');

    var cameraEl = document.querySelector('a-camera');

    var animationEl = document.createElement('a-animation');
    entityEl.appendChild(animationEl);
    animationEl.setAttribute('begin', '');
    animationEl.setAttribute('dur', '1000');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '0 0 0');
    animationEl.setAttribute('to', '1 1 1');

    var animationEl2 = document.createElement('a-animation');
    entityEl.appendChild(animationEl2);
    animationEl2.setAttribute('delay', '1000');
    animationEl2.setAttribute('begin', '');
    animationEl2.setAttribute('dur', '4000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '6000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);

  }

}
function removeTlPrFromCam(){
  //alert('dettached');
  if(document.querySelector('a-scene').querySelector('#tlExcaAniLarge') != null)
  document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#tlExcaAniLarge'));

  if(document.querySelector('a-scene').querySelector('#prExcaAniLarge') != null)
  document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#prExcaAniLarge'));

}

function progressStatus(levelId){

  if(levelId === 'level1'){
    alertInfo('Explore Archaeological sites marked with the yellow cones!');
  }
  if(levelId === 'level2'){
    alertInfo('Excavate Achavanich Beaker Burial site with the green cone marker!');
  }
  if(levelId === 'level3'){
    alertInfo('Excavation results!');
  }
  if (levelId === 'level4') {
    alertInfo('3D model!');
  }
}
