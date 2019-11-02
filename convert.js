function convert(obj) {
    return JSON.stringify(obj.data.image.album_images.images.map(v => {
        return 'https://i.imgur.com/' + v.hash + v.ext;
    }))
}
