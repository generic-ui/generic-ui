import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionAggregate } from '../../composition.aggregate';
import * as i0 from "@angular/core";
export declare class CompositionChangeSortStatusCommandHandler implements CommandHandler<CompositionAggregate, CompositionChangeSortStatusCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CompositionChangeSortStatusCommand>;
    handle(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
    publish(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionChangeSortStatusCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionChangeSortStatusCommandHandler>;
}
//# sourceMappingURL=composition-change-sort-status.command-handler.d.ts.map