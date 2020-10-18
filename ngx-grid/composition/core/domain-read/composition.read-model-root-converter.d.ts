import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionAggregate } from '../domain/composition.aggregate';
import { CompositionReadModeRoot } from './composition.read-mode-root';
export declare class CompositionReadModelRootConverter {
    private columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    convert(aggregate: CompositionAggregate): CompositionReadModeRoot;
    private convertToColumnDef;
    private convertActiveColumnsToColumnDef;
}
