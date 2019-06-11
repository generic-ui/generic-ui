import { RowColoring } from 'structure/domain/schema/row-coloring';
import { SchemaCssClass } from 'structure/domain/schema/query/schema-css-class';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
import { SchemaColumnHeader } from 'structure/domain/schema/query/schema-column-header';
export declare class Schema {
    private readonly width;
    private readonly height;
    private readonly containerHeight;
    private readonly verticalGridEnabled;
    private readonly horizontalGridEnabled;
    private readonly theme;
    private readonly columnHeader;
    private readonly rowColoring;
    constructor(width: number, height: number, containerHeight: number, verticalGridEnabled: boolean, horizontalGridEnabled: boolean, theme: SchemaTheme, columnHeader: SchemaColumnHeader, rowColoring: RowColoring);
    getRowColoring(): RowColoring;
    getTheme(): SchemaTheme;
    getHeight(): number;
    getContainerHeight(): number;
    getWidth(): number;
    isVerticalGridEnabled(): boolean;
    isHorizontalGridEnabled(): boolean;
    getColumnHeader(): SchemaColumnHeader;
    getCssClasses(): SchemaCssClass;
}
