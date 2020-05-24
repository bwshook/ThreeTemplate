import * as THREE from "three";

let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({ antialias: true });
let geometry = new THREE.BoxGeometry(0.2, 0.4, 0.2);
let material = new THREE.MeshNormalMaterial();
let mesh = new THREE.Mesh(geometry, material);

init();
animate();
function init() {
    camera.position.z = 1;
    scene.add(mesh);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
}