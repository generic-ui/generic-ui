import { OriginId } from '../../domain/origin/origin-id';
export declare class SelectedRow {
    private readonly index;
    private readonly itemId;
    private readonly source;
    constructor(source: any, index: number, itemId: OriginId);
    getSource(): any;
    getIndex(): number;
    getItemId(): OriginId;
}
