import { StructureId } from '../../../../core/api/global/structure.id';
import { FieldId } from '../../../../field/domain/field/field.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SelectAllUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
