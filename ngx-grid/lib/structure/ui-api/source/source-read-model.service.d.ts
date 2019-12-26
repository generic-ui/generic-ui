import { Observable } from 'rxjs';
import { StructureRepository } from '../../domain/structure/read/structure.repository';
import { StructureSourceOriginRepository } from '../../domain/source/read/origin/structure.source-origin.repository';
import { StructureId } from '../../domain/structure-id';
import { ItemEntity } from '../../domain/source/item.entity';
export declare class SourceReadModelService {
    private structureRepository;
    private structureSourceOriginRepository;
    constructor(structureRepository: StructureRepository, structureSourceOriginRepository: StructureSourceOriginRepository);
    onEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onSingleEntities(structureId?: StructureId): Observable<Array<ItemEntity>>;
    onOriginSize(structureId?: StructureId): Observable<number>;
    onLoading(structureId?: StructureId): Observable<boolean>;
}
