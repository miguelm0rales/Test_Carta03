 import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.122.0/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://unpkg.com/three@0.122.0/examples/jsm/libs/dat.gui.module.js';

export class Mundo{
    constructor(){
        this.camara = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camara.position.set(0,0,5);
        this.camara.rotation.set(0,0,0);
        this.escena = new THREE.Scene();
        //this.escena.background = new THREE.Color(0x292929);
        this.renderizador = new THREE.WebGLRenderer( { antialias: true, alpha: true} );
        this.renderizador.setPixelRatio( window.devicePixelRatio );
        this.renderizador.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderizador.domElement );
    }


    dibujar(){
        this.renderizador.render(this.escena,this.camara);
    }

    iluminar(){

        const luz2 = new THREE.PointLight( 0xffffff, 10, 1000 );
        luz2.position.set(0,-2.5,0);
        this.escena.add( luz2 );

        const luz3 = new THREE.PointLight( 0xffffff, 10, 1000 );
        luz3.position.set(0,2,0);
        this.escena.add( luz3 );

        const ambiental = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
        this.escena.add( ambiental );


/*
        const gui = new GUI();
              gui.add( luz2.position, 'x').min(-3).max(3).step(0.01);
              gui.add( luz2.position, 'y').min(-3).max(3).step(0.01);


        const luz1Color = {
            color: 0xff0000
          }

        gui.addColor(luz1Color, 'color')
          .onChange(() => {
              luz1.color.set(luz1Color.color)
          })

    
        const PointLightHelper2 = new THREE.PointLightHelper(luz2, 1)
        this.escena.add(PointLightHelper2)
        const PointLightHelper3 = new THREE.PointLightHelper(luz3, 1)
        this.escena.add(PointLightHelper3)
        */
    }

    implementarControles(){
        this.controls = new OrbitControls( this.camara, this.renderizador.domElement );
    }
}
