import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { CompositionId } from './global/composition.id';
import { CellTemplateWithContext } from '../core-read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../core-read/definition/cell-template-with-accessor';
import { SortOrder } from '../domain/column/sort/sort-order';
import { FieldId } from '../../../structure/field/src/domain/field/field.id';
import { GroupCollection } from './group/group.collection';
import { ColumnId } from './column/column.id';
export declare abstract class CompositionWarehouse implements Warehouse {
    protected constructor();
    abstract onWidth(compositionId: CompositionId): HermesObservable<number>;
    abstract onContainerWidth(compositionId: CompositionId): HermesObservable<number>;
    abstract onWidthForEachColumn(compositionId: CompositionId): HermesObservable<ReadonlyArray<number>>;
    abstract onHeaderColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithContext>>;
    abstract onAllColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithContext>>;
    abstract onSortOrder(fieldId: FieldId, compositionId: CompositionId): HermesObservable<SortOrder>;
    abstract onTemplateColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithAccessor>>;
    abstract onResizeWidth(compositionId: CompositionId): HermesObservable<boolean>;
    abstract onGroups(compositionId: CompositionId): HermesObservable<GroupCollection>;
    abstract onHighlightedColumn(columnId: ColumnId, compositionId: CompositionId): HermesObservable<boolean>;
    abstract findColumnNames(compositionId: CompositionId): ReadonlyArray<string>;
}
