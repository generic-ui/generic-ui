import { Observable } from 'rxjs';
import { StructureId } from '../../../structure-id';
export declare class StructureSearchingRepository {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    selectSearchingEnabled(structureId: StructureId): Observable<boolean>;
}
