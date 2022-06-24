import { FieldModel } from '../../api/model/field.model';
import { FieldEntity } from '../../domain/field/field.entity';
export declare class FieldConverter {
    convert(fields: Array<FieldEntity>): Array<FieldModel>;
    private convertOne;
}
