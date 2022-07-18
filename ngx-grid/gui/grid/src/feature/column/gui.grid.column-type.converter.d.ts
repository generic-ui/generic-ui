import { GuiDataType } from '../../core/api/gui.grid.public-api';
import { DataType } from '../../../../../core/structure/field/src/domain/field/data/data-type';
export declare class GuiGridColumnTypeConverter {
    convertType(type: string | GuiDataType): DataType;
    private convertTypeEnum;
    private convertTypeString;
}
