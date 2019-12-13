### Install
``` bash
yarn init -y
yarn add  typescript
tsc --init
```
目录下新建build、src文件夹，此时的目录结构为
```
├──helloTS
    ├──build
    ├──src
    └──tsconfig.json
```
将tsconfig.json下的outDir路径修改为./build，rootDir路径修改为./src
```bash
yarn add express
yarn add @types/express
```

### coding

```bash
tsc
node ./build/app/app.js

```

### debug
```
yarn add ts-node -D
```
修改.vscode/launch.json配置文件
[参考](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
