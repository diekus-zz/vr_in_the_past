document.addEventListener("DOMContentLoaded", function(event) {
  var scene = document.querySelector('a-scene');

  if (scene.hasLoaded) addEventListeners();
  else scene.addEventListener('loaded', handleSceneLoaded);
});

function handleSceneLoaded() {
  console.log('scene loaded');

  // IF YOU NEED TO CHANGE ATTRIBUTES OF THE CAMERA, I RECOMMEND DISABLING BEFORE DOING IT.
  // THIS WAY THE NEW ATTRIBUTES WILL BE PASSED TO THE ORBIT-CONTROLS VIA UPDATE()
  document.querySelector('#camera').setAttribute( 'orbit-controls', 'enabled', false);
  document.querySelector('#camera').setAttribute( 'position', '0 2 10');
  document.querySelector('#camera').setAttribute( 'orbit-controls', 'enabled', true);

  // ORBIT CAMERA DRAG START / END EVENT LISTENERS
  document.querySelector('#camera').addEventListener('start-drag-orbit-controls', handleDragStart);
  document.querySelector('#camera').addEventListener('end-drag-orbit-controls', handleDragEnd);

  // TOGGLE ORBIT AND STATIC CAMERA
  document.querySelector('#changeCamera').addEventListener('click', handleSwitchCamera);
}

function handleDragStart(event) {
  console.log("drag start");
}

function handleDragEnd(event) {
  console.log("drag end");

  var cam1 = document.querySelector('#camera');
  // console.log(cam1.getAttribute('position'));
  // console.log(cam1.getAttribute('rotation'));
}

function handleSwitchCamera(event) {
  var cam1 = document.querySelector('#camera');
  var cam2 = document.querySelector('#camera2');

  if (cam1.components.camera.data.active) cam2.setAttribute('camera', 'active', true);
  else cam1.setAttribute('camera', 'active', true);
}
