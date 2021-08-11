import { Observable } from 'rxjs';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureReadModelRepository } from '../../../core/api/read/structure.read-model-repository';
import { StructureSourceOriginRepository } from '../../../../source/core/api/origin/structure.source-origin.repository';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { StructurePreparedItemsRepository } from '../../../../source/core/api/prepared/structure.prepared-items.repository';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
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
