import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { CompositionId } from '../domain/composition.id';
import { CellTemplateWithContext } from '../domain-read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../domain-read/definition/cell-template-with-accessor';
import { SortOrder } from '../domain/column/sort/sort-order';
import { FieldId } from '../../../structure/field/core/domain/field/field.id';
import { GroupCollection } from './group/group.collection';
export declare abstract class CompositionWarehouse implements Warehouse {
    protected constructor();
    abstract onWidth(compositionId?: CompositionId): Observable<number>;
    abstract onContainerWidth(compositionId?: CompositionId): Observable<number>;
    abstract onWidthForEachColumn(compositionId?: CompositionId): Observable<ReadonlyArray<number>>;
    abstract onHeaderColumns(compositionId?: CompositionId): Observable<ReadonlyArray<CellTemplateWithContext>>;
    abstract onAllColumns(compositionId?: CompositionId): Observable<ReadonlyArray<CellTemplateWithContext>>;
    abstract onSortOrder(fieldId: FieldId, compositionId?: CompositionId): Observable<SortOrder>;
    abstract onTemplateColumns(compositionId?: CompositionId): Observable<ReadonlyArray<CellTemplateWithAccessor>>;
    abstract onResizeWidth(compositionId?: CompositionId): Observable<boolean>;
    abstract onGroups(compositionId?: CompositionId): Observable<GroupCollection>;
}
