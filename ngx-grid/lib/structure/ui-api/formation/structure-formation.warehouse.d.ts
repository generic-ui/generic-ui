import { Observable } from 'rxjs';
import { FormationRepository } from '../../read/formation/formation-repository';
import { StructureId } from '../../domain/structure.id';
import { SelectedRowsList } from '../../read/formation/selected-rows/selected-rows-list';
export declare class StructureFormationWarehouse {
    private formationRepository;
    constructor(formationRepository: FormationRepository);
    onSelectedRows(structureId?: StructureId): Observable<SelectedRowsList>;
}
