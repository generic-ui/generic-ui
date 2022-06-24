import { ServiceToken } from '../service.token';
import { Token } from '../token';
export declare class Dependency {
    private readonly serviceToken;
    constructor(serviceToken: ServiceToken<any>);
    getToken<T>(): Token<T>;
    isOptional(): boolean;
    /**
     * @deprecated
     */
    isCollection(): boolean;
}
