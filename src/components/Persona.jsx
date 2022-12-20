import React from "react";

const Persona = ({ name, age }) => {
  return (
    <div>
      <p>{name}</p>

      {age < 18 ? (
        <p>Lo sentimos, no tiene edad legal para beber alcohol</p>
      ) : (
        <p>Bienvenido. Lo invitamos a tomar una cerveza</p>
      )}
    </div>
  );
  //   if (age < 18) {
  //     return (
  //       <>
  //         <p>{name}</p>
  //         <p>Lo sentimos, no tiene edad legal para beber alcohol</p>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <p>{name}</p>
  //         <p>Bienvenido. Lo invitamos a tomar una cerveza</p>
  //       </>
  //     );
  //   }
};

export default Persona;
