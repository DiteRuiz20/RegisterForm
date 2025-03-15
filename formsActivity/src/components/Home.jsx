import React from 'react'

export default function Home() {
  const registeredUser = JSON.parse(localStorage.getItem('registeredUser')) || {};
  
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <h2>Your Data</h2>
      <p><b>Name:</b> {registeredUser.name}</p>
      <p><b>Last Name:</b> {registeredUser.lastName}</p>
      <p><b >Age:</b> {registeredUser.age}</p>
      <p><b>Phone:</b> {registeredUser.phone}</p>
      <p><b>Password:</b> {registeredUser.password}</p>
    </div>
  );
}