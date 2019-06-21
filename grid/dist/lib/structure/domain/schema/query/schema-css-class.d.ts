import { SchemaRowColoring } from 'structure/domain/schema/schema-row-coloring';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
export declare class SchemaCssClass {
    readonly verticalGrid: boolean;
    readonly horizontalGrid: boolean;
    readonly theme: SchemaTheme;
    readonly rowColoring: SchemaRowColoring;
    constructor(verticalGrid: boolean, horizontalGrid: boolean, theme: SchemaTheme, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
}
