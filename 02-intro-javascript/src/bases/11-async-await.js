// Async - Await

// const getImagenPromesa = () => new Promise(resolve => resolve('https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'));
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  try {
    const apiKey = 'p3mxL2aCbKXdx9YI2nWHF6LrbHhEQohg';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');

    img.src = url;
    document.body.append( img );
  } catch ( err ) {
    console.error( err );
  }
  
}
getImagen();
// peticion
//   .then( resp => resp.json() )
//   .then( ( { data } ) => {
//     // console.log( data.images.original.url );
//     const { url } = data.images.original;
//     const img = document.createElement('img');
    
//     img.src = url;
//     document.body.append( img );
//   })
//   .catch( console.warn );