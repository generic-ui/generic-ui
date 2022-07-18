import { StructureReadModelRepository } from '../../../structure-core/src/api/read/structure.read-model-repository';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { Item } from '../api/item/item';
import { ItemEntity } from '../domain/item/item.entity';
import { HermesObservable, HermesSingle } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../core/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../core/origin/structure.source-origin.archive';
export declare class SourceDomainWarehouse extends SourceWarehouse {
    private readonly structureRepository;
    private readonly structurePreparedItemsRepository;
    private readonly structureSourceOriginRepository;
    constructor(structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsArchive, structureSourceOriginRepository: StructureSourceOriginArchive);
    static readonly services: (typeof StructureReadModelRepository | typeof StructureSourceOriginArchive)[];
    findItems(structureId: StructureId): ReadonlyArray<Item>;
    onItems(structureId: StructureId): HermesObservable<ReadonlyArray<Item>>;
    onItemsSize(structureId: StructureId): HermesObservable<number>;
    onceItems(structureId: StructureId): HermesSingle<ReadonlyArray<Item>>;
    onOriginSize(structureId: StructureId): HermesObservable<number>;
    onLoading(structureId: StructureId): HermesObservable<boolean>;
    onPreparedItems(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    findPreparedItems(structureId: StructureId): ReadonlyArray<ItemEntity>;
}
