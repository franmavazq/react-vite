// Desestructuracion de arreglos
// Asignacion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes; // Retorna Trunks
export const retornaArreglo = () => {
	return ['ABC', 123];
};
// const [letras, numeros] = retornaArreglo();
// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. Se llamara setNombre
const usState = (valor) => {
	return [
		valor,
		() => {
			console.log('Hola Mundo');
		},
	];
};
