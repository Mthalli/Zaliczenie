import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'https://threejs.org/build/three.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//OrbitControls allow the camera to move around the scene
let controls;

var data;


//Keep the 3D object on a global variable so we can access it later
let object;
let object1;
let object2;
let object3;
let object4;
let object5;

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();




//ksiazka
loader.load(
  `public/ksiazka/scene.gltf`,
  function (gltf) {

    //If the file is loaded, add it to the scene
    object = gltf.scene;
	object.position.set(-11, 18.7, -45);
    object.scale.set(5, 5, 5);
	object.traverse(function(node){
		if(node.isMesh)
			node.castShadow=true
	});
	object.traverse(function(node){
		if(node.isMesh)
			node.receiveShadow=true
	});
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//lozko
loader.load(
	`public/lozko/scene.gltf`,
	function (gltf) {
  
	  //If the file is loaded, add it to the scene
	  object1 = gltf.scene;
	  object1.position.set(-20, 7.1, 43);
	  object1.scale.set(0.07, 0.07, 0.07);
	  object1.traverse(function(node){
		  if(node.isMesh)
			  node.castShadow=true
	  });
	  object1.traverse(function(node){
		if(node.isMesh)
			node.receiveShadow=true
	});
	  scene.add(object1);
	},
	function (xhr) {
	  //While it is loading, log the progress
	  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	function (error) {
	  //If there is an error, log it
	  console.error(error);
	}
  );
  
  //lampa
loader.load(
	`public/lampa/scene.gltf`,
	function (gltf) {
  
	  //If the file is loaded, add it to the scene
	  object2 = gltf.scene;
	  object2.position.set(11, 37.5, -54);
	  object2.scale.set(0.1, 0.1, 0.1);
	  object2.addEventListener('click', toggleLight);
	  object2.traverse(function(node){
		  if(node.isMesh)
			  node.castShadow=true
	  });
	  object2.traverse(function(node){
		if(node.isMesh)
			node.receiveShadow=true
	});
	  scene.add(object2);
	},
	function (xhr) {
	  //While it is loading, log the progress
	  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	function (error) {
	  //If there is an error, log it
	  console.error(error);
	}
  );

  function toggleLight() {
	if (swiatlo3_2.intensity === 0) {
	  // Jeśli światło jest wyłączone, włącz je
	  swiatlo3_2.intensity = 5000;
	} else {
	  // Jeśli światło jest włączone, wyłącz je
	  swiatlo3_2.intensity = 0;
	}
  }

  // Dodaj obsługę zdarzeń dla kliknięcia na scenę
window.addEventListener('click', onDocumentClick);

function onDocumentClick(event) {
  // Pobierz pozycję myszy
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Użyj raycaster, aby sprawdzić, czy myszka koliduje z obiektem lampy
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObject(object2, true);

  // Jeśli kliknięto na obiekt lampy, wywołaj funkcję toggleLight
  if (intersects.length > 0) {
    toggleLight();
  }
}

    //garderoba
loader.load(
	`public/garderoba/scene.gltf`,
	function (gltf) {
  
	  //If the file is loaded, add it to the scene
	  object3 = gltf.scene;
	  object3.position.set(-40, 0.5, -40);
	  object3.scale.set(0.2, 0.2, 0.2);
	  object3.rotation.y = Math.PI / 2;
	  object3.traverse(function(node){
		  if(node.isMesh)
			  node.castShadow=true
	  });
	  object3.traverse(function(node){
		if(node.isMesh)
			node.receiveShadow=true
	});
	  scene.add(object3);
	},
	function (xhr) {
	  //While it is loading, log the progress
	  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	function (error) {
	  //If there is an error, log it
	  console.error(error);
	}
  );

//drzwi
loader.load(
	`public/drzwi/scene.gltf`,
	function (gltf) {
  
	  //If the file is loaded, add it to the scene
	  object4 = gltf.scene;
	  object4.position.set(-49, 20, 0);
	  object4.scale.set(0.1, 0.18 , 0.18);
	  object4.traverse(function(node){
		  if(node.isMesh)
			  node.castShadow=true
	  });
	  
	  scene.add(object4);
	},
	function (xhr) {
	  //While it is loading, log the progress
	  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	function (error) {
	  //If there is an error, log it
	  console.error(error);
	}
  );

  //krzeslo
loader.load(
	`public/krzeslo/scene.gltf`,
	function (gltf) {
  
	  //If the file is loaded, add it to the scene
	  object5 = gltf.scene;
	  object5.position.set(0, 0, -35);
	  object5.scale.set(20, 20 , 20);
	  object5.rotation.y = Math.PI / 1;
	  object5.traverse(function(node){
		  if(node.isMesh)
			  node.castShadow=true
	  });
	  scene.add(object5);
	},
	function (xhr) {
	  //While it is loading, log the progress
	  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	function (error) {
	  //If there is an error, log it
	  console.error(error);
	}
  );



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
camera.position.z = 60;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new OrbitControls( camera, renderer.domElement );//kontrola myszka
const TextureLoader = new THREE.TextureLoader();

renderer.shadowMap.enabled = true; //wymagany do cieni


scene.background = new THREE.TextureLoader( 0x00FFD8 ); //kolor tla

//zdjecie
const obiektGeometry = new THREE.BoxGeometry(18, 30, 0.1);
const obiektMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const obiektMesh = new THREE.Mesh(obiektGeometry, obiektMaterial);
const textureLoader = new THREE.TextureLoader();
const zdjecieTekstura = textureLoader.load('public/arnold.jpg');
obiektMaterial.map = zdjecieTekstura;

obiektMesh.position.set(-10, 30, 59.5);
scene.add(obiektMesh);





//zegar
//godzina
const wskazowkaGeometry = new THREE.BoxGeometry(0.2, 2, 0.2);
const wskazowkaMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const wskazowka = new THREE.Mesh(wskazowkaGeometry, wskazowkaMaterial);
const pivot2 = new THREE.Group();
pivot2.add(wskazowka);
wskazowka.position.set(0, 1, 0);
pivot2.position.set(-10, 37, -59);
scene.add(pivot2);


//minuta
const wskazowka1Geometry = new THREE.BoxGeometry(0.2, 3, 0.2);
const wskazowka1Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const wskazowka1 = new THREE.Mesh(wskazowka1Geometry, wskazowka1Material);
const pivot1 = new THREE.Group();
pivot1.add(wskazowka1);
wskazowka1.position.set(0, 1.5, 0);
pivot1.position.set(-10, 37, -59);
scene.add(pivot1);

//sekunda
const wskazowka2Geometry = new THREE.BoxGeometry(0.2, 4, 0.2);
const wskazowka2Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const wskazowka2 = new THREE.Mesh(wskazowka2Geometry, wskazowka2Material);
const pivot = new THREE.Group();
pivot.add(wskazowka2);
wskazowka2.position.set(0, 2, 0);
pivot.position.set(-10, 37, -59);
scene.add(pivot);


function aktualizujWskazowkeGodzinowa() {
	let data = new Date();

	let hourangle= data.getHours()/12 * Math.PI * -2;
	pivot2.rotation.z = hourangle;
	
	let minutesangle = data.getMinutes() / 60 * Math.PI * -2;
    pivot1.rotation.z = minutesangle;

	let secondsangle = data.getSeconds() / 60 * Math.PI * -2;
    pivot.rotation.z = secondsangle;
  }

  const tarczaGeometry = new THREE.CylinderGeometry(5, 5, 1);
  const tarczaMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  const tarcza = new THREE.Mesh(tarczaGeometry, tarczaMaterial);
  tarcza.position.set(-10, 37, -59.5);
  tarcza.rotation.z = Math.PI / 2;
  tarcza.rotation.y = Math.PI / 2;
  scene.add(tarcza);
  
  wskazowka.castShadow=true
  wskazowka.receiveShadow=true
  wskazowka1.castShadow=true
  wskazowka1.receiveShadow=true
  wskazowka2.castShadow=true
  wskazowka2.receiveShadow=true
  tarcza.castShadow=true
  tarcza.receiveShadow=true

//35!!!





//okno
const glassMaterial = new THREE.MeshStandardMaterial({
	transparent: true,
	opacity: 0.3, 
	color: 0x87CEEB, 
  });
  
  const glassGeometry = new THREE.BoxGeometry(20, 15, 1);
  const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
  glassMesh.position.set(20, 32.5, 60);
  scene.add(glassMesh);

//rama okna

const ramageometry = new THREE.BoxGeometry( 21, 1, 2 );
const ramamaterial = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const rama = new THREE.Mesh( ramageometry, ramamaterial );
rama.position.set(20, 25, 60);
scene.add( rama );


const rama1geometry = new THREE.BoxGeometry(21, 1, 2);
const rama1material = new THREE.MeshStandardMaterial({ color: 0x808080 });
const rama1 = new THREE.Mesh(rama1geometry, rama1material);
rama1.position.set(20, 40, 60);
scene.add(rama1);


const rama2geometry = new THREE.BoxGeometry(1, 15, 2);
const rama2material = new THREE.MeshStandardMaterial({ color: 0x808080 });
const rama2 = new THREE.Mesh(rama2geometry, rama2material);
rama2.position.set(10, 32.5, 60); // Przykładowa pozycja
scene.add(rama2);


const rama3geometry = new THREE.BoxGeometry(1, 15, 2);
const rama3material = new THREE.MeshStandardMaterial({ color: 0x808080 });
const rama3 = new THREE.Mesh(rama3geometry, rama3material);
rama3.position.set(30, 32.5, 60); 
scene.add(rama3);
////////////////////////////////////////////////


//podłoga

const geometry = new THREE.BoxGeometry( 100, 0.5, 120 );
const material = new THREE.MeshStandardMaterial( { color: 0x8B4513 } );
const podloga = new THREE.Mesh( geometry, material );
scene.add( podloga );

//sciana 1
const sciana1geometry = new THREE.BoxGeometry( 100, 50, 0.5 );
const sciana1material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana1 = new THREE.Mesh( sciana1geometry, sciana1material );
sciana1.position.set(0, 25, -60);
scene.add( sciana1 );

//sciana 2
const sciana2geometry = new THREE.BoxGeometry( 0.5, 50, 120 );
const sciana2material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana2 = new THREE.Mesh( sciana2geometry, sciana2material );
sciana2.position.set(-50, 25, 0);
scene.add( sciana2 );

//sciana 3
const sciana3geometry = new THREE.BoxGeometry( 60, 50, 0.5 );
const sciana3material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana3 = new THREE.Mesh( sciana3geometry, sciana3material );
sciana3.position.set(-20, 25, 60);
scene.add( sciana3 );

//sciana 4
const sciana4geometry = new THREE.BoxGeometry( 20, 50, 0.5 );
const sciana4material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana4 = new THREE.Mesh( sciana4geometry, sciana4material );
sciana4.position.set(40, 25, 60);
scene.add( sciana4 );

//sciana 5
const sciana5geometry = new THREE.BoxGeometry( 20, 25, 0.5 );
const sciana5material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana5 = new THREE.Mesh( sciana5geometry, sciana5material );
sciana5.position.set(20, 12.5, 60);
scene.add( sciana5 );

//sciana 6
const sciana6geometry = new THREE.BoxGeometry( 20, 10, 0.5 );
const sciana6material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const sciana6 = new THREE.Mesh( sciana6geometry, sciana6material );
sciana6.position.set(20, 45, 60);
scene.add( sciana6 );



const dywanyGroup = new THREE.Group();

const dywanGeometry = new THREE.BoxGeometry(6, 1, 6);

const dywan1Material = new THREE.MeshStandardMaterial({ color: 0x000000 }); 
const dywan1 = new THREE.Mesh(dywanGeometry, dywan1Material);
dywan1.position.set(-9, 0, -9);
dywanyGroup.add(dywan1);

const dywan2Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 }); 
const dywan2 = new THREE.Mesh(dywanGeometry, dywan2Material);
dywan2.position.set(-3, 0, -9);
dywanyGroup.add(dywan2);

const dywan3Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan3 = new THREE.Mesh(dywanGeometry, dywan3Material);
dywan3.position.set(3, 0, -9);
dywanyGroup.add(dywan3);

const dywan4Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan4 = new THREE.Mesh(dywanGeometry, dywan4Material);
dywan4.position.set(9, 0, -9);
dywanyGroup.add(dywan4);

const dywan5Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan5 = new THREE.Mesh(dywanGeometry, dywan5Material);
dywan5.position.set(-9, 0, 3);
dywanyGroup.add(dywan5);

const dywan6Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan6 = new THREE.Mesh(dywanGeometry, dywan6Material);
dywan6.position.set(-3, 0, 3);
dywanyGroup.add(dywan6);

const dywan7Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan7 = new THREE.Mesh(dywanGeometry, dywan7Material);
dywan7.position.set(3, 0, 3);
dywanyGroup.add(dywan7);

const dywan8Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan8 = new THREE.Mesh(dywanGeometry, dywan8Material);
dywan8.position.set(9, 0, 3);
dywanyGroup.add(dywan8);

const dywan9Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan9 = new THREE.Mesh(dywanGeometry, dywan9Material);
dywan9.position.set(-9, 0, 9);
dywanyGroup.add(dywan9);

const dywan10Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan10 = new THREE.Mesh(dywanGeometry, dywan10Material);
dywan10.position.set(-3, 0, 9);
dywanyGroup.add(dywan10);

const dywan11Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan11 = new THREE.Mesh(dywanGeometry, dywan11Material);
dywan11.position.set(3, 0, 9);
dywanyGroup.add(dywan11);

const dywan12Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan12 = new THREE.Mesh(dywanGeometry, dywan12Material);
dywan12.position.set(9, 0, 9);
dywanyGroup.add(dywan12);

const dywan13Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan13 = new THREE.Mesh(dywanGeometry, dywan13Material);
dywan13.position.set(-9, 0, -3);
dywanyGroup.add(dywan13);

const dywan14Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan14 = new THREE.Mesh(dywanGeometry, dywan14Material);
dywan14.position.set(-3, 0, -3);
dywanyGroup.add(dywan14);

const dywan15Material = new THREE.MeshStandardMaterial({ color: 0xFFFF00 });
const dywan15 = new THREE.Mesh(dywanGeometry, dywan15Material);
dywan15.position.set(3, 0, -3);
dywanyGroup.add(dywan15);

const dywan16Material = new THREE.MeshStandardMaterial({ color: 0x000000 });
const dywan16 = new THREE.Mesh(dywanGeometry, dywan16Material);
dywan16.position.set(9, 0, -3);
dywanyGroup.add(dywan16);

scene.add(dywanyGroup);

const cieniedywanu = new THREE.Group();
cieniedywanu.add(dywan1, dywan2, dywan3, dywan4, dywan5, dywan6, dywan7, dywan8, dywan9, dywan16, dywan10, dywan11, dywan12, dywan13, dywan14, dywan15);
dywan1.castShadow = true;
dywan1.receiveShadow = true;
dywan2.castShadow = true;
dywan2.receiveShadow = true;
dywan3.castShadow = true;
dywan3.receiveShadow = true;
dywan4.castShadow = true;
dywan4.receiveShadow = true;
dywan5.castShadow = true;
dywan5.receiveShadow = true;
dywan6.castShadow = true;
dywan6.receiveShadow = true;
dywan7.castShadow = true;
dywan7.receiveShadow = true;
dywan8.castShadow = true;
dywan8.receiveShadow = true;
dywan9.castShadow = true;
dywan9.receiveShadow = true;
dywan10.castShadow = true;
dywan10.receiveShadow = true;
dywan11.castShadow = true;
dywan11.receiveShadow = true;
dywan12.castShadow = true;
dywan12.receiveShadow = true;
dywan13.castShadow = true;
dywan13.receiveShadow = true;
dywan14.castShadow = true;
dywan14.receiveShadow = true;
dywan15.castShadow = true;
dywan15.receiveShadow = true;
dywan16.castShadow = true;
dywan16.receiveShadow = true;

scene.add(cieniedywanu);


const biurkoGroup = new THREE.Group();

// Blat biurka (teraz większy)
const blatGeometry = new THREE.BoxGeometry(30, 2, 20);
const blatMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 }); // Brązowy kolor
const blat = new THREE.Mesh(blatGeometry, blatMaterial);
blat.position.set(0, 17, -50); // Przesunięcie wzdłuż osi Z, aby przestawić pod ścianę
biurkoGroup.add(blat);

// Noga 1
const noga1Geometry = new THREE.BoxGeometry(2, 16, 2);
const noga1Material = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Czarny kolor
const noga1 = new THREE.Mesh(noga1Geometry, noga1Material);
noga1.position.set(-14, 8, -59);
biurkoGroup.add(noga1);

// Noga 2
const noga2Geometry = new THREE.BoxGeometry(2, 16, 2);
const noga2Material = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Czarny kolor
const noga2 = new THREE.Mesh(noga2Geometry, noga2Material);
noga2.position.set(14, 8, -59);
biurkoGroup.add(noga2);

// Noga 3
const noga3Geometry = new THREE.BoxGeometry(2, 16, 2);
const noga3Material = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Czarny kolor
const noga3 = new THREE.Mesh(noga3Geometry, noga3Material);
noga3.position.set(-14, 8, -41);
biurkoGroup.add(noga3);

// Noga 4
const noga4Geometry = new THREE.BoxGeometry(2, 16, 2);
const noga4Material = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Czarny kolor
const noga4 = new THREE.Mesh(noga4Geometry, noga4Material);
noga4.position.set(14, 8, -41);
biurkoGroup.add(noga4);


// Dodanie biurka do sceny
scene.add(biurkoGroup);


// Grupa dla cieni
const shadowGroup = new THREE.Group();
shadowGroup.add(blat, noga1, noga2, noga3, noga4);
blat.castShadow=true
blat.receiveShadow=true
noga1.castShadow=true
noga1.receiveShadow=true
noga2.castShadow=true
noga2.receiveShadow=true
noga3.castShadow=true
noga3.receiveShadow=true
noga4.castShadow=true
noga4.receiveShadow=true
scene.add(shadowGroup);

// Dodanie biurka do sceny
scene.add(biurkoGroup);







//swiatlo (to na zwenatrz)
const balwan5Geometry = new THREE.SphereGeometry(15, 16, 16);
const balwan5Material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); 
const balwan5 = new THREE.Mesh(balwan5Geometry, balwan5Material);
const swiatlo1 = new THREE.PointLight(0xFFFFFF, 100000, 2000) //100000
swiatlo1.castShadow= true;
//slonce grupa
const swiatlo = new THREE.Group()
swiatlo.add(swiatlo1, balwan5)
swiatlo.position.set(100,100,200)
scene.add(swiatlo)

const pycekgeometry = new THREE.BoxGeometry( 0.5, 5, 0.5 );
const pycekmaterial = new THREE.MeshStandardMaterial( { color: 0x000000 } );
const pycek = new THREE.Mesh( pycekgeometry, pycekmaterial );
pycek.position.set(0, 47.5, 0);
scene.add( pycek );

//swiatlo2 (to w pokoju)
const swiatlo2Geometry = new THREE.SphereGeometry(1, 16, 16);
const swiatlo2Material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); 
const swiatlo2 = new THREE.Mesh(swiatlo2Geometry, swiatlo2Material);
const swiatlo3 = new THREE.PointLight(0xFFFFFF, 10000, 20000)
swiatlo3.castShadow= true;
//slonce grupa2
const swiatlo4 = new THREE.Group()
swiatlo4.add(swiatlo3, swiatlo2)
swiatlo4.position.set(0,45,0)
scene.add(swiatlo4)


// Drugi obiekt światła (to w pokoju)
const swiatlo2Geometry2 = new THREE.SphereGeometry(1, 16, 16);
const swiatlo2Material2 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
const swiatlo2_2 = new THREE.Mesh(swiatlo2Geometry2, swiatlo2Material2);
const swiatlo3_2 = new THREE.PointLight(0xFFFFFF, 5000, 2000);
swiatlo3_2.castShadow = true;

// Druga grupa światła
const swiatlo4_2 = new THREE.Group();
swiatlo4_2.add(swiatlo3_2, swiatlo2_2); 11, 37.5, -54
swiatlo4_2.position.set(11, 34.5, -54 );
scene.add(swiatlo4_2);


//cienie
const glowa= new THREE.Group()
glowa.add(podloga, sciana1, sciana2, sciana3, sciana4, sciana5, rama, rama1, rama2, rama3,
 sciana6)
podloga.castShadow=true
podloga.receiveShadow=true
sciana1.castShadow=true
sciana1.receiveShadow=true
sciana2.castShadow=true
sciana2.receiveShadow=true
sciana3.castShadow=true
sciana4.castShadow=true
sciana5.castShadow=true
sciana6.castShadow=true
rama1.castShadow=true
rama1.receiveShadow=true
rama2.castShadow=true
rama2.receiveShadow=true
rama3.castShadow=true
rama3.receiveShadow=true
rama.castShadow=true
rama.receiveShadow=true
scene.add(glowa)



//tł0
const PudelkoGwiazd_g = new THREE.SphereGeometry(2000,1000,1000);
const PudelkoGwiazd_t = new THREE.TextureLoader().load('public/droga_mleczna.jpg');
const PudelkoGwiazd_m = new THREE.MeshBasicMaterial({map:PudelkoGwiazd_t, side: THREE.BackSide, color:0x9C9B9B});
const PudelkoGwiazd   = new THREE.Mesh (PudelkoGwiazd_g, PudelkoGwiazd_m);

//zegar


scene.add(PudelkoGwiazd);

function animate() {

	//obecna data
	data = (Date.now() * 0.0001)

	PudelkoGwiazd.rotateY(0.0001)
	aktualizujWskazowkeGodzinowa();
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();



