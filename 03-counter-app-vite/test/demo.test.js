describe("Pruebas en Component", () => {
  test("should first", () => {
    //  Arrange
    const message1 = "Hello word";
    // Act
    const message2 = message1.trim();
    // Assert
    expect(message1).toBe(message2);
  });
});
