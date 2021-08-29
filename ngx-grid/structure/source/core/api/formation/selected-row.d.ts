import { OriginId } from '../../domain/origin/origin-id';
export declare class SelectedRow {
    private readonly index;
    private readonly itemId;
    private readonly source;
    constructor(source: any, index: number, itemId: OriginId);
    getData(): any;
    getIndex(): number;
    getItemId(): OriginId;
}
