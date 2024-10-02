# Reading an imput and manage that info with JS
para poder gestionar el texto de un imput y en base a lo que escribas en el haga una cosa o otra tenemos que seguir estos pasos
## inicializacion del estado ```useState```
Utiliza useState para crear una variable de estado que almacenará el valor del campo de texto.
```jsx
const [value, setValue] = useState('');
```
## funcion change

Define una función que se ejecutará cada vez que el contenido del campo de texto cambie. Esta función se encargará de capturar el nuevo valor, actualizar el estado y redirigir según el comando ingresado.
```jsx
const change = (event) => {
    const newValue = event.target.value; // Captura el nuevo valor
    setValue(newValue); // Actualiza el estado

    // Verifica el comando ingresado
    if (newValue.trim() === 'cat /about') {
        window.location.href = '/about'; // Redirige a /about
    } else if (newValue.trim() === 'cat /projects') {
        window.location.href = '/projects'; // Redirige a /projects
    }
};

```

##  Renderización del Componente
Renderiza el textarea y asigna el valor del estado y la función change al evento onChange.

```jsx
return (
    <textarea
        name="commandLine"
        id="1"
        value={value} // Valor del estado
        onChange={change} // Evento de cambio
    />
);

```