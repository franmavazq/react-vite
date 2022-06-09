import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string.js';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
	test('getSaludo debe retornar Hola Francisco!', () => {
		const nombre = 'Francisco';
		const saludo = getSaludo(nombre);
		expect(saludo).toBe('Hola ' + nombre + '!');
	});
	// getSaludo debe retornar Hola Carlos! si no hay argumento nombre
	test('getSaludo debe retornar Hola Carlos! si no hay argumento nombre', () => {
		const saludo = getSaludo();
		expect(saludo).toBe('Hola Carlos!');
	});
});
