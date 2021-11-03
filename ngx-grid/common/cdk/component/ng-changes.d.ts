/**
 * https://netbasal.com/create-a-typed-version-of-simplechanges-in-angular-451f86593003
 */
declare type MarkFunctionProperties<Component> = {
    [Key in keyof Component]: Component[Key] extends Function ? never : Key;
};
declare type ExcludeFunctionPropertyNames<T> = MarkFunctionProperties<T>[keyof T];
declare type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;
export declare type NgChanges<Component, Props = ExcludeFunctions<Component>> = {
    [Key in keyof Props]: {
        previousValue: Props[Key];
        currentValue: Props[Key];
        firstChange: boolean;
        isFirstChange(): boolean;
    };
};
export declare type Changes<T> = {
    previousValue: T;
    currentValue: T;
    firstChange: boolean;
    isFirstChange(): boolean;
};
export {};
