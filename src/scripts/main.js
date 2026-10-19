import * as THREE from 'three';
import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';
import { Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import fontUrl from '../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf?url';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 5, 5, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x212121 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

const loader = new TTFLoader();

let secondsPassed = null;
let textContent = 'visitor@page:~$'
let textEnd = '';

let cursorRef = null;

loader.load(fontUrl, (fontData) => {
    const font = new Font(fontData);

    const geometry = new TextGeometry(`${textContent}${textEnd}`, {
        font,
        size: 0.08,
        depth: 0.05,
        bevelEnabled: false
    });
    geometry.center();

    const dotGeo = new TextGeometry(`|`, {
        font,
        size: 0.1,
        depth: 0.05,
        bevelEnabled: false
    });
    dotGeo.center();

    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true
    });
    const dotMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true
    });

    const text = new THREE.Mesh(geometry, material);
    cursorRef = new THREE.Mesh(dotGeo, dotMaterial);
    scene.add(text);
    scene.add(cursorRef);
    cursorRef.position.x = 0.55;
    cursorRef.position.y = 0;
});

function animate( time ) {
    // Do something every second
    let currentSec = Math.round(time / 1000);
    if(currentSec !== secondsPassed){
        if(cursorRef){
            cursorRef.material.opacity = cursorRef.material.opacity === 1 ? 0 : 1;
        }
        secondsPassed = currentSec;
    }
//   cube.rotation.x = time / 2000;
//   cube.rotation.y = time / 1000;
  renderer.render( scene, camera );

}