import { Observable } from 'rxjs';
import { StructureSourceWarehouse } from '../../../feature-api/source/structure-source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../feature-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../feature-api/source/origin/structure.source-origin.repository';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructurePreparedItemsRepository } from '../../../feature-api/source/prepared/structure.prepared-items.repository';
export declare class LocalSourceWarehouse extends StructureSourceWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(): Observable<Array<ItemEntity>>;
    onEntitiesSize(): Observable<number>;
    onSingleEntities(): Observable<Array<ItemEntity>>;
    onOriginSize(): Observable<number>;
    onLoading(): Observable<boolean>;
    onPreparedEntities(): Observable<boolean>;
}
