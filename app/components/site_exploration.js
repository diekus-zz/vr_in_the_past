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

    var avaTxt = "";

    if(objId === 'avaCo'){

      avaTxt = "Welcome to the Achavanich Beaker Burial Project!\n\nIn 1987 the remains of an individual buried over 3,700 years ago was discovered at Achavanich in Caithness in the north of Scotland. The site was rescued and excavated by the Highland Regional Council Archaeology Unit. However, unfortunate circumstances led to the site being mostly forgotten about over the next three decades, but it still had so much to offer and to teach us about the Middle Bronze Age in Northern Scotland.\n";
    }
    if(objId === 'mysteriesOfMummies'){

      avaTxt = 'Cladh Hallan prehistoric village - Machair, South Uist\nWhat lies beneath?: the mysteries of the Cladh Hallan mummies\n\nUnder the floor of one of the houses, archaeologists made the very unusual discovery of two mummified bodies – male remains, dated to around 1600BC, and a female who died around 300 years later. But the surprises did not stop there. Radiocarbon dating of the remains and charred grain on the floor of the house suggests they spent hundreds of years out of the ground before being buried under the roundhouse.\n';
    }
    if(objId === 'rignOfStones'){
      avaTxt = "Delfour ring cairn and stone circle - Alvie, Highland\nWhat is this ring of Stones?\n\nIn the 1845 Statistical Account of Scotland, the Reverend John MacDonald of Alvie describes this monument as '...the remains of a Druidical Cairn, enclosed by a circle of large stones, closely set up on end.' Delfour is classified as a 'Clava cairn' and is thought to date to the Early Bronze Age, while the name, itself, is derived from the famous cairns at Balnuaran of Clava.\n";
    }
    if(objId === 'edinburghCastle'){
      avaTxt = 'Edinburgh Castle\nA trench at Edinburgh Castle was excavated archaeologically 05 April 2007 and 14 August 2007.\n\nThe archaeological trench measured 8.4m x 4.2m and lay immediately West of the Portcullis Gate, immediately North of the roadway. The earliest features in the archaeological trench related to a road surfaces thought to predate the present route to the Portcullis Gate (finished by 1577). Finally a much repaired drain cut these horizons at the East end of the trench. A knife with a elaborately carved handle was found in the construction cut for the earliest drain.\n';
    }
    if(objId === 'herosCairn'){
      avaTxt = "Swaites Hill 'Hero's cairn' - South Lanarkshire\nWho was the cairn built for, and why?\n\nIn 1976, a small excavation helped establish the chronology and morphology of burial cairns in the area. There are another 25 nearby, and the type of urn associated with them is known as a ‘Food Vessel’, broadly dated to the Early Bronze Age (2200-1750BC). The finds from the cist are now carefully housed in our National Museum and available for further study.\n";
    }

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
