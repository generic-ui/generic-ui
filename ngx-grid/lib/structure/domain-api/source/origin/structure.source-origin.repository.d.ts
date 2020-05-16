import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../../domain/source/origin/origin-item-entity';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureSourceOriginRepository {
    private origin;
    private origin$;
    setOrigin(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    onOrigin(structureId: StructureId): Observable<Array<any>>;
}
