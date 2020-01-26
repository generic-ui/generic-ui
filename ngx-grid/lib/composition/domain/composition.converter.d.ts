import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { CompositionAggregate } from './command/composition.aggregate';
import { Composition } from './read/composition';
export declare class CompositionConverter {
    private columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    convert(aggregate: CompositionAggregate): Composition;
    private convertToColumnDef;
    private convertActiveColumnsToColumnDef;
}
