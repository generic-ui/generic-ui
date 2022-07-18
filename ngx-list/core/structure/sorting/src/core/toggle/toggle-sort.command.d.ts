import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { CompositionId } from '../../../../../composition/src/api/global/composition.id';
import { FieldId } from '../../../../field/src/domain/field/field.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class ToggleSortCommand extends StructureCommand {
    private readonly compositionId;
    private readonly fieldId;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
}
