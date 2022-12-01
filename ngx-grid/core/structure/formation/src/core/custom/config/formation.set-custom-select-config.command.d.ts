import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
import { FormationCustomSelectionConfig } from '../../../api/custom/formation.custom-selection.config';
export declare class FormationSetCustomSelectConfigCommand extends StructureCommand {
    private readonly config;
    constructor(structureId: StructureId, config: FormationCustomSelectionConfig);
    getConfig(): FormationCustomSelectionConfig;
}
