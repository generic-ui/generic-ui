import { ColumnDefinitionFactory } from './query/definition/column-definition.factory';
import { CompositionAggregate } from './command/composition.aggregate';
import { Composition } from './query/composition';
export declare class CompositionConverter {
    private columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    convert(aggregate: CompositionAggregate): Composition;
    private convertColumnsToColumnDef;
}
