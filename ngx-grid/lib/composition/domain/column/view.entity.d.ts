import { CellView } from './cell-view';
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
export declare class ViewEntity {
    static fromDataType(dataType: DataType): ViewEntity;
    private readonly view;
    private readonly templateFunction?;
    constructor(cellView: CellView | any);
    getCellView(): CellView;
    getTemplateFunction(): any;
}
