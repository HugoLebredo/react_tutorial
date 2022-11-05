# Ejercicio 4 
Este ejercicio me parece muy didactico, si lo entendemos habremos asimilado los conceptos básicos del ciclo de vida de un componente de ReactJS. Bien por tí 👍

Vamos a introducir un poco de lógica y ampliar el comportamiento de nuestro estado para que cumpla los siguientes objetivos:

1. Resetear el estado pulsando el botón "Reset Contadores"
2. Añadiremos un nuevo atributo al estado llamado `traza` en el que se almacenará el orden en el que pulsemos cada uno de los botones que incremetan los contadores. Es decir, `traza` es un array. El estado ahora posee esta forma:

```javascript
{
    left: 0, 
    right: 0,
    total: 0,
    traza:[]
}
```

Para esto necesitamos trabajar con un array. Trabajar con arrays al igual que con objetos en RectJS tienen la particularidad de que el estado **no es mutable** y eso significa que tendremos de utilizar el *spread operator * (`...`) y reconstruir el array cada vez que queramos actualizar el estado del componente. Podemos ver como se hace esto en las funciones que manejan el estado (`handleClickLeft` y `handleClickRight`), concretamente en las siguientes líneas:

```javascript
traza: [...clicks.traza, "⬅️"]
traza: [...clicks.traza, "➡️"]
```
Recapitulando. Lo que tenemos que hacer con `traza` es lo siguiente:

- Si pulsamos el botón correspondiente al contador derecho al array se le añadirá el emoji ➡️.
- Si pulsamos el botón correspondiente al contador izquierdo al array se le añadirá el emoji ⬅️.
- Si pulsamos el botón "Reset Contadores" el array debe vaciarse.

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio4)