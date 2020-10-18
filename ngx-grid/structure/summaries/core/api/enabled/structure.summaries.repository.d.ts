import { Observable } from 'rxjs';
import { Reactive } from '../../../../../common/cdk/reactive';
import { StructureId } from '../../../../core/api/structure.id';
export declare class StructureSummariesRepository extends Reactive {
    private enabled;
    private enabled$;
    constructor();
    init(structureId: StructureId): void;
    setEnabled(enabled: boolean, structureId: StructureId): void;
    onSummariesEnabled(structureId: StructureId): Observable<boolean>;
    private next;
}
