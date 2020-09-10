import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { FieldId } from '../../../../field/domain/core/field/field.id';
export declare class SelectAllUniqueFilterCommand extends Command {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
