import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../domain-read/composition.read-model-root-repository';
import { CompositionId } from './composition.id';
import { CellTemplateWithContext } from '../domain-read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../domain-read/definition/cell-template-with-accessor';
import { SortOrder } from '../domain/column/sort/sort-order';
import { FieldId } from '../../../structure/field/core/domain/field/field.id';
import { GroupCollection } from './group/group.collection';
import { CompositionGroupRepository } from '../domain-read/group/composition.group.repository';
export declare class CompositionWarehouse implements Warehouse {
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
