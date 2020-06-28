import { Observable } from 'rxjs';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class QuickFilterEnabledRepository {
    private enabled;
    private enabled$;
    constructor();
    setEnabled(enabled: boolean, structureId: StructureId): void;
    onQuickFilterEnabled(structureId: StructureId): Observable<boolean>;
}
