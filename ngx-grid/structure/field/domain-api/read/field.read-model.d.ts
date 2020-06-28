import { FieldId } from '../../domain/core/field/field.id';
import { DataType } from '../../domain/core/field/data/data-type';
export declare class FieldReadModel {
    private readonly id;
    private readonly dataType;
    private readonly name;
    constructor(id: FieldId, dataType: DataType, name: string);
    getFieldId(): FieldId;
    getId(): string;
    getDataType(): DataType;
    getName(): string;
}
