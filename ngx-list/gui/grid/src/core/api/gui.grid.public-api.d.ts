import { TranslationChange } from '../../../../../core/l10n/src/api/translation-change';
export declare type FieldAccessor = (element?: any) => any;
export declare type ViewTemplateFunction = (cellValue?: any, item?: any, index?: number) => string;
export interface GuiMultiColumn {
    header?: string | ViewTemplateFunction;
    columns?: Array<GuiColumn>;
}
export interface GuiColumn {
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
}
export declare enum GuiDataType {
    UNKNOWN = 0,
    NUMBER = 1,
    STRING = 2,
    BOOLEAN = 3,
    DATE = 4,
    CUSTOM = 5
}
export declare enum GuiCellView {
    TEXT = 0,
    CHIP = 1,
    LINK = 2,
    IMAGE = 3,
    BOLD = 4,
    ITALIC = 5,
    CHECKBOX = 6,
    CUSTOM = 7,
    BAR = 8,
    PERCENTAGE_BAR = 9,
    PERCENTAGE = 10
}
export declare enum GuiNumberCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiStringCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiBooleanCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3,
    CHECKBOX = 4
}
export declare enum GuiDateCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export interface GuiPaging {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
    display?: string | GuiPagingDisplay;
}
export declare enum GuiTheme {
    FABRIC = 0,
    MATERIAL = 1,
    LIGHT = 2,
    DARK = 3,
    GENERIC = 4
}
export declare enum GuiRowColoring {
    NONE = 0,
    EVEN = 1,
    ODD = 2
}
export interface GuiRowStyle {
    style?: string;
    styleFunction?: (source: any, index: number) => string;
}
export interface GuiRowClass {
    class?: string;
    classFunction?: (source: any, index: number) => string;
}
export declare enum GuiSortingOrder {
    NONE = 0,
    ASC = 1,
    DESC = 2
}
export interface GuiSorting {
    enabled?: boolean;
    multiSorting?: boolean;
}
export interface GuiFiltering {
    enabled?: boolean;
}
export interface GuiQuickFilters {
    enabled?: boolean;
}
export interface GuiSearching {
    enabled?: boolean;
    highlighting?: boolean;
    placeholder?: string;
    phrase?: string;
}
export interface GuiSummaries {
    enabled?: boolean;
    top?: boolean;
    bottom?: boolean;
}
export interface GuiColumnSummaries {
    enabled?: boolean;
    summariesTypes?: Array<string>;
}
export interface GuiColumnSorting {
    enabled?: boolean;
    matcher?: (item: any) => any;
    order?: GuiSortingOrder;
}
export interface GuiColumnCellEditing {
    enabled?: boolean;
}
export interface GuiColumnMenu {
    enabled?: boolean;
    sort?: boolean;
    filter?: boolean;
    columnsManager?: boolean;
}
export declare enum GuiPagingDisplay {
    BASIC = 0,
    ADVANCED = 1
}
export declare enum GuiColumnAlign {
    RIGHT = 0,
    CENTER = 1,
    LEFT = 2
}
export interface GuiRowDetail {
    enabled?: boolean;
    template?: (item: any, index: number) => string;
}
export interface GuiTitlePanel {
    enabled?: boolean;
    template?: string | ((title: any) => string);
}
export interface GuiFooterPanel {
    enabled?: boolean;
    template?: string | ((title: any) => string);
}
export interface GuiInfoPanel {
    enabled?: boolean;
    infoDialog?: boolean;
    columnsManager?: boolean;
    schemaManager?: boolean;
    sourceSize?: boolean;
}
export declare enum GuiRowSelectionType {
    ROW = 0,
    CHECKBOX = 1,
    RADIO = 2
}
export declare enum GuiRowSelectionMode {
    SINGLE = 0,
    MULTIPLE = 1
}
export declare type GuiRowSelectionIdMatcher = (item: any) => any;
export interface GuiRowCustomSelectionFunction {
    key?: string;
    text: string;
    select: (ids: Array<any>) => Array<any>;
}
export declare enum GuiRowCustomSelectionType {
    SELECT_ALL = "SELECT_ALL",
    UNSELECT_ALL = "UNSELECT_ALL",
    INVERT = "INVERT"
}
export interface GuiRowCustomSelection {
    enabled?: boolean;
    selections?: Array<GuiRowCustomSelectionType | GuiRowCustomSelectionFunction>;
}
export interface GuiRowSelection {
    enabled?: boolean;
    selectedRowIds?: Array<any>;
    selectedRowIndexes?: Array<number>;
    type?: string | GuiRowSelectionType;
    mode?: string | GuiRowSelectionMode;
    matcher?: string | GuiRowSelectionIdMatcher;
    custom?: GuiRowCustomSelection;
}
export interface GuiSelectedRow {
    source?: any;
    index: number;
    itemId: any;
}
export interface GuiLocalization {
    translation?: GuiTranslation;
    translationResolver?: (key: string, value: string) => string;
}
export interface GuiCellEdit {
    enabled?: boolean;
    rowEdit?: (value: any, item: any, index: number) => boolean;
    cellEdit?: (value: any, item: any, index: number) => boolean;
}
export declare type GuiTranslation = TranslationChange;
export declare const GuiDefaultTranslation: import("../../../../../core/l10n/src/api/translation").Translation;
