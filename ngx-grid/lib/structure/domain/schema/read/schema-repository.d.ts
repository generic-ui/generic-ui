import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/read/structure.repository';
import { StructureId } from '../../structure-id';
import { Schema } from './schema';
export declare class SchemaRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    on(structureId: StructureId): Observable<Schema>;
}
