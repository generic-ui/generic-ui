import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { FieldId } from '../../../field/domain/core/field/field.id';
export declare class ToggleSortCommand extends Command {
    private readonly compositionId;
    private readonly fieldId;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
}
