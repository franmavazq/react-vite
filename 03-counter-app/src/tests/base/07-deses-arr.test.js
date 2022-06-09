import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr.test.js', () => {
	test('retornaArreglo dede retornar un string y arr', () => {
		const [letras, numeros] = retornaArreglo(); // ['ABC', 123]
		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');
		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});
