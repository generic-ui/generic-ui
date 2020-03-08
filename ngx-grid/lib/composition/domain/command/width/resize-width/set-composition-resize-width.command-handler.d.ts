import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionResizeWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionResizeWidthCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetCompositionResizeWidthCommand>;
    handleAggregate(composition: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
}
