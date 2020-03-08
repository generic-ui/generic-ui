import { Type } from '@angular/core';
import { Aggregate } from '../aggregate/aggregate';
import { Command } from '../command';
export interface CommandHandler<A extends Aggregate, C extends Command> {
    forCommand(): Type<C>;
    publishDomainEvents(aggregate: A, command: C): void;
    handleAggregate(aggregate: A, command: C): void;
}
