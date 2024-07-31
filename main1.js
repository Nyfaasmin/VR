// Initialize panorama instances
const panoramaImages = [
    "images/Main_Gate.jpg",
    "images/After_MainGate.jpg",
    "images/Main_Gate2.jpg",
    "images/TS.jpg",
    "images/After TS.jpg",
    "images/Temple.jpg",
    "images/After_temple.jpg",
    "images/Mess.jpg",
    "images/Memorial_Start.jpg",
    "images/Museum 1.jpg",
    "images/Museum 2.jpg",
    "images/TeluguTalli.jpg",
    "images/Before_dblock.jpg",
    "images/Dblock_Start.jpg",
    "images/Dblock.jpg",
    "images/After_Dblock.jpg",
    "images/After_Dblock2.jpg",
    "images/Yummyhut.jpg",
    "images/Ablock.jpg",
    "images/Bblock.jpg",
    "images/Way_to_audi.jpg",
    "images/Openaudi.jpg",
    "images/Cblock.jpg",
    "images/Library.jpg",
    "images/Jewel 1.jpg",
    "images/Jewel 2.jpg",
    "images/Yoga.jpg",
    "images/Sita audi.jpg"
  ];
  
  // Create panorama objects
  const panoramas = panoramaImages.map(src => new PANOLENS.ImagePanorama(src));
  
  // Define hotspots for each panorama
  const hotspots = [
    { sourceIndex: 0, targetIndex: 1, position: { x: 7000, y: 1000, z: -3000 } },
    { sourceIndex: 1, targetIndex: 0, position: { x: -4000, y: 500, z: 2000 } },
    { sourceIndex: 1, targetIndex: 2, position: { x: 6000, y: 1500, z: -3500 } },
    { sourceIndex: 2, targetIndex: 1, position: { x: -3000, y: 700, z: 2500 } },
    { sourceIndex: 2, targetIndex: 3, position: { x: 7000, y: 1000, z: -4000 } },
    { sourceIndex: 3, targetIndex: 2, position: { x: -5000, y: 800, z: 3000 } },
    { sourceIndex: 3, targetIndex: 4, position: { x: 8000, y: 1200, z: -4500 } },
    { sourceIndex: 4, targetIndex: 3, position: { x: -6000, y: 600, z: 3500 } },
    { sourceIndex: 4, targetIndex: 5, position: { x: 9000, y: 1300, z: -5000 } },
    { sourceIndex: 5, targetIndex: 4, position: { x: -7000, y: 500, z: 4000 } },
    { sourceIndex: 5, targetIndex: 6, position: { x: 10000, y: 1500, z: -5500 } },
    { sourceIndex: 6, targetIndex: 5, position: { x: -8000, y: 700, z: 4500 } },
    { sourceIndex: 6, targetIndex: 7, position: { x: 11000, y: 1600, z: -6000 } },
    { sourceIndex: 7, targetIndex: 6, position: { x: -9000, y: 500, z: 5000 } },
    { sourceIndex: 7, targetIndex: 8, position: { x: 12000, y: 1500, z: -6500 } },
    { sourceIndex: 8, targetIndex: 7, position: { x: -10000, y: 600, z: 5500 } },
    { sourceIndex: 8, targetIndex: 9, position: { x: 13000, y: 1200, z: -7000 } },
    { sourceIndex: 9, targetIndex: 8, position: { x: -11000, y: 500, z: 6000 } },
    { sourceIndex: 9, targetIndex: 10, position: { x: 14000, y: 1000, z: -7500 } },
    { sourceIndex: 10, targetIndex: 9, position: { x: -12000, y: 500, z: 6500 } },
    { sourceIndex: 10, targetIndex: 11, position: { x: 15000, y: 900, z: -8000 } },
    { sourceIndex: 11, targetIndex: 10, position: { x: -13000, y: 600, z: 7000 } },
    { sourceIndex: 11, targetIndex: 12, position: { x: 16000, y: 1000, z: -8500 } },
    { sourceIndex: 12, targetIndex: 11, position: { x: -14000, y: 500, z: 7500 } },
    { sourceIndex: 12, targetIndex: 13, position: { x: 17000, y: 1100, z: -9000 } },
    { sourceIndex: 13, targetIndex: 12, position: { x: -15000, y: 700, z: 8000 } },
    { sourceIndex: 13, targetIndex: 14, position: { x: 18000, y: 1200, z: -9500 } },
    { sourceIndex: 14, targetIndex: 13, position: { x: -16000, y: 500, z: 8500 } },
    { sourceIndex: 14, targetIndex: 15, position: { x: 19000, y: 900, z: -10000 } },
    { sourceIndex: 15, targetIndex: 14, position: { x: -17000, y: 800, z: 9000 } },
    { sourceIndex: 15, targetIndex: 16, position: { x: 20000, y: 1000, z: -10500 } },
    { sourceIndex: 16, targetIndex: 15, position: { x: -18000, y: 600, z: 9500 } },
    { sourceIndex: 16, targetIndex: 17, position: { x: 21000, y: 1100, z: -11000 } },
    { sourceIndex: 17, targetIndex: 16, position: { x: -19000, y: 700, z: 10000 } },
    { sourceIndex: 17, targetIndex: 18, position: { x: 22000, y: 1200, z: -11500 } },
    { sourceIndex: 18, targetIndex: 17, position: { x: -20000, y: 500, z: 10500 } },
    { sourceIndex: 18, targetIndex: 19, position: { x: 23000, y: 1300, z: -12000 } },
    { sourceIndex: 19, targetIndex: 18, position: { x: -21000, y: 600, z: 11000 } },
    { sourceIndex: 19, targetIndex: 20, position: { x: 24000, y: 1000, z: -12500 } },
    { sourceIndex: 20, targetIndex: 19, position: { x: -22000, y: 500, z: 11500 } },
    { sourceIndex: 20, targetIndex: 21, position: { x: 25000, y: 1100, z: -13000 } },
    { sourceIndex: 21, targetIndex: 20, position: { x: -23000, y: 600, z: 12000 } },
    { sourceIndex: 21, targetIndex: 22, position: { x: 26000, y: 1200, z: -13500 } },
    { sourceIndex: 22, targetIndex: 21, position: { x: -24000, y: 500, z: 12500 } },
    { sourceIndex: 22, targetIndex: 23, position: { x: 27000, y: 1300, z: -14000 } },
    { sourceIndex: 23, targetIndex: 22, position: { x: -25000, y: 500, z: 13000 } },
    { sourceIndex: 23, targetIndex: 24, position: { x: 28000, y: 1000, z: -14500 } },
    { sourceIndex: 24, targetIndex: 23, position: { x: -26000, y: 700, z: 13500 } },
    { sourceIndex: 24, targetIndex: 25, position: { x: 29000, y: 1100, z: -15000 } },
    { sourceIndex: 25, targetIndex: 24, position: { x: -27000, y: 600, z: 14000 } },
    { sourceIndex: 25, targetIndex: 26, position: { x: 30000, y: 1200, z: -15500 } },
    { sourceIndex: 26, targetIndex: 25, position: { x: -28000, y: 500, z: 14500 } },
    { sourceIndex: 26, targetIndex: 27, position: { x: 31000, y: 1000, z: -16000 } },
    { sourceIndex: 27, targetIndex: 26, position: { x: -29000, y: 600, z: 15000 } }
    // Add more hotspots as needed for other panoramas
  ];
  
  // Initialize Panolens viewer
  const imageContainer = document.querySelector(".image-container");
  const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false,
  });
  
  // Function to create and add hotspots
  function createHotspots(panorama, hotspots) {
    hotspots.forEach(hotspot => {
      const infospot = new PANOLENS.Infospot(500, 'images/pointer.jpg'); // Replace with your hotspot icon
      infospot.position.set(hotspot.position.x, hotspot.position.y, hotspot.position.z);
      infospot.addEventListener("click", function () {
        viewer.setPanorama(panoramas[hotspot.targetIndex]);
      });
      panorama.add(infospot);
    });
  }
  
  // Add panoramas and hotspots to viewer
  panoramas.forEach((panorama, index) => {
    createHotspots(panorama, hotspots.filter(h => h.sourceIndex === index));
    viewer.add(panorama);
  });
  
  // Set initial panorama
  viewer.setPanorama(panoramas[0]);
  
  // Ensure infospots face the camera
  viewer.addUpdateCallback(function () {
    const camera = viewer.getCamera();
    panoramas.forEach(panorama => {
      panorama.children.forEach(child => {
        if (child instanceof PANOLENS.Infospot) {
          child.lookAt(camera.position);
        }
      });
    });
  });
  
