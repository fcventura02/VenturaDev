/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

export default function Projects() {
  return (
    <>
      <div>
        <img src="https://i.imgur.com/zHGvk1q.png" />
      </div>
      <article>
        <h2>DS Delivery</h2>
        <p>Projeto realizado na Semana DevSuperior. </p>
        <p>
          O projeto consiste em um sistema de registro e entrega de pedidos.
          Utilizamos Java com Spring Boot, e implantação no Heroku.
        </p>
        <h2>Tecnologias</h2>
        <p>Spring, React, Typescript</p>
        <a target="_blank" rel="noreferrer" href="https://dsdelivery.tk/">
          Visitar
        </a>
      </article>
    </>
  );
}
