import { CreateAggregateCommand } from './create-aggregate.command';
import { CommandType } from '../handler/command-type';
export interface CreateAggregateCommandHandler<C extends CreateAggregateCommand> {
    forCommand(): CommandType<C>;
}
