import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { FieldId } from '../../../../field/domain/core/field/field.id';
import { UniqueValueId } from '../unique-value-id';
export declare class UnselectUniqueFilterCommand extends Command {
    private readonly fieldId;
    private readonly uniqueValueId;
    constructor(structureId: StructureId, fieldId: FieldId, uniqueValueId: UniqueValueId);
    getFieldId(): FieldId;
    getUniqueValueId(): UniqueValueId;
}
