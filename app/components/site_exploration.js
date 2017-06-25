function exploreSite(objId){

  // if tools and processes are visible
  if(tlPrVisibility)
  showChoices();

  updateLog(objId);

  //alert('exploreSite');

  var sceneEl = document.querySelector('a-scene');

  //alert(sceneEl.querySelector('#'+objId).getAttribute('position').y);
  /*AFRAME.registerComponent('do-something-once-loaded', {
  init: function () {
  // This will be called after the entity has properly attached and loaded.
  //console.log('I am ready'!);
  //alert('ready alert');
}
});*/

if(!sceneEl.querySelector('#briefPl')){

var animationEl = document.createElement('a-animation');

animationEl.setAttribute('begin', 'click');
animationEl.setAttribute('attribute', 'scale');
animationEl.setAttribute('from', '2 2 2');
animationEl.setAttribute('to', '1 1 1');
sceneEl.querySelector('#'+objId).appendChild(animationEl);


// create a plane entity
var entityEl = document.createElement('a-entity');
//entityEl.setAttribute('do-something-once-loaded', '');

entityEl.setAttribute('geometry', {
  primitive: 'plane',
  height: 'auto',
  width: 42
});

entityEl.setAttribute('position', {
  x: -35,
  y: 0,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
  z:12
});

entityEl.setAttribute('id','briefPl');

var avaTxt = "Welcome to the Achavanich Beaker Burial Project!\n\nIn 1987 the remains of an individual buried over 3,700 years ago was discovered at Achavanich in Caithness in the north of Scotland. The site was rescued and excavated by the Highland Regional Council Archaeology Unit. However, unfortunate circumstances led to the site being mostly forgotten about over the next three decades, but it still had so much to offer and to teach us about the Middle Bronze Age in Northern Scotland.\n";

entityEl.setAttribute('material', 'color', 'gray');
entityEl.setAttribute('text', 'align: justify; value: ' + avaTxt);

//reset camera to initial rotation
var cameraEl = document.querySelector('a-camera');

entityEl.setAttribute('rotation', cameraEl.getAttribute('rotation'));


sceneEl.appendChild(entityEl);
} else {

sceneEl.removeChild(sceneEl.querySelector('#briefPl'));

var animationEl = document.createElement('a-animation');
sceneEl.querySelector('#'+objId).appendChild(animationEl);
animationEl.setAttribute('begin', 'click');
animationEl.setAttribute('attribute', 'scale');
animationEl.setAttribute('from', '1 1 1');
animationEl.setAttribute('to', '2 2 2');



}

}
