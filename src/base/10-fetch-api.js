const apiKey = 'd50nWkDCfjhEfVgJIE9WYClyFqqYuGkZ';

// Promises
const gifCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

gifCall
    .then((resp) => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;

        const imgTag = document.createElement('img');
        imgTag.src = url;

        document.body.append(imgTag);
    })
    .catch( console.error )