# Timeout use

## Introducción

In web applications developed with React, it's often necessary to control the visibility of elements and apply transitions to enhance the user experience. However, ensuring that CSS transitions complete before making additional changes to the DOM can be challenging. In this document, we'll explore how to use the ``setTimeout`` function in combination with React to wait for a CSS transition to finish before hiding an element

## Uso de `setTimeout` para Esperar Transiciones CSS

In the following example, we'll use `setTimeout` to wait for a CSS transition to finish before hiding an element in React:

```javascript
import { useState, useRef } from "react";

const Componente = () => {
    const [isVisible, setIsVisible] = useState(true);
    const timerRef = useRef(null);

    const handleClick = () => {
        setIsVisible(false); // Iniciar transición
        timerRef.current = setTimeout(() => {
            clearTimeout(timerRef.current);
            const div = document.getElementById("miElemento");
            if (div) {
                div.classList.add("hidden"); // Agregar clase "hidden" después de la transición
            }
        }, 500); // Ajusta el tiempo según la duración de tu transición CSS
    };
    
    return (
        <div id="miElemento" className={isVisible ? 'visible' : 'oculto'} onClick={handleClick}>
            {/* Contenido del elemento */}
        </div>
    );
};

export default Componente;
```
## Code Explanation

- `timerRef.current = setTimeout(() => { ... }, 500);`: We use `setTimeout` to set a timer that will execute a function after a certain period of time, in this case, 500 milliseconds. The timer identifier returned is assigned to `timerRef.current`.

- `clearTimeout(timerRef.current);`: Before setting a new timer, we clear any previous timer that may be active. This ensures that only one timer is active at a time.

- `const div = document.getElementById("myElement");`: We find the element with the ID "myElement" in the DOM so that we can add the "hidden" class after the timer has expired and the transition has taken place.

- `div.classList.add("hidden");`: We add the "hidden" class to the element. This class is typically used to hide the element, for example, by applying `opacity: 0` or `display: none` in CSS.

## Conclusions

By effectively using `setTimeout` in combination with React, we can wait for CSS transitions to finish before making additional changes to the DOM. This allows us to create smoother and more responsive user interfaces in our web applications developed with React.