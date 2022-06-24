import { StructureId } from '../../core/api/global/structure.id';
import { ItemEntity } from '../domain/core/item/item.entity';
import { OriginItemEntity } from '../domain/origin/origin-item-entity';
import { HermesObservable, HermesSingle, Warehouse } from '@generic-ui/hermes';
export declare abstract class SourceWarehouse implements Warehouse {
    protected constructor();
    abstract findEntities(structureId: StructureId): ReadonlyArray<ItemEntity>;
    abstract onEntities(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    abstract onEntitiesSize(structureId: StructureId): HermesObservable<number>;
    abstract onceEntities(structureId: StructureId): HermesSingle<ReadonlyArray<ItemEntity>>;
    abstract onOriginSize(structureId: StructureId): HermesObservable<number>;
    abstract onLoading(structureId: StructureId): HermesObservable<boolean>;
    abstract onPreparedEntities(structureId: StructureId): HermesObservable<ReadonlyArray<OriginItemEntity>>;
    abstract findPreparedEntities(structureId: StructureId): ReadonlyArray<OriginItemEntity>;
}
