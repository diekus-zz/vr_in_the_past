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

  //alert(toolNames);
  if(tlPrVisibility) // For each visibility request, randomize tool names
  toolNames = shuffle(toolNames);
  //alert(toolNames);

  for (var i = 0; i < tlEls.length; i++) {
    tlEls[i].setAttribute('visible', tlPrVisibility);
    tlEls[i].setAttribute('text', 'color: ; alphaTest: 0; align: left; wrapCount: 15; letterSpacing: 4; value: '+toolNames[i]);
    //console.log(tlEls[i]);
  }

  //tlEls = shuffle(tlEls);

  var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

  var processNames = [];
  for (var i = 0; i < prEls.length; i++) {
    processNames.push(prEls[i].getAttribute('text').value);
    //console.log(tlEls[i]);
  }

  //alert(toolNames);
  if(tlPrVisibility) // For each visibility request, randomize process names
  processNames = shuffle(processNames);
  //alert(processNames);

  for (var i = 0; i < prEls.length; i++) {
    prEls[i].setAttribute('visible', tlPrVisibility);
    prEls[i].setAttribute('text', 'color: ; alphaTest: 0; align: left; wrapCount: 19; letterSpacing: 4; value: '+processNames[i]);
    //console.log(prEls[i]);
  }

}

var toolSelected = '';
var processSelected = '';
function selectChoice(tlPrId, objCl){
  //alert(tlPrId);

  var objEls = document.querySelector('a-scene').querySelectorAll('.'+objCl);

  for (var i = 0; i < objEls.length; i++) {
    objEls[i].setAttribute('color', 'gray');
    //console.log(tlEls[i]);
  }

  document.querySelector('#'+tlPrId).setAttribute('color', '#0080ff');
  if(objCl === 'tools')
  toolSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;

  if(objCl === 'processes')
  processSelected = document.querySelector('#'+tlPrId).getAttribute('text').value;

  //alert(toolSelected);
  //alert(processSelected);
}
