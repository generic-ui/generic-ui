import { Type } from '@angular/core';
import { AggregateRoot } from '../aggregate-root';
import { AggregateId } from '../../../aggregate-id';
import { CreateAggregateCommand } from './create-aggregate.command';
export interface CreateAggregateCommandHandler<A extends AggregateRoot<AggregateId>, C extends CreateAggregateCommand> {
    forCommand(): Type<C>;
}
