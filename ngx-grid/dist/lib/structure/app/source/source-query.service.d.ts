import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { Entity } from 'structure/domain/source/entity';
export declare class SourceQueryService {
    private structureRepository;
    constructor(structureRepository: StructureRepository);
    select(structureId: StructureId): Observable<Array<Entity>>;
    selectOne(structureId: StructureId): Observable<Array<Entity>>;
}
