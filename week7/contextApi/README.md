# React Core Concepts & Routing

## Exports in React

- **Default export** → Only **one per file**. Imported without curly braces:

  ```jsx
  export default App;
  import App from "./App";
  ```

- **Named exports** → Can be **multiple**. Imported with curly braces:

  ```jsx
  export const Header = () => {};
  import { Header } from "./Header";
  ```

---

## React as a Single Page Application (SPA)

- Traditional websites: **every navigation triggers a full page reload** (server sends a new HTML file).
- React: **Client-Side Rendering (CSR)** → Only updates the **changed view**, no hard reload.

  - Faster navigation.
  - Seamless user experience.

---

## Client-Side Bundle

- After build (`npm run build`), React bundles JS, CSS, and assets.
- This **client bundle** is sent to the browser.
- Routing, rendering, and state updates are handled inside the browser (not server).

---

# Routing with `react-router-dom`

### Setup

```bash
npm install react-router-dom
```

### Basic Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

### Wrong Way: Using `window.location.href`

```jsx
<button onClick={() => (window.location.href = "/dashboard")}>
  Go to Dashboard
</button>
```

- ❌ This triggers a **page reload**.
- ❌ Loses React state and client-side routing benefits.

---

### Correct Way: `useNavigate` Hook

```jsx
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </>
  );
};
```

- ✅ Smooth navigation without reload.
- ✅ Preserves state.

---

# Lazy Loading & Code Splitting

- By default, React bundles the **entire app** into one file.
- If the user only visits one page, downloading everything upfront is inefficient.
- **Lazy loading** = load code **only when needed**.

```jsx
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
```

---

## Using `<Suspense>`

- Because `React.lazy` is asynchronous, wrap lazy components in `<Suspense>`:

```jsx
import { Suspense } from "react";

<Route
  path="/dashboard"
  element={
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  }
/>;
```

- **Fallback UI** is shown while the component is being loaded.

---

# State Management

## Prop Drilling

- Passing props multiple levels down the component tree.
- Becomes inefficient in large apps:

  ```
  App → Parent → Child → GrandChild (just to pass one prop)
  ```

✅ **Best Practice**:
Place state in the **least common ancestor** of components that need it.

---

## Context API

- Solves **prop drilling problem**.
- Provides a **global state container**.

### Steps

1. Create context:

   ```jsx
   import { createContext } from "react";
   export const AppContext = createContext();
   ```

2. Provide context:

   ```jsx
   import { AppContext } from "./context";

   const App = () => {
     const [user, setUser] = useState("Tanmay");
     return (
       <AppContext.Provider value={{ user, setUser }}>
         <Homepage />
       </AppContext.Provider>
     );
   };
   ```

3. Consume context:

   ```jsx
   import { useContext } from "react";
   import { AppContext } from "./context";

   const Homepage = () => {
     const { user } = useContext(AppContext);
     return <h1>Hello {user}</h1>;
   };
   ```

---

# Final Key Takeaways

- **Exports** → Default (1 per file) vs Named (many).
- **SPA** → Only view updates, no reload.
- **Routing** → `react-router-dom` for client-side navigation.
- **Navigation** → Use `useNavigate` instead of `window.location`.
- **Lazy Loading** → Load components on demand with `React.lazy` + `<Suspense>`.
- **State Management** →

  - Small apps: props.
  - Medium apps: Context API.
  - Large apps: Consider Redux, Zustand, or Recoil.

---
