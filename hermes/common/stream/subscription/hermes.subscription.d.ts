export declare class HermesSubscription {
    private closed;
    private readonly finalize;
    constructor(finalize?: () => void, isClosed?: boolean);
    unsubscribe(): void;
    getFinalize(): () => void;
}
//# sourceMappingURL=hermes.subscription.d.ts.map