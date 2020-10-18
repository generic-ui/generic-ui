import { Observable } from 'rxjs';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { CompositionReadModelRootRepository } from '../../../../../composition/core/domain-read/composition.read-model-root-repository';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
export declare class LocalCompositionWarehouse extends CompositionWarehouse {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionReadModelRootRepository, compositionGroupRepository: CompositionGroupRepository);
    onWidth(): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(): Observable<Array<number>>;
    onHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId): Observable<SortOrder>;
    onTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(): Observable<boolean>;
}
