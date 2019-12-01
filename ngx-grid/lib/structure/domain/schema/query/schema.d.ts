import { SchemaRowColoring } from '../schema-row-coloring';
import { SchemaTheme } from '../schema-theme';
import { SchemaColumnHeader } from './schema-column-header';
import { SchemaCssClass } from './schema-css-class';
export declare class Schema {
    private readonly width;
    private readonly height;
    private readonly containerHeight;
    private readonly verticalGridEnabled;
    private readonly horizontalGridEnabled;
    private readonly theme;
    private readonly columnHeader;
    private readonly rowColoring;
    constructor(width: number, height: number, containerHeight: number, verticalGridEnabled: boolean, horizontalGridEnabled: boolean, theme: SchemaTheme, columnHeader: SchemaColumnHeader, rowColoring: SchemaRowColoring);
    getRowColoring(): SchemaRowColoring;
    getTheme(): SchemaTheme;
    getHeight(): number;
    getContainerHeight(): number;
    getWidth(): number;
    isVerticalGridEnabled(): boolean;
    isHorizontalGridEnabled(): boolean;
    getColumnHeader(): SchemaColumnHeader;
    getCssClasses(): SchemaCssClass;
}
