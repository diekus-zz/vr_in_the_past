var toolSelected = '';
var processSelected = '';
var toolSelectedId = '';
var processSelectedId = '';

var tlPrVisibility = false;
function showChoices(isTrue){

  tlPrVisibility = isTrue;
  /*if(!tlPrVisibility)
  tlPrVisibility = true;
  else
  tlPrVisibility = false;*/

  //alert('showChoices);
  var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

  var toolNames = [];
  for (var i = 0; i < tlEls.length; i++) {
    toolNames.push(tlEls[i].getAttribute('text').value);
    //console.log(tlEls[i]);
  }

// move at start of each new game only
  //alert(toolNames);
//  if(tlPrVisibility) // For each visibility request, randomize tool names
//  toolNames = shuffle(toolNames);
  //alert(toolNames);

  for (var i = 0; i < tlEls.length; i++) {
    //scaleItAnimation(tlEls[i], tlPrVisibility);
    tlEls[i].setAttribute('visible', tlPrVisibility);
    tlEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: T' + (i+1));
    //tlEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 19; letterSpacing: 4; value: '+toolNames[i]);
    //console.log(tlEls[i]);
  }

  //tlEls = shuffle(tlEls);


// tools and processes info start
var tlInfoEls = document.querySelector('a-scene').querySelectorAll('.toolsInfo');
for (var i = 0; i < tlInfoEls.length; i++) {
  //scaleItAnimation(tlInfoEls[i], tlPrVisibility);
  //setTimeout(, 2000);
  //tlInfoEls[i].setAttribute('visible', tlPrVisibility);
  tlInfoEls[i].setAttribute('visible', tlPrVisibility);
  tlInfoEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 1; letterSpacing: 4; value: ?');
}

var prInfoEls = document.querySelector('a-scene').querySelectorAll('.processesInfo');
for (var i = 0; i < prInfoEls.length; i++) {
  //scaleItAnimation(prInfoEls[i], tlPrVisibility);
  prInfoEls[i].setAttribute('visible', tlPrVisibility);
  //prInfoEls[i].setAttribute('visible', tlPrVisibility);

  //prInfoEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 1; letterSpacing: 4; value: ?');
}

// tools and processes info end

  var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

  var processNames = [];
  for (var i = 0; i < prEls.length; i++) {
    processNames.push(prEls[i].getAttribute('text').value);
    //console.log(tlEls[i]);
  }

// move shuffle to beginning of each new game
  //alert(toolNames);
//  if(tlPrVisibility) // For each visibility request, randomize process names
//  processNames = shuffle(processNames);
  //alert(processNames);

  for (var i = 0; i < prEls.length; i++) {
    //scaleItAnimation(prEls[i], tlPrVisibility);
    prEls[i].setAttribute('visible', tlPrVisibility)
    //prEls[i].setAttribute('visible', tlPrVisibility);

    prEls[i].setAttribute('text', 'color: #66ccff; alphaTest: 0; align: center; wrapCount: 3; letterSpacing: 4; value: P'+ (i+1));
    //prEls[i].setAttribute('text', 'color: #66ccff; alphaTest: 0; align: center; wrapCount: 20; letterSpacing: 4; value: '+processNames[i]);
    //console.log(prEls[i]);
  }

  var exEls = document.querySelector('a-scene').querySelectorAll('.excavated');

  for (var i = 0; i < exEls.length; i++) {
    //scaleItAnimation(exEls[i], tlPrVisibility);
    exEls[i].setAttribute('visible', tlPrVisibility)
    //exEls[i].setAttribute('visible', tlPrVisibility);

    //prEls[i].setAttribute('text', 'color: #66ccff; alphaTest: 0; align: center; wrapCount: 20; letterSpacing: 4; value: '+processNames[i]);
    //console.log(prEls[i]);
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
  //alert(tlPrId);

  var objEls = document.querySelector('a-scene').querySelectorAll('.'+objCl);

  for (var i = 0; i < objEls.length; i++) {
    objEls[i].setAttribute('color', '#cccccc');

    //console.log(tlEls[i]);

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
    //toolSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;
    //tip(toolSelected);
  }


  if(objCl === 'processes'){
    processSelected = getSelectedTlPr(tlPrId);
    processSelectedId = tlPrId;
    //processSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;
    //tip(processSelected);
  }


  //alert(toolSelected);
  //alert(processSelected);
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
    //exploreWithPic(tlPrSelectedId);
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

/*function tip(tlPrSelectedTxt){

  if (tlPrSelectedTxt === 'Expert in the field') {
    alertInfo('Identification');
  } else if (tlPrSelectedTxt === 'Riso Minisys Machine') {
    alertInfo('Dating of inorganic material');
  } else if (tlPrSelectedTxt === 'Accelerator Mass Spectrometry') {
    alertInfo('Dating of organic material');
  } else if (tlPrSelectedTxt === 'Macroscopic Analysis') {
    alertInfo('Identification');
  } else if (tlPrSelectedTxt === 'Thermoluminescence Dating') {
    alertInfo('Dating of inorganic material');
  } else if (tlPrSelectedTxt === 'Radiocarbon Dating') {
    alertInfo('Dating of organic material');
  }
}*/


function exploreToolProcess(objId){
//alert('Hi');
  // if tools and processes are visible
  //if(tlPrVisibility)
    //showChoices();

  //updateLog(objId);

  var sceneEl = document.querySelector('a-scene');

  if(!sceneEl.querySelector('#briefPl')){

    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 'auto',
      width: 5
    });

    var xCamOffset = document.querySelector('a-camera').getAttribute('position').x-20;
    var yCamOffset = document.querySelector('a-camera').getAttribute('position').y-20;

    entityEl.setAttribute('position', {
      x: 0,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','briefPl');
    //entityEl.setAttribute('onclick','removeBriefPl()');
    entityEl.setAttribute('onclick','hideBriefPl()');

    var tlPrTxt = "";

    if(objId === 'tool1PlInfo'){

      tlPrTxt = "Tool:-Expert in the Field like Osteoarchaeologist is consulted for identifying the excation sites. This (tool) is used with the process 'Macroscopic Analysis'.\n\nThe consultation, usually, does not cost anything.\n";
      //tlPrTxt = "Welcome to the Achavanich Beaker Burial Project!\n\nIn 1987 the remains of an individual buried over 3,700 years ago was discovered at Achavanich in Caithness in the north of Scotland. The site was rescued and excavated by the Highland Regional Council Archaeology Unit. However, unfortunate circumstances led to the site being mostly forgotten about over the next three decades, but it still had so much to offer and to teach us about the Middle Bronze Age in Northern Scotland.\n";
    }
    if(objId === 'tool2PlInfo'){

      tlPrTxt = "Tool:-Riso Minisys Machine is used for dating of inorganic materials like Ceramic pottery (for example, the beaker). It is used with the process Thermoluminescence Dating.\n\nIt costs £250 per sample.\n";
    }
    if(objId === 'tool3PlInfo'){
      tlPrTxt = "Tool:-Accelerator Mass Spectrometry is used for dating of organic materials like human remains, flora and fauna (for example, Ava's skull). It is used with the process Radiocarbon Dating.\n\nIt costs £350 per sample.\n";
    }
    if(objId === 'process1PlInfo'){
      tlPrTxt = 'Process:-Macroscopic Analysis is done for identifying excation sites. It is carried out with an Expert in the field (tool).\n\nThe consultation, usually, does not cost anything.\n';
    }
    if(objId === 'process2PlInfo'){
      tlPrTxt = "Process:-Thermoluminescence Dating is done for dating of inorganic materials like Ceramic pottery (for example, the beaker). It is carried out with the tool Riso Minisys Machine.\n\nIt costs £250 per sample.\n";
    }
    if(objId === 'process3PlInfo'){
      tlPrTxt = "Process:-Radiocarbon Dating is done for dating of organic materials like human remains, flora and fauna (for example, Ava's skull). It is carried out with the tool Accelerator Mass Spectrometry.\n\nIt costs £350 per sample.\n";
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
    //document.querySelector('a-camera').removeChild(sceneEl.querySelector('#briefPl'));
  }
}


function exploreWithPic(objId){
//alert('Hi');
  // if tools and processes are visible
  //if(tlPrVisibility)
    //showChoices();

  //updateLog(objId);

  var sceneEl = document.querySelector('a-scene');

  if(!sceneEl.querySelector('#briefPl')){

    // create a plane entity
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 5,
      width: 5
    });

    var xCamOffset = document.querySelector('a-camera').getAttribute('position').x-20;
    var yCamOffset = document.querySelector('a-camera').getAttribute('position').y-20;

    entityEl.setAttribute('position', {
      x: 0,
      y: 0,
      z: -5
    });

    entityEl.setAttribute('id','briefPl');
    entityEl.setAttribute('onclick','hideScaleBriefPl()');
    //entityEl.setAttribute('onclick','removeBriefPl()');
    //entityEl.setAttribute('onclick','hideBriefPl()');

    var tlPrTxt = "";

    //alert(objId);
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
    var cameraEl = document.querySelector('a-camera');//sceneEl.querySelector('#posCam');//
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

    //animationEl.setAttribute('begin', '');
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
