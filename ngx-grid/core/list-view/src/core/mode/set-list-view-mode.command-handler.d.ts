import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
export declare class SetListViewModeCommandHandler implements CommandHandler<ListViewAggregate, SetListViewModeCommand> {
    forCommand(): CommandType<SetListViewModeCommand>;
    handle(listViewAggregate: ListViewAggregate, command: SetListViewModeCommand): void;
}
