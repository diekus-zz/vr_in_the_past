// summaryLog

function summary(){

  document.querySelector('a-scene').querySelector('#cursorId').setAttribute('cursor', 'fuse', 'false');

  // hide game planes
  hideGamePanes();

  // show summary
  showSummary();
}

function hideGamePanes(){

  document.querySelector('#timerPl').setAttribute('visible', 'false');
  document.querySelector('#progressPl').setAttribute('visible', 'false');
  document.querySelector('#toolPrPl').setAttribute('visible', 'false');
  document.querySelector('#sti1Im').setAttribute('visible', 'false');
  document.querySelector('#sti2Im').setAttribute('visible', 'false');

  // if tools and processes are visible
  showChoices(false);
}

function showSummary(){

  // create a plane entity
  var entityEl = document.createElement('a-entity');

  entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 60,
    width: 60,
    depth: -1
  });
  entityEl.setAttribute('position', {
    x: 0,
    y: -5,
    z:6
  });
  entityEl.setAttribute('rotation', {
    x: 0,
    y: 0,
    z:0
  });
  entityEl.setAttribute('id','feedbackPl');

  var summaryLog = '';
  var summaryTxt = "";
  var sites = "";
  var siteLog = "";

  for(var i=0; i < accessLog.length; i++){
    if (i <= accessLog.length-1) {
      siteLog += accessLog[i] + "$";
    }else {
      siteLog += accessLog[i];
    }
  }

  summaryTxt += "Dear player,\n\n"
  summaryTxt += "\tThank you for playing the game 'VR in the Past'.\n\n"

  if(accessLog.length == 0){

    summaryTxt += "You did not explore any archaeological site.\n\n";
    siteLog = "none";
  } else{
    summaryTxt += "You explored ";

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
        accessLog[i] = "Swaites Hill - Hero's cairn - South Lanarkshire";
      }

      if(i < accessLog.length-2){
        sites += accessLog[i] + ", ";
      }
      if(i == accessLog.length-2){
          sites += accessLog[i] + " and ";
      }
      if(i == accessLog.length-1 && accessLog.length != 1){
        sites += accessLog[i] + " archaeological sites.";
      }
      if(i == accessLog.length-1 && accessLog.length == 1){
        sites += accessLog[i] + " archaeological site.";
      }
    }
    summaryTxt += sites + "\n\n";
  }

  summaryTxt += "\tStickers earned:\n'I Am Archaeological Museum Keeper'\n'I Dig Archaeology'\n\n";
  summaryTxt += "\tDays spent learning: " + daysSpentLearning + "\n\n";
  summaryTxt += "\tDays spent overall: " + daysSpentInTotal + "\n\n";
  summaryTxt += "\tSite exploration completed on day : " + exploredByDay + "\n\n";
  summaryTxt += "\t1st excavation activity completed on day : " + firstSiteExcavatedByDay + "\n\n";
  summaryTxt += "\t2nd excavation activity completed on day : " + secondSiteExcavatedByDay + "\n\n";
  summaryTxt += "\tPlease remove the VR headset and complete the posttest after clicking on this summaryLog table!\n\n";
  summaryTxt += "\nSincerely,\n'VR in the Past' project team\n"

  summaryLog = "?sitesExplored=" + siteLog
    + "&daysSpentLearning=" + daysSpentLearning
    + "&daysSpentInTotal=" + daysSpentInTotal
    + "&exploredByDay=" + exploredByDay
    + "&firstSiteExcavatedByDay=" + firstSiteExcavatedByDay
    + "&secondSiteExcavatedByDay=" + secondSiteExcavatedByDay;

  entityEl.setAttribute('onclick',"window.open('/post_test" + summaryLog + "', '_self');");
  entityEl.setAttribute('material', 'color', 'gray');
  entityEl.setAttribute('text',
  'color: #fff855; alphaTest: 0; align: left; wrapCount: 60; letterSpacing: 10; value: '
  + summaryTxt);

  document.querySelector('a-scene').appendChild(entityEl);
}
