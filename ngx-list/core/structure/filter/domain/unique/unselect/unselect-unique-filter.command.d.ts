import { StructureId } from '../../../../core/api/global/structure.id';
import { FieldId } from '../../../../field/domain/field/field.id';
import { UniqueValueId } from '../unique-value-id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class UnselectUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly uniqueValueId;
    constructor(structureId: StructureId, fieldId: FieldId, uniqueValueId: UniqueValueId);
    getFieldId(): FieldId;
    getUniqueValueId(): UniqueValueId;
}
