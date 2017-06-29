var tlPrVisibility = false;
function showChoices(){

  if(!tlPrVisibility)
  tlPrVisibility = true;
  else
  tlPrVisibility = false;

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
    tlEls[i].setAttribute('visible', tlPrVisibility);
    tlEls[i].setAttribute('text', 'color: #ccff66; alphaTest: 0; align: center; wrapCount: 19; letterSpacing: 4; value: '+toolNames[i]);
    //console.log(tlEls[i]);
  }

  //tlEls = shuffle(tlEls);

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
    prEls[i].setAttribute('visible', tlPrVisibility);
    prEls[i].setAttribute('text', 'color: #66ccff; alphaTest: 0; align: center; wrapCount: 20; letterSpacing: 4; value: '+processNames[i]);
    //console.log(prEls[i]);
  }

}

var toolSelected = '';
var processSelected = '';
function selectChoice(tlPrId, objCl){
  //alert(tlPrId);

  var objEls = document.querySelector('a-scene').querySelectorAll('.'+objCl);

  for (var i = 0; i < objEls.length; i++) {
    objEls[i].setAttribute('color', '#cccccc');
    //console.log(tlEls[i]);
  }

  document.querySelector('#'+tlPrId).setAttribute('color', 'gray');
  if(objCl === 'tools'){
    toolSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;
    //tip(toolSelected);
  }


  if(objCl === 'processes'){
    processSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;
    //tip(processSelected);
  }


  //alert(toolSelected);
  //alert(processSelected);
}

function tip(tlPrSelectedTxt){

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
}
