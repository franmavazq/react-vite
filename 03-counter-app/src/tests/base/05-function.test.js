import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-function';

describe('Pruebas en 05-function.test.js', () => {
	test('getUser debe de retornar un objeto', () => {
		const userTest = {
			uid: 'ABC1234',
			username: 'Elvago432',
		};
		const user = getUser();
		expect(user).toEqual(userTest);
	});
	test('getUsuarioActivo debe de retornar un objeto', () => {
		const nombre = 'Elvago432';
		const user = getUsuarioActivo(nombre);
		expect(user).toEqual({
			uid: 'AVE87',
			username: nombre,
		});
	});
});
