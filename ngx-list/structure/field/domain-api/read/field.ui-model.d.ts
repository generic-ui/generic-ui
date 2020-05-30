import { FieldId } from '../../domain/data-type/field.id';
import { DataType } from '../../domain/data-type/data-type';
export declare class FieldUiModel {
    private readonly id;
    private readonly dataType;
    constructor(id: FieldId, dataType: DataType);
    getId(): string;
    getDataType(): DataType;
}
