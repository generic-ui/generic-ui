import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../command/origin/origin-item-entity';
import { StructureId } from '../../../structure-id';
export declare class StructurePreparedItemsRepository {
    private origin;
    private origin$;
    setItems(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    onPreparedItems(structureId: StructureId): Observable<Array<OriginItemEntity>>;
}
