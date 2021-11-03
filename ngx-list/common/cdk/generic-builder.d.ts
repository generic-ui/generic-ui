export declare abstract class GenericBuilder<T> {
    protected abstract buildObject(): T;
    build(): T;
}
