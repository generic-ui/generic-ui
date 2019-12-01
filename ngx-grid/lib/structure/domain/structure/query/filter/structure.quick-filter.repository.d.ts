import { Observable } from 'rxjs';
import { StructureId } from '../../../structure-id';
export declare class StructureQuickFilterRepository {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    selectQuickFilterEnabled(structureId: StructureId): Observable<boolean>;
}
