window.onload = function() {
    let covers = [
        'cover1.jpg',
        'cover2.png',
        'cover3.jpg',
    ]
    let i = Math.floor(Math.random() * covers.length)

    document.getElementById('bg-img').src = 'res/covers/' + covers[i]
    document.getElementById('coverimg').src = 'res/covers/' + covers[i]
}