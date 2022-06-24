import { Token } from '../../token';
export interface FactoryProvider {
    deps?: ReadonlyArray<Token<any>>;
    create: (...args: any) => any;
}
