import { Observable } from 'rxjs';
import { StructureId } from '../../../core/domain/structure.id';
export declare class FilterEnabledRepository {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    onFilterEnabled(structureId: StructureId): Observable<boolean>;
}
