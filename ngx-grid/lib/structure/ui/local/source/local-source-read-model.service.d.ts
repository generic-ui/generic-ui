import { Observable } from 'rxjs';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../../domain/source/read/origin/structure.source-origin.repository';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructurePreparedItemsRepository } from '../../../domain/source/read/prepared/structure.prepared-items.repository';
export declare class LocalSourceReadModelService extends SourceReadModelService {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(): Observable<Array<ItemEntity>>;
    onEntitiesSize(): Observable<number>;
    onOriginSize(): Observable<number>;
    onSingleEntities(): Observable<Array<ItemEntity>>;
    onLoading(): Observable<boolean>;
    onPreparedEntities(): Observable<boolean>;
}
