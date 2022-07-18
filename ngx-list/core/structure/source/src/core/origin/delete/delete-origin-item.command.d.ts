import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { ItemEntityId } from '../../../domain/item/item.entity-id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare enum DeleteCommandPayloadType {
    INDEX = 0,
    ITEM_ID = 1,
    MANY_INDEX = 2,
    MANY_ITEM_ID = 3
}
export declare type DeleteOriginItemPayload = {
    index?: number;
    itemId?: ItemEntityId;
};
export declare class DeleteOriginItemCommand extends StructureCommand {
    private readonly payload;
    private readonly type;
    constructor(structureId: StructureId, payload: number | ItemEntityId | Array<number> | Array<ItemEntityId>, type: DeleteCommandPayloadType);
    static byIndex(structureId: StructureId, index: number): DeleteOriginItemCommand;
    static byManyIndex(structureId: StructureId, indexes: Array<number>): DeleteOriginItemCommand;
    static byItemId(structureId: StructureId, itemId: ItemEntityId): DeleteOriginItemCommand;
    static byManyItemId(structureId: StructureId, itemIds: Array<ItemEntityId>): DeleteOriginItemCommand;
    getType(): DeleteCommandPayloadType;
    getPayload(): number | ItemEntityId | Array<number> | Array<ItemEntityId>;
}
