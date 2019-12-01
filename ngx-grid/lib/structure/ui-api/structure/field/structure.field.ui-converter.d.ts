import { Field } from '../../../domain/structure/command/field/data-type/field';
import { StructureFieldUiModel } from './structure.field.ui-model';
export declare class StructureFieldUiConverter {
    convert(fields: Array<Field>): Array<StructureFieldUiModel>;
    private convertOne;
}
