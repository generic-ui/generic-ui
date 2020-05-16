import { Observable } from 'rxjs';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureFilterRepository {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    selectFilterEnabled(structureId: StructureId): Observable<boolean>;
}
