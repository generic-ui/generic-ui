import { AbstractType, Constructor } from './token';
declare type ServiceTokenType<T> = Constructor<T> | AbstractType<T> | string;
export declare type ServiceToken<T> = Constructor<T> | AbstractType<T> | string | {
    inject: ServiceTokenType<T>;
    collection?: boolean;
    optional?: boolean;
};
export {};
