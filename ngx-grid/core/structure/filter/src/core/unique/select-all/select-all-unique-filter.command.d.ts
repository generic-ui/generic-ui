import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../../../field/src/domain/field/field.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export declare class SelectAllUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
