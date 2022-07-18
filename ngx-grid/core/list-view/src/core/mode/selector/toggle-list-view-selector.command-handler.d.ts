import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
import { ListViewAggregate } from '../../../domain/list-view.aggregate';
export declare class ToggleListViewSelectorCommandHandler implements CommandHandler<ListViewAggregate, ToggleListViewSelectorCommand> {
    forCommand(): CommandType<ToggleListViewSelectorCommand>;
    handle(listViewAggregate: ListViewAggregate, command: ToggleListViewSelectorCommand): void;
}
