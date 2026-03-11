module.exports = {
  apps: [
    {
      name: 'tripmaldives',
      script: 'server.ts',
      interpreter: 'node',
      interpreter_args: '--import tsx',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
