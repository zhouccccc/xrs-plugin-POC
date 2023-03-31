> 目前社区中最主流的方案，也是yarn官方推荐的方案，是集成yarn workspace和lerna。使用yarn workspace来管理依赖，使用lerna来管理npm包的版本发布。

# packageA 安装 axios
yarn workspace packageA add axios

# packageA 移除 axios
yarn workspace packageA remove axios


# root package 安装 commitizen
yarn add -W -D commitizen

# root package 移除 commitizen
yarn remove -W commitizen

# 运行packageA 的dev命令
yarn workspace packageA dev

# 这里是在每个工作区运行 run build 命令
yarn workspaces run build
