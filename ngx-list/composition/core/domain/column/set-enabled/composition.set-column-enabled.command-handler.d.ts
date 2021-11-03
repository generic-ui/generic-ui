import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../composition.aggregate';
import { CompositionSetColumnEnabledCommand } from './composition.set-column-enabled.command';
import * as i0 from "@angular/core";
export declare class CompositionSetColumnEnabledCommandHandler implements CommandHandler<CompositionAggregate, CompositionSetColumnEnabledCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    private readonly compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<CompositionSetColumnEnabledCommand>;
    handle(aggregate: CompositionAggregate, command: CompositionSetColumnEnabledCommand): void;
    publish(aggregate: CompositionAggregate, command: CompositionSetColumnEnabledCommand): void;
    private publishEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionSetColumnEnabledCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionSetColumnEnabledCommandHandler>;
}
//# sourceMappingURL=composition.set-column-enabled.command-handler.d.ts.map