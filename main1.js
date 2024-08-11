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
    "images/Before_dblock.jpg",//12
    "images/Dblock_Start.jpg",//13
    "images/Dblock.jpg",//14
    "images/After_Dblock.jpg",//15
    "images/After_Dblock2.jpg",//16
    "images/Yummyhut.jpg",//17
    "images/Ablock.jpg",//18
    "images/Bblock.jpg",//19
    "images/Way_to_audi.jpg",//20
    "images/Openaudi.jpg",//21
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
    { sourceIndex: 0, targetIndex: 1, position: { x: 4329.99, y: -594.56, z: 2413.71 } },
    { sourceIndex: 1, targetIndex: 0, position: { x: -4979.34, y: -382.15, z: 107.68 } },
    { sourceIndex: 1, targetIndex: 2, position: { x: 4979.34, y: -382.15, z: 107.68 } },
    { sourceIndex: 2, targetIndex: 1, position: { x: -4949.08, y: -674.01, z: 41.27 } },
    { sourceIndex: 2, targetIndex: 3, position: { x: 4949.08, y: -674.01, z: 41.27 } },
    { sourceIndex: 3, targetIndex: 2, position: { x: -234.93, y: -449.75, z: 4965.47 } },
    { sourceIndex: 3, targetIndex: 4, position: { x: 331.06, y: -338.61, z: -4969.35 } },
    { sourceIndex: 4, targetIndex: 3, position: { x: -6000, y: 600, z: 3500 } },
    { sourceIndex: 4, targetIndex: 5, position: { x: 4968.16, y: -195.53, z: 460.96 } },
    { sourceIndex: 5, targetIndex: 4, position: { x: -7000, y: 500, z: 4000 } },
    { sourceIndex: 5, targetIndex: 6, position: { x: 4961.14, y: -449.67, z: 317.91 } },
    { sourceIndex: 6, targetIndex: 5, position: { x: -8000, y: 700, z: 4500 } },
    { sourceIndex: 6, targetIndex: 7, position: { x: -725.20, y: -561.00, z: 4904.75 } },
    { sourceIndex: 7, targetIndex: 6, position: { x: -9000, y: 500, z: 5000 } },
    { sourceIndex: 7, targetIndex: 8, position: { x: 4985.16, y: -271.05, z: -79.98 } },
    { sourceIndex: 8, targetIndex: 7, position: { x: -10000, y: 600, z: 5500 } },
    { sourceIndex: 8, targetIndex: 9, position: { x: -13.77, y: -1073.64, z: -4879.74 } },
    { sourceIndex: 8, targetIndex: 11, position: { x: 4964.59, y: -492.63, z: -155.04 } },
    { sourceIndex: 9, targetIndex: 8, position: { x: -11000, y: 500, z: 6000 } },
    { sourceIndex: 9, targetIndex: 10, position: { x: 4968.45, y: -411.60, z: 264.29 } },
    { sourceIndex: 10, targetIndex: 9, position: { x: -12000, y: 500, z: 6500 } },
    { sourceIndex: 10, targetIndex: 12, position: { x: 1599.98, y: -600.60, z: 4824.01 } },
    { sourceIndex: 11, targetIndex: 10, position: { x: -13000, y: 600, z: 7000 } },
    { sourceIndex: 11, targetIndex: 13, position: { x: 3015.96, y: 263.22, z: -3968.91 } },
    { sourceIndex: 12, targetIndex: 11, position: { x: -14000, y: 500, z: 7500 } },
    { sourceIndex: 12, targetIndex: 15, position: { x: 4989.22, y: -242.99, z: 23.48 } },
    { sourceIndex: 13, targetIndex: 12, position: { x: 4983.98, y: -357.69, z: 37.60 } },
    { sourceIndex: 13, targetIndex: 12, position: { x: 308.11, y: -276.67, z: 4972.98 } },
    { sourceIndex: 14, targetIndex: 13, position: { x: -16000, y: 500, z: 8500 } },
    { sourceIndex: 14, targetIndex: 15, position: { x: -177.83, y: -338.55, z: 4977.38 } },
    { sourceIndex: 15, targetIndex: 14, position: { x: -17000, y: 800, z: 9000 } },
    { sourceIndex: 15, targetIndex: 16, position: { x: 4974.50, y: -106.02, z: 407.11 } },
    { sourceIndex: 16, targetIndex: 15, position: { x: -18000, y: 600, z: 9500 } },
    { sourceIndex: 16, targetIndex: 17, position: { x: 4971.43, y: 77.83, z: 486.85 } },
    { sourceIndex: 17, targetIndex: 16, position: { x: -19000, y: 700, z: 10000 } },
    { sourceIndex: 17, targetIndex: 18, position: { x: 4785.51, y:555.67, z: -1298.18 } },
    { sourceIndex: 18, targetIndex: 17, position: { x: -20000, y: 500, z: 10500 } },
    { sourceIndex: 18, targetIndex: 19, position: { x: 1016.38, y: -314.08, z: 4929.45 } },
    { sourceIndex: 19, targetIndex: 18, position: { x: -21000, y: 600, z: 11000 } },
    { sourceIndex: 19, targetIndex: 20, position: { x: -4732.82, y: -368.27, z: 1563.29 } },
    { sourceIndex: 20, targetIndex: 19, position: { x: -22000, y: 500, z: 11500 } },
    { sourceIndex: 20, targetIndex: 21, position: { x: -4929.27, y: -700.54, z: -359.31 } },
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
    autoRotateSpeed: 2,
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
  
