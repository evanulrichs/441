var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000)
var renderer = new THREE.WebGLRenderer()
var cubeA, cubeB;
var object;

camera.position.x = 10
camera.position.y = 120
camera.position.z = 90

renderer.setClearColor(0x000000)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.lookAt(scene.position)
document.body.appendChild(renderer.domElement)


var increment = 0
var render = function() {
    increment += 0.01
    requestAnimationFrame(render);

    spinCamera()
    renderer.render(scene, camera);
};

createCubeA()
createCubeB()
loadModel()
render()

var rotation = 0

function spinCamera() {
    rotation += 0.01
    camera.position.x = Math.sin(rotation) * 80;
    camera.position.z = Math.cos(rotation) * 80;
    camera.lookAt(scene.position)
}

function createCubeA() {
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
        color: 0xFFA500
    });
    cubeA = new THREE.Mesh(geometry, material);
    cubeA.position.set(0, 0, 40);
    scene.add(cubeA);
    cubeA.scale.x = 15; // SCALE
    cubeA.scale.y = 15; // SCALE
    cubeA.scale.z = 15; // SCALE
    animateA();
}

function animateA() {
    requestAnimationFrame(animateA);
    cubeA.rotation.x += 0.01;
    cubeA.rotation.y -= 0.01;
}

function createCubeB() {
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
        color: 0xFFA500
    });
    cubeB = new THREE.Mesh(geometry, material);
    cubeB.position.set(0, 0, -40);
    scene.add(cubeB);
    cubeB.scale.x = 15; // SCALE
    cubeB.scale.y = 15; // SCALE
    cubeB.scale.z = 15; // SCALE
    animateB();
}

function animateB() {
    requestAnimationFrame(animateB);
    cubeB.rotation.x -= 0.01;
    cubeB.rotation.y += 0.01;
}

function loadModel() {
    var loader = new THREE.STLLoader();
    loader.load('models/Gilgamesh.stl', function(geometry) {
        object = new THREE.Mesh(geometry);
        object.rotation.x = Math.PI / -2;
        scene.add(object);
    });
}