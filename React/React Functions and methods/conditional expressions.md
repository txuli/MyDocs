# Using Conditional Expressions in React JSX

In React, it's common to need to render components conditionally, meaning to show or hide a component based on some condition. A concise and elegant way to do this is by using conditional expressions in JSX

## Syntax

The basic syntax of a conditional expression in JSX is:

```jsx
{condición && <Componente />}
```
## Example  

``` jsx
const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(false);
        setContentVisible(true);
    };
    
    return (
        <>
            <div className={`w-screen h-screen absolute bg-black/80  flex justify-center items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClick}>
                <div>
                   div que al hacer click desaparece
                </div>
            </div>
            {contentVisible && <Menu />}    
        </>
    );
};