export interface RoutesOptions {
  path: string;
  middleware?: any;
}

export interface IOptions {
  path: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  middleware?: any;
}

export interface MOptions {
  path: string;
  middleware: any;
}
