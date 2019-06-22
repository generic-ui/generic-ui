import { Observable } from 'rxjs';
import { Schema } from 'structure/domain/schema/query/schema';
import { StructureId } from 'structure/domain/structure-id';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
export declare class SchemaRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Schema>;
}
