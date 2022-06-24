import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create-list-view.command';
export declare class CreateListViewCommandHandler implements CreateAggregateCommandHandler<CreateListViewCommand> {
    forCommand(): CommandType<CreateListViewCommand>;
}
