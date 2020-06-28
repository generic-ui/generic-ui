import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class StructureSourceOriginRepository {
    private origin;
    private origin$;
    setOrigin(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    onOrigin(structureId: StructureId): Observable<Array<any>>;
}
