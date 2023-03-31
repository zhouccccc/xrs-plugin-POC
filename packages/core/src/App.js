import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import intl from "react-intl-universal";
import { merge } from "lodash-es";
import Panel from './CorePanel';
import PluginManager from './PluginManager';
import coreModel from "./model";
import './App.css';

function App({ name }) {

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
    const pluginsLocales = { [currentLocale]: {} };

    // 提取插件的Model对象
    const models = [coreModel];

    // 遍历插件列表
    PluginManager.getAllPugins().forEach(([plugin, payload]) => {
      const locale = payload.locales;
      const model = payload.model;

      if (locale) {
        const pluginLocale = locale[currentLocale];
        if (pluginLocale) {
          pluginsLocales[currentLocale] = { ...pluginsLocales[currentLocale], ...pluginLocale }
        } else {
          console.log(`插件[@xrs/${plugin}]国际化[${currentLocale}]丢失`);
        }
      } else {
        console.log(`插件[@xrs/${plugin}]不包含国际化数据`);
      }

      if (model) {
        models.push(model);
      } else {
        console.log(`插件[@xrs/${plugin}]不包含Model数据`);
      }
    })

    // 加载Dva模型
    const installedModels = window.RMS.$$dva._models?.map(({ namespace }) => namespace) ?? []
    models.forEach(model => {
      if (!installedModels.includes(model.namespace)) {
        window.RMS.$$dva.model(model)
      } else {
        console.log(`检测到插件[@xrs/${model.namespace}]的Model重复加载或namespace与已存在的Models冲突`);
      }
    })


    const locales = merge(coreLocales, pluginsLocales)
    await intl.init({ currentLocale, locales });

    setInitDone(true)
  }

  function renderDynamicComponent() {
    const pluginName = 'shein';
    const { List: Component, model, rootWithStates } = PluginManager.getPlugin(pluginName);
    if (model) {
      if (rootWithStates) {
        const ConnectedComponent = connect((globalState) => ({
          ...globalState[pluginName],
        }))(Component)
        return <ConnectedComponent
          tl={(...key) => intl.get.call(intl, ...key)}
          connect={connect}
        />
      }
      return <Component
        tl={(...key) => intl.get.call(intl, ...key)}
        connect={connect}
      />
    }
    return <Component tl={(...key) => intl.get.call(intl, ...key)} />
  }

  return (
    <div className="App">
      {initDone ? (
        <div style={{ border: '1px solid red', width: '60%', padding: 20 }}>
          <div style={{ textAlign: 'center' }}>
            <h3>Core</h3>
            <div>{intl.get('core.content')}</div>
            <div>{intl.get('shein.content')}</div>
            <Panel />
            <br />
          </div>
          <br />
          <div style={{ border: '1px solid green', textAlign: 'center' }}>
            <h3>Shein Plugin</h3>
            {renderDynamicComponent()}
          </div>
          <br />
        </div>
      ) : <span>Loading...</span>}
    </div>
  );
}
export default App
