import { Observable } from 'rxjs';
import { StructureReadModelRepository } from '../../read/structure/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../read/source/origin/structure.source-origin.repository';
import { StructureId } from '../../domain/structure.id';
import { ItemEntity } from '../../domain/source/item.entity';
import { StructurePreparedItemsRepository } from '../../read/source/prepared/structure.prepared-items.repository';
export declare class StructureSourceReadModelWarehouse {
    private structureRepository;
    private structurePreparedItemsRepository;
    private structureSourceOriginRepository;
    constructor(structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onEntitiesSize(structureId?: StructureId): Observable<number>;
    onSingleEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onOriginSize(structureId?: StructureId): Observable<number>;
    onLoading(structureId?: StructureId): Observable<boolean>;
    onPreparedEntities(structureId?: StructureId): Observable<any>;
}
