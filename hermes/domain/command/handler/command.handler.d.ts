import { Type } from '@angular/core';
import { AggregateRoot } from '../aggregate/aggregate-root';
import { Command } from '../command';
import { AggregateId } from '../../aggregate-id';
export interface CommandHandler<A extends AggregateRoot<AggregateId>, C extends Command> {
    forCommand(): Type<C>;
    publishDomainEvents(aggregate: A, command: C): void;
    handleAggregate(aggregate: A, command: C): void;
}
