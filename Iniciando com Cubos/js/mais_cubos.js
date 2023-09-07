const scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cubeMaterial2 = new THREE.MeshBasicMaterial({color: 0x0000ff});
const cubeMaterial3 = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial1);
const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial2);
const cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial3);

cube1.position.x = 5;
cube2.position.x = 0;
cube3.position.x = -5;

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

camera.position.z = 5;

function animate (){
    requestAnimationFrame(animate);
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.05;

    camera.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();