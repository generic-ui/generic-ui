import { Observable } from 'rxjs';
import { SchemaQueryService } from '../../../app/schema/schema-query.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/query/schema-repository';
import { Schema } from '../../../domain/schema/query/schema';
import { SchemaCssClass } from '../../../domain/schema/query/schema-css-class';
import { SchemaColumnHeader } from '../../../domain/schema/query/schema-column-header';
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
