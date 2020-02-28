fork: https://github.com/fengxianqi/front_end-demos/tree/master/src/vue-protobuf


```
npx pbjs -t json src/proto/*.proto > src/proto/proto.json

npx pbjs -t json-module -w commonjs -o src/proto/proto.js  src/proto/*.proto
```