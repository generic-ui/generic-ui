import { AggregateRoot } from '../aggregate-root';
import { AggregateId } from '../../../aggregate-id';
import { CreateAggregateCommand } from './create-aggregate.command';
import { CommandType } from '../../handler/command-type';
export interface CreateAggregateCommandHandler<A extends AggregateRoot<AggregateId>, C extends CreateAggregateCommand> {
    forCommand(): CommandType<C>;
}
