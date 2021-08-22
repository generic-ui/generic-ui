import { CompositionReadModelRootRepository } from './composition.read-model-root-repository';
import { CompositionGroupRepository } from './group/composition.group.repository';
import { CompositionId } from '../domain/composition.id';
import { CellTemplateWithContext } from './definition/cell-template-with-context';
import { FieldId } from '../../../structure/field/core/domain/field/field.id';
import { SortOrder } from '../domain/column/sort/sort-order';
import { CellTemplateWithAccessor } from './definition/cell-template-with-accessor';
import { GroupCollection } from '../api/group/group.collection';
import { CompositionWarehouse } from '../api/composition.warehouse';
import { Observable } from 'rxjs';
export declare class CompositionDomainWarehouse extends CompositionWarehouse {
    private readonly compositionRepository;
    private readonly compositionGroupRepository;
    constructor(compositionRepository: CompositionReadModelRootRepository, compositionGroupRepository: CompositionGroupRepository);
    onWidth(compositionId?: CompositionId): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(compositionId?: CompositionId): Observable<Array<number>>;
    onHeaderColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId, compositionId?: CompositionId): Observable<SortOrder>;
    onTemplateColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(compositionId?: CompositionId): Observable<boolean>;
    onGroups(compositionId?: CompositionId): Observable<GroupCollection>;
}
