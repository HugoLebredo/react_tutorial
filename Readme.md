
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
[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio4)

## Ejercicio 5 
[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial/ejercicio5)
