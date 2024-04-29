declare module "*.scss" {
  const classes: any; //{ [key: string]: string };
  export default classes;
}

declare module "*.sass" {
  const classes: { [key: string]: string };
  export default classes;
}
