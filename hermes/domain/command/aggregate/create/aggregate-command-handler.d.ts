import { Type } from '@angular/core';
import { AggregateRoot } from '../aggregate-root';
import { Command } from '../../command';
import { AggregateId } from '../../../aggregate-id';
export interface AggregateCommandHandler<A extends AggregateRoot<AggregateId>, C extends Command> {
    forCommand(): Type<C>;
    publishDomainEvents(aggregate: A, command: C): void;
}
