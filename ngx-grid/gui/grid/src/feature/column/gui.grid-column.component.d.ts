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
    static ɵcmp: i0.ɵɵComponentDeclaration<GuiGridColumnComponent, "gui-grid-column", never, { "name": { "alias": "name"; "required": false; }; "field": { "alias": "field"; "required": false; }; "type": { "alias": "type"; "required": false; }; "view": { "alias": "view"; "required": false; }; "header": { "alias": "header"; "required": false; }; "width": { "alias": "width"; "required": false; }; "enabled": { "alias": "enabled"; "required": false; }; "align": { "alias": "align"; "required": false; }; "summaries": { "alias": "summaries"; "required": false; }; "sorting": { "alias": "sorting"; "required": false; }; "cellEditing": { "alias": "cellEditing"; "required": false; }; "formatter": { "alias": "formatter"; "required": false; }; "matcher": { "alias": "matcher"; "required": false; }; "cssClasses": { "alias": "cssClasses"; "required": false; }; "styles": { "alias": "styles"; "required": false; }; }, {}, ["templateRef"], never, false, never>;
}
