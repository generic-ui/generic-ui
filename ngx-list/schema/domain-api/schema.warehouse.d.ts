import { Observable } from 'rxjs';
import { SchemaTheme } from '../domain/theme/schema-theme';
import { SchemaReadModelRootId } from './read/schema.read-model-root-id';
import { SchemaCssClass } from './css-classes/schema-css-class';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
export declare class SchemaWarehouse {
    private readonly schemaCssClassesRepository;
    private readonly schemaThemeRepository;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository);
    onSingleTheme(schemaId?: SchemaReadModelRootId): Observable<SchemaTheme>;
    onCssClasses(schemaId?: SchemaReadModelRootId): Observable<SchemaCssClass>;
}
