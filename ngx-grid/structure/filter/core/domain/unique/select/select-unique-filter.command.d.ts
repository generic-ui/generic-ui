import { StructureId } from '../../../../../core/domain/structure.id';
import { FieldId } from '../../../../../field/core/domain/field/field.id';
import { UniqueValueId } from '../unique-value-id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class SelectUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly uniqueValueId;
    constructor(structureId: StructureId, fieldId: FieldId, uniqueValueId: UniqueValueId);
    getFieldId(): FieldId;
    getUniqueValueId(): UniqueValueId;
}
