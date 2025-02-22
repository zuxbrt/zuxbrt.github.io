import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SimplexNoise } from 'simplex-noise';
import { StateService } from '../../services/state.service';
import { IndexComponent } from "../index/index.component";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



@Component({
  selector: 'app-scene',
  imports: [IndexComponent],
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
  private room!: THREE.Mesh;
  private nucleus!: THREE.Group;
  private electrons: { mesh: THREE.Mesh; orbitRadius: number; angle: number; inclination: number, speed: number, trail: THREE.Line; }[] = [];
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
  private isWarping = false;
  private warpSpeed = 0; // 15

  private starTrailGeometry!: THREE.BufferGeometry;
  private starTrailMaterial!: THREE.LineBasicMaterial;
  private glowMesh!: THREE.Mesh;
  private noise = new SimplexNoise();

  isSectionOpen: boolean = false;
  isInsideAsteroid: boolean = false;

  private animationFrameId!: number;

  constructor(private el: ElementRef, private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.appState$.subscribe((appState) => {
      console.log(appState.currentSection)
      switch (appState.currentSection) {
        case 'about':
          this.moveCameraIntoAsteroid();

          break;
        case 'casestudy':

          break;

        case 'contact':
          this.triggerWarpEffect();
          break;

        case null:
          if (this.isWarping) this.stopWarpEffect();
          if (this.isInsideAsteroid) this.resetCamera();
          break;

        default:
          // if(this.isWarping) this.stopWarpEffect();
          break;
      }
    });

    this.initScene();
    this.addStars();
    this.createStarTrails();
    this.addAsteroid();
    this.setupRoom();
    this.createSiliconAtom();
    this.startSpawningPlanets();
    this.createAsteroidGlow();
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
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.001, 1000);
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

    this.adjustCameraForScreen();
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
    for (let i = 0; i < starCount * 3; i++) {
      this.starVertices[i] = (Math.random() - 0.5) * 2000;
    }

    this.starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.starVertices, 3));
    this.stars = new THREE.Points(this.starGeometry, starsMaterial);
    this.scene.add(this.stars);
  }

  private createStarTrails(): void {
    const starVertices = this.starGeometry.attributes['position'].array as Float32Array;
    const trailVertices = new Float32Array(starVertices.length * 2); // Two points per line segment

    // Initialize trails with the same positions
    for (let i = 0; i < starVertices.length; i++) {
      trailVertices[i * 2] = starVertices[i];
      trailVertices[i * 2 + 1] = starVertices[i];
    }

    this.starTrailGeometry = new THREE.BufferGeometry();
    this.starTrailGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(trailVertices, 3)
    );

    this.starTrailMaterial = new THREE.LineBasicMaterial({
      color: 0xc2ffff,
      transparent: true,
      opacity: 0.5,
      linewidth: 1,
    });

    const trails = new THREE.LineSegments(this.starTrailGeometry, this.starTrailMaterial);
    this.scene.add(trails);
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
    });

    material.normalMap = normalMap;
    material.normalScale.set(0.5, 0.5);
    material.transparent = false; // Disable transparency
    material.opacity = 1; // Fully opaque
    material.depthWrite = true; // Ensure proper depth rendering
    material.side = THREE.DoubleSide; // Render only the outside


    this.asteroid = new THREE.Mesh(geometry, material);
    this.asteroid.scale.set(1, 1, 1);
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

    // const pointLight = new THREE.PointLight(0xffffff, 0.5, 50); // Faint glow
    // pointLight.position.set(0, 0, 0); // Attach to asteroid position
    // this.asteroid.add(pointLight); // Makes it move with the asteroid


  }

  private createAsteroidGlow(): void {
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xc2ffff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });

    this.glowMesh = new THREE.Mesh(
      new THREE.SphereGeometry(4, 128, 128),
      glowMaterial
    );

    this.asteroid.add(this.glowMesh);
  }

  private setupRoom(): void {
    const reflectiveMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111111, // Dark base color
      metalness: 1, // Full metalness for reflection
      roughness: 0, // Smooth surface for sharp reflections
      transparent: true,
      opacity: 0.3, // Glass-like transparency
      transmission: 1, // Makes it look like glass
      clearcoat: 1, // Extra glossy
      clearcoatRoughness: 0,
    });

    const reflectiveRoomGeometry = new THREE.SphereGeometry(4 * 0.85, 128, 128);
    const reflectiveRoom = new THREE.Mesh(reflectiveRoomGeometry, reflectiveMaterial);
    reflectiveRoom.layers.set(1); // Assign to layer 1
    this.room = reflectiveRoom;
    this.room.position.set(0, 0, 0);
    this.room.renderOrder = 1;
    this.scene.add(this.room);
  }

  private createSiliconAtom(): void {
    // Nucleus: Protons and Neutrons cluster
    const nucleusGroup = new THREE.Group();
    const protonMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red protons
    const neutronMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa }); // Gray neutrons
    const particleGeometry = new THREE.SphereGeometry(0.03, 16, 16);
  
    for (let i = 0; i < 28; i++) { // 14 protons + 14 neutrons
      const material = i % 2 === 0 ? protonMaterial : neutronMaterial;
      const particle = new THREE.Mesh(particleGeometry, material);
  
      // Random position inside the nucleus sphere
      particle.position.set(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      );
  
      nucleusGroup.add(particle);
    }
    this.nucleus = nucleusGroup;
    this.room.add(this.nucleus);
  
    // Electron Shells
    const electronGeometry = new THREE.SphereGeometry(0.01, 16, 16);
    const electronMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
  
    const electronShells = [
      { count: 2, radius: 0.3 },  // First shell (outside the nucleus)
      { count: 8, radius: 0.5 },  // Second shell
      { count: 4, radius: 0.9 }   // Third shell
    ];
  
    electronShells.forEach((shell) => {
      for (let i = 0; i < shell.count; i++) {
        const electron = new THREE.Mesh(electronGeometry, electronMaterial);
        const angle = (i / shell.count) * Math.PI * 2; // Even distribution
        const inclination = Math.random() * Math.PI; // Random 3D tilt
        const speed = 0.02 + Math.random() * 0.01; // Random speed for realism
  
        // Initialize electron position outside the nucleus
        electron.position.set(
          Math.sin(inclination) * Math.cos(angle) * shell.radius,
          Math.sin(inclination) * Math.sin(angle) * shell.radius,
          Math.cos(inclination) * shell.radius
        );
  
        // Create the trail geometry
        const trailGeometry = new THREE.BufferGeometry();
        const trailVertices = new Float32Array(20 * 3); // 20 points for a smooth curve
        trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailVertices, 3));
  
        const trailMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.7,
          linewidth: 2
        });
  
        const trail = new THREE.Line(trailGeometry, trailMaterial);
  
        // Store electron and trail data
        this.electrons.push({
          mesh: electron,
          orbitRadius: shell.radius,
          angle,
          inclination,
          speed,
          trail,
        });
  
        // Add to scene
        this.room.add(electron);
        this.room.add(trail);
      }
    });
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


  @HostListener('window:resize', [])
  onWindowResize() {
    const container = this.el.nativeElement.querySelector('.app-scene');
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    this.adjustCameraForScreen();

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
    if (!this.isInsideAsteroid) {
      this.asteroid.rotation.y += 0.0005;
      this.asteroid.rotation.x += 0.0005;
    } else {
      (this.asteroid.material as THREE.MeshStandardMaterial).color.set(0x111111); // Dark gray color
      (this.asteroid.material as THREE.MeshStandardMaterial).transparent = false; // Disable transparency
      (this.asteroid.material as THREE.MeshStandardMaterial).opacity = 1; // Fully opaque
      (this.asteroid.material as THREE.MeshStandardMaterial).aoMapIntensity = 1; // Increase ambient occlusion

    }
  }

  private morphAsteroidGeometry(): void {
    if (this.isWarping) {

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

    const asteroidMaterial = this.asteroid.material as THREE.MeshStandardMaterial;
    asteroidMaterial.wireframe = this.isWarping;
  }

  private animateStars(): void {
    const positions = this.starGeometry.attributes['position'].array as Float32Array;
    const starMaterial = this.stars?.material as THREE.PointsMaterial;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += this.isWarping ? this.warpSpeed : 0.2;
      if (positions[i + 2] > 1000) {
        positions[i + 2] = -1000;
      }
    }

    this.starGeometry.attributes['position'].needsUpdate = true;

    if (this.stars) {
      this.stars.rotation.y += 0.0005;
      this.stars.rotation.x += 0.0005;
      this.stars.rotation.z += 0.0005;

      starMaterial.opacity = this.isWarping ? 0 : 1;
      starMaterial.transparent = true;
    }

    // slowdown
    // if (this.isWarping) {
    //   this.warpSpeed *= 0.95; // Gradual slowdown
    //   if (this.warpSpeed < 0.5) {
    //     this.isWarping = false; // Stop warp
    //   }
    // }
  }

  private updateStarTrails(): void {
    const starPositions = this.starGeometry.attributes['position'].array as Float32Array;
    const trailPositions = this.starTrailGeometry.attributes['position'].array as Float32Array;

    this.starTrailMaterial.opacity = this.isWarping ? 0.5 : Math.max(0, this.starTrailMaterial.opacity - 0.02);

    for (let i = 0; i < starPositions.length; i += 3) {
      const currentZ = starPositions[i + 2];
      const trailStartZ = trailPositions[i * 2 + 2]; // Previous position's Z

      if (this.isWarping) {
        // Stretch trails dynamically during warp
        trailPositions[i * 2] = starPositions[i];
        trailPositions[i * 2 + 1] = starPositions[i + 1];
        trailPositions[i * 2 + 2] = currentZ + 60; // Longer trail during warp

        // End of the trail
        trailPositions[i * 2 + 3] = starPositions[i];
        trailPositions[i * 2 + 4] = starPositions[i + 1];
        trailPositions[i * 2 + 5] = currentZ;

        // hide inital stars
        this
      } else {
        // Smoothly reduce trail length after warp
        const reducedZ = THREE.MathUtils.lerp(trailStartZ, currentZ, 0.1);

        trailPositions[i * 2] = starPositions[i];
        trailPositions[i * 2 + 1] = starPositions[i + 1];
        trailPositions[i * 2 + 2] = reducedZ; // Gradually shrink trail

        // End of the trail
        trailPositions[i * 2 + 3] = starPositions[i];
        trailPositions[i * 2 + 4] = starPositions[i + 1];
        trailPositions[i * 2 + 5] = currentZ;
      }
    }

    this.starTrailGeometry.attributes['position'].needsUpdate = true;
  }

  private fadeOutTrails(): void {
    if (!this.isWarping && this.starTrailMaterial.opacity > 0) {
      this.starTrailMaterial.opacity = Math.max(0, this.starTrailMaterial.opacity - 0.02); // Decrease smoothly
    }
  }

  private updateAsteroidGlow(): void {
    const glowMaterial = this.glowMesh.material as THREE.MeshBasicMaterial;
    if (this.isWarping) {
      glowMaterial.opacity = Math.min(1.0, glowMaterial.opacity + 0.05); // Fade in
    } else {
      glowMaterial.opacity = Math.max(0.0, glowMaterial.opacity - 0.05); // Fade out
    }
  }

  private validateStarPositions(): void {
    const positions = this.starGeometry.attributes['position'].array as Float32Array;

    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0; // Reset to 0 if NaN is detected
      }
    }

    this.starGeometry.attributes['position'].needsUpdate = true;
  }

  private updateRoomVisibility(): void {
    if (this.room) {
      const cubeMaterial = this.room.material as THREE.MeshStandardMaterial;
      cubeMaterial.color.set(this.isWarping ? 0x000000 : 0xffffff);
      cubeMaterial.transparent = true;
      cubeMaterial.wireframe = this.isWarping ? true : false;
    }
  }

  private animateSiliconAtom(): void {
    this.electrons.forEach((electronData) => {
      // Update angle for smooth orbit
      electronData.angle += electronData.speed;
  
      // Electron position in a single plane (XY-plane)
      const x = Math.cos(electronData.angle) * electronData.orbitRadius;
      const y = Math.sin(electronData.angle) * electronData.orbitRadius;
      const z = 0; // Keep z constant for a flat circle
  
      electronData.mesh.position.set(x, y, z);
  
      // Update trail points for a smooth curve
      const trailPositions = electronData.trail.geometry.attributes['position'].array as Float32Array;
      for (let i = trailPositions.length - 3; i >= 3; i -= 3) {
        // Shift previous trail points
        trailPositions[i] = trailPositions[i - 3];
        trailPositions[i + 1] = trailPositions[i - 2];
        trailPositions[i + 2] = trailPositions[i - 1];
      }
  
      // Add current position as the newest point
      trailPositions[0] = x;
      trailPositions[1] = y;
      trailPositions[2] = z;
  
      // Mark trail geometry for update
      electronData.trail.geometry.attributes['position'].needsUpdate = true;
    });
  }
  
  
  

  private updateAtomVisibility(): void {
    const visible = !this.isWarping; // Hide when warping
  
    if (this.nucleus) this.nucleus.visible = visible;
    this.electrons.forEach(electron => {
      electron.mesh.visible = visible;
      if (electron.trail) electron.trail.visible = visible;
    });
  };
  
  
  
  
  



  private moveCameraIntoAsteroid(): void {

    const targetPosition = new THREE.Vector3(0, 0, 3);

    const startPosition = this.camera.position.clone();
    let progress = 0;

    const animateMove = () => {
      if (progress < 1) {
        progress += 1 / (1 * 60);
        this.camera.position.lerpVectors(startPosition, targetPosition, progress);

        this.camera.lookAt(0, 0, 0);

        requestAnimationFrame(animateMove);
      } else {
        this.isInsideAsteroid = true;
      }
    };

    animateMove();
  }

  private resetCamera(): void {

    const targetPosition = new THREE.Vector3(
      this.asteroid.position.x,
      this.asteroid.position.y,
      this.asteroid.position.z + 15
    );

    const startPosition = this.camera.position.clone();
    let progress = 0;

    const animateMove = () => {
      if (progress < 1) {
        progress += 1 / (1 * 60); // 3 s * (Assuming) 60 FPS
        this.camera.position.lerpVectors(startPosition, targetPosition, progress);

        // Optionally, make the camera look at the asteroid
        this.camera.lookAt(0, 0, 0);

        requestAnimationFrame(animateMove);
      } else {
        this.isInsideAsteroid = false;
      }
    };

    animateMove();
  }

  private updateVisibilityBasedOnCamera(): void {
    const roomBoundingBox = new THREE.Box3().setFromObject(this.room);

    // Check if the camera is inside the room
    const isInsideRoom = roomBoundingBox.containsPoint(this.camera.position);

    // Hide or show objects outside the room
    this.asteroid.visible = !isInsideRoom;
    if (this.stars) this.stars.visible = !isInsideRoom;
    this.planets.forEach((planet) => (planet.visible = !isInsideRoom));
  }



  private triggerWarpEffect(): void {
    this.isWarping = true;
    this.warpSpeed = 15;
  }

  private stopWarpEffect(): void {
    this.isWarping = false;
    this.warpSpeed = 0;
  }


  private adjustCameraForScreen(): void {
    const aspect = window.innerWidth / window.innerHeight;
  
    if (window.innerWidth < 600) {
      // Small screens (phones)
      this.camera.fov = 90; // Wider field of view for small screens
      // this.camera.position.set(0, 0, 4); // Move the camera further out
    } else if (window.innerWidth < 1024) {
      // Medium screens (tablets)
      this.camera.fov = 60;
      // this.camera.position.set(0, 0, 3.5);
    } else {
      // Large screens (desktop)
      this.camera.fov = 75;
      // this.camera.position.set(0, 0, 3); // Default closer view
    }
  
    // Update projection matrix to apply changes
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  


  private animate = () => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    this.animateStars();
    this.moveAsteroid();
    this.morphAsteroidGeometry();
    this.handleSmoothReset();
    this.updatePlanets();
    this.updateAsteroidGlow();
    this.validateStarPositions();
    this.updateStarTrails();
    this.fadeOutTrails();
    this.updateRoomVisibility();
    this.animateSiliconAtom();
    this.updateAtomVisibility();
    this.updateVisibilityBasedOnCamera();

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

}
