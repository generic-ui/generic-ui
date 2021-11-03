import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { StructureId } from '../../../core/api/structure.id';
import { ItemEntity } from '../domain/core/item/item.entity';
import { OriginItemEntity } from '../domain/origin/origin-item-entity';
import { HermesObservable } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
import * as i0 from "@angular/core";
export declare class SourceDomainWarehouse extends SourceWarehouse {
    private readonly structureRepository;
    private readonly structurePreparedItemsRepository;
    private readonly structureSourceOriginRepository;
    constructor(structureRepository: StructureReadModelRepository, structurePreparedItemsRepository: StructurePreparedItemsArchive, structureSourceOriginRepository: StructureSourceOriginArchive);
    /**
     * @deprecated
     */
    getEntities(structureId: StructureId): ReadonlyArray<ItemEntity>;
    onEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    onEntitiesSize(structureId: StructureId): HermesObservable<number>;
    onceEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    onOriginSize(structureId: StructureId): HermesObservable<number>;
    onLoading(structureId: StructureId): HermesObservable<boolean>;
    onPreparedEntities(structureId: StructureId): HermesObservable<ReadonlyArray<OriginItemEntity>>;
    /**
     * @deprecated
     */
    getPreparedEntities(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceDomainWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceDomainWarehouse>;
}
//# sourceMappingURL=source.domain-warehouse.d.ts.map