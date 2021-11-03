export declare abstract class HermesId<T> {
    private readonly uid;
    protected constructor(uid: T);
    abstract toString(): string;
    getId(): T;
    equals(hermesId: HermesId<T>): boolean;
}
//# sourceMappingURL=hermes.id.d.ts.map