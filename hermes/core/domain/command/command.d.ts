import { Message } from '../message/message';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class Command<I extends AggregateId> extends Message<I> {
}
