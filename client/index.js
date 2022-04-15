import * as THREE from 'three'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.4, 1000 );
camera.position.z = 200;
camera.position.y = 10;
camera.position.x = 50;
console.log("CAMERA", camera.position);
// camera.position.x = 100;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(50,50,50);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// cube.position= new Vector3(-30,-30,-30)
cube.position.x = 100
// cube.translateY= -400
// cube.translateZ= 1000
scene.add( cube );
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light );

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
// scene.add( directionalLight );
// const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 2);
// scene.add( directionalLight2 );

// const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 5 );
// scene.add( hemiLight );

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Vector3 } from 'three';

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
loader.setDRACOLoader( dracoLoader );
let obj;
// loader.load( '/models/sea_keep_lonely_watcher/scene.gltf', function( gltf ) {
// 	obj = gltf.scene;
//     obj.castShadow = true
//     obj.receiveShadow = true
//     scene.add( gltf.scene );
//     console.log(obj)
// }, undefined, function ( error ) {
// 	console.error( error );
// } )
loader.load( '/models/ftm/scene.gltf', function( gltf ) {
	// obj = gltf.scene.position(-3,-3,-3);
    scene.add( gltf.scene );
    console.log(obj)
}, undefined, function ( error ) {
	console.error( error );
} )

loader.load( '/models/ftm/scene.gltf', function( gltf ) {
	obj = gltf.scene
    // obj.position = new Vector3(-3,-3,-3);
    scene.add( gltf.scene );
    console.log(obj)
}, undefined, function ( error ) {
	console.error( error );
} )
loader.load( '/models/ftm/scene.gltf', function( gltf ) {
	obj = gltf.scene
    // obj.position = new Vector3(3,3,3);
    scene.add( gltf.scene );
    console.log(obj)
}, undefined, function ( error ) {
	console.error( error );
} )

// console.log('cube',cube,'model',obj)

function animate() {
	requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    cube.position.x +=.01
    // camera.position.z-=1
    controls.update();
	renderer.render( scene, camera );
}
animate();