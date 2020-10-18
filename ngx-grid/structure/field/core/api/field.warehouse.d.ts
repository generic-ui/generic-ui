import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { FieldReadModelRepository } from './read/field.read-model-repository';
import { StructureId } from '../../../core/api/structure.id';
import { FieldReadModel } from './read/field.read-model';
export declare class FieldWarehouse implements Warehouse {
    private fieldReadModelRepository;
    constructor(fieldReadModelRepository: FieldReadModelRepository);
    onFields(structureId: StructureId): Observable<Array<FieldReadModel>>;
}
