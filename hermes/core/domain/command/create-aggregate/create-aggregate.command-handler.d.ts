import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { CreateAggregateCommand } from './create-aggregate.command';
import { CommandType } from '../handler/command-type';
export interface CreateAggregateCommandHandler<A extends AggregateRoot<AggregateId>, C extends CreateAggregateCommand> {
    forCommand(): CommandType<C>;
}
