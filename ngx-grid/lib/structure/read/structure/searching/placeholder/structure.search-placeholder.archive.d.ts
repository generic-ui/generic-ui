import { Observable } from 'rxjs';
import { StructureId } from '../../../../domain/structure.id';
export declare class StructureSearchPlaceholderArchive {
    private static readonly PLACEHOLDER;
    private readonly idToPlaceholder;
    private readonly idToPlaceholder$;
    next(value: string, structureId?: StructureId): void;
    onValue(structureId?: StructureId): Observable<string>;
}
