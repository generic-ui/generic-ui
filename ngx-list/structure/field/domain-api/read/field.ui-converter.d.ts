import { FieldReadModel } from './field.read-model';
import { Field } from '../../domain/core/field/field';
export declare class FieldUiConverter {
    convert(fields: Array<Field>): Array<FieldReadModel>;
    private convertOne;
}
