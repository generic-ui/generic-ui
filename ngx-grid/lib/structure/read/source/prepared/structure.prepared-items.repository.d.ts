import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../../domain/source/origin/origin-item-entity';
import { StructureId } from '../../../domain/structure.id';
export declare class StructurePreparedItemsRepository {
    private origin;
    private origin$;
    setItems(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    onPreparedItems(structureId: StructureId): Observable<Array<OriginItemEntity>>;
}
