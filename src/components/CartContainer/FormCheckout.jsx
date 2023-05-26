import React, { useState } from "react";
import Flex from "../Flex/Flex";

export default function FormCheckout({ onCheckout }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function handleInputChange(evt) {
    const inputText = evt.target.value;
    const inputName = evt.target.name;

    const newUserData = { ...userData };
    newUserData[inputName] = inputText;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    onCheckout(userData);
    if (userData.username.trim() === '' || userData.email.trim() === '' || userData.phone.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  }

  function clearFormData(evt) {
    evt.preventDefault();
    setUserData({
      username: "",
      email: "",
      phone: "",
    });
  }

  return (
    <Flex>
      <h1>Ingresa tus datos para completar la compra</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre</label>
          <input
            value={userData.username}
            name="username"
            type="text"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={userData.email}
            name="email"
            type="email"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            value={userData.phone}
            name="phone"
            type="number"
            required
            onChange={handleInputChange}
          />
        </div>
        <button onClick={onSubmit} type="submit">
          Crear orden
        </button>
        <button onClick={clearFormData}>Cancelar</button>
      </form>
    </Flex>
  );
}
