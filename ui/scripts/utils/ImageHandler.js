class ImageHandler {
  static handle(fileElement, imgElement) {
    this.fileElement = fileElement;
    this.imgElement = imgElement;

    const reader = new FileReader();
    reader.onloadend = () => {
      this.imgElement.src = reader.result;
    };

    fileElement.addEventListener('change', () => {
      const img = fileElement.files[0];
      if (img && img.type.match('image.*')) {
        reader.readAsDataURL(img);
      }
    });
  }
}

export default ImageHandler;
