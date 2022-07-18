import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/src/domain/field/data/data-type';
export declare class ViewEntity {
    private readonly view;
    private readonly templateFunction?;
    constructor(cellView: CellView | any);
    static fromDataType(dataType: DataType): ViewEntity;
    getCellView(): CellView;
    getTemplateFunction(): any;
}
