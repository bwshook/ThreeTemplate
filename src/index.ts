import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10);
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({ antialias: true });
let geometry = new THREE.BoxGeometry(0.2, 0.4, 0.2);
let material = new THREE.MeshNormalMaterial();
let mesh = new THREE.Mesh(geometry, material);

let controls = new OrbitControls(camera, renderer.domElement);

init();
animate();
function init() {
    let container = document.createElement('div');
    document.body.appendChild(container);
    // container.appendChild(stats.dom);

    camera.position.set(0, 0, 1);
    controls.update();

    scene.add(mesh);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', OnWindowResize, false);

    // controls.maxPolarAngle = Math.PI * 0.5;
}

function OnWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
