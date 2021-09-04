# Validación de formulario - React Hook Form

Este proyecto fue diseñado para poner en práctica conocimientos de la libreria [React Hook Form](https://react-hook-form.com/).

## Acerca de

El proyecto surgió para satisfacer los requerimientos de un examen final de un curso universitario.

Para la creación de la aplicación se utilizó React por medio de [Create React App](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app).
A su vez, se implementó [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) para manejar la arquitectura de los componentes.

## Build & deploy

Ambas acciones se realizaron por medio de Heroku utilizando el [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack#usage).

## Pendientes

- Mejorar código que consume la API [Ubicaciones de Costa Rica](https://ubicaciones.paginasweb.cr/).
    - Aplicar una validación para la respuesta en caso que cambien la dirección de la API.
    - Mejorar el código para hacerlo más mantenible.
- Implementar el estado con Context API.
    - Esto para enviar la información del formulario hacía la otra página y no enviarla por la URL.