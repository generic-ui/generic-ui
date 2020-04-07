import { ReadModelRoot } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaTheme } from '../domain/schema-theme';
import { SchemaCssClass } from './schema-css-class';
import { SchemaRowColoring } from '../domain/schema-row-coloring';
export declare class SchemaReadModelRoot extends ReadModelRoot<SchemaReadModelRootId> {
    private readonly schemaTheme;
    private readonly verticalGridEnabled;
    private readonly horizontalGridEnabled;
    private readonly rowColoring;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaTheme: SchemaTheme, verticalGridEnabled: boolean, horizontalGridEnabled: boolean, rowColoring: SchemaRowColoring);
    getTheme(): SchemaTheme;
    getCssClasses(): SchemaCssClass;
}
