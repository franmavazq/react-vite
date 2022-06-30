const getResult = () => {
  return "Hola mundo";
};
export const FirstApp = () => {
  return (
    <>
      <h1>{getResult()}</h1>
      {/*<code>{JSON.stringify(}</code >*/}
      <p>Párrafo</p>
    </>
  );
};
