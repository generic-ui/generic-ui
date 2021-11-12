import { TemplateRef } from '@angular/core';
import { FieldAccessor, GuiCellView, GuiColumn, GuiColumnAlign, GuiColumnCellEditing, GuiColumnSorting, GuiColumnSummaries, GuiDataType, ViewTemplateFunction } from '../../../core/api/gui.grid.public-api';
export declare class GuiGridColumnComponent implements GuiColumn {
    templateRef: TemplateRef<any>;
    name?: string;
    field?: string | FieldAccessor;
    type?: string | GuiDataType;
    view?: string | GuiCellView | ViewTemplateFunction;
    header?: string | ViewTemplateFunction;
    width?: string | number;
    enabled?: boolean;
    align?: string | GuiColumnAlign;
    summaries?: GuiColumnSummaries;
    sorting?: boolean | GuiColumnSorting;
    cellEditing?: boolean | GuiColumnCellEditing;
    formatter?: (item: any, index: number) => any;
    matcher?: (item: any) => any;
}
