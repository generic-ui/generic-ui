import { Observable } from 'rxjs';
import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../core/domain/structure.id';
export declare class StructurePreparedItemsRepository {
    private origin;
    private origin$;
    setItems(origin: Array<OriginItemEntity>, structureId: StructureId): void;
    getPreparedItems(structureId: StructureId): Array<OriginItemEntity>;
    onPreparedItems(structureId: StructureId): Observable<Array<OriginItemEntity>>;
}
