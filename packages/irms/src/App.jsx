import './App.css'

import Loadable from 'react-loadable';
import { useEffect, useState } from 'react';




function App() {

  const [plugin, setPlugin] = useState(null)

  useEffect(() => {
    import(`http://127.0.0.1:8080/shein/plugin.mjs?timestamp=${new Date().getTime()}`).then(modules => {
      setPlugin(modules)
    })
  }, [])


  return (
    <div className="App">
      {!plugin ? 'loading' : <plugin.List />}
    </div>
  )
}

export default App
