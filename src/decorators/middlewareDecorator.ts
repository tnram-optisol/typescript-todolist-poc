import { MOptions } from "../interfaces/utils/IOptions";
import { appRouter } from "./routerDecorator";

const middlewareDecortor = (options: MOptions) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const request = args[0] as Request;
      const response = args[1] as Response;

      const headers = request.headers;
      console.log(original, request);
    };
  };
};

export default middlewareDecortor;
