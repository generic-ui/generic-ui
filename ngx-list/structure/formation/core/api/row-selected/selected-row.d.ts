import { OriginId } from '../../../../source/core/domain/origin/origin-id';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
export declare class SelectedRow {
    private readonly index;
    private readonly itemId;
    private readonly source;
    constructor(source: OriginItemEntity, index: number, itemId: OriginId);
    getSource(): OriginItemEntity;
    getIndex(): number;
    getItemId(): OriginId;
}
