function changeImage() {
    const image = document.getElementById("image");

    const url = prompt("Enter your image URL:");
    const borderColor = prompt("Enter your border color:");
    const width = prompt("Enter your image width in pixels:");
    const height = prompt("Enter your image height in pixels:");
    const borderRadius = prompt("Enter your border radius in pixels:");

    image.src = url;

    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
}