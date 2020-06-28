import { Observable } from 'rxjs';
import { SourceWarehouse } from '../../../../../structure/source/domain-api/source.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { StructureReadModelRepository } from '../../../domain-api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../../../structure/source/domain-api/origin/structure.source-origin.repository';
import { ItemEntity } from '../../../../../structure/source/domain/core/item/item.entity';
import { StructurePreparedItemsRepository } from '../../../../../structure/source/domain-api/prepared/structure.prepared-items.repository';
import { OriginItemEntity } from '../../../../../structure/source/domain/origin/origin-item-entity';
export declare class LocalSourceWarehouse extends SourceWarehouse {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    getEntities(): Array<ItemEntity>;
    onEntities(): Observable<Array<ItemEntity>>;
    onEntitiesSize(): Observable<number>;
    onSingleEntities(): Observable<Array<ItemEntity>>;
    onOriginSize(): Observable<number>;
    onLoading(): Observable<boolean>;
    onPreparedEntities(): Observable<Array<OriginItemEntity>>;
}
