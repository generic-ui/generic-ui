import { RowColoring } from 'structure/domain/schema/row-coloring';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
export declare class SchemaCssClass {
    readonly verticalGrid: boolean;
    readonly horizontalGrid: boolean;
    readonly theme: SchemaTheme;
    readonly rowColoring: RowColoring;
    constructor(verticalGrid: boolean, horizontalGrid: boolean, theme: SchemaTheme, rowColoring: RowColoring);
    getRowColoring(): RowColoring;
}
