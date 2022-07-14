# React Router 🛣
---------------

## Installation
```bash
$ npm install react-router-dom
```

## Usage
```js
// src/index.js  
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

## Routing in App.js
```js
// src/App.js  

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}
```



