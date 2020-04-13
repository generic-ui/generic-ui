import { Observable } from 'rxjs';
import { CompositionWarehouse } from '../../../../composition/ui-api/composition.warehouse';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionReadModelRootRepository } from '../../../../composition/read/composition.read-model-root-repository';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../../composition/read/definition/cell-template-with-accessor';
import { FieldId } from '../../../domain/structure/field/data-type/field.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
export declare class LocalCompositionWarehouse extends CompositionWarehouse {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionReadModelRootRepository);
    onWidth(): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(): Observable<Array<number>>;
    onHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId): Observable<SortOrder>;
    onTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(): Observable<boolean>;
}
