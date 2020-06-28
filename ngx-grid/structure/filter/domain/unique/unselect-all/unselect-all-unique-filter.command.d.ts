import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { FieldId } from '../../../../field/domain/core/field/field.id';
export declare class UnselectAllUniqueFilterCommand extends Command {
    private readonly fieldId;
    constructor(structureId: StructureId, fieldId: FieldId);
    getFieldId(): FieldId;
}
