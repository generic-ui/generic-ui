export declare class Optional<T> {
    private readonly value;
    private constructor();
    static empty(): Optional<any>;
    static of<U>(value: U): Optional<U>;
    private static isValueEmpty;
    isEmpty(): boolean;
    isPresent(): boolean;
    filter(filterer: (value: T) => boolean): Optional<T>;
    forEach(callback: (value: T) => any): void;
    map<U>(mapper: (value: T) => U): Optional<U>;
    /**
     * @deprecated
     */
    getValueOrNullOrThrowError(): T;
    getOrThrow(): T;
    getOrElse<U extends T>(other: () => U): T;
    ifPresent(method: (value: T) => void): void;
    ifEmpty(method: () => void): void;
    orElse<U extends T>(other: () => Optional<U>): Optional<T>;
}
