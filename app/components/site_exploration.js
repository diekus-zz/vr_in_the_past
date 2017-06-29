function exploreSite(objId){
//alert('Hi');
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
      width: 5
    });

//document.querySelector('a-camera')
//sceneEl.querySelector('#posCam')
//document.querySelector('a-cursor')
    var xCamOffset = document.querySelector('a-camera').getAttribute('position').x-20;
    var yCamOffset = document.querySelector('a-camera').getAttribute('position').y-20;

    entityEl.setAttribute('position', {
      x: 0,//5,//xCamOffset, //-30
      y: -2,//-5,//yCamOffset,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
      z: -5//40
    });

    entityEl.setAttribute('id','briefPl');
    entityEl.setAttribute('onclick','hideBriefPl()');
    //entityEl.setAttribute('text-align','justify');

    var avaTxt = "Welcome to the Achavanich Beaker Burial Project!\n\nIn 1987 the remains of an individual buried over 3,700 years ago was discovered at Achavanich in Caithness in the north of Scotland. The site was rescued and excavated by the Highland Regional Council Archaeology Unit. However, unfortunate circumstances led to the site being mostly forgotten about over the next three decades, but it still had so much to offer and to teach us about the Middle Bronze Age in Northern Scotland.\n";

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('material', 'opacity', '0.8');
    entityEl.setAttribute('text', 'align: left; value: ' + avaTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');//sceneEl.querySelector('#posCam');//

    //entityEl.setAttribute('rotation', cameraEl.getAttribute('rotation'));

    //document.querySelector('#posCam').appendChild(entityEl);
    document.querySelector('a-camera').appendChild(entityEl);
    //sceneEl.appendChild(entityEl);

  } else {

    //document.querySelector('#posCam').removeChild(sceneEl.querySelector('#briefPl'));
    document.querySelector('a-camera').removeChild(sceneEl.querySelector('#briefPl'));
    //sceneEl.removeChild(sceneEl.querySelector('#briefPl'));

    var animationEl = document.createElement('a-animation');
    sceneEl.querySelector('#'+objId).appendChild(animationEl);
    animationEl.setAttribute('begin', 'click');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '1 1 1');
    animationEl.setAttribute('to', '2 2 2');
  }
}

 function hideBriefPl(){

   if(document.querySelector('a-scene').querySelector('#briefPl')!= null)
    //document.querySelector('#posCam').removeChild(document.querySelector('#posCam').querySelector('#briefPl'));
    document.querySelector('a-camera').removeChild(document.querySelector('a-camera').querySelector('#briefPl'));
    //document.querySelector('a-scene').removeChild(document.querySelector('a-scene').querySelector('#briefPl'));
 }
