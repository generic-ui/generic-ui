import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { FieldId } from '../../../../field/domain/field/field.id';
import { StructureCommand } from '../../../../structure-core/core/structure.command';
export declare class UnselectAllUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
