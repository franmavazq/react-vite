import { getSaludo } from "../../src/base-pruebas/02-template-string.js";
describe("Pruebas en en 02-template-string", () => {
  test("Debe de regresar un string", () => {
    const name = "Juan";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}!`);
  });
});
