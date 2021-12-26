"use strict";
exports.__esModule = true;
var THREE = require("three");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//const controls = new THREE.( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
//controls.update();
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
