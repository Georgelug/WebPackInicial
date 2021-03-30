import '../css/componentes.css';

// export indica que toda la funcion va poderse acceder desde otro modulo
export const saludar = (nombre) => {

    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

}