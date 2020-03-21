import { CellView } from '../../cell-view';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
export declare class ViewEntity {
    static fromDataType(dataType: DataType): ViewEntity;
    private readonly view;
    private readonly templateFunction?;
    constructor(columnView: CellView | any);
    getCellView(): CellView;
    getTemplateFunction(): any;
}
