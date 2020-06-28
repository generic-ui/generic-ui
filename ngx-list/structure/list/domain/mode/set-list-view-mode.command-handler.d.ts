import { Command, CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
import { ListViewAggregate } from '../list-view.aggregate';
export declare class SetListViewModeCommandHandler implements CommandHandler<ListViewAggregate, SetListViewModeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetListViewModeCommand>;
    publishDomainEvents(aggregate: ListViewAggregate, command: Command): void;
    handleAggregate(listViewAggregate: ListViewAggregate, command: SetListViewModeCommand): void;
}
