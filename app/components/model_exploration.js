// screen 4
var isContinue = false;
var model1Found = false;
var model2Found = false;
function show3dVR(objIdNum){
  //alert('screen ' + objIdNum);
//alert(objIdNum);
  //console.log(tlPrVisibility);

  if(objIdNum == 3 || objIdNum == 4){

    // reset tool to excavation state
    toolSelected = 'Expert in the field';
    processSelected = 'Macroscopic Analysis';

    var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

    for (var i = 0; i < tlEls.length; i++) {
      tlEls[i].setAttribute('color', '#cccccc');
      //console.log(tlEls[i]);
    }

    var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

    for (var i = 0; i < prEls.length; i++) {
      prEls[i].setAttribute('color', '#cccccc');
      //console.log(tlEls[i]);
    }

    //presentScene2();
    found(5);
    return false;
  }

  if(toolSelected === 'Expert in the field' && processSelected === 'Macroscopic Analysis'){

    alertInfo('Please select a tool and a process for dating');
    //alert('Please select a tool and a process');
    daysSpentLearning++;
    return false;
  }/*else if(objIdNum == 1 && toolSelected != 'Riso Minisys Machine'){

    alertInfo('Please select a tool for inorganic-dating');
    //alert('Please select a tool');

    return false;
  }
  else if(objIdNum == 1 && processSelected != 'Thermoluminescence Dating'){

    alertInfo('Please select a process for inorganic-dating');
    //alert('Please select a process');

    return false;
  } */else if(objIdNum == 1 && (toolSelected != 'Riso Minisys Machine' || processSelected != 'Thermoluminescence Dating')){

    alertInfo('Reselect for correct inorganic-dating');
    //alert('Please select a tool and a process');
    daysSpentLearning++;
    return false;
  } else if(objIdNum == 2 && (toolSelected != 'Accelerator Mass Spectrometry' || processSelected != 'Radiocarbon Dating')){

    alertInfo('Reselect for correct organic-dating');
    //alert('Please select a tool and a process');
    daysSpentLearning++;
    return false;
  }
//alert(toolSelected);
//alert(processSelected);

  if(objIdNum == 1) model1Found = true;
  if(objIdNum == 2) model2Found = true;
  if(model1Found && model2Found && isContinue){

    document.querySelector('#model' + objIdNum + 'En').setAttribute('visible', 'false');
    isContinue = false;

    summary();
  } else {

    if(isContinue){
      //alert('screen 3');
      document.querySelector('#model' + objIdNum + 'En').setAttribute('visible', 'false');
      isContinue = false;

      // reset tool to excavation state
      toolSelected = 'Expert in the field';
      processSelected = 'Macroscopic Analysis';

      var tlEls = document.querySelector('a-scene').querySelectorAll('.tools');

      for (var i = 0; i < tlEls.length; i++) {
        tlEls[i].setAttribute('color', '#cccccc');
        tlEls[i].setAttribute('text', 'color', '#ccff66');
        //console.log(tlEls[i]);
      }

      var prEls = document.querySelector('a-scene').querySelectorAll('.processes');

      for (var i = 0; i < prEls.length; i++) {
        prEls[i].setAttribute('color', '#cccccc');
        prEls[i].setAttribute('text', 'color', '#66ccff');
        //console.log(tlEls[i]);
      }

      // reset to excavation status
      if(document.querySelector('#tool1Pl') != ''){
        document.querySelector('#tool1Pl').setAttribute('text', 'color', 'red');
      }
      if(document.querySelector('#process1Pl') != ''){
        document.querySelector('#process1Pl').setAttribute('text', 'color', 'red');
      }


      presentScene2();
    }else{

      //2st sticker earned
      if (!document.querySelector('#sti2Im').getAttribute('visible')) {

        alertInfo('Sticker earned!');
        document.querySelector('#sti2Im').setAttribute('visible', 'true');
      }

      renderModel(objIdNum);

      // if tools and processes are visible
      //if(tlPrVisibility)
        //showChoices();

      document.querySelector('#progressPl').setAttribute('text', "color: #fff855; alphaTest: 0; align: center; wrapCount: 10; letterSpacing: 10; value: X-X-X-X");
      //document.querySelector('#screenPl').setAttribute('text', 'color: #00FF00; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Explore\nthe model');

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
