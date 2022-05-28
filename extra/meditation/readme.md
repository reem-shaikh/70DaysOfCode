> Space simulation
```bash
<body>
    <!-- importing three.js library -->
    <script src="three.min.js"></script>

    <script>
    #creating a sphere shaped star particle is expensive and can make our website slower, so we'll create a 3D object with alot of vertices - point objects 

    #technically we'll be using point objects for dealing with creating star particles  - starGeo

    let scene, camera, renderer, starGeo, stars;

    # To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.

    function init(){
        # create a scene object 
        # Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects (star particles), lights and cameras.
        scene = new THREE.Scene()

        # create a perspective camera with 60 deg viewing angle and 1000 viewing customs
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

        # place the camera and rotate it 90 deg outword into the sky - basically camera is set facing upwords
        camera.position.z = 1; 
        camera.rotation.x = Math.PI/2

        # setup a webGLR renderer 
        # The WebGL renderer displays your scenes using WebGL. Constructor.
        renderer = new THREE.WebGLRenderer();

        # set the size to match the current viewport of your window 
        renderer.setSize(window.innerWidth, window.innerHeight)

        # append to renderer to DOM as canvas element 
        document.body.appendChild(renderer.domElement)

        # creating a geometry 
        # Geometries are used to create and define shapes in Three.js. 
        starGeo = new THREE.Geometry();

        # creating 6000 stars 
        for(let i=0; i<6000; i++){
            star = new THREE.Vector3(
                Math.random() * 600 - 300, 
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            #setting movement of the star on our canvas 
            #set initial velocity of each star to 0 and accelration to 0.02
            star.velocity = 0;
            star.acceleration = 0.02;

            # push the star particles generated to the instance of Geometry
            starGeo.vertices.push(star);
        }

        # use textureloader to load the star image
        let sprite = new THREE.TextureLoader().load('star.png');

        # create a points material - deciding where to place the star particle.

        # The constructor of THREE.Points takes two properties: a geometry and a material. The material is used to color and texture the particles , and the geometry defines where the individual particles are positioned.
        let starMaterial = new THREE.PointsMaterial({
            # set the color to white 
            color: 0xaaaaa,
            # adjust the size 
            size: 0.7, 
            # map it to the loader image 
            # position the star image
            map: sprite
        });

        # Create point object and add it to the scene 
        stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars)


        animate()
    }

    
    # create a rendering loop by creating a function to render our scene 
    function animate(){
        #on each animation frame, ook through each vertex and update velocity 
        starGeo.vertices.forEach(p=> {
            p.velocity += p.acceleration;
            # move stars in y axis with velocity amount 
            p.y -= p.velocity;

            #if stars fall behind the screen 
            # set posiiton and velocity of star over again 
            if(p.y <-200){
                p.y = 200;
                p.velocity=0;
            }
        })

        #update new vertices position 
        starGeo.verticesNeedUpdate = true 
        # add rotation to all stars 
        star.rotation.y = 0.002;

        renderer.render(scene, camera)

        # call request animation frame to recursively call itself 
        requestAnimationFrame(animate)
        # requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. 
    }

    init()

    </script>
```