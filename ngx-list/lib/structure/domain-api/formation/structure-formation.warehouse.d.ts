import { Observable } from 'rxjs';
import { FormationRepository } from './read/formation-repository';
import { StructureId } from '../../domain/structure.id';
import { SelectedRowsList } from './read/selected-rows/selected-rows-list';
export declare class StructureFormationWarehouse {
    private formationRepository;
    constructor(formationRepository: FormationRepository);
    onSelectedRows(structureId?: StructureId): Observable<SelectedRowsList>;
}
