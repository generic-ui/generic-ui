import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class Message<I extends AggregateId> {
    private readonly aggregateId;
    protected readonly messageType: string;
    private readonly messageId;
    protected constructor(aggregateId: I, messageType: string, messageId?: string);
    getMessageType(): string;
    getAggregateId(): I;
    getMessageId(): string;
    toString(): string;
    equalsByType(message: Message<I>): boolean;
    equals(message: Message<I>): boolean;
    ofMessageType(messageType: string): boolean;
    ofMessageType(messageTypes: Array<string>): boolean;
    private isMessageType;
}
