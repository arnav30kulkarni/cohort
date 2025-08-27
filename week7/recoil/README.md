# React State Management: Context API vs. Recoil

This repository explores two popular approaches to state management in React: the built-in Context API and the Recoil library. It provides a simple demonstration of both, highlighting their differences in syntax, rendering behavior, and overall approach to managing global state.

## The Problem: Prop Drilling

In many React applications, you have state that needs to be accessed by multiple components at different levels of the component tree. A common but often inefficient way to handle this is through "prop drilling," where you pass props down through multiple layers of components.

**Example Component Hierarchy:**

```
App (state declared here)
└─── CountProvider
    └─── CountRenderer
        ├─── DisplayCountText (state used here)
        └─── UpdateCountButton (state used here)
```

In this scenario, `CountRenderer` doesn't use the state itself but has to pass it down to its children. This can become cumbersome and lead to code that's hard to maintain.

## Solution 1: Context API

The Context API provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

> **Important:** While the Context API simplifies passing state, it's not always the most performant solution. When the context value changes, all components that consume that context will re-render, which can lead to performance bottlenecks in large applications.

## Solution 2: State Management Libraries

For more complex applications, dedicated state management libraries offer more advanced features and performance optimizations. This project demonstrates Recoil, but other popular options include:

*   **Zustand**
*   **Redux**

These libraries often provide more granular control over re-renders, leading to better performance.

## Exploring Recoil

Recoil is a state management library for React that introduces the concept of **atoms** to store state.

*   **Atoms:** An atom is a piece of state. They can be created and accessed from any component.
*   **Selectors:** A selector is a pure function that accepts atoms or other selectors as input. When these upstream atoms or selectors are updated, the selector function will be re-evaluated.

### Core Recoil Hooks

Recoil provides several hooks for interacting with atoms and selectors:

*   `useRecoilState(atom)`: Similar to `useState`, this hook returns a tuple with the current value of the atom and a setter function.
*   `useRecoilValue(atom)`: Use this hook when you only need to read the value of an atom, without needing to update it.
*   `useSetRecoilState(atom)`: Use this hook when you only need a function to update the value of an atom.

### Convention for Storing Atoms

It's a common convention to store atoms in a `src/store/atoms` directory.

**Example Atom Definition:**

```jsx
// src/store/atoms/count.js
import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
```

## Selector

A **selector** in Recoil is a pure function that derives state based on atoms or other selectors.  
Selectors are similar to React's `useMemo` hook: both are used to compute derived values efficiently and only re-compute when their dependencies change.

**Why use selectors instead of `useMemo`?**  
While `useMemo` is used inside React components to memoize values, Recoil selectors are defined outside components and can be shared across your app. Selectors automatically update when their dependent atoms/selectors change, just like `useMemo` updates when its dependencies change.

**Example Selector Definition:**

```jsx
// src/store/atoms/selector.js
import { selector } from "recoil";
import { countAtom } from "./count";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0; // Returns true if count is even
  },
});
```

**Analogy:**  
- `useMemo`: Used for memoizing derived values inside a component.
- `selector`: Used for deriving and sharing computed state across your entire Recoil state tree.


## Project Structure

```
.
├── src
│   ├── components
│   │   ├── Context.jsx       # Example using Context API
│   │   └── Recoil.jsx        # Example using Recoil
│   ├── store
│   │   └── atoms
│   │       └── count.js      # Recoil atom definition
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Entry point of the application
├── package.json
└── README.md
```

# **Note:** 
As of August 2025, please check the official Recoil documentation for the latest information on React version compatibility.
