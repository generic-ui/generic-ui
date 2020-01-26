import { Observable } from 'rxjs';
import { CompositionRepository } from '../domain/read/composition.repository';
import { CompositionId } from '../domain/composition-id';
import { CellTemplateWithContext } from '../domain/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../domain/read/definition/cell-template-with-accessor';
import { SortStatus } from '../domain/command/column/sort/sort-status';
import { FieldId } from '../../structure/domain/structure/command/field/data-type/field.id';
export declare class CompositionReadModelService {
    private compositionRepository;
    constructor(compositionRepository: CompositionRepository);
    onWidth(compositionId?: CompositionId): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(compositionId?: CompositionId): Observable<Array<number>>;
    onHeaderColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId, compositionId?: CompositionId): Observable<SortStatus>;
    onTemplateColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(compositionId?: CompositionId): Observable<boolean>;
}
