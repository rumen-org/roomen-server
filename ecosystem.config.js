module.exports = {
  apps: [
    {
      name: 'roomen',
      script: 'dist/main.js',
      exec_mode: 'cluster',
      instances: '1',
      // node_args: '-r ts-node/register', // 수정 필요
      // 또는
      // node_args: '-r <ts-node-path>', // 수정 필요
    },
  ],
};
