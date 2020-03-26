import { StructureFieldUiModel } from './structure.field.ui-model';
import { TypeField } from '../../../domain/structure/command/field/data-type/type.field';
export declare class StructureFieldUiConverter {
    convert(fields: Array<TypeField>): Array<StructureFieldUiModel>;
    private convertOne;
}
