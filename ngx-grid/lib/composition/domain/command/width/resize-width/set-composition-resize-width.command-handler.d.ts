import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionResizeWidthCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly compositionAggregateRepository;
    private readonly columnConverter;
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, columnConverter: ColumnEntityFactory, domainEventPublisher: DomainEventPublisher);
    handleAggregate(composition: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionResizeWidthCommand): void;
}
