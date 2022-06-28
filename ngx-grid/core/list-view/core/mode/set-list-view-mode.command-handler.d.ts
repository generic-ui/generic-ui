import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
import { ListViewAggregate } from '../../domain/list-view.aggregate';
import { ListViewCommand } from '../list-view.command';
export declare class SetListViewModeCommandHandler implements CommandHandler<ListViewAggregate, SetListViewModeCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetListViewModeCommand>;
    handle(listViewAggregate: ListViewAggregate, command: SetListViewModeCommand): void;
    publish(aggregate: ListViewAggregate, command: ListViewCommand): void;
}
