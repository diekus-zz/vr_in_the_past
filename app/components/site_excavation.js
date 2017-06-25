function presentScene2(){

  //alert('scene 2');
  //alert(accessLog);

  //hide scene 1 elements
  document.querySelector('#mapIm').setAttribute('visible', false);
  var coneEls = document.querySelector('a-scene').querySelectorAll('a-cone');
  for (var i = 0; i < coneEls.length; i++) {
    coneEls[i].setAttribute('visible', false);
  }

  //reset camera to initial values
  document.querySelector('a-camera').setAttribute('rotation', "0 0 0");

  document.querySelector('#progressPl').setAttribute('text', "color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Progress\n1-'2'-3-4");
  document.querySelector('#screenPl').setAttribute('text', 'color: #00FF00; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Excavate\nthe site');
  //create scene 2 elements
  document.querySelector('#terrain1Pl').setAttribute('visible', true);
  document.querySelector('#terrain2Pl').setAttribute('visible', true);
  document.querySelector('#terrain3Pl').setAttribute('visible', true);
  document.querySelector('#terrain4Pl').setAttribute('visible', true);
}



//document.querySelector('a-scene')

// screen 3
var isZoom = false;
function found(idNum){

  if(toolSelected === '' && processSelected === ''){

    alert('Please select a tool and a process');
    return;
  }else if(toolSelected === ''){

    alert('Please select a tool');
    return;
  }
  else if(processSelected === ''){

    alert('Please select a process');
    return;
  }

  //alert(idNum);
  if(idNum == 5){

    document.querySelector('a-scene').removeChild(document.querySelector('#terrain'+ idNum + 'Pl'));
    document.querySelector('a-scene').removeChild(document.querySelector('#resStatusPl'));
    //hide all default terrain planes
    for (var i = 1; i < 5; i++) {
      document.querySelector('#terrain'+ i + 'Pl').setAttribute('visible', 'true');
    }

    document.querySelector('#progressPl').setAttribute('text', "color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Progress\n1-'2'-3-4");
    document.querySelector('#screenPl').setAttribute('text', 'color: #00FF00; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Excavate\nthe site');

  } else {
    //hide all default terrain planes
    for (var i = 1; i < 5; i++) {
      document.querySelector('#terrain'+ i + 'Pl').setAttribute('visible', 'false');
    }
    // create element for a new terrain plane and append to the sceneEl
    var largePlEl = document.createElement('a-plane');

    //id="terrain4Pl" onclick="found(4)" src="#terrain4Image" visible=false position="10 -10 0" rotation="0 0 0" width="20" height="20"
    largePlEl.setAttribute('id', 'terrain'+ i + 'Pl');
    largePlEl.setAttribute('onclick','found(5)');
    largePlEl.setAttribute('src', '#terrain' + idNum + 'Image');
    largePlEl.setAttribute('position', '0 0 0');
    largePlEl.setAttribute('width', 40);
    largePlEl.setAttribute('height', 40);
    document.querySelector('a-scene').appendChild(largePlEl);

    // Display result of excavation

    //    <!-- progress status -->
    //    <a-plane id='screenPl' class='' height='5' width='20' position='32 4 6' rotation='15 -33 0' color='gray'
    //    onclick="showChoices('timerPl')" text="color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Explore\nthe sites"></a-plane>

    // create a plane entity
    var entityEl = document.createElement('a-entity');
    //entityEl.setAttribute('do-something-once-loaded', '');

    entityEl.setAttribute('color', 'gray');

    entityEl.setAttribute('geometry', {
      primitive: 'plane',
      height: 7,
      width: 40
    });

    entityEl.setAttribute('position', {
      x: 0,
      y: -25,//sceneEl.querySelector('#'+objId).getAttribute('position').y-20,
      z:6
    });

    entityEl.setAttribute('rotation', {
      x: -20,
      y: 0,
      z:0
    });

    entityEl.setAttribute('id','resStatusPl');
    //entityEl.setAttribute('id','resStatus'+ idNum +'Pl');

    var avaTxt = "";

    //color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value:
    if(idNum == 1){
      entityEl.setAttribute('onclick','show3dVR(1)');
      avaTxt = "Congratulations! You have just found a beaker\nClick here to explore it.";
    }

    if(idNum == 2)
    avaTxt = "This riverbank does not have any archaeological artifacts\nPlease try again!";

    if(idNum == 3)
    avaTxt = "This plane does not have any archaeological remains\nPlease try again";

    if(idNum == 4){
      entityEl.setAttribute('onclick','show3dVR(2)');
      avaTxt = "Congratulations! You have just found the Ava's skull\nClick here to explore it.";
    }

    entityEl.setAttribute('material', 'color', 'gray');
    entityEl.setAttribute('text',
    'color: #fff855; alphaTest: 0; align: center; wrapCount: 35; letterSpacing: 10; value: '
    + avaTxt);

    document.querySelector('a-scene').appendChild(entityEl);

    document.querySelector('#progressPl').setAttribute('text', "color: #fff855; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Progress\n1-2-'3'-4");
    document.querySelector('#screenPl').setAttribute('text', 'color: #00FF00; alphaTest: 0; align: center; wrapCount: 15; letterSpacing: 10; value: Excavation\nResult');


  }
}
