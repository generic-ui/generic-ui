import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { Command } from '../command';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { CommandType } from './command-type';
export interface CommandHandler<A extends AggregateRoot<AggregateId>, C extends Command<AggregateId>> {
    forCommand(): CommandType<C>;
    /**
     * Handle Aggregate
     */
    handle(aggregate: A, command: C): void;
    /**
     * Publish domain events
     */
    publish(aggregate: A, command: C): void;
}
