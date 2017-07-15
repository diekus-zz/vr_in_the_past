// Utility

var accessLog = [];

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

// shuffle algorithm
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
var minutes = 0; // A day equals to an in-game minute
var daysSpentLearning = 0;
var daysSpentInTotal = 0;
var exploredByDay = 0;
var firstSiteExcavatedByDay = 0;
var secondSiteExcavatedByDay = 0;

// timer in days / 4 weeks
var d1 = new Date (),
d2 = new Date ( d1 );
d2.setMinutes ( d1.getMinutes() + 21 );

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

  document.querySelector('#timerPl').setAttribute('text', 'color: #fff855; alphaTest: 0; align: center; wrapCount: 10; letterSpacing: 10; value: Day ' + daysSpentInTotal  +'/\n 4 Weeks');

  // Gentle per minute reminder in last 4 minutes
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
}, 1000);

// Alert Info
function alertInfo(infoTxt){

  var sceneEl =  document.querySelector('a-scene');

  if(!sceneEl.querySelector('#alertInfoPl')){

    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 0.5,
      width: 4
    });
    entityEl.setAttribute('position', {
      x: 0,
      y: -0.3,
      z: -4.5
    });

    entityEl.setAttribute('id','alertInfoPl');
    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('material', 'opacity', '0');
    entityEl.setAttribute('text', 'color: #23ef54; alphaTest: 0; align: center; wrapCount: 30; letterSpacing: 1; value: ' + infoTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');

    //Add animation of scaling down to zero
    var animationEl2 = document.createElement('a-animation');
    animationEl2.setAttribute('delay', '2000');
    animationEl2.setAttribute('dur', '1000');
    animationEl2.setAttribute('attribute', 'scale');
    animationEl2.setAttribute('from', '1 1 1');
    animationEl2.setAttribute('to', '0 0 0');
    entityEl.appendChild(animationEl2);

    document.querySelector('a-camera').appendChild(entityEl);
  } else {

    document.querySelector('a-camera').removeChild(sceneEl.querySelector('#alertInfoPl'));
  }
}

function removePl(elementInfoPl){

  if(elementInfoPl!= null)
    document.querySelector('a-camera').removeChild(elementInfoPl);

}

function visItAnimation(entityEl, isVisible){

  if (!isVisible) {

    var animationEl2 = document.createElement('a-animation');
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'opacity');
    animationEl2.setAttribute('from', '1');
    animationEl2.setAttribute('to', '0');
    entityEl.appendChild(animationEl2);
  }
  if (isVisible) {

    var animationEl1 = document.createElement('a-animation');
    animationEl1.setAttribute('dur', '3000');
    animationEl1.setAttribute('attribute', 'opacity');
    animationEl1.setAttribute('from', '0');
    animationEl1.setAttribute('to', '1');
    entityEl.appendChild(animationEl1);
  }
}


function scaleItAnimation(entityEl, isVisible){

  if (!isVisible) {

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

// Component to zoom in tool/process image on click
AFRAME.registerComponent('tlprimg-listener', {
  init: function () {

    this.el.addEventListener('click', function (evt) {

      exploreWithPic(this.getAttribute('id'));
    });
    this.el.addEventListener('mouseleave', function (evt) {

      if(document.querySelector('a-scene').querySelector('#alertInfoPl') != null)
      document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#alertInfoPl'));
    });
  }
});

// Component to animate selected tool and process on mouse enter and on mouse leave
AFRAME.registerComponent('selectedtlpr-listener', {
  init: function () {

    this.el.addEventListener('mouseenter', function (evt) {

      document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor','fuse', false);

      if(document.querySelector('a-scene').querySelector('#tlExcaAni') != null
      || document.querySelector('a-scene').querySelector('#prExcaAni') != null
      || toolSelectedId != 'tool1Pl'
      || processSelectedId != 'process1Pl') return false;

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

      document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', true);

      if(document.querySelector('a-scene').querySelector('#tlExcaAni') != null)
        document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#tlExcaAni'));

      if(document.querySelector('a-scene').querySelector('#prExcaAni') != null)
        document.querySelector('a-camera').removeChild(document.querySelector('a-scene').querySelector('#prExcaAni'));
    });
  }
});

function attachTlPrToCam(idNum){

  document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', false);

  if (idNum == 3 || idNum == 4) return false;

  if(idNum == 1 && toolSelectedId == 'tool2Pl'&& processSelectedId == 'process2Pl'){

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
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '3000');
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
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '3000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);
  }

  if(idNum == 2 && toolSelectedId == 'tool3Pl'&& processSelectedId == 'process3Pl'){

    document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', false);
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
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '3000');
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
    animationEl2.setAttribute('dur', '3000');
    animationEl2.setAttribute('attribute', 'material.color');
    animationEl2.setAttribute('from', '#cccccc');
    animationEl2.setAttribute('to', 'red');
    animationEl2.setAttribute('repeat', 'indefinite');

    var animationEl3 = document.createElement('a-animation');
    entityEl.appendChild(animationEl3);
    animationEl3.setAttribute('delay', '1000');
    animationEl3.setAttribute('begin', '');
    animationEl3.setAttribute('dur', '3000');
    animationEl3.setAttribute('attribute', 'rotation');
    animationEl3.setAttribute('from', '0 0 0');
    animationEl3.setAttribute('to', '0 360 0');
    animationEl3.setAttribute('repeat', 'indefinite');

    document.querySelector('a-camera').appendChild(entityEl);

  }

}
function removeTlPrFromCam(){

  document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', true);

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
