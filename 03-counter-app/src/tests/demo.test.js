describe('Pruebas en el archivo demo.test.js', () => {
	test('Deben de ser iguales los strings', () => {
		// 1. inicializacion de variables
		const mensaje = 'Hola';
		// 2. ejecucion de la funcion
		const mensaje2 = `Hola`;
		// 3. comprobacion de que los valores sean iguales
		expect(mensaje).toBe(mensaje2);
	});
});
