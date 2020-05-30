import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { CompositionId } from '../../../../lib/composition/domain/composition.id';
import { FieldId } from '../../../field/domain/data-type/field.id';
export declare class ToggleSortCommand extends Command {
    private readonly compositionId;
    private readonly fieldId;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
}
