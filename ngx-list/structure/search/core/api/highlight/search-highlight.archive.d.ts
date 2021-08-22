import { Observable } from 'rxjs';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class SearchHighlightArchive {
    private static readonly HIGHLIGHTING;
    private readonly idToHighlight;
    private readonly idToHighlight$;
    next(value: boolean, structureId?: StructureId): void;
    onValue(structureId?: StructureId): Observable<boolean>;
}
