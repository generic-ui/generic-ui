import { Column } from 'structure/domain/presentation/column';
import { ColumnEntity } from 'structure/domain/presentation/command/column/column.entity';
export declare class PresentationAggregate {
    static default(): PresentationAggregate;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     */
    private readonly columnWidthCollection;
    /**
     * Collection of columns which are used in the presentation.
     */
    private activeColumns;
    /**
     * Value taken from user config [width]
     */
    private width;
    /**
     * DOM element's width
     */
    private containerWidth;
    private resizeWidthEnabled;
    /**
     * Autowired
     */
    private readonly columnConverter;
    constructor(columns?: Array<Column>, width?: number, resizeWidth?: boolean);
    setColumns(columns: Array<Column>): void;
    setContainerWidth(width: number): void;
    setWidth(width: number): void;
    getColumns(): Array<ColumnEntity>;
    getWidth(): number;
    isResizeEnabled(): boolean;
    setResizeWidth(enabled: boolean): void;
    private calculateWidth;
    private updateWidths;
}
