import { FieldUiModel } from './field.ui-model';
import { TypeField } from '../../domain/data-type/type.field';
export declare class FieldUiConverter {
    convert(fields: Array<TypeField>): Array<FieldUiModel>;
    private convertOne;
}
