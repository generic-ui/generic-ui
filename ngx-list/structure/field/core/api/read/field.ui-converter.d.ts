import { FieldReadModel } from './field.read-model';
import { Field } from '../../domain/field/field';
export declare class FieldUiConverter {
    convert(fields: Array<Field>): Array<FieldReadModel>;
    private convertOne;
}
