import { Observable } from 'rxjs';
import { StructureRepository } from '../../structure/query/structure.repository';
import { StructureId } from '../../structure-id';
import { Schema } from '../../schema/query/schema';
export declare class SourceRepository {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Schema>;
}
