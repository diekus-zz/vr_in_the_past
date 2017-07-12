// Model Exploration

var isContinue = false;
var model1Found = false;
var model2Found = false;

function show3dVR(objIdNum){

  if(objIdNum == 3 || objIdNum == 4){

    // reset tool to excavation state
    toolSelected = 'Expert in the field';
    processSelected = 'Macroscopic Analysis';

    var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

    for (var i = 0; i < tlEls.length; i++) {
      tlEls[i].setAttribute('color', '#cccccc');
    }

    var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

    for (var i = 0; i < prEls.length; i++) {
      prEls[i].setAttribute('color', '#cccccc');
    }

    found(5); // To reiterate for 2nd model
    return false;
  }

  if(toolSelected === 'Expert in the field' && processSelected === 'Macroscopic Analysis'){

    alertInfo('Please select a tool and a process for dating');
    daysSpentLearning++;
    return false;
  }else if(objIdNum == 1 && (toolSelected != 'Riso Minisys Machine' || processSelected != 'Thermoluminescence Dating')){

    alertInfo('Reselect for correct inorganic-dating');
    daysSpentLearning++;
    return false;
  } else if(objIdNum == 2 && (toolSelected != 'Accelerator Mass Spectrometry' || processSelected != 'Radiocarbon Dating')){

    alertInfo('Reselect for correct organic-dating');
    daysSpentLearning++;
    return false;
  }

  if(objIdNum == 1) model1Found = true;
  if(objIdNum == 2) model2Found = true;
  if(model1Found && model2Found && isContinue){

    document.querySelector('#model' + objIdNum + 'En').setAttribute('visible', 'false');
    isContinue = false;

    if (secondSiteExcavatedByDay == 0) {
      secondSiteExcavatedByDay = daysSpentInTotal;
    }

    summary();
  } else {

    if(isContinue){

      document.querySelector('#model' + objIdNum + 'En').setAttribute('visible', 'false');
      isContinue = false;

      // reset tool to excavation state
      toolSelected = 'Expert in the field';
      processSelected = 'Macroscopic Analysis';
      toolSelectedId = 'tool1Pl';
      processSelectedId = 'process1Pl';
      var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

      for (var i = 0; i < tlEls.length; i++) {
        tlEls[i].setAttribute('color', '#cccccc');
        tlEls[i].setAttribute('text', 'color', '#ccff66');
      }

      var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

      for (var i = 0; i < prEls.length; i++) {
        prEls[i].setAttribute('color', '#cccccc');
        prEls[i].setAttribute('text', 'color', '#66ccff');
      }

      // reset to excavation status
      if(document.querySelector('#tool1Pl') != ''){
        document.querySelector('#tool1Pl').setAttribute('text', 'color', '#23ef54');
      }
      if(document.querySelector('#process1Pl') != ''){
        document.querySelector('#process1Pl').setAttribute('text', 'color', '#23ef54');
      }

      if (firstSiteExcavatedByDay == 0) {
        firstSiteExcavatedByDay = daysSpentInTotal;
      }

      presentScene2();
    }else{

      //2st sticker earned
      if (document.querySelector('#sti2Im').getAttribute('opacity') == 0) {

        alertInfo('Sticker earned!');
        visItAnimation(document.querySelector('#sti2Im'), true);
      }

      renderModel(objIdNum);
      document.querySelector('#level4').setAttribute('color', '#ef2d5e');
      isContinue = true;
    }
  }
}
  function renderModel(objIdNum){

    //reset camera to initial values
    document.querySelector('a-camera').setAttribute('rotation', "0 0 0");

    // Replace map/picture image with model
    document.querySelector('a-scene').removeChild(document.querySelector('#terrain5Pl'));
    document.querySelector('a-scene').removeChild(document.querySelector('#resStatusPl'));
    document.querySelector('#model' + objIdNum + 'En').setAttribute('visible', 'true');
  }
