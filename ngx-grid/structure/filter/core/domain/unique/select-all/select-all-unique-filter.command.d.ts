import { StructureId } from '../../../../../core/api/structure.id';
import { FieldId } from '../../../../../field/core/domain/field/field.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class SelectAllUniqueFilterCommand extends StructureCommand {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
//# sourceMappingURL=select-all-unique-filter.command.d.ts.map