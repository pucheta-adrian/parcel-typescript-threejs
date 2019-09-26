import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  Mesh,
  CylinderBufferGeometry,
  MeshBasicMaterial,
  
} from 'three';

export default class AppGame {

  wWidth:number;
  wHeight:number;

  scene:Scene;
  camera:PerspectiveCamera;
  renderer:WebGLRenderer;

  cube:Mesh;

  get aspect (){
    return this.wWidth / this.wHeight;
  }

  constructor() {
    this.wWidth  = window.innerWidth;
    this.wHeight = window.innerHeight;

    // create Scene
    this.scene = new Scene();

    // create Camera
    this.camera = new PerspectiveCamera(75, this.aspect, 0.1, 1000);
    this.camera.position.z = 50;

    const geometry = new CylinderBufferGeometry(5, 5, 20, 8);
    const material = new MeshBasicMaterial({
      color: 0xffff00
    });

    this.cube = new Mesh(geometry, material);
    this.cube.position.z = 5;

    this.scene.add(this.cube);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize( this.wWidth, this.wHeight );
    document.body.appendChild( this.renderer.domElement );

    // add Events Global
    window.addEventListener( 'resize', this.onWindowResize.bind(this), false);

    this.animate();
  }

  onWindowResize() {
    this.wWidth  = window.innerWidth;
    this.wHeight = window.innerHeight;

    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.wWidth, this.wHeight);
  }

  animate() {
    this.cube.rotation.y += 0.01;
    this.cube.rotation.x += 0.02;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animate.bind(this));
  }
}