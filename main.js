const panoramaImage = new PANOLENS.ImagePanorama("images/Main_Gate.jpg");
const panoramaImage1 = new PANOLENS.ImagePanorama("images/After_MainGate.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 1,
  controlBar: false,
});

viewer.add(panoramaImage);
viewer.add(panoramaImage1);

const infospot1 = new PANOLENS.Infospot(1000,'images/pointer.png');
infospot1.position.set(10000,0, -5000);

infospot1.addEventListener("click", function () {
  viewer.setPanorama(panoramaImage1);
});

panoramaImage.add(infospot1);
viewer.addUpdateCallback(function () {
  const camera = viewer.getCamera();
  infospot1.lookAt(camera.position);
  infospot1.visible = true;
 
});
