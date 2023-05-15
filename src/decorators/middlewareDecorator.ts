import { MOptions } from "../interfaces/IOptions";
import { appRouter } from "./routerDecorator";

const middlewareDecortor = (options: MOptions) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    appRouter.use(options.middleware);
  };
};

export default middlewareDecortor;
