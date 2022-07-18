import { ItemEntityId } from '../../../../source/src/domain/item/item.entity-id';
import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
export declare class SelectedRow {
    private readonly index;
    private readonly itemId;
    private readonly item;
    constructor(item: ItemEntity, index: number, itemId: ItemEntityId);
    getItem(): ItemEntity;
    getIndex(): number;
    getItemId(): ItemEntityId;
}
