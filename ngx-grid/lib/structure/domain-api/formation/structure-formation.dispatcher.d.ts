import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { StructureId } from '../../domain/structure.id';
export declare class StructureFormationDispatcher {
    private formationDispatcher;
    constructor(formationDispatcher: FormationDispatcher);
    setDefaultFormation(structureId?: StructureId): void;
    toggleSelectedRow(selectedRow: string, structureId?: StructureId): void;
}
