import { ItemEntity } from '../../../source/item.entity';
export declare class SelectedRowsList {
    private readonly rowIds;
    constructor(rowIds: Array<string>);
    isRowSelected(entity: ItemEntity): boolean;
    getIds(): Array<string>;
}
