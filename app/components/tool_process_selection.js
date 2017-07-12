// Tool/Process Selection

var toolSelected = '';
var processSelected = '';
var toolSelectedId = '';
var processSelectedId = '';

var tlPrVisibility = false;
function showChoices(isTrue){

  tlPrVisibility = isTrue;

  // tools
  var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

  var toolNames = [];
  for (var i = 0; i < tlEls.length; i++) {
    toolNames.push(tlEls[i].getAttribute('text').value);
  }

  for (var i = 0; i < tlEls.length; i++) {
    tlEls[i].setAttribute('visible', tlPrVisibility);
    tlEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: T' + (i+1));
  }

  // tools and processes info
  var tlInfoEls = document.querySelector('a-scene').querySelectorAll('.toolsInfo');
  for (var i = 0; i < tlInfoEls.length; i++) {
    tlInfoEls[i].setAttribute('visible', tlPrVisibility);
    tlInfoEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 1; letterSpacing: 4; value: ?');
  }

  var prInfoEls = document.querySelector('a-scene').querySelectorAll('.processesInfo');
  for (var i = 0; i < prInfoEls.length; i++) {
    prInfoEls[i].setAttribute('visible', tlPrVisibility);
  }

  // processes
  var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

  var processNames = [];
  for (var i = 0; i < prEls.length; i++) {
    processNames.push(prEls[i].getAttribute('text').value);
  }

  for (var i = 0; i < prEls.length; i++) {
    prEls[i].setAttribute('visible', tlPrVisibility)
    prEls[i].setAttribute('text', 'color: #66ccff; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: P'+ (i+1));
  }

  var exEls = document.querySelector('a-scene').querySelectorAll('.excavated');

  for (var i = 0; i < exEls.length; i++) {
    exEls[i].setAttribute('visible', tlPrVisibility)
  }

  // reset to excavation status
  if(toolSelectedId != '' && document.querySelector('#'+toolSelectedId) != ''){
    document.querySelector('#'+toolSelectedId).setAttribute('text', 'color', '#23ef54');
  }
  if(processSelectedId != '' && document.querySelector('#'+processSelectedId) != ''){
    document.querySelector('#'+processSelectedId).setAttribute('text', 'color', '#23ef54');
  }
}

function selectChoice(tlPrId, objCl){

  var objEls = document.querySelector('a-scene').querySelectorAll('.'+objCl);

  for (var i = 0; i < objEls.length; i++) {
    objEls[i].setAttribute('color', '#cccccc');

    if(objCl === 'tools'){
      objEls[i].setAttribute('text', 'color', '#ccff66');
    }
    if(objCl === 'processes'){
      objEls[i].setAttribute('text', 'color', '#66ccff');
    }
  }

  document.querySelector('#'+tlPrId).setAttribute('text', 'color', '#23ef54');

  if(objCl === 'tools'){
    toolSelected = getSelectedTlPr(tlPrId);
    toolSelectedId = tlPrId;
  }


  if(objCl === 'processes'){
    processSelected = getSelectedTlPr(tlPrId);
    processSelectedId = tlPrId;
  }
}

function getSelectedTlPr(tlPrSelectedId){

  if (tlPrSelectedId === 'tool1Pl') {
    return 'Expert in the field';
  } else if (tlPrSelectedId === 'tool2Pl') {
    return 'Riso Minisys Machine';
  } else if (tlPrSelectedId === 'tool3Pl') {
    return 'Accelerator Mass Spectrometry';
  } else if (tlPrSelectedId === 'process1Pl') {
    return 'Macroscopic Analysis';
  } else if (tlPrSelectedId === 'process2Pl') {
    return 'Thermoluminescence Dating';
  } else if (tlPrSelectedId === 'process3Pl') {
    return 'Radiocarbon Dating';
  }
}

function tip(tlPrSelectedId){

  if (tlPrSelectedId === 'tool1Pl') {
    alertInfo('Identification');
  } else if (tlPrSelectedId === 'tool2Pl') {
    alertInfo('Dating of inorganic material');
  } else if (tlPrSelectedId === 'tool3Pl') {
    alertInfo('Dating of organic material');
  } else if (tlPrSelectedId === 'process1Pl') {
    alertInfo('Identification');
  } else if (tlPrSelectedId === 'process2Pl') {
    alertInfo('Dating of inorganic material');
  } else if (tlPrSelectedId === 'process3Pl') {
    alertInfo('Dating of organic material');
  }
}

