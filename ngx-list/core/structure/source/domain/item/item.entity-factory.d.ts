import { ItemEntity } from './item.entity';
export declare class ItemEntityFactory {
    create(source: any): ItemEntity;
    create(source: Array<any>): Array<ItemEntity>;
    createEntities(source: Array<any>): Array<ItemEntity>;
    private createEntity;
}
