import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionAggregate } from '../domain/composition.aggregate';
import { CompositionReadModeRoot } from './composition.read-mode-root';
export declare class CompositionReadModelRootConverter {
    private readonly columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    static readonly services: readonly [typeof ColumnDefinitionFactory];
    convert(aggregate: CompositionAggregate): CompositionReadModeRoot;
    private convertToColumnDef;
    private convertActiveColumnsToColumnDef;
}
