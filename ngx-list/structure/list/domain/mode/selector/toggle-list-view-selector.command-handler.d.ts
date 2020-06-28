import { Command, CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
import { ListViewAggregate } from '../../list-view.aggregate';
export declare class ToggleListViewSelectorCommandHandler implements CommandHandler<ListViewAggregate, ToggleListViewSelectorCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleListViewSelectorCommand>;
    publishDomainEvents(aggregate: ListViewAggregate, command: Command): void;
    handleAggregate(listViewAggregate: ListViewAggregate, command: ToggleListViewSelectorCommand): void;
}
