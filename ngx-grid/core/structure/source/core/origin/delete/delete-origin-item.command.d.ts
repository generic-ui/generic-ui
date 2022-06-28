import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { OriginId } from '../../../domain/origin/origin-id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare enum DeleteCommandPayloadType {
    INDEX = 0,
    ITEM_ID = 1,
    MANY_INDEX = 2,
    MANY_ITEM_ID = 3
}
export declare type DeleteOriginItemPayload = {
    index?: number;
    itemId?: OriginId;
};
export declare class DeleteOriginItemCommand extends StructureCommand {
    private readonly payload;
    private readonly type;
    constructor(structureId: StructureId, payload: number | OriginId | Array<number> | Array<OriginId>, type: DeleteCommandPayloadType);
    static byIndex(structureId: StructureId, index: number): DeleteOriginItemCommand;
    static byManyIndex(structureId: StructureId, indexes: Array<number>): DeleteOriginItemCommand;
    static byItemId(structureId: StructureId, itemId: OriginId): DeleteOriginItemCommand;
    static byManyItemId(structureId: StructureId, itemIds: Array<OriginId>): DeleteOriginItemCommand;
    getType(): DeleteCommandPayloadType;
    getPayload(): number | OriginId | Array<number> | Array<OriginId>;
}
