import { Observable } from 'rxjs';
import { SchemaRepository } from '../../domain/schema/read/schema-repository';
import { StructureId } from '../../domain/structure-id';
import { Schema } from '../../domain/schema/read/schema';
import { SchemaColumnHeader } from '../../domain/schema/read/schema-column-header';
import { SchemaCssClass } from '../../domain/schema/read/schema-css-class';
export declare class SchemaReadModelService {
    private schemaRepository;
    constructor(schemaRepository: SchemaRepository);
    onSchema(structureId?: StructureId): Observable<Schema>;
    onSingleSchema(structureId?: StructureId): Observable<Schema>;
    onHeight(structureId?: StructureId): Observable<number>;
    onContainerHeight(structureId?: StructureId): Observable<number>;
    onCssClasses(structureId?: StructureId): Observable<SchemaCssClass>;
    onColumnHeader(structureId?: StructureId): Observable<SchemaColumnHeader>;
}
