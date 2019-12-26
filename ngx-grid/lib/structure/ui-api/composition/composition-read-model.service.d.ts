import { Observable } from 'rxjs';
import { CompositionRepository } from '../../domain/composition/read/composition.repository';
import { CompositionId } from '../../domain/composition/composition-id';
import { CellTemplateWithContext } from '../../domain/composition/read/definition/cell-template-with-context';
import { CellTemplateWithAccessor } from '../../domain/composition/read/definition/cell-template-with-accessor';
export declare class CompositionReadModelService {
    private compositionRepository;
    constructor(compositionRepository: CompositionRepository);
    onWidth(compositionId?: CompositionId): Observable<number>;
    onContainerWidth(compositionId?: CompositionId): Observable<number>;
    onWidthForEachColumn(compositionId?: CompositionId): Observable<Array<number>>;
    onHeaderColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithContext>>;
    onTemplateColumns(compositionId?: CompositionId): Observable<Array<CellTemplateWithAccessor>>;
    onResizeWidth(compositionId?: CompositionId): Observable<boolean>;
}
