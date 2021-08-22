import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { StructureId } from '../../../core/domain/structure.id';
import { ItemEntity } from '../domain/core/item/item.entity';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
import { OriginItemEntity } from '../domain/origin/origin-item-entity';
import { Warehouse } from '@generic-ui/hermes';
export declare class SourceWarehouse implements Warehouse {
    private structureRepository;
    private structurePreparedItemsRepository;
    private structureSourceOriginRepository;
    constructor(structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    getEntities(structureId?: StructureId): Array<ItemEntity>;
    onEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onEntitiesSize(structureId?: StructureId): Observable<number>;
    onSingleEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onOriginSize(structureId?: StructureId): Observable<number>;
    onLoading(structureId?: StructureId): Observable<boolean>;
    onPreparedEntities(structureId?: StructureId): Observable<Array<OriginItemEntity>>;
    getPreparedEntities(structureId?: StructureId): Array<OriginItemEntity>;
}
