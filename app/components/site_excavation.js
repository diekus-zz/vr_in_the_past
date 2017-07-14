// Site Excavation

// excavation
function presentScene2(){

  if(exploredByDay == 0)
    exploredByDay = daysSpentInTotal;

  //hide scene 1 elements
  document.querySelector('#mapIm').setAttribute('visible', false);
  var coneEls = document.querySelector('a-scene').querySelectorAll('a-cone');
  for (var i = 0; i < coneEls.length; i++) {
    coneEls[i].setAttribute('visible', false);
  }

  //reset camera to initial values
  document.querySelector('a-camera').setAttribute('rotation', "0 0 0");

  document.querySelector('#level2').setAttribute('color', '#ef2d5e');
  document.querySelector('#level3').setAttribute('color', '#fff855');
  document.querySelector('#level4').setAttribute('color', '#fff855');

  //create scene 2 elements
  document.querySelector('#terrain1Pl').setAttribute('visible', true);
  document.querySelector('#terrain2Pl').setAttribute('visible', true);
  document.querySelector('#terrain3Pl').setAttribute('visible', true);
  document.querySelector('#terrain4Pl').setAttribute('visible', true);
}

// dating
var isZoom = false;
function found(idNum){

  var sceneEl =  document.querySelector('a-scene');
  if(toolSelected === '' && processSelected === ''){

    alertInfo('Please select a tool and a process');
    if(sceneEl.querySelector('#alertInfoPl'))
      daysSpentLearning++;

    console.log(daysSpentLearning);
    return false;
  }else if(toolSelected === ''){

    alertInfo('Please select a tool');
    if(sceneEl.querySelector('#alertInfoPl'))
      daysSpentLearning++;
    return false;
  }
  else if(processSelected === ''){

    alertInfo('Please select a process');
    if(sceneEl.querySelector('#alertInfoPl'))
      daysSpentLearning++;
    return false;
  } if(toolSelected != 'Expert in the field' || processSelected != 'Macroscopic Analysis'){

    alertInfo('Reselect for correct site-identity');
    if(sceneEl.querySelector('#alertInfoPl'))
      daysSpentLearning++;
    return false;
  }

  var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');
  var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

  var processNames = [];

  var arrLen = tlEls.length;
  for (var i = 0; i < arrLen; i++) {
    if(tlEls[i].getAttribute('text').value === 'Expert in the field'){
      document.querySelector('#'+tlEls[i].getAttribute('id')).setAttribute('class','excavated');
    }
  }

  arrLen = prEls.length;
  for (var i = 0; i < arrLen; i++) {
    if(prEls[i].getAttribute('text').value === 'Macroscopic Analysis'){
      document.querySelector('#'+prEls[i].getAttribute('id')).setAttribute('class','excavated');
    }
  }

//1st sticker earned
if (document.querySelector('#sti1Im').getAttribute('opacity') == 0) {

  alertInfo('Sticker earned!');
  visItAnimation(document.querySelector('#sti1Im'), true);
}

  if(idNum == 5){

    document.querySelector('a-scene').removeChild(document.querySelector('#terrain'+ idNum + 'Pl'));
    document.querySelector('a-scene').removeChild(document.querySelector('#resStatusPl'));

    //hide all default terrain planes
    for (var i = 1; i < 5; i++) {
      document.querySelector('#terrain'+ i + 'Pl').setAttribute('visible', 'true');
    }

    document.querySelector('#level2').setAttribute('color', '#ef2d5e');
    document.querySelector('#level3').setAttribute('color', '#fff855');
    document.querySelector('#level4').setAttribute('color', '#fff855');
  } else {

    //hide all default terrain planes
    for (var i = 1; i < 5; i++) {
      document.querySelector('#terrain'+ i + 'Pl').setAttribute('visible', 'false');
    }

    document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', 'false');
    // create element for a new terrain plane and append to the sceneEl
    var largePlEl = document.createElement('a-plane');

    largePlEl.setAttribute('id', 'terrain'+ i + 'Pl');
    largePlEl.setAttribute('onclick','show3dVR('+idNum+')');
    largePlEl.setAttribute('onmouseenter', 'attachTlPrToCam('+idNum+')');
    largePlEl.setAttribute('onmouseleave', 'removeTlPrFromCam('+idNum+')');
    largePlEl.setAttribute('src', '#terrain' + idNum + 'Image');
    largePlEl.setAttribute('position', '0 0 0');
    largePlEl.setAttribute('width', 40);
    largePlEl.setAttribute('height', 40);
    document.querySelector('a-scene').appendChild(largePlEl);

    // Display result of excavation
    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('color', 'gray');
    entityEl.setAttribute('geometry', {
      primitive: 'box',
      height: 7,
      width: 40,
      depth: -1
    });
    entityEl.setAttribute('position', {
      x: 0,
      y: -25,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
      z:6
    });
    entityEl.setAttribute('rotation', {
      x: -20,
      y: 0,
      z:0
    });
    entityEl.setAttribute('id','resStatusPl');

    //entityEl.setAttribute('onmouseenter',"document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', 'false')");

    var avaTxt = "";

    if(idNum == 1){
      //entityEl.setAttribute('onclick','show3dVR(1)');
      avaTxt = "Beaker artifact found! Select tool/process\nfor inorganic dating";
    }

    if(idNum == 3){
      //entityEl.setAttribute('onmouseenter',"document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', 'false')");
      avaTxt = "This riverbank does not have any archaeological artifacts\nPlease try again!";
    }

    if(idNum == 4){
      //entityEl.setAttribute('onmouseenter',"document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', 'false')");
      avaTxt = "This plane does not have any archaeological remains\nPlease try again";
    }

    if(idNum == 2){
      //entityEl.setAttribute('onclick','show3dVR(2)');
      avaTxt = "Skull remains found! Select tool/process\nfor organic dating";
    }

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('text',
    'color: #fff855; alphaTest: 0; align: center; wrapCount: 35; letterSpacing: 10; value: '
    + avaTxt);

    document.querySelector('a-scene').appendChild(entityEl);

    document.querySelector('#level3').setAttribute('color', '#ef2d5e');
    document.querySelector('#level4').setAttribute('color', '#fff855');
  }
}
