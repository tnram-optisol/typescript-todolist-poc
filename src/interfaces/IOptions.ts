export interface RoutesOptions {
  path: string;
  middleware?: () => {};
}

export interface IOptions {
  path: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  middleware?: () => {};
}
