import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { CellTemplateWithContext } from 'structure/domain/presentation/query/templates/cell-template-with-context';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
import { PresentationRepository } from 'structure/domain/presentation/query/presentation.repository';
export declare class LocalPresentationQueryService extends PresentationQueryService {
    private readonly structureId;
    constructor(structureId: StructureId, presentationRepository: PresentationRepository);
    selectHeaderColumns(): Observable<Array<CellTemplateWithContext>>;
    selectTemplateColumns(): Observable<Array<CellTemplateWithAccessor>>;
    selectWidthForEachColumn(): Observable<Array<number>>;
    selectWidth(): Observable<number>;
    selectResizeWidth(): Observable<boolean>;
}
