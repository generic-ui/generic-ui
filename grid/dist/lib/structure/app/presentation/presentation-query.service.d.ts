import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { PresentationRepository } from 'structure/domain/presentation/query/presentation.repository';
import { CellTemplateWithContext } from 'structure/domain/presentation/query/templates/cell-template-with-context';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
export declare class PresentationQueryService {
    private presentationRepository;
    constructor(presentationRepository: PresentationRepository);
    selectWidth(structureId?: StructureId): Observable<number>;
    selectWidthForEachColumn(structureId?: StructureId): Observable<Array<number>>;
    selectHeaderColumns(structureId?: StructureId): Observable<Array<CellTemplateWithContext>>;
    selectTemplateColumns(structureId?: StructureId): Observable<Array<CellTemplateWithAccessor>>;
    selectResizeWidth(structureId?: StructureId): Observable<boolean>;
}
