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