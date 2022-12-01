import { TemplateRef } from '@angular/core';
import { FieldAccessor, GuiCellView, GuiColumn, GuiColumnAlign, GuiColumnCellEditing, GuiColumnSorting, GuiColumnSummaries, GuiDataType, ViewTemplateFunction } from '../../core/api/gui.grid.public-api';
import * as i0 from "@angular/core";
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
    cssClasses?: string;
    styles?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiGridColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuiGridColumnComponent, "gui-grid-column", never, { "name": "name"; "field": "field"; "type": "type"; "view": "view"; "header": "header"; "width": "width"; "enabled": "enabled"; "align": "align"; "summaries": "summaries"; "sorting": "sorting"; "cellEditing": "cellEditing"; "formatter": "formatter"; "matcher": "matcher"; "cssClasses": "cssClasses"; "styles": "styles"; }, {}, ["templateRef"], never, false, never>;
}
