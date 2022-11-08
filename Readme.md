# Ejercicio 5
En ReactJS podemos no solo cambiar el valor que muestra un componente de manera dinámica. También podemos cambiar el estilo de los componentes actualizando las propiedades que reciben como parámetros. Esta práctica se conoce como **renderizado condicional** 

En este ejercicio vamos a cambiar el color de fondo cada vez que se presione el botón.

El funcionamiento es el siguiente. El componente `App` tiene un `className`  (Ojo en React no se utiliza la propiedad `class`. Tenemos que utilizar `className` en su lugar) con el valor "Blue". Es por ese valor que al componente se le asignará el estilo `.Blue` .Puedes ver esa clase en el archivo `index.css`.

## Comportamiento
Entendamos lo que está pasando.

El componente `App` tiene el siguiente estado que almacena un valor booleano. Por defecto se inicializa a `true`.

```javascript
const [isBlue, setIsBlue] = useState(true);

```

También tenemos una función encargada de modificar el valor del estado cada vez que presionemos el botón. Asociamos esa función a traves del evento `onClick` del botón (Esto ya deberíamos de tenerlo controlado pero no está de más repasar).

```javascript
const classColor = isBlue ? "Blue" : "Red";

```
Esta función tiene sintaxis chunga de javascript para el principiante. Lo que está pasando en esa línea de código es que en la variable classColor estamos guardando una función. Es una función pequeñita, `isBlue ? "Blue" : "Red"` pero es rara. Esto es lo que se conoce como el operador ternario `?` en Javascript. Este operador es un `if` simplificado. A la izquierda del `?` ponemos una condición que queremos comprobar. A la derecha antes de los `:` lo que queremos hacer en este caso es equivalente a `return "Blue` después vienen los `:` que cumple la función de la palabra reservada `else` para a continuación escribir el valor que debe devolverse si no se cumple la condición inicial. En nuestro caso `return "Red"`. 

Recapitulando que esto `` es igual a esto otro:

```javascript
if (isBlue === true) {
    return "Blue"
} else {
  return "Red"
}

```
Pero hasta aquí no hemos cambiado el estado solo devolvemos una cadena de caracteres. Nos falta un paso que está en esta línea:

```javascript
<button onClick={() => setIsBlue(!isBlue)}>Cambiar color</button>
```

Fijemonos en el evento onClick. Aqui pasan muchas cosas. 

- Lo primero las `{ }` esas que a priori no pintan nada. Pues **esas llaves son obligatorias cuando en un parámetro de un componente de ReactJS quieras poner cualquier cosa que no sea una cadena de caracteres**. Regla de oro.

- Luego `()=>` esto es lo que se llama una **función flecha** o **arrow function**. Le pusieron ese nombre porque `=>`es una flecha. No voy a explicar aqui estas funciones solo tienes que saber que la parte derecha de la flecha se va a ejecutar cada vez que pulsemos click. Es un disparador (no es así pero nos vale para este ejemplo)

- Lo ultimo `setIsBlue(!isBlue)` aqui estamos guardando en el estado( Recordamos que guardamos en el estado el parámetro de la función `setIsBlue()`. Si pusieramos `setIsBlue("Hola Mundo")` Guardariamos la cadena de texto más famosa entre los informáticos. Pero aqui lo que almacenamos en el estado es el resultado de la función `IsBlue`  🤯 Flipa!. Nos queda una cosita más y es el `!` que es la negación lógica de Javascript y aqui es donde se cambia el valor. Recuerda que tenemos que **almacenar en el estado** `true` o `false`. No `"Red"` ni `"Blue"`

Vamos a explicar el ciclo de vida de esta aplicación ♻️:

1. Se renderiza el componente `App()` con el valor del estado `isBlue = true`
2. Hacemos click en el botó
3. Se ejecuta la función `setIsBlue()` y le pasamos como argumento *"lo contrario al valor que tenga `isBlue`"* es decir le pasamos `!true` que es en definitiva `false`
4. Se almacena en el estado  `ìsBlue` el valor `false`.
5. ReactJS detecta un cambio en el estado y automaticamente refresca los componentes que utilicen el estado `isBlue`.
6. Al volver a renderizar `App` se ejecuta la función ``. Como `isBlue`es false devuelve el valor `"Red"`
7. El componente `App` tiene el `className = "Red"` por lo que se carga la clase css correspondiente y el color de fondo ahora es rojo.

Si se vuelve a pulsar el botón se cambiaría de nuevo el color a azul
