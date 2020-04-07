import { Observable } from 'rxjs';
import { StructureSourceReadModelWarehouse } from '../../../ui-api/source/structure-source.read-model-warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../read/structure/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../read/source/origin/structure.source-origin.repository';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructurePreparedItemsRepository } from '../../../read/source/prepared/structure.prepared-items.repository';
export declare class LocalSourceReadModelWarehouse extends StructureSourceReadModelWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(): Observable<Array<ItemEntity>>;
    onEntitiesSize(): Observable<number>;
    onSingleEntities(): Observable<Array<ItemEntity>>;
    onOriginSize(): Observable<number>;
    onLoading(): Observable<boolean>;
    onPreparedEntities(): Observable<boolean>;
}
