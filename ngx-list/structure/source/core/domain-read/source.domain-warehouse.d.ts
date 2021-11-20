import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { StructureId } from '../../../core/api/structure.id';
import { ItemEntity } from '../domain/core/item/item.entity';
import { OriginItemEntity } from '../domain/origin/origin-item-entity';
import { HermesObservable, HermesSingle } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
export declare class SourceDomainWarehouse extends SourceWarehouse {
    private readonly structureRepository;
    private readonly structurePreparedItemsRepository;
    private readonly structureSourceOriginRepository;
    constructor(structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsArchive, structureSourceOriginRepository: StructureSourceOriginArchive);
    findEntities(structureId: StructureId): ReadonlyArray<ItemEntity>;
    onEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    onEntitiesSize(structureId: StructureId): HermesObservable<number>;
    onceEntities(structureId: StructureId): HermesSingle<ReadonlyArray<ItemEntity>>;
    onOriginSize(structureId: StructureId): HermesObservable<number>;
    onLoading(structureId: StructureId): HermesObservable<boolean>;
    onPreparedEntities(structureId: StructureId): HermesObservable<ReadonlyArray<OriginItemEntity>>;
    findPreparedEntities(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
}
