import { StructureId } from '../../../core/api/structure.id';
import { ItemEntity } from '../domain/core/item/item.entity';
import { OriginItemEntity } from '../domain/origin/origin-item-entity';
import { HermesObservable, Warehouse } from '@generic-ui/hermes';
export declare abstract class SourceWarehouse implements Warehouse {
    protected constructor();
    /**
     * @deprecated
     */
    abstract getEntities(structureId: StructureId): ReadonlyArray<ItemEntity>;
    abstract onEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    abstract onEntitiesSize(structureId: StructureId): HermesObservable<number>;
    abstract onceEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    abstract onOriginSize(structureId: StructureId): HermesObservable<number>;
    abstract onLoading(structureId: StructureId): HermesObservable<boolean>;
    abstract onPreparedEntities(structureId: StructureId): HermesObservable<ReadonlyArray<OriginItemEntity>>;
    /**
     * @deprecated
     */
    abstract getPreparedEntities(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
}
