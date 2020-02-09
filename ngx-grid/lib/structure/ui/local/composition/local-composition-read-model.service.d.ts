import { Observable } from 'rxjs';
import { CompositionReadModelService } from '../../../../composition/ui-api/composition-read-model.service';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { CompositionRepository } from '../../../../composition/domain/read/composition.repository';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../../composition/domain/read/definition/cell-template-with-accessor';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
import { SortStatus } from '../../../../composition/domain/command/column/sort/sort-status';
export declare class LocalCompositionReadModelService extends CompositionReadModelService {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionRepository);
    onWidth(): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(): Observable<Array<number>>;
    onHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    onAllColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId): Observable<SortStatus>;
    onTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(): Observable<boolean>;
}
