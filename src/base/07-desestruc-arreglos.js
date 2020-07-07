// Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// useState

const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo')}]
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();