import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
import { ListViewAggregate } from '../../../domain/list-view.aggregate';
import { ListViewCommand } from '../../list-view.command';
export declare class ToggleListViewSelectorCommandHandler implements CommandHandler<ListViewAggregate, ToggleListViewSelectorCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<ToggleListViewSelectorCommand>;
    handle(listViewAggregate: ListViewAggregate, command: ToggleListViewSelectorCommand): void;
    publish(aggregate: ListViewAggregate, command: ListViewCommand): void;
}
