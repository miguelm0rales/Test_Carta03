import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import {GUI} from 'https://unpkg.com/three@0.122.0/examples/jsm/libs/dat.gui.module.js';
import {Mundo} from './Mundo.js';
import {cargarModelo} from './CargarModelo.js';
const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('./texturas/metal.jpg')
var mundo;
var cubo;
var modelo;
var loading = document.getElementById('cargador');


/*
function desaparecer() {
    loading.parentNode.removeChild(loading);
}
setTimeout(desaparecer,10000);
*/

let box = document.querySelector('.box');
  window.addEventListener('load', function() {
      box.style.display = 'none';

  });


function iniciar(){
    mundo = new Mundo();
    mundo.implementarControles();
    mundo.iluminar();
    modelo = new THREE.Object3D();
    cargarModelo('./modelo/carta.glb',mundo, modelo);
/*
var geometry = new THREE.BoxBufferGeometry ( 1, 1.6, 1 );
var material = new THREE. MeshStandardMaterial( { color: 0x292929} );
  material.metalness = 0.7
  material.roughness = 0.2
  material.normalMap = normalTexture;

cubo = new THREE.Mesh( geometry, material );
mundo.escena.add(cubo);

/*const gui = new GUI();
      gui.add( cubo.position, 'x');
*/

//modelo.position.x -= 0.5;
modelo.position.y -= 0.85;
modelo.scale.x-= 0.5;
modelo.scale.y-=0.5;
modelo.scale.z-=0.5;




}

function animar(){
    requestAnimationFrame(animar);
  //cubo.rotation.y+=0.01;


    mundo.dibujar();
}

iniciar();
animar();
