import { Observable } from 'rxjs';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/read/origin/structure.source-origin.repository';
import { StructureId } from '../../domain/structure-id';
import { ItemEntity } from '../../domain/source/item.entity';
import { StructurePreparedItemsRepository } from '../../domain/source/read/prepared/structure.prepared-items.repository';
export declare class SourceReadModelService {
    private structureRepository;
    private structurePreparedItemsRepository;
    private structureSourceOriginRepository;
    constructor(structureRepository: StructureRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onEntitiesSize(structureId?: StructureId): Observable<number>;
    onSingleEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onOriginSize(structureId?: StructureId): Observable<number>;
    onLoading(structureId?: StructureId): Observable<boolean>;
    onPreparedEntities(structureId?: StructureId): Observable<any>;
}
