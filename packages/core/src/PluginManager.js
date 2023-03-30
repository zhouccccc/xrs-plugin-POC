class PluginManager {
    constructor() {
        this.plugins = new Map();
    }

    async loadPlugins(plugins) {
        if (Array.isArray(plugins)) {
            const pluginLoadPromises = plugins.map(pluginNameSpace => {
                switch (pluginNameSpace) {
                    case 'shein':
                        return import('@xrs/shein')
                    default:
                        break;
                }
            }).filter(Boolean)

            const loadedPlugins = await Promise.all(pluginLoadPromises);
            loadedPlugins.forEach(loadedPlugin => {
                this.usePlugin(loadedPlugin.default)
            })
        }
    }

    usePlugin(plugin) {
        const { namespace, ...rest } = plugin;
        this.plugins.set(namespace, rest)
    }

    getPlugin(namespace) {
        return this.plugins.get(namespace)
    }

    getAllPugins() {
        return [...this.plugins.entries()]
    }
}

export default new PluginManager();
