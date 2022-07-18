import { Item } from '../../api/item/item';
export declare class ItemFactory {
    create(source: any): Item;
    create(source: Array<any>): Array<Item>;
    createItems(source: Array<any>): Array<Item>;
    private createItem;
}
