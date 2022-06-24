import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { Command } from '../../../api/command/command';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
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
