import { Observable } from 'rxjs';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionRepository } from '../../../domain/composition/read/composition.repository';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../domain/composition/read/definition/cell-template-with-accessor';
export declare class LocalCompositionReadModelService extends CompositionReadModelService {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionRepository);
    onHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    onTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    onWidthForEachColumn(): Observable<Array<number>>;
    onWidth(): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onResizeWidth(): Observable<boolean>;
}
