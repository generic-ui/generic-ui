import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { Schema } from 'structure/domain/schema/query/schema';
import { SchemaRepository } from 'structure/domain/schema/query/schema-repository';
import { SchemaCssClass } from 'structure/domain/schema/query/schema-css-class';
import { SchemaColumnHeader } from 'structure/domain/schema/query/schema-column-header';
export declare class SchemaQueryService {
    private schemaRepository;
    constructor(schemaRepository: SchemaRepository);
    select(structureId?: StructureId): Observable<Schema>;
    selectHeight(structureId?: StructureId): Observable<number>;
    selectContainerHeight(structureId?: StructureId): Observable<number>;
    selectOne(structureId?: StructureId): Observable<Schema>;
    selectCssClasses(structureId?: StructureId): Observable<SchemaCssClass>;
    selectColumnHeader(structureId?: StructureId): Observable<SchemaColumnHeader>;
}
