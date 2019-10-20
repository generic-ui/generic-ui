import { GuiDataType } from '../../../../grid/app/grid.api';
import { DataType } from '../../../../../lib/structure/domain/structure/command/field/data-type/data-type';
export declare class GridColumnTypeConverter {
    convertType(type: string | GuiDataType): DataType;
    private convertTypeEnum;
    private convertTypeString;
}
