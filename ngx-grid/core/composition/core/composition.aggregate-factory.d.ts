import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionId } from '../api/global/composition.id';
import { CompositionAggregate } from '../domain/composition.aggregate';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
export declare class CompositionAggregateFactory extends AggregateFactory<CompositionId, CompositionAggregate> {
    private readonly columnFactory;
    private readonly groupFactory;
    constructor(columnFactory: ColumnEntityFactory, groupFactory: CompositionGroupFactory);
    static readonly services: readonly [typeof ColumnEntityFactory, typeof CompositionGroupFactory];
    create(id: CompositionId): CompositionAggregate;
}
