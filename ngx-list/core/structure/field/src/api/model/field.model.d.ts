import { FieldId } from '../../domain/field/field.id';
import { DataType } from '../../domain/field/data/data-type';
export declare class FieldModel {
    private readonly id;
    private readonly dataType;
    private readonly name;
    constructor(id: FieldId, dataType: DataType, name: string);
    getFieldId(): FieldId;
    getId(): string;
    getDataType(): DataType;
    getName(): string;
}
