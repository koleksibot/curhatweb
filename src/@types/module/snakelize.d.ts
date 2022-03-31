declare module 'snakelize' {
  function snakefy(args: object | Array): any;
  function camelize(args: object | Array): any;
  const snakelize = { snakefy, camelize };
  export = snakelize;
}
