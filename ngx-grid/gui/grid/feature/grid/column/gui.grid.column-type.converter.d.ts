import { GuiDataType } from '../../../domain-api/gui.grid.public-api';
import { DataType } from '../../../../../structure/field/domain/core/field/data/data-type';
export declare class GuiGridColumnTypeConverter {
    convertType(type: string | GuiDataType): DataType;
    private convertTypeEnum;
    private convertTypeString;
}
