import { GuiDataType } from '../../../domain-api/grid.api';
import { DataType } from '../../../../../structure/field/domain/data-type/data-type';
export declare class GridColumnTypeConverter {
    convertType(type: string | GuiDataType): DataType;
    private convertTypeEnum;
    private convertTypeString;
}
