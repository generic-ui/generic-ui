import { Message } from '../../domain/message/message';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class Command<I extends AggregateId> extends Message<I> {
}
