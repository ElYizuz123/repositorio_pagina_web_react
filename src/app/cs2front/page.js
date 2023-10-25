// Importar bibliotecas o módulos necesarios
import React from 'react';
import ReactDOM from 'react-dom';

// Definir componentes React para la página
function Header() {
  return (
    <header>
      <h1>Mi Página Educativa</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Lecciones</a></li>
          <li><a href="#">Recursos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <section>
        <h2>Bienvenido a Mi Página Educativa</h2>
        <p>Esta es una página educativa de ejemplo.</p>
      </section>
      <section>
        <h2>Lecciones</h2>
        <p>Descubre nuestras lecciones educativas aquí.</p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Mi Página Educativa</p>
    </footer>
  );
}

// Renderizar componentes en el DOM
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <MainContent />,
  document.getElementById('main')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);