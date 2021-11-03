import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
import * as i0 from "@angular/core";
export declare class SetCompositionContainerWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionContainerWidthCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<SetCompositionContainerWidthCommand>;
    handle(composition: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    publish(aggregate: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    private publishAggregateEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetCompositionContainerWidthCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetCompositionContainerWidthCommandHandler>;
}
//# sourceMappingURL=set-composition-container-width.command-handler.d.ts.map