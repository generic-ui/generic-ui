import { AggregateId } from './aggregate-id';
export declare abstract class Message {
    private readonly aggregateId;
    protected readonly messageType: string;
    private readonly messageId;
    protected constructor(aggregateId: AggregateId, messageType: string, messageId?: string);
    getMessageType(): string;
    getAggregateId(): AggregateId;
    getMessageId(): string;
    toString(): string;
    equalsByType(message: Message): boolean;
    equals(message: Message): boolean;
    ofMessageType(messageType: string): boolean;
    ofMessageType(messageTypes: Array<string>): boolean;
    private isMessageType;
}
