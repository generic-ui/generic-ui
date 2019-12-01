import { Observable } from 'rxjs';
import { SourceQueryService } from '../../../app/source/source-query.service';
import { StructureId } from '../../../domain/structure-id';
import { StructureRepository } from '../../../domain/structure/query/structure.repository';
import { StructureSourceOriginRepository } from '../../../domain/source/query/origin/structure.source-origin.repository';
import { Entity } from '../../../domain/source/entity';
export declare class LocalSourceQueryService extends SourceQueryService {
    private structureId;
    constructor(structureId: StructureId, structureRepository: StructureRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    select(): Observable<Array<Entity>>;
    selectOriginSize(): Observable<number>;
    selectOne(): Observable<Array<Entity>>;
    selectLoading(): Observable<boolean>;
}
