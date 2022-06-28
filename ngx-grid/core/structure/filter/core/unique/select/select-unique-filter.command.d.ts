import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { FieldId } from '../../../../field/domain/field/field.id';
import { UniqueValueId } from '../../../domain/unique/unique-value-id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare class SelectUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    private readonly uniqueValueId;
    constructor(structureId: StructureId, fieldId: FieldId, uniqueValueId: UniqueValueId);
    getFieldId(): FieldId;
    getUniqueValueId(): UniqueValueId;
}
