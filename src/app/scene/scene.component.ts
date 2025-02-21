import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SimplexNoise } from 'simplex-noise';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-scene',
  imports: [],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss'
})
export class SceneComponent implements OnInit, AfterViewInit, OnDestroy {

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private stars: THREE.Points | undefined;
  private starGeometry!: THREE.BufferGeometry;
  private starVertices!: Float32Array;
  private asteroid!: THREE.Mesh;
  private originalVertices!: Float32Array;
  private asteroidVelocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.05,
    (Math.random() - 0.5) * 0.05,
    (Math.random() - 0.5) * 0.05
  )
  private fadeOutSpeed = 0.01;
  private fadeInSpeed = 0.02;
  private isResetting = false;
  private planets: THREE.Mesh[] = [];
  private planetSpawnInterval = 5000;
  private isWarping = true;
  private warpSpeed = 0; // 15
  
  private animationFrameId!: number;

  private noise = new SimplexNoise();

  isSectionOpen: boolean = false;

  constructor(private el: ElementRef, private stateService: StateService) {}

  ngOnInit(): void {

    console.log('here');

    this.stateService.appState$.subscribe((appState) => {
      this.isSectionOpen = appState.currentSection != null;
      (this.isSectionOpen) ? this.triggerWarpEffect() : this.stopWarpEffect();
    });

    this.initScene();
    this.addStars();
    this.addAsteroid();
    this.startSpawningPlanets();
    this.animate();
  }



  ngAfterViewInit(): void {
      
  }



  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.renderer.dispose();
  }



  private initScene(): void {
    const container = this.el.nativeElement.querySelector('.app-scene');

    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 15);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.enableRotate = false;

    window.addEventListener('resize', () => this.onWindowResize());
  }



  private addStars(): void {
    this.starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff,
      size: 0.7,
      transparent: true,
      opacity: Math.random() * 0.5 + 0.5
    });
    this.starVertices = new Float32Array(starCount + 1);
    for(let i = 0; i < starCount * 3; i++) {
      this.starVertices[i] = (Math.random() - 0.5) * 2000;
    }

    this.starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.starVertices, 3));
    this.stars = new THREE.Points(this.starGeometry, starsMaterial);
    this.scene.add(this.stars);
  }



  private addAsteroid(): void {
    const textureLoader = new THREE.TextureLoader();
    const bumpMap = textureLoader.load('assets/textures/ground_0010_height_1k.png')
    const normalMap = textureLoader.load('assets/textures/ground_0010_normal_opengl_1k.png')
    const roughnessMap = textureLoader.load('assets/textures/ground_0010_roughness_1k.jpg')

    const geometry = new THREE.SphereGeometry(4, 128, 128);

    this.originalVertices = geometry.attributes['position'].array as Float32Array;
    const material = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(0x555555), 
      roughness: 0.9,
      metalness: 0.2,
      flatShading: true,
      bumpMap: bumpMap,
      roughnessMap: roughnessMap,
      bumpScale: 0.05,
      wireframe: false
    });

    material.normalMap = normalMap;
    material.normalScale.set(0.5, 0.5);

    this.asteroid = new THREE.Mesh(geometry, material);
    this.asteroid.scale.set(1,1,1);
    this.scene.add(this.asteroid);

    this.asteroid.castShadow = true;
    this.asteroid.receiveShadow = true;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Bright white light
    directionalLight.position.set(5, 10, 7.5); // Position it above and at an angle
    directionalLight.castShadow = true; // Enable shadows
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white ambient light
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 50); // Faint glow
    pointLight.position.set(0, 0, 0); // Attach to asteroid position
    this.asteroid.add(pointLight); // Makes it move with the asteroid


  }


  private createRandomPlanet(): THREE.Mesh {
    const radius = Math.random() * 0.5 + 0.2; // Random radius between 0.2 and 0.7
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
  
    const color = new THREE.Color(Math.random(), Math.random(), Math.random()); // Random color
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.8,
      metalness: 0.1,
    });
  
    const planet = new THREE.Mesh(geometry, material);
  
    // Random position within a certain range
    planet.position.set(
      (Math.random() - 0.5) * 50, // X-coordinate
      (Math.random() - 0.5) * 50, // Y-coordinate
      Math.random() * -100 - 20 // Z-coordinate (always ahead)
    );
  
    this.scene.add(planet);
    return planet;
  }
  
  private startSpawningPlanets(): void {
    setInterval(() => {
      const newPlanet = this.createRandomPlanet();
      this.planets.push(newPlanet);
    }, this.planetSpawnInterval);
  }
  
  private updatePlanets(): void {
    const speedMultiplier = this.isWarping ? this.warpSpeed : 1;

    this.planets.forEach((planet) => {
      planet.position.z += 0.5 * speedMultiplier; // Move faster during warp
  
      // Remove planets that move out of view
      if (planet.position.z > 1000) {
        this.scene.remove(planet);
        this.planets = this.planets.filter((p) => p !== planet);
      }
    });

    // if (this.isWarping) {
    //   this.warpSpeed *= 0.95;
    //   if (this.warpSpeed < 0.5) {
    //     this.isWarping = false;
    //   }
    // }
  }
  


  onWindowResize() {
    const container = this.el.nativeElement.querySelector('.app-scene');
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }



  private handleSmoothReset(): void {
    const distanceLimit = 100;
    const material = this.asteroid.material as THREE.MeshStandardMaterial;
  
    if (this.asteroid.position.length() > distanceLimit && !this.isResetting) {
      this.isResetting = true;
    }
  
    if (this.isResetting) {
      material.opacity -= this.fadeOutSpeed;
      material.transparent = true;
  
      if (material.opacity <= 0) {
        this.asteroid.position.set(0, 0, 0);
        this.asteroidVelocity.set(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        );
  
        material.opacity = 0;
        this.isResetting = false;
      }
    } else if (material.opacity < 1) {
      material.opacity += this.fadeInSpeed;
    }
  }
  
  private moveAsteroid(): void {
    this.asteroid.rotation.y += 0.0005;
    this.asteroid.rotation.x += 0.0005;
  }

  private morphAsteroidGeometry(): void {
    const time = Date.now() * 0.0001; // Slower morphing for realism
    const geometry = this.asteroid.geometry;
    const oscillation = Math.sin(time) * 0.5 + 0.5;
    const positionAttribute = geometry.attributes['position'];
    const normalAttribute = geometry.attributes['normal'];

    const maxDisplacement = 0.0005;
  
    for (let i = 0; i < positionAttribute.count; i++) {
      // Get original vertex position
      const x = this.originalVertices[i * 3];
      const y = this.originalVertices[i * 3 + 1];
      const z = this.originalVertices[i * 3 + 2];
  
      // Vertex normal direction (used for more realistic deformation)
      const nx = normalAttribute.getX(i);
      const ny = normalAttribute.getY(i);
      const nz = normalAttribute.getZ(i);
  
      // Large-scale irregular noise
      const baseNoise = this.noise.noise3D(x * 0.2, y * 0.2, z * 0.2 + time) * 0.0002;
  
      // Fine surface detail noise
      const detailNoise = this.noise.noise3D(x * 1.5, y * 1.5, z * 1.5 + time) * 0.0005;
  
      // Total displacement
      let displacement = (baseNoise + detailNoise) * oscillation;
      displacement = Math.max(-maxDisplacement, Math.min(maxDisplacement, displacement));
  
      // Apply displacement along the normal (avoids stretching in specific directions)
      positionAttribute.setX(i, x + nx * displacement);
      positionAttribute.setY(i, y + ny * displacement);
      positionAttribute.setZ(i, z + nz * displacement);
    }
  
    // Mark position attribute for update
    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals(); // Recalculate normals for proper lighting
  }
  

  private animateStars(): void {
    const positions = this.starGeometry.attributes['position'].array as Float32Array;

    for(let i = 0; i < positions.length; i+= 3){
      positions[i + 2] += this.isWarping ? this.warpSpeed : 0.2;
      if(positions[i + 2] > 1000){
        positions[i + 2] = -1000;
      } 
    }

    this.starGeometry.attributes['position'].needsUpdate = true;

    if(this.stars) {
      this.stars.rotation.y += 0.0005;
      this.stars.rotation.x += 0.0005;
      this.stars.rotation.z += 0.0005;
    }

    // slowdown
    // if (this.isWarping) {
    //   this.warpSpeed *= 0.95; // Gradual slowdown
    //   if (this.warpSpeed < 0.5) {
    //     this.isWarping = false; // Stop warp
    //   }
    // }
  }

  private triggerWarpEffect(): void {
    this.isWarping = true;
    this.warpSpeed = 15;
  }

  private stopWarpEffect(): void {
    this.isWarping = false;
    this.warpSpeed = 0;
  }


  private animate = () => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    this.animateStars();
    this.moveAsteroid();
    this.morphAsteroidGeometry();
    this.handleSmoothReset();
    this.updatePlanets();
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

}
