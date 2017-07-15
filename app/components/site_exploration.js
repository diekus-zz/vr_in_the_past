// Site Exploration

function exploreSite(objId){

  // if tools and processes are visible
  showChoices(false);
  updateLog(objId);

  var sceneEl = document.querySelector('a-scene');

  if(!sceneEl.querySelector('#briefPl')){

    document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', false);
    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 'auto',
      width: 5
    });
    entityEl.setAttribute('position', {
      x: 0,
      y: -1,
      z: -5
    });
    entityEl.setAttribute('id','briefPl');
    entityEl.setAttribute('onclick','hideBriefPl();');

    var avaTxt = "";

    if(objId === 'avaCo'){

      avaTxt = "Welcome to the Achavanich Beaker Burial Project!\n\nIn 1987 the remains of an individual buried over 3,700 years ago was discovered at Achavanich in Caithness in the north of Scotland. The site was rescued and excavated by the Highland Regional Council Archaeology Unit. However, unfortunate circumstances led to the site being mostly forgotten about over the next three decades, but it still had so much to offer and to teach us about the Middle Bronze Age in Northern Scotland.\n";
    }
    if(objId === 'mysteriesOfMummies'){

      avaTxt = 'Cladh Hallan prehistoric village - Machair, South Uist\nWhat lies beneath?: the mysteries of the Cladh Hallan mummies\n\nUnder the floor of one of the houses, archaeologists made the very unusual discovery of two mummified bodies - male remains, dated to around 1600BC, and a female who died around 300 years later. But the surprises did not stop there. Radiocarbon dating of the remains and charred grain on the floor of the house suggests they spent hundreds of years out of the ground before being buried under the roundhouse.\n';
    }
    if(objId === 'rignOfStones'){
      avaTxt = "Delfour ring cairn and stone circle - Alvie, Highland\nWhat is this ring of Stones?\n\nIn the 1845 Statistical Account of Scotland, the Reverend John MacDonald of Alvie describes this monument as '...the remains of a Druidical Cairn, enclosed by a circle of large stones, closely set up on end.' Delfour is classified as a 'Clava cairn' and is thought to date to the Early Bronze Age, while the name, itself, is derived from the famous cairns at Balnuaran of Clava.\n";
    }
    if(objId === 'edinburghCastle'){
      avaTxt = 'Edinburgh Castle\nA trench at Edinburgh Castle was excavated archaeologically on 05 April 2007 and 14 August 2007.\n\nThe archaeological trench measured 8.4m x 4.2m and lay immediately West of the Portcullis Gate, immediately North of the roadway. The earliest features in the archaeological trench related to a road surfaces thought to predate the present route to the Portcullis Gate (finished by 1577). Finally a much repaired drain cut the horizons at the East end of the trench. A knife with a elaborately carved handle was found in the construction cut for the earliest drain.\n';
    }
    if(objId === 'herosCairn'){
      avaTxt = "Swaites Hill 'Hero's cairn' - South Lanarkshire\nWho was the cairn built for, and why?\n\nIn 1976, a small excavation helped establish the chronology and morphology of burial cairns in the area. There are another 25 nearby, and the type of urn associated with them is known as a ‘Food Vessel’, broadly dated to the Early Bronze Age (2200-1750BC). The finds from the cist are now carefully housed in our National Museum and available for further study.\n";
    }

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('material', 'opacity', '0.8');
    entityEl.setAttribute('text', 'align: left; value: ' + avaTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');

    var animationEl = document.createElement('a-animation');
    entityEl.appendChild(animationEl);
    animationEl.setAttribute('begin', '');
    animationEl.setAttribute('attribute', 'scale');
    animationEl.setAttribute('from', '0 0 0');
    animationEl.setAttribute('to', '1 1 1');

    document.querySelector('a-camera').appendChild(entityEl);
  } else {

    hideBriefPl();
  }
}

 function hideBriefPl(){

   if(document.querySelector('a-camera').querySelector('#briefPl')!= null){

     var animationEl = document.createElement('a-animation');
     document.querySelector('a-camera').querySelector('#briefPl').appendChild(animationEl);
     animationEl.setAttribute('begin', '');
     animationEl.setAttribute('dur', '2000');
     animationEl.setAttribute('attribute', 'position');
     animationEl.setAttribute('to', '0 -10 -5');

     setTimeout("removeBriefPl()", 2000); // call method after 2 seconds of complete animation
   }
 }

 function hideScaleBriefPl(){

   if(document.querySelector('a-camera').querySelector('#briefPl')!= null){

     var animationEl = document.createElement('a-animation');
     document.querySelector('a-camera').querySelector('#briefPl').appendChild(animationEl);
     animationEl.setAttribute('begin', '');
     animationEl.setAttribute('dur', '2000');
     animationEl.setAttribute('attribute', 'scale');
     animationEl.setAttribute('to', '0 0 0');

      setTimeout("removeBriefPl()", 2000);
   }
 }

function removeBriefPl(){

  if(document.querySelector('a-camera').querySelector('#briefPl')!= null){
   document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', true);
   document.querySelector('a-camera').removeChild(document.querySelector('a-camera').querySelector('#briefPl'));
  }
 }
