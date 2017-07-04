// screen 5 summary
function summary(){
  //alert('summary');

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
  document.querySelector('#sti1Im').setAttribute('visible', 'false');
  document.querySelector('#sti2Im').setAttribute('visible', 'false');
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
    height: 60,
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
        accessLog[i] = 'Achavanich Beaker Burial Site';
      }
      if(accessLog[i] === 'mysteriesOfMummies'){
        accessLog[i] = 'Cladh Hallan prehistoric village - Machair, South Uist';
      }
      if(accessLog[i] === 'rignOfStones'){
        accessLog[i] = 'Delfour ring cairn and stone circle - Alvie, Highland';
      }
      if(accessLog[i] === 'edinburghCastle'){
        accessLog[i] = 'Edinburgh Castle';
      }
      if(accessLog[i] === 'herosCairn'){
        accessLog[i] = "Swaites Hill 'Hero's cairn' - South Lanarkshire";
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

avaTxt += "\tStickers earned:\n'I Am Archaeological Museum Keeper'\n'I Dig Archaeology'\n\n";
avaTxt += "\tDays spent learning: " + daysSpentLearning + "\n\n";
avaTxt += "\tDays spent overall: " + daysSpentInTotal + "\n\n";
/*avaTxt += "\tYou spent around " + daysSpentLearning + " days in learning.\n\n";
avaTxt += "\tYou spent overall " + daysSpentInTotal + " days on this Archaeological adventure.\n\n";
avaTxt += "\tYou selected the tool 'Expert in the field' and the process 'Macroscopic Analysis' for carrying out the excavation at Achavanich.\n\n";
avaTxt += "\tYou selected the tool 'Riso Minisys Machine' and the process 'Thermoluminescence Dating' for carrying out the inorganic dating at Achavanich.\n\n";
avaTxt += "\tYou selected the tool 'Accelerator Mass Spectrometry' and the process 'Radiocarbon Dating' for carrying out the organic at Achavanich.\n\n";  //avaTxt += "\tYou selected the tool " + toolSelected + " and the process " + processSelected + " for carrying out the excavation at Achavanich.\n";
*/

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
