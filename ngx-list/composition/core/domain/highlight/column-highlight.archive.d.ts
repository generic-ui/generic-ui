import { AggregateArchive } from '@generic-ui/hermes';
import { ColumnHighlightManager } from './column-highlight.manager';
import { CompositionId } from '../../api/composition.id';
import { ColumnId } from '../../api/column/column.id';
import * as i0 from "@angular/core";
export declare class ColumnHighlightArchive extends AggregateArchive<ColumnHighlightManager> {
    constructor();
    toggle(key: CompositionId, value: ColumnId): void;
    protected equals(a: ColumnHighlightManager, b: ColumnHighlightManager): boolean;
    protected createDefaultValue(defaultValue: ColumnHighlightManager): ColumnHighlightManager;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnHighlightArchive, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColumnHighlightArchive>;
}
//# sourceMappingURL=column-highlight.archive.d.ts.map