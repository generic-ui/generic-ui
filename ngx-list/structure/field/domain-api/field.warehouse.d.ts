import { Observable } from 'rxjs';
import { FieldReadModelRepository } from './read/field.read-model-repository';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { FieldReadModel } from './read/field.read-model';
export declare class FieldWarehouse {
    private fieldReadModelRepository;
    constructor(fieldReadModelRepository: FieldReadModelRepository);
    onFields(structureId: StructureId): Observable<Array<FieldReadModel>>;
}
