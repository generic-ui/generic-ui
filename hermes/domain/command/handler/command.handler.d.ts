import { AggregateRoot } from '../aggregate/aggregate-root';
import { Command } from '../command';
import { AggregateId } from '../../aggregate-id';
import { CommandType } from './command-type';
export interface CommandHandler<A extends AggregateRoot<AggregateId>, C extends Command> {
    forCommand(): CommandType<C>;
    publishDomainEvents(aggregate: A, command: C): void;
    handleAggregate(aggregate: A, command: C): void;
}
