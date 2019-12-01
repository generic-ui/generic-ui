import { Observable } from 'rxjs';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CellTemplateWithContext } from '../../../domain/composition/query/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../../domain/composition/query/definition/cell-template-with-accessor';
export declare class CompositionQueryService {
    private compositionRepository;
    constructor(compositionRepository: CompositionRepository);
    selectWidth(compositionId?: CompositionId): Observable<number>;
    selectContainerWidth(compositionId?: CompositionId): Observable<number>;
    selectWidthForEachColumn(compositionId?: CompositionId): Observable<Array<number>>;
    selectHeaderColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    selectTemplateColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithAccessor>>;
    selectResizeWidth(compositionId?: CompositionId): Observable<boolean>;
}
