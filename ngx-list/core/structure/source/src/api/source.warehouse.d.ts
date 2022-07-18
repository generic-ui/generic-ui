import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { Item } from './item/item';
import { ItemEntity } from '../domain/item/item.entity';
import { HermesObservable, HermesSingle, Warehouse } from '@generic-ui/hermes';
export declare abstract class SourceWarehouse implements Warehouse {
    protected constructor();
    abstract findItems(structureId: StructureId): ReadonlyArray<Item>;
    abstract onItems(structureId: StructureId): HermesObservable<ReadonlyArray<Item>>;
    abstract onItemsSize(structureId: StructureId): HermesObservable<number>;
    abstract onceItems(structureId: StructureId): HermesSingle<ReadonlyArray<Item>>;
    abstract onOriginSize(structureId: StructureId): HermesObservable<number>;
    abstract onLoading(structureId: StructureId): HermesObservable<boolean>;
    abstract onPreparedItems(structureId: StructureId): HermesObservable<ReadonlyArray<ItemEntity>>;
    abstract findPreparedItems(structureId: StructureId): ReadonlyArray<ItemEntity>;
}
