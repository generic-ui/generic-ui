import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
export declare class CompositionAggregateFactory extends AggregateFactory<CompositionId, CompositionAggregate> {
    private readonly columnFactory;
    constructor(columnFactory: ColumnEntityFactory);
    create(id: CompositionId): CompositionAggregate;
}
