// screen 5 summary
function summary(){
  alert('summary');

  // hide game planes
  hideGamePanes();

  // show feedback
  showSummary();

}

function hideGamePanes(){
  document.querySelector('#timerPl').setAttribute('visible', 'false');
  document.querySelector('#progressPl').setAttribute('visible', 'false');
  document.querySelector('#screenPl').setAttribute('visible', 'false');
  document.querySelector('#toolPrPl').setAttribute('visible', 'false');
  // if tools and processes are visible
  if(tlPrVisibility)
    showChoices();

}

function showSummary(){
  // create a plane entity
  var entityEl = document.createElement('a-entity');
  //entityEl.setAttribute('do-something-once-loaded', '');

  entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 21,
    width: 40,
    depth: -1
  });

  entityEl.setAttribute('position', {
    x: 0,
    y: -5,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
    z:6
  });

  entityEl.setAttribute('rotation', {
    x: 0,
    y: 0,
    z:0
  });

  entityEl.setAttribute('id','feedbackPl');
  //entityEl.setAttribute('id','resStatus'+ idNum +'Pl');

entityEl.setAttribute('onclick',"window.open('/');");
  //entityEl.setAttribute('onclick','window.location.reload();');
  var avaTxt = "- You explored: ";

  var sites = "";
  for(var i=0; i < accessLog.length; i++){
    sites += accessLog[i] + " ";
  }
  avaTxt += sites + "\n";

  avaTxt += "- Your selected tool and process were " + toolSelected + " and " + processSelected + "\n";

  avaTxt += "- You excavated Achavanich Beaker Burial Project.\n";
  avaTxt += "- You succeeded in finding the beaker and Ava's skull.\n";

  //color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:

  entityEl.setAttribute('material', 'color', 'gray');
  entityEl.setAttribute('text',
  'color: #fff855; alphaTest: 0; align: left; wrapCount: 35; letterSpacing: 10; value: '
  + avaTxt);

  document.querySelector('a-scene').appendChild(entityEl);

}
