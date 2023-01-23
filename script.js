function handleSubmit() {
    const loadImage = document.getElementById('load-image')
    const data = document.getElementById('url')
    const image = document.createElement('img')

    image.src = data.value
    loadImage.appendChild(image)
}