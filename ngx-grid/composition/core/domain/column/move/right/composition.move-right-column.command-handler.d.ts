import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../composition.aggregate';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
import * as i0 from "@angular/core";
export declare class CompositionMoveRightColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveRightColumnCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<CompositionMoveRightColumnCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    private publishEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionMoveRightColumnCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionMoveRightColumnCommandHandler>;
}
//# sourceMappingURL=composition.move-right-column.command-handler.d.ts.map