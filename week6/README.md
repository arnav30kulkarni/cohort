# Some concepts in react:-

## Side effects:-

> the concept of side effect encompasses any operations that reach outside the functional scope of a React component. These operations can affect other components, interact with the browser, or perform asynchronous data fetching.

## Hooks:-

> Hooks are the features in react that allows to use state or other functions without writing a class

### useEffect
it is a hook in react which lets you perform side effects

### useMemo
it means remembering some output given an input and not computing it again
(skips rerendering when props unchanged)

### useCallback
useCallback is a hook in react used to memoize functions,which can help in optimizing the performance, in cases involving child components that rely on reference equality to prevent re renders 

for eg:-
```jsx
const a = useCallback(function(){
   console.log("rerender")
   <div>
   hi there
   </div> 
},[])
``` 

### custom hooks 
you can create your own custom hooks by defining a function starting with 'use'
for eg,
```jsx
function useComponent(){
//write logic here
}
```
