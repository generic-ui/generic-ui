import { GuiDataType } from '../../../ui-api/grid.api';
import { DataType } from '../../../../../lib/structure/domain/structure/command/field/data-type/data-type';
export declare class GridColumnTypeConverter {
    convertType(type: string | GuiDataType): DataType;
    private convertTypeEnum;
    private convertTypeString;
}
