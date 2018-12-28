//如果你要引入样式库,但这个样式库不支持typescript,那么你可以用这个写法合法化
declare module 'iview' {
  const iview: any;
  export default iview;
}