import { GLTFLoader } from 'https://unpkg.com/three@0.122.0/examples/jsm/loaders/GLTFLoader.js';

export function cargarModelo(archivo,mundo,modelo){
    var loader = new GLTFLoader();
    loader.load(archivo,function(gltf){
        modelo.add(gltf.scene);
        mundo.escena.add(modelo);
    });
}
