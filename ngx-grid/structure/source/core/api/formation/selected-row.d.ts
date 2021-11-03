import { OriginId } from '../../domain/origin/origin-id';
import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
export declare class SelectedRow {
    private readonly index;
    private readonly itemId;
    private readonly source;
    constructor(source: OriginItemEntity, index: number, itemId: OriginId);
    getSource(): OriginItemEntity;
    getIndex(): number;
    getItemId(): OriginId;
}
