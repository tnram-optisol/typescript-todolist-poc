import { Router } from "express";
import { IOptions } from "../interfaces/IOptions";

export const appRouter = Router();

const routesDecorator = (options: IOptions) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    (appRouter as any)[options.method](options.path, target[propertyKey]);
  };
};
export default routesDecorator;


