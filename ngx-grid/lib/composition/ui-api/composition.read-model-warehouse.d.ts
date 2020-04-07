import { Observable } from 'rxjs';
import { CompositionReadModelRootRepository } from '../read/composition.read-model-root-repository';
import { CompositionId } from '../domain/composition.id';
import { CellTemplateWithContext } from '../read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../read/definition/cell-template-with-accessor';
import { SortOrder } from '../domain/column/sort/sort-order';
import { FieldId } from '../../structure/domain/structure/field/data-type/field.id';
export declare class CompositionReadModelWarehouse {
    private compositionRepository;
    constructor(compositionRepository: CompositionReadModelRootRepository);
    onWidth(compositionId?: CompositionId): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(compositionId?: CompositionId): Observable<Array<number>>;
    onHeaderColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId, compositionId?: CompositionId): Observable<SortOrder>;
    onTemplateColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(compositionId?: CompositionId): Observable<boolean>;
}
