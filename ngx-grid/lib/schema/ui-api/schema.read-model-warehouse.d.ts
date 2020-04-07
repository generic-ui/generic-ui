import { Observable } from 'rxjs';
import { SchemaReadModelRootRepository } from '../read/schema.read-model-root-repository';
import { SchemaTheme } from '../domain/schema-theme';
import { SchemaReadModelRootId } from '../read/schema.read-model-root-id';
import { SchemaCssClass } from '../read/schema-css-class';
export declare class SchemaReadModelWarehouse {
    private schemaReadModelRootRepository;
    constructor(schemaReadModelRootRepository: SchemaReadModelRootRepository);
    onSingleTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onCssClasses(schemaId?: SchemaReadModelRootId): Observable<SchemaCssClass>;
}
