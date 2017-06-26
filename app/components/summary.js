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
    height: 30,
    width: 60,
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

entityEl.setAttribute('onclick',"window.open('/', '_self');");
  //entityEl.setAttribute('onclick','window.location.reload();');
  var avaTxt = "";


  avaTxt += "Dear player,\n\n"
  avaTxt += "\tThank you for playing the game 'VR in the Past'.\n\n"

  if(accessLog.length == 0){

    avaTxt += "You did not explore any archaeological site.\n\n";
  } else{
    avaTxt += "You explored ";

    var sites = "";
    for(var i=0; i < accessLog.length; i++){

      if(accessLog[i] === 'avaCo'){
        accessLog[i] = 'Achavanich';
      }
      if(accessLog[i] === 'avaCo1'){
        accessLog[i] = 'Edinburgh';
      }
      if(accessLog[i] === 'avaCo2'){
        accessLog[i] = 'Glassgow';
      }
      if(accessLog[i] === 'avaCo3'){
        accessLog[i] = 'Dundee';
      }

      if(i < accessLog.length-2)
        sites += accessLog[i] + ", ";
      if(i == accessLog.length-2)
        sites += accessLog[i] + " and ";
      if(i == accessLog.length-1 && accessLog.length != 1)
        sites += accessLog[i] + " archaeological sites.";
      if(i == accessLog.length-1 && accessLog.length == 1)
        sites += accessLog[i] + " archaeological site.";
    }
    avaTxt += sites + "\n\n";
  }


  avaTxt += "\tYou selected the tool " + toolSelected + " and the process " + processSelected + " for carrying out the excavation at Achavanich.\n";
//  avaTxt += "\tYou selected the tool " + toolSelected + " and the process " + processSelected + "for dating of the beaker artifact.\n";
//  avaTxt += "\tYou selected the tool " + toolSelected + " and the process " + processSelected + "for dating of the skull/bones remains.\n";

//  avaTxt += "- You excavated Achavanich Beaker Burial Project.\n";
//  avaTxt += "- You succeeded in finding the beaker and Ava's skull.\n";

  avaTxt += "\nSincerely,\n'VR in the Past' project team"

  //color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:

  entityEl.setAttribute('material', 'color', 'gray');
  entityEl.setAttribute('text',
  'color: #fff855; alphaTest: 0; align: left; wrapCount: 60; letterSpacing: 10; value: '
  + avaTxt);

  document.querySelector('a-scene').appendChild(entityEl);

}
