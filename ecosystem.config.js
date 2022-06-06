module.exports = {
  apps: [
    {
      name: 'candy-web-ssr',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster',
    },
  ],
}