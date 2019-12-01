import { Observable } from 'rxjs';
import { SchemaRepository } from '../../domain/schema/query/schema-repository';
import { StructureId } from '../../domain/structure-id';
import { Schema } from '../../domain/schema/query/schema';
import { SchemaColumnHeader } from '../../domain/schema/query/schema-column-header';
import { SchemaCssClass } from '../../domain/schema/query/schema-css-class';
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
