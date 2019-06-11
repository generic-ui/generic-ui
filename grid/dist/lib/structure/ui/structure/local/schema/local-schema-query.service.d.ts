import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { Schema } from 'structure/domain/schema/query/schema';
import { SchemaCssClass } from 'structure/domain/schema/query/schema-css-class';
import { SchemaRepository } from 'structure/domain/schema/query/schema-repository';
import { SchemaColumnHeader } from 'structure/domain/schema/query/schema-column-header';
export declare class LocalSchemaQueryService extends SchemaQueryService {
    private structureId;
    constructor(structureId: StructureId, schemaRepository: SchemaRepository);
    select(): Observable<Schema>;
    selectHeight(): Observable<number>;
    selectContainerHeight(): Observable<number>;
    selectOne(): Observable<Schema>;
    selectCssClasses(): Observable<SchemaCssClass>;
    selectColumnHeader(structureId?: StructureId): Observable<SchemaColumnHeader>;
}
