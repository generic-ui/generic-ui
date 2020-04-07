import { SchemaTheme } from '../domain/schema-theme';
import { SchemaRowColoring } from '../domain/schema-row-coloring';
export declare class SchemaCssClass {
    readonly verticalGrid: boolean;
    readonly horizontalGrid: boolean;
    readonly theme: SchemaTheme;
    readonly rowColoring: SchemaRowColoring;
    constructor(verticalGrid: boolean, horizontalGrid: boolean, theme: SchemaTheme, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
