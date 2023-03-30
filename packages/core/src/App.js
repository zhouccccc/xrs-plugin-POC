import { useEffect, useState } from 'react';
import intl from "react-intl-universal";
import { merge } from "lodash-es";
import PluginManager from './PluginManager';
import './App.css';

function App() {

  const [initDone, setInitDone] = useState(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    await PluginManager.loadPlugins(['shein']);

    // 合并core与插件的翻译
    const currentLocale = 'zh-CN';
    const coreLocales = {
      [currentLocale]: require(`./locales/${currentLocale}`).default
    }
    const pluginsLocales = {
      [currentLocale]: {},
    };
    PluginManager.getAllPugins().forEach(([plugin, payload]) => {
      const locale = payload.locales;
      if (locale) {
        const pluginLocale = locale[currentLocale];
        if (pluginLocale) {
          pluginsLocales[currentLocale] = { ...pluginsLocales[currentLocale], ...pluginLocale }
        } else {
          console.log(`插件[@xrs/${plugin}]国际化[${currentLocale}]丢失`);
        }

      } else {

      }
    })


    const locales = merge(coreLocales, pluginsLocales)
    await intl.init({ currentLocale, locales });

    setInitDone(true)
  }

  function renderDynamicComponent() {
    const Component = PluginManager.getPlugin('shein').List;
    return <Component />
  }

  return (
    <div className="App">
      {initDone ? <div>
        <div>{intl.get('core.content')}</div>
        <div>{intl.get('shein.content')}</div>
        {renderDynamicComponent()}
      </div> : <span>Loading...</span>}
    </div>
  );
}

export default App;
