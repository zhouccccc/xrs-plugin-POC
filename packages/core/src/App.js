import { useEffect, useState } from 'react';
import PluginManager from './PluginManager';
import './App.css';

function App() {

  const [initDone, setInitDone] = useState(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    // await PluginManager.loadPlugins(['shein']);

    const allLangs = ['zh-CN'];
    const coreLocales = require('./locales/zh-CN');
    console.log(coreLocales);

  }

  function renderDynamicComponent() {

  }

  return (
    <div className="App">
      {initDone ? renderDynamicComponent() : <span></span>}
    </div>
  );
}

export default App;
