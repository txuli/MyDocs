# Managing states
To manage states of any element, what we need to use is 'useState'. For example:
    const [isVisible, setIsVisible] = useState(true); 
In this case, we are creating the variable 'isVisible' to set the state, true or false in this case.

setIsVisible is the function that we will call to change this true or false, for example:
```jsx 
    const [isVisible, setIsVisible] = useState(true);
    const Handleclick = () =>{
        setIsVisible(false);
    }
```
Here we have encapsulated it into a constant called 'handleClick'. This constant is what we will use to execute the state change.
```jsx
    <div classname={`las clases que quieras ${isVisible ? 'opacity-100' : 'opacity-0'}`}><div/>
```
This is what we should put so that if the variable 'isVisible' is true, the opacity is 100, and if false, the opacity is 0.