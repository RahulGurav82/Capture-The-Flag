// Ensure the DOM is fully loaded before initializing Typed.js

document.getElementById("logo-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link action

  Swal.fire({
      title: "Enter Flag 2",
      input: "text",
      inputPlaceholder: "Enter the password",
      inputAttributes: {
          autocapitalize: "off"
      },
      icon: "question",
      confirmButtonText: "Submit",
      background: "#1d3557", // Dark blue background
      color: "#f1faee", // Light text
      confirmButtonColor: "#e63946", // Custom button color
      showClass: {
          popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
          popup: "animate__animated animate__fadeOutUp"
      },
      preConfirm: (password) => {
          if (password.toLowerCase() === "india") {
              return true; // Password is correct
          } else {
              Swal.showValidationMessage("Incorrect password! Please try again.");
              return false; // Password is incorrect
          }
      }
  }).then((result) => {
      if (result.isConfirmed) {
          // Redirect to index.html if the password is correct
          window.location.href = "./redirect/index.html";
      }
  });
});
window.onload = function() {


    // Initialize Typed.js for typing effect
    var optionsTitle = {
      strings: ["Hint..💡", "The secrets are hidden in College"],
      typeSpeed: 100, // Speed of typing
      backSpeed: 50,  // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      loop: true // Loops the typing effect
  };
      
  var typedTitle = new Typed("#typedTitle", optionsTitle);


  document.querySelector("#college").addEventListener("click", ()=> {
    window.location.href = "../redirect/index2.html"; // Corrected navigation
  });
                
}        
        
var renderer, scene, camera, group;
var mouseX = 0;
var mouseY = 0;

var skull, leftEye, rightEye;
var textMesh;
var pointLights = [];

init();
animate();

var raycaster = new THREE.Raycaster();
// Initialize raycaster and mouse
var mouse = new THREE.Vector2();

// Add click event listener
document.addEventListener('click', onDocumentClick, false);

function onDocumentClick(event) {
    event.preventDefault();

    // Ensure necessary variables are initialized
    if (!mouse || !raycaster || !camera || !leftEye || !rightEye) {
        console.error("Required variables (mouse, raycaster, camera, or eye objects) are not initialized.");
        return;
    }

    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update raycaster with camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with both eyes
    const intersects = raycaster.intersectObjects([leftEye, rightEye]);

    if (intersects.length > 0) {
        Swal.fire({
            title: "Enter Flag 1",
            input: "text",
            inputPlaceholder: "Enter the password",
            inputAttributes: {
                autocapitalize: "off"
            },
            icon: "question",
            confirmButtonText: "Submit",
            background: "#1d3557", // Dark blue background
            color: "#f1faee", // Light text
            confirmButtonColor: "#e63946", // Custom button color
            showClass: {
                popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp"
            },
            preConfirm: (password) => {
                if (password.toLowerCase() === "america") {
                    return true; // Password is correct
                } else {
                    Swal.showValidationMessage("Incorrect flag! Please try again.");
                    return false; // Password is incorrect
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Show flag if the password is correct
                Swal.fire({
                    title: "Flag 2",
                    html: `
                        <p style="margin-bottom: 10px; color: #f1faee;">Next hint: Hacking is type of crime</p>
                        <img src="https://flagcdn.com/w320/in.png" alt="India Flag" 
                             style="width: 100px; height: auto; margin-bottom: 10px;">
                    `,
                    icon: "info",
                    confirmButtonText: "Got it!",
                    background: "#1d3557", // Dark blue background
                    color: "#f1faee", // Light text
                    confirmButtonColor: "#e63946", // Custom button color
                    showClass: {
                        popup: "animate__animated animate__fadeInDown"
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp"
                    }
                });
            }
        });
    }
}

   

function init() {
// renderer
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);
          
  // camera
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, .1, 10000);
  camera.position.set(0, 0, 60);
  camera.zoom = 2;
  camera.updateProjectionMatrix();
                
  // scene
  scene = new THREE.Scene();
  scene.updateMatrixWorld();
        
  // lights
  var light = new THREE.SpotLight( 16726440, .5 );
  light.angle = 0.50;
  light.decay = 1;
  light.position.set( -50.56, -21.69, 50.41 );
  scene.add( light );
          
      // var sphereSize = 10;
      // var spotLightHelper = new THREE.SpotLightHelper( light, sphereSize );
      //scene.add( spotLightHelper );
        
  var pointLight = new THREE.PointLight( 216285, 3.1 );
  pointLight.decay = 1;
  pointLight.position.set( -2.37, -18.15, 20.48 );
  scene.add( pointLight );
          
            //  var sphereSize = 1;
            //  var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
            //  scene.add( pointLightHelper );
          
  var sphere = new THREE.SphereGeometry( 0.1, 16, 8 );
  for (var i = 0; i <= 8; i++) {
    light = new THREE.PointLight( 16726440, .8, 10 );
    light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 16726440 } ) ) );
            
    scene.add( light );
    pointLights.push(light);
  }
          
        
        
          // grid helper
  var size = 100;
  var divisions = 10;
  var gridHelper = new THREE.GridHelper( size, divisions );
  //scene.add( gridHelper );
        
  // load meshes
  var loader = new THREE.JSONLoader(); 
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/skull.json', generateSkull );
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/eyes.json', generateLeftEye );
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/eyes.json', generateRightEye );
            
            // create group 
  group = new THREE.Group();
  group.position.x = 2;
  scene.add( group );
        
          // window resize
  window.addEventListener( 'resize', onWindowResize, false );
        
          // mouse move
  document.addEventListener('mousemove', onMouseMove, false);
        
            // load text
    generateText();
        
};
        
        // generate text
        function generateText(){
          var loader = new THREE.FontLoader();
          loader.load( 'https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/scripts/optimer_regular.typeface.json', function ( font ) {
        
          var textGeometry = new THREE.TextGeometry( "It's alive !", {
              font: font,
              size: 7.5,
              height: 3,
              curveSegments: 20
            });
        
          var textMaterial = new THREE.MeshPhongMaterial( 
              { color: 16726440, specular: 0xffffff }
          );
        
          var mesh = new THREE.Mesh( textGeometry, textMaterial );
          mesh.scale.z =mesh.scale.y=mesh.scale.x=.3;
          mesh.position.y = -10;
          mesh.position.x = -6;
          mesh.rotation.y = .3;
            
          scene.add( mesh );
          });
        
        }; 
        
        // generate skull 
        function generateSkull(geometry, material){
          geometry.computeVertexNormals();
        
          skull = new THREE.Mesh(geometry, material);
          skull.scale.y = skull.scale.z = skull.scale.x = 8.37;
        
          group.add( skull );
        }; 
        
        // generate eye 
        function generateLeftEye(geometry, material){
          geometry.computeVertexNormals();
          geometry.center();
          
          leftEye = new THREE.Mesh(geometry, material);
          leftEye.scale.y = leftEye.scale.z = leftEye.scale.x = 8.5;
          leftEye.position.set(-4.5,1.7,4.3);
          leftEye.material.forEach(material => material.shininess = 40);
          
          // var box = new THREE.BoxHelper( eye, 0xffff00 );
          // scene.add( box );
        
          group.add( leftEye );
        };
        
        // generate eye 
        function generateRightEye(geometry, material){
          geometry.computeVertexNormals();
          geometry.center();
          
          rightEye = new THREE.Mesh(geometry, material);
          rightEye.scale.y = rightEye.scale.z = rightEye.scale.x = 8.5;
          rightEye.position.set(0,1.7,4.3);
          rightEye.material.forEach(material => material.shininess = 40);
          
          // var box = new THREE.BoxHelper( eye, 0xffff00 );
          // scene.add( box );
        
          group.add( rightEye );
        }; 
        
        // Follows the mouse event
        function onMouseMove(event) {
          event.preventDefault();
          
          mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
        };
        
        // on resize
        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
        }
        
        // render
        function render() {
            renderer.render( scene, camera );
        };
        
        // animate
        function animate(event) {
          
          requestAnimationFrame( animate );
        
          if (group) {
            group.rotation.y = mouseX * .15;
            group.rotation.x = mouseY * -.15;
          }
        
          if (rightEye && leftEye) {
            leftEye.rotation.y = rightEye.rotation.y = mouseX * .50;
            leftEye.rotation.x = rightEye.rotation.x = mouseY * -.50;
          } 
        
            var time = Date.now() * 0.0008 ;
          pointLights[0].position.x = Math.sin( time * 0.3  ) * 15;
          pointLights[0].position.y = Math.sin( time * 0.5  ) * 10;
          pointLights[0].position.z = Math.cos( time * 0.4  ) * 10;
        
            
          pointLights[1].position.x = Math.sin( time * 0.6  ) * 10;
          pointLights[1].position.y = Math.cos( time * 0.7 ) * 10;
          pointLights[1].position.z = Math.sin( time * 0.3 ) * 15;
        
          pointLights[2].position.x = Math.cos( time * 0.5  ) * 15;
          pointLights[2].position.y = Math.cos( time * 0.6 ) * 10;
          pointLights[2].position.z = Math.sin( time * 0.8 ) * 10;
        
          pointLights[3].position.x = Math.sin( time * 0.3  ) * 10;
          pointLights[3].position.y = Math.cos( time * 0.5 ) * 15;
          pointLights[3].position.z = Math.cos( time * 0.7 ) * 10;
        
          pointLights[4].position.x = Math.sin( time * 0.7  ) * 15;
          pointLights[4].position.y = Math.sin( time * 0.3 ) * 20;
          pointLights[4].position.z = Math.cos( time * 0.2 ) * 10;
        
          pointLights[5].position.x = Math.sin( time * 0.5  ) * 20;
          pointLights[5].position.y = Math.cos( time * 0.8 ) * 10;
          pointLights[5].position.z = Math.sin( time * 0.5 ) * 15;
        
          pointLights[6].position.x = Math.sin( time * 0.5  ) * 10;
          pointLights[6].position.y = Math.cos( time * 0.8 ) * 10;
          pointLights[6].position.z = Math.cos( time * 0.7 ) * 15;
        
          pointLights[7].position.x = Math.sin( time * 0.3  ) * 10;
          pointLights[7].position.y = Math.cos( time * 0.5 ) * 15;
          pointLights[7].position.z = Math.sin( time * 0.2 ) * 10;
        
          pointLights[8].position.x = Math.sin( time * 0.8  ) * 15;
          pointLights[8].position.y = Math.cos( time * 0.3 ) * 10;
          pointLights[8].position.z = Math.cos( time * 0.3 ) * 10;
                
          render();
        };
      