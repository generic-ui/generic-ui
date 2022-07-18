import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../../../field/src/domain/field/field.id';
import { UniqueValueId } from '../../../domain/unique/unique-value-id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class UnselectUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly uniqueValueId;
    constructor(structureId: StructureId, fieldId: FieldId, uniqueValueId: UniqueValueId);
    getFieldId(): FieldId;
    getUniqueValueId(): UniqueValueId;
}
