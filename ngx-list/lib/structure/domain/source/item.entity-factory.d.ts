import { ItemEntity } from './item.entity';
export declare class ItemEntityFactory {
    create(data: any): ItemEntity;
    create(data: Array<any>): Array<ItemEntity>;
    createEntities(data: Array<any>): Array<ItemEntity>;
    private createEntity;
}
