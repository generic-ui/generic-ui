import { FieldId } from '../../domain/structure/field/data-type/field.id';
import { DataType } from '../../domain/structure/field/data-type/data-type';
export declare class StructureFieldUiModel {
    private readonly id;
    private readonly dataType;
    constructor(id: FieldId, dataType: DataType);
    getId(): string;
    getDataType(): DataType;
}
