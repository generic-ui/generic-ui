import { Entity } from '../../../source/entity';
export declare class SelectedRowsList {
    private readonly rowIds;
    constructor(rowIds: Array<string>);
    isRowSelected(entity: Entity): boolean;
    getIds(): Array<string>;
}
