import { Observable } from 'rxjs';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { CompositionReadModelRootRepository } from '../../../../../composition/core/domain-read/composition.read-model-root-repository';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { CompositionGroupRepository } from '../../../../../composition/core/domain-read/group/composition.group.repository';
import { CompositionDomainWarehouse } from '../../../../../composition/core/domain-read/composition.domain-warehouse';
export declare class LocalCompositionWarehouse extends CompositionDomainWarehouse {
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
