import { Observable } from 'rxjs';
import { CompositionQueryService } from '../../api/composition/composition.query-service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { CellTemplateWithContext } from '../../../domain/composition/query/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../domain/composition/query/definition/cell-template-with-accessor';
export declare class LocalCompositionQueryService extends CompositionQueryService {
    private readonly compositionId;
    constructor(compositionId: CompositionId, compositionRepository: CompositionRepository);
    selectHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    selectTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    selectWidthForEachColumn(): Observable<Array<number>>;
    selectWidth(): Observable<number>;
    selectContainerWidth(compositionId?: CompositionId): Observable<number>;
    selectResizeWidth(): Observable<boolean>;
}
