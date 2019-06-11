import { Entity } from 'structure/domain/source/entity';
export declare class SelectedRowsList {
    private readonly rowIds;
    constructor(rowIds: Array<string>);
    isRowSelected(entity: Entity): boolean;
}
