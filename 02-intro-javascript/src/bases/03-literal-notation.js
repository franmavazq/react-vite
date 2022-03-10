const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 1000,
    lat: 14.324568,
    lng: -34.0987654,
  }
}

const persona2 = { ...persona };
persona2.nombre = 'Peter';

// console.table(persona);
console.log(persona);
console.log(persona2);