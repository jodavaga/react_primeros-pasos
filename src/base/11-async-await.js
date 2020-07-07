const apiKey = 'd50nWkDCfjhEfVgJIE9WYClyFqqYuGkZ';

// Promise way

// const getRandomGif = () => {
//     return new Promise((resolve, rejected) => {
//       resolve(fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`));
//     });
// }

// getRandomGif()
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;

//         const imgTag = document.createElement('img');
//         imgTag.src = url;

//         document.body.append(imgTag);

// });


// Aync/Await

export const getRandomGif = async () => {

    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;   

        return url;
    
        // const imgTag = document.createElement('img');
        // imgTag.src = url;
    
        // document.body.append(imgTag);
    } catch (e) {
        // console.error(e);
        return 'No existe';
    }
}

// getRandomGif();
