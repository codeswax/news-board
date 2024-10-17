# Proyecto - Sitio de Noticias

Prueba técnica para puesto de PASANTE, desarrollada usando dos tecnologías: **React** y **Vite**.

# Descripción

Desarrollar una aplicación front-end que consuma el API de noticias News API y muestre la información de manera dinámica. Tecnología a evaluar React de preferencia.

## Requerimientos

- Listado de Noticias: Mostrar 10 noticias a la vez en la interfaz. ✔️
- Cargar más Noticias al Desplazar: Cuando el usuario se desplace hacia el final del listado, se deben cargar 10 noticias más de manera dinámica. ✔️
- Filtro por Tópico: Incluir un filtro para que el usuario pueda escrbir una temática específica (por ejemplo: tecnología, deporte, política) y que se muestren solo las noticias relacionadas. ✔️
- Selector de Idioma: Proveer un select para elegir el idioma de las noticias (o una opción para todos los idiomas). ✔️
- Visualizacion noticia: Proveer a traves de un click en la lista de noticias, el detalle completo de la noticia en un panel o ventana individual ✔️

# Ejecución
Una vez clonado en repositorio, ingresa a la carpeta news-board.

En el editor de código de preferencia abrir el proyecto y ejecutar en el terminal los siguientes comandos:

    npm install
    npm run dev

> Se instalarán las dependencias necesarias y se ejecutará el sitio en localhost.

## Adicional

NewsAPI tiene un número limitado de peticiones al día con el plan FREE. En caso de que no muestre las noticias, cambiar el API Key por otro en el archivo .env:

![image](https://github.com/user-attachments/assets/f2b1a2bd-d68c-4d24-b755-e76d726e1bd1)
