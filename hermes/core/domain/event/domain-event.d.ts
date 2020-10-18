import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { Command } from '../command/command';
import { DomainEventPayload } from './domain-event.payload';
import { Message } from '../message/message';
export declare abstract class DomainEvent<I extends AggregateId = AggregateId> extends Message<I> {
    private requestCommandId;
    private payload;
    protected constructor(aggregateId: I, messageType: string, payload?: any);
    isSameType(event: DomainEvent<I>): boolean;
    setRequestCommand(command: Command<I>): void;
    fromCommand(command: Command<I>): boolean;
    setPayload(payload: DomainEventPayload): void;
    getPayload(): any;
}
