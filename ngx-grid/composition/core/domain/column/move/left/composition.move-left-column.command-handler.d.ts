import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../composition.aggregate';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
import * as i0 from "@angular/core";
export declare class CompositionMoveLeftColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveLeftColumnCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<CompositionMoveLeftColumnCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    private publishEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionMoveLeftColumnCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionMoveLeftColumnCommandHandler>;
}
//# sourceMappingURL=composition.move-left-column.command-handler.d.ts.map