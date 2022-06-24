import { AggregateArchive } from '@generic-ui/hermes';
import { ColumnHighlightManager } from './column-highlight.manager';
import { CompositionId } from '../../api/global/composition.id';
import { ColumnId } from '../../api/column/column.id';
export declare class ColumnHighlightArchive extends AggregateArchive<ColumnHighlightManager> {
    constructor();
    toggle(key: CompositionId, value: ColumnId): void;
    protected equals(a: ColumnHighlightManager, b: ColumnHighlightManager): boolean;
    protected createDefaultValue(defaultValue: ColumnHighlightManager): ColumnHighlightManager;
}
