import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
import { ListViewAggregate } from '../../list-view.aggregate';
import { ListViewCommand } from '../../list-view.command';
import * as i0 from "@angular/core";
export declare class ToggleListViewSelectorCommandHandler implements CommandHandler<ListViewAggregate, ToggleListViewSelectorCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleListViewSelectorCommand>;
    handle(listViewAggregate: ListViewAggregate, command: ToggleListViewSelectorCommand): void;
    publish(aggregate: ListViewAggregate, command: ListViewCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleListViewSelectorCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToggleListViewSelectorCommandHandler>;
}
//# sourceMappingURL=toggle-list-view-selector.command-handler.d.ts.map