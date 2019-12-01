import { Observable } from 'rxjs';
import { StructureRepository } from '../../domain/structure/query/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/query/origin/structure.source-origin.repository';
import { StructureId } from '../../domain/structure-id';
import { Entity } from '../../domain/source/entity';
export declare class SourceQueryService {
    private structureRepository;
    private structureSourceOriginRepository;
    constructor(structureRepository: StructureRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    select(structureId?: StructureId): Observable<Array<Entity>>;
    selectOriginSize(structureId?: StructureId): Observable<number>;
    selectOne(structureId?: StructureId): Observable<Array<Entity>>;
    selectLoading(structureId?: StructureId): Observable<boolean>;
}
