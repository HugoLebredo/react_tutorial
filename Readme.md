
# Tutorial estado de la aplicación ReactJS

Vamos a hacer unos ejercicios para comprender el funcionamiento del estado de la aplicación en ReactJS. 

- 🌱 En cada rama del repositorio se encuentra el códido de los siguientes ejercicios y puedes ver el ejercicio desplegado clickando en el botón correspondiente.

- 📶 Estos ejercicios tienen una dificultad incremental pero son todos muy siencillos.

## Ejercicio 1 
Este es el ejercicio más básico que existe para entender el ciclo de vida de ReactJS. Vamos a  programar un contador. El estado almacenará un número que se incrementará cuando pulsemos un botón.

. ♻️ El ciclo es el siguiente:
1. El componente muestra el valor inicial del componente.
2. El usuario pulsa el botón
3. El estado actualiza el valor almacenado
4. ReactJS detecta que el estado ha cambiado y refresca los componentes que necesitan de ese valor. En este ejercicio solo tenemos un componente y es muy sencillo pero en un formulario o una página compuesta por un conjunto de componentes esta característica dota a ReactJS de una enorme rapidez en el renderizado.

Puedes ver el código desplegado pulsando en este botón.

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio1)

## Ejercicio 2 
En este ejercicio trabajaremos con un estado más complejo que en el ejercicio anterior. Aqui nuestro estado será un objeto con dos valores. left y right. En cada una de esas claves se almacenará un número que se incrementará cuando hagamos click en el botón correspondiente.

```javascript
{ 
    left: 0,
    right: 0,
}
```

Aqui introducimos el concepto de la inmutabilidad del estado. Para actualizar el estado no podemos incrementar el contador. Tenemos que volver a construir el objeto con los valores actualizados.

Esa operación la realizamos en la siguiente línea de código. los `...`antes de `clicks` es lo que en javascript se llama desestructuración o destructuring. Es una forma de escritura que nos permite extraer valores de un array o propiedades de un objeto. Basicamente lo que hace es extraer las propiedades que teniamos almacenados en clicks. 

```javascript
const newValues = { ...clicks, right: clicks.right + 1 }
```

Como la desestructuración se haxce dentro de un objeto el resultado es un nuevo objeto que se almacenará en el estado.

La primera vez es chocante pero cuando se le pilla el truco es bastante sencillo y muy util.

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio2)

## Ejercicio 3 
La curva de dificultad de este ejercicio con respecto al anterior es muy baja. 

El estado es un objeto con 3 atributos que gestionaremos con la funcion handle() apropiada para cada caso. Se debe aumentar el contador correspondiente al botón y siempre el total

```javascript
{
    left: 0, 
    right: 0,
    total: 0
}
```

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio3)

## Ejercicio 4 
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

## Ejercicio 5 
[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio5)
