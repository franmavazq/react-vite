const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
};
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;
export const getUser = () => ({
	uid: 'ABC1234',
	username: 'Elvago432',
});
// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
export const getUsuarioActivo = (nombre) => ({
	uid: 'AVE87',
	username: nombre,
});
