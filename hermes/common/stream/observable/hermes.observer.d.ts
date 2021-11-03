export declare type HermesObserver<T> = {
    next: (value: T) => void;
    error: (error: any) => void;
    complete: () => void;
};
