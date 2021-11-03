import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { Message } from '../message/message';
export declare abstract class DomainEvent<I extends AggregateId = AggregateId> extends Message<I> {
    private readonly payload;
    protected constructor(aggregateId: I, payload: any, messageType: string);
    isSameType(event: DomainEvent<I>): boolean;
    getPayload(): any;
}
//# sourceMappingURL=domain-event.d.ts.map