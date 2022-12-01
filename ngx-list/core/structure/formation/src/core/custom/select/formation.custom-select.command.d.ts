import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
import { FormationCustomSelectId } from '../../../api/custom/formation.custom-select.id';
export declare class FormationCustomSelectCommand extends StructureCommand {
    private readonly customSelectId;
    constructor(structureId: StructureId, customSelectId: FormationCustomSelectId);
    getCustomSelectId(): FormationCustomSelectId;
}
