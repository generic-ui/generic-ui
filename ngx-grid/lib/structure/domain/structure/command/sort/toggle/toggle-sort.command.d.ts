import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { CompositionId } from '../../../../../../composition/domain/composition-id';
import { FieldId } from '../../field/data-type/field.id';
export declare class ToggleSortCommand extends Command {
    readonly structureId: StructureId;
    private readonly compositionId;
    private readonly fieldId;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
}
