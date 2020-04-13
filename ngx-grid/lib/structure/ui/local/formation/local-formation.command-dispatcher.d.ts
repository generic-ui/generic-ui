import { StructureFormationDispatcher } from '../../../ui-api/formation/structure-formation.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { FormationDispatcher } from '../../../domain/formation/formation.dispatcher';
export declare class LocalFormationCommandDispatcher extends StructureFormationDispatcher {
    private structureId;
    constructor(structureId: StructureId, formationDispatcher: FormationDispatcher);
    setDefault(): void;
    toggleSelectedRow(selectedRow: string): void;
}
