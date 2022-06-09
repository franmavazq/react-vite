// Template string ``

const nombre = 'Francisco';
const apellido = 'Mancuello';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

// No llama nombre por ser un scope diferente
export function getSaludo(nombre = 'Carlos') {
	return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto en template string: ${getSaludo(nombre)}`);
