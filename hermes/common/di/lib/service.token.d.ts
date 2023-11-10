import { AbstractType, Constructor } from './token';
type ServiceTokenType<T> = Constructor<T> | AbstractType<T> | string;
export type ServiceToken<T> = Constructor<T> | AbstractType<T> | string | {
    inject: ServiceTokenType<T>;
    collection?: boolean;
    optional?: boolean;
};
export {};
