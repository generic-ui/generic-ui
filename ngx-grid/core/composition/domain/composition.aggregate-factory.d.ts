import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionId } from '../api/global/composition.id';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
export declare class CompositionAggregateFactory extends AggregateFactory<CompositionId, CompositionAggregate> {
    private readonly columnFactory;
    private readonly groupFactory;
    constructor(columnFactory: ColumnEntityFactory, groupFactory: CompositionGroupFactory);
    static readonly services: (typeof ColumnEntityFactory | typeof CompositionGroupFactory)[];
    create(id: CompositionId): CompositionAggregate;
}
