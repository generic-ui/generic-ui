import { CellView } from './cell-view';
import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
export declare class ViewEntity {
    static fromDataType(dataType: DataType): ViewEntity;
    private readonly view;
    private readonly templateFunction?;
    constructor(cellView: CellView | any);
    getCellView(): CellView;
    getTemplateFunction(): any;
}
