import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../command/origin/origin-item-entity';
import { StructureId } from '../../../structure-id';
export declare class StructureSourceOriginRepository {
    private origin;
    private origin$;
    constructor();
    setOrigin(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    selectOrigin(structureId: StructureId): Observable<Array<any>>;
}
