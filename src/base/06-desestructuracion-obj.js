// Desestructuracion
// Asignacion desestructurante

const persona = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    key: 'Ironman'
};

// const {name: nombre, lastname} = persona;

// console.log(nombre);
// console.log(lastname);

const useContext = ({key, name, age: edad, rango = 'Capitan'}) => {
    // console.log(name, edad, rango);
    return {
        nombreClave: key,
        anios: edad,
        latLng: {
            lat: 25.244,
            lng: -13.2355
        }
    }
}

// const avenger = useContext(persona);
const { nombreClave, anios, latLng: {lat, lng} } = useContext(persona);

console.log(nombreClave, anios, lat, lng);