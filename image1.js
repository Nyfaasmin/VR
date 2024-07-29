function sayHello(path, pathf, pathr, pathl, pathb) {
    const panoramaImage = new PANOLENS.ImagePanorama(path);
    const panoramaImage1 = new PANOLENS.ImagePanorama(pathf);
    const panoramaImage2 = new PANOLENS.ImagePanorama(pathr);
    const panoramaImage3 = new PANOLENS.ImagePanorama(pathl);
    const panoramaImage4 = new PANOLENS.ImagePanorama(pathb);

    const imageContainer = document.querySelector(".image-container");

    if (!imageContainer) {
        console.error("Image container not found");
        return;
    }

    // Clean up any existing viewers to prevent conflicts
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    // Hide the header
    if (header) {
        header.style.display = "none";
    }

    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 1,
        controlBar: false,
    });

    viewer.add(panoramaImage);
    viewer.add(panoramaImage1);
    viewer.add(panoramaImage2);
    viewer.add(panoramaImage3);
    viewer.add(panoramaImage4);

    const infospot1 = new PANOLENS.Infospot(1000, 'images/pointer.png');
    infospot1.position.set(10000, 0, -5000);
    infospot1.addEventListener("click", function () {
        viewer.
    });

    const infospot2 = new PANOLENS.Infospot(1000, 'images/pointer.png');
    infospot2.position.set(10000, 200, -5000);
    infospot2.addEventListener("click", function () {
        viewer.setPanorama(panoramaImage2);
    });

    const infospot3 = new PANOLENS.Infospot(1000, 'images/pointer.png');
    infospot3.position.set(10000, 400, -5000);
    infospot3.addEventListener("click", function () {
        viewer.setPanorama(panoramaImage3);
    });

    const infospot4 = new PANOLENS.Infospot(1000, 'images/pointer.png');
    infospot4.position.set(10000, 600, -5000);
    infospot4.addEventListener("click", function () {
        viewer.setPanorama(panoramaImage4);
    });

    panoramaImage.add(infospot1);
    panoramaImage.add(infospot2);
    panoramaImage.add(infospot3);
    panoramaImage.add(infospot4);

    viewer.addUpdateCallback(function () {
        const camera = viewer.getCamera();
        infospot1.lookAt(camera.position);
        infospot1.visible = true;
        infospot2.lookAt(camera.position);
        infospot2.visible = true;
        infospot3.lookAt(camera.position);
        infospot3.visible = true;
        infospot4.lookAt(camera.position);
        infospot4.visible = true;
    });
}
