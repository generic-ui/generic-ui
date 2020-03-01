import { Observable } from 'rxjs';
import { StructureId } from '../../../../structure-id';
export declare class StructureSearchHighlightArchive {
    private static readonly HIGHLIGHTING;
    private readonly idToHighlight;
    private readonly idToHighlight$;
    next(value: boolean, structureId?: StructureId): void;
    onValue(structureId?: StructureId): Observable<boolean>;
}