function exploreToolProcess(objId){

  var sceneEl = document.querySelector('a-scene');

  if(!sceneEl.querySelector('#briefPl')){

    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 'auto',
      width: 5
    });
    entityEl.setAttribute('position', {
      x: 0,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','briefPl');
    entityEl.setAttribute('onclick','hideBriefPl()');

    var tlPrTxt = "";

    if(objId === 'tool1PlInfo'){

      tlPrTxt = "Tool:-Expert in the Field like Osteoarchaeologist is consulted for identifying the excation sites. This (tool) is used with the process Macroscopic Analysis (P1).\n\nThe consultation, usually, does not cost anything.\n";
    }
    if(objId === 'tool2PlInfo'){

      tlPrTxt = "Tool:-Riso Minisys Machine is used for dating of inorganic materials like Ceramic pottery (for example, the beaker). It is used with the process Thermoluminescence Dating (P2).\n\nIt costs £250 per sample.\n";
    }
    if(objId === 'tool3PlInfo'){
      tlPrTxt = "Tool:-Accelerator Mass Spectrometry is used for dating of organic materials like human remains, flora and fauna (for example, Ava's skull). It is used with the process Radiocarbon Dating (P3).\n\nIt costs £350 per sample.\n";
    }
    if(objId === 'process1PlInfo'){
      tlPrTxt = 'Process:-Macroscopic Analysis is done for identifying excation sites. It is carried out with an Expert in the field (T1).\n\nThe consultation, usually, does not cost anything.\n';
    }
    if(objId === 'process2PlInfo'){
      tlPrTxt = "Process:-Thermoluminescence Dating is done for dating of inorganic materials like Ceramic pottery (for example, the beaker). It is carried out with the tool Riso Minisys Machine (T2).\n\nIt costs £250 per sample.\n";
    }
    if(objId === 'process3PlInfo'){
      tlPrTxt = "Process:-Radiocarbon Dating is done for dating of organic materials like human remains, flora and fauna (for example, Ava's skull). It is carried out with the tool Accelerator Mass Spectrometry (T3).\n\nIt costs £350 per sample.\n";
    }

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('material', 'opacity', '0.9');
    entityEl.setAttribute('text', 'align: left; value: ' + tlPrTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');//sceneEl.querySelector('#posCam');//

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


function exploreWithPic(objId){

  var sceneEl = document.querySelector('a-scene');

  if(!sceneEl.querySelector('#briefPl')){

    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 5,
      width: 5
    });
    entityEl.setAttribute('position', {
      x: 0,
      y: 0,
      z: -5
    });
    entityEl.setAttribute('id','briefPl');
    entityEl.setAttribute('onclick','hideScaleBriefPl()');

    var tlPrTxt = "";

    if(objId === 'tool1Pl'){
      entityEl.setAttribute('material','src','#tool1ZoomedImage');
      tlPrTxt = "";
    }
    if(objId === 'tool2Pl'){

      entityEl.setAttribute('material','src','#tool2ZoomedImage');
      tlPrTxt = "";
    }
    if(objId === 'tool3Pl'){
      entityEl.setAttribute('material','src','#tool3ZoomedImage');
      tlPrTxt = "";
    }
    if(objId === 'process1Pl'){
      entityEl.setAttribute('material','src','#process1ZoomedImage');
      tlPrTxt = "";
    }
    if(objId === 'process2Pl'){
      entityEl.setAttribute('material','src','#process2ZoomedImage');
      tlPrTxt = "";
    }
    if(objId === 'process3Pl'){
      entityEl.setAttribute('material','src','#process3ZoomedImage');
      tlPrTxt = "";
    }

    entityEl.setAttribute('material', 'color', 'white');
    entityEl.setAttribute('material', 'opacity', '0.9');
    entityEl.setAttribute('transparency', false);
    entityEl.setAttribute('text', 'align: left; value: ' + tlPrTxt);

    //reset camera to initial rotation
    var cameraEl = document.querySelector('a-camera');
    document.querySelector('a-camera').appendChild(entityEl);

    //Add animation of scaling up to one for dur < delay of scaling down
    var animationEl1 = document.createElement('a-animation');

    animationEl1.setAttribute('dur', '2000');
    animationEl1.setAttribute('attribute', 'scale');
    animationEl1.setAttribute('from', '0 0 0');
    animationEl1.setAttribute('to', '1 1 1');
    entityEl.appendChild(animationEl1);

    //Add animation of scaling down to zero
    var animationEl2 = document.createElement('a-animation');

    animationEl2.setAttribute('delay', '10000');
    animationEl2.setAttribute('dur', '2000');
    animationEl2.setAttribute('attribute', 'scale');
    animationEl2.setAttribute('from', '1 1 1');
    animationEl2.setAttribute('to', '0 0 0');
    entityEl.appendChild(animationEl2);
  } else {

    document.querySelector('a-camera').removeChild(sceneEl.querySelector('#briefPl'));
  }
}
