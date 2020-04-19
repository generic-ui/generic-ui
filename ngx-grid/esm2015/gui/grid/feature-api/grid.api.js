/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GuiColumn() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumn.prototype.field;
    /** @type {?|undefined} */
    GuiColumn.prototype.type;
    /** @type {?|undefined} */
    GuiColumn.prototype.view;
    /** @type {?|undefined} */
    GuiColumn.prototype.header;
    /** @type {?|undefined} */
    GuiColumn.prototype.customTemplate;
    /** @type {?|undefined} */
    GuiColumn.prototype.width;
    /** @type {?|undefined} */
    GuiColumn.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumn.prototype.align;
    /** @type {?|undefined} */
    GuiColumn.prototype.summaries;
    /** @type {?|undefined} */
    GuiColumn.prototype.sorting;
    /** @type {?|undefined} */
    GuiColumn.prototype.cellEditing;
    /** @type {?|undefined} */
    GuiColumn.prototype.matcher;
}
/** @enum {number} */
const GuiDataType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
export { GuiDataType };
GuiDataType[GuiDataType.UNKNOWN] = 'UNKNOWN';
GuiDataType[GuiDataType.NUMBER] = 'NUMBER';
GuiDataType[GuiDataType.STRING] = 'STRING';
GuiDataType[GuiDataType.BOOLEAN] = 'BOOLEAN';
GuiDataType[GuiDataType.DATE] = 'DATE';
GuiDataType[GuiDataType.CUSTOM] = 'CUSTOM';
/** @enum {number} */
const GuiCellView = {
    TEXT: 0,
    CHIP: 1,
    LINK: 2,
    IMAGE: 3,
    BOLD: 4,
    ITALIC: 5,
    CHECKBOX: 6,
    CUSTOM: 7,
    BAR: 8,
    PERCENTAGE_BAR: 9,
    PERCENTAGE: 10,
};
export { GuiCellView };
GuiCellView[GuiCellView.TEXT] = 'TEXT';
GuiCellView[GuiCellView.CHIP] = 'CHIP';
GuiCellView[GuiCellView.LINK] = 'LINK';
GuiCellView[GuiCellView.IMAGE] = 'IMAGE';
GuiCellView[GuiCellView.BOLD] = 'BOLD';
GuiCellView[GuiCellView.ITALIC] = 'ITALIC';
GuiCellView[GuiCellView.CHECKBOX] = 'CHECKBOX';
GuiCellView[GuiCellView.CUSTOM] = 'CUSTOM';
GuiCellView[GuiCellView.BAR] = 'BAR';
GuiCellView[GuiCellView.PERCENTAGE_BAR] = 'PERCENTAGE_BAR';
GuiCellView[GuiCellView.PERCENTAGE] = 'PERCENTAGE';
/** @enum {number} */
const GuiNumberCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
export { GuiNumberCellView };
GuiNumberCellView[GuiNumberCellView.TEXT] = 'TEXT';
GuiNumberCellView[GuiNumberCellView.BOLD] = 'BOLD';
GuiNumberCellView[GuiNumberCellView.ITALIC] = 'ITALIC';
GuiNumberCellView[GuiNumberCellView.CHIP] = 'CHIP';
/** @enum {number} */
const GuiStringCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
export { GuiStringCellView };
GuiStringCellView[GuiStringCellView.TEXT] = 'TEXT';
GuiStringCellView[GuiStringCellView.BOLD] = 'BOLD';
GuiStringCellView[GuiStringCellView.ITALIC] = 'ITALIC';
GuiStringCellView[GuiStringCellView.CHIP] = 'CHIP';
/** @enum {number} */
const GuiBooleanCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
    CHECKBOX: 4,
};
export { GuiBooleanCellView };
GuiBooleanCellView[GuiBooleanCellView.TEXT] = 'TEXT';
GuiBooleanCellView[GuiBooleanCellView.BOLD] = 'BOLD';
GuiBooleanCellView[GuiBooleanCellView.ITALIC] = 'ITALIC';
GuiBooleanCellView[GuiBooleanCellView.CHIP] = 'CHIP';
GuiBooleanCellView[GuiBooleanCellView.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
const GuiDateCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
export { GuiDateCellView };
GuiDateCellView[GuiDateCellView.TEXT] = 'TEXT';
GuiDateCellView[GuiDateCellView.BOLD] = 'BOLD';
GuiDateCellView[GuiDateCellView.ITALIC] = 'ITALIC';
GuiDateCellView[GuiDateCellView.CHIP] = 'CHIP';
/**
 * @record
 */
export function GuiPagingConfig() { }
if (false) {
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.enabled;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.page;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSize;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerBottom;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.display;
}
/** @enum {number} */
const GuiTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
    GENERIC: 4,
};
export { GuiTheme };
GuiTheme[GuiTheme.FABRIC] = 'FABRIC';
GuiTheme[GuiTheme.MATERIAL] = 'MATERIAL';
GuiTheme[GuiTheme.LIGHT] = 'LIGHT';
GuiTheme[GuiTheme.DARK] = 'DARK';
GuiTheme[GuiTheme.GENERIC] = 'GENERIC';
/** @enum {number} */
const GuiRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
export { GuiRowColoring };
GuiRowColoring[GuiRowColoring.NONE] = 'NONE';
GuiRowColoring[GuiRowColoring.EVEN] = 'EVEN';
GuiRowColoring[GuiRowColoring.ODD] = 'ODD';
/** @enum {number} */
const GuiSortingOrder = {
    NONE: 0,
    ASC: 1,
    DESC: 2,
};
export { GuiSortingOrder };
GuiSortingOrder[GuiSortingOrder.NONE] = 'NONE';
GuiSortingOrder[GuiSortingOrder.ASC] = 'ASC';
GuiSortingOrder[GuiSortingOrder.DESC] = 'DESC';
/**
 * @record
 */
export function GuiSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiSorting.prototype.enabled;
    /**
     * \@experimental
     * @type {?|undefined}
     */
    GuiSorting.prototype.multiSorting;
}
/**
 * @record
 */
export function GuiFiltering() { }
if (false) {
    /** @type {?|undefined} */
    GuiFiltering.prototype.enabled;
}
/**
 * @record
 */
export function GuiQuickFilters() { }
if (false) {
    /** @type {?|undefined} */
    GuiQuickFilters.prototype.enabled;
}
/**
 * @record
 */
export function GuiSearching() { }
if (false) {
    /** @type {?|undefined} */
    GuiSearching.prototype.enabled;
    /** @type {?|undefined} */
    GuiSearching.prototype.highlighting;
    /** @type {?|undefined} */
    GuiSearching.prototype.placeholder;
    /** @type {?|undefined} */
    GuiSearching.prototype.phrase;
}
/**
 * @record
 */
export function GuiSummaries() { }
if (false) {
    /** @type {?|undefined} */
    GuiSummaries.prototype.enabled;
    /** @type {?|undefined} */
    GuiSummaries.prototype.top;
    /** @type {?|undefined} */
    GuiSummaries.prototype.bottom;
}
/**
 * @record
 */
export function GuiColumnSummaries() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSummaries.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSummaries.prototype.summariesTypes;
}
/**
 * @record
 */
export function GuiColumnSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.matcher;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.order;
}
/**
 * @record
 */
export function GuiColumnCellEditing() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnCellEditing.prototype.enabled;
}
/**
 * @record
 */
export function GuiColumnMenu() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.sort;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.filter;
    /** @type {?|undefined} */
    GuiColumnMenu.prototype.columnsManager;
}
/** @enum {number} */
const GuiPagingDisplay = {
    BASIC: 0,
    ADVANCED: 1,
};
export { GuiPagingDisplay };
GuiPagingDisplay[GuiPagingDisplay.BASIC] = 'BASIC';
GuiPagingDisplay[GuiPagingDisplay.ADVANCED] = 'ADVANCED';
/** @enum {number} */
const GuiColumnAlign = {
    RIGHT: 0,
    CENTER: 1,
    LEFT: 2,
};
export { GuiColumnAlign };
GuiColumnAlign[GuiColumnAlign.RIGHT] = 'RIGHT';
GuiColumnAlign[GuiColumnAlign.CENTER] = 'CENTER';
GuiColumnAlign[GuiColumnAlign.LEFT] = 'LEFT';
/**
 * @record
 */
export function GuiRowDetail() { }
if (false) {
    /** @type {?|undefined} */
    GuiRowDetail.prototype.enabled;
    /** @type {?|undefined} */
    GuiRowDetail.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUtYXBpL2dyaWQuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSwrQkF5QkM7OztJQXZCQSwwQkFBK0I7O0lBRS9CLHlCQUE0Qjs7SUFFNUIseUJBQWlEOztJQUVqRCwyQkFBZ0I7O0lBRWhCLG1DQUF3Qjs7SUFFeEIsMEJBQXdCOztJQUV4Qiw0QkFBa0I7O0lBRWxCLDBCQUFnQzs7SUFFaEMsOEJBQStCOztJQUUvQiw0QkFBMkI7O0lBRTNCLGdDQUFtQzs7SUFFbkMsNEJBQTZCOzs7O0lBSTdCLFVBQU87SUFDUCxTQUFNO0lBQ04sU0FBTTtJQUNOLFVBQU87SUFDUCxPQUFJO0lBQ0osU0FBTTs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixRQUFLO0lBQ0wsT0FBSTtJQUNKLFNBQU07SUFDTixXQUFRO0lBQ1IsU0FBTTtJQUNOLE1BQUc7SUFDSCxpQkFBYztJQUNkLGNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJVixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCxxQ0FnQkM7OztJQWRBLGtDQUFrQjs7SUFFbEIsK0JBQWM7O0lBRWQsbUNBQWtCOztJQUVsQixvQ0FBMEI7O0lBRTFCLG1DQUFtQjs7SUFFbkIsc0NBQXNCOztJQUV0QixrQ0FBb0M7Ozs7SUFLcEMsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTtJQUNKLFVBQU87Ozs7Ozs7Ozs7SUFJUCxPQUFJO0lBQ0osT0FBSTtJQUNKLE1BQUc7Ozs7Ozs7O0lBSUgsT0FBSTtJQUNKLE1BQUc7SUFDSCxPQUFJOzs7Ozs7Ozs7QUFHTCxnQ0FTQzs7O0lBUEEsNkJBQWtCOzs7OztJQUtsQixrQ0FBdUI7Ozs7O0FBSXhCLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLHFDQUlDOzs7SUFGQSxrQ0FBa0I7Ozs7O0FBSW5CLGtDQVVDOzs7SUFSQSwrQkFBa0I7O0lBRWxCLG9DQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQiw4QkFBZ0I7Ozs7O0FBSWpCLGtDQVFDOzs7SUFOQSwrQkFBa0I7O0lBRWxCLDJCQUFjOztJQUVkLDhCQUFpQjs7Ozs7QUFJbEIsd0NBS0M7OztJQUhBLHFDQUFrQjs7SUFFbEIsNENBQTRCOzs7OztBQUc3QixzQ0FPQzs7O0lBTEEsbUNBQWtCOztJQUVsQixtQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7Ozs7QUFHeEIsMENBSUM7OztJQUZBLHVDQUFrQjs7Ozs7QUFJbkIsbUNBVUM7OztJQVJBLGdDQUFrQjs7SUFFbEIsNkJBQWU7O0lBRWYsK0JBQWlCOztJQUVqQix1Q0FBeUI7Ozs7SUFLekIsUUFBSztJQUNMLFdBQVE7Ozs7Ozs7SUFJUixRQUFLO0lBQ0wsU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztBQUdMLGtDQUtDOzs7SUFIQSwrQkFBa0I7O0lBRWxCLGdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEZpZWxkQWNjZXNzb3IgPSAoZWxlbWVudD86IGFueSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgVmlld1RlbXBsYXRlTWV0aG9kID0gKGNlbGxWYWx1ZTogYW55KSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uIHtcblxuXHRmaWVsZD86IHN0cmluZyB8IEZpZWxkQWNjZXNzb3I7XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aURhdGFUeXBlO1xuXG5cdHZpZXc/OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZDtcblxuXHRoZWFkZXI/OiBzdHJpbmc7XG5cblx0Y3VzdG9tVGVtcGxhdGU/OiBzdHJpbmc7XG5cblx0d2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0YWxpZ24/OiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbjtcblxuXHRzdW1tYXJpZXM/OiBHdWlDb2x1bW5TdW1tYXJpZXM7XG5cblx0c29ydGluZz86IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0Y2VsbEVkaXRpbmc/OiBHdWlDb2x1bW5DZWxsRWRpdGluZztcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xufVxuXG5leHBvcnQgZW51bSBHdWlEYXRhVHlwZSB7XG5cdFVOS05PV04sXG5cdE5VTUJFUixcblx0U1RSSU5HLFxuXHRCT09MRUFOLFxuXHREQVRFLFxuXHRDVVNUT01cbn1cblxuZXhwb3J0IGVudW0gR3VpQ2VsbFZpZXcge1xuXHRURVhULFxuXHRDSElQLFxuXHRMSU5LLFxuXHRJTUFHRSxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSEVDS0JPWCxcblx0Q1VTVE9NLFxuXHRCQVIsXG5cdFBFUkNFTlRBR0VfQkFSLFxuXHRQRVJDRU5UQUdFXG59XG5cbmV4cG9ydCBlbnVtIEd1aU51bWJlckNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aVN0cmluZ0NlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aUJvb2xlYW5DZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUCxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0ZUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUGFnaW5nQ29uZmlnIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRwYWdlPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplcz86IEFycmF5PG51bWJlcj47XG5cblx0cGFnZXJUb3A/OiBib29sZWFuO1xuXG5cdHBhZ2VyQm90dG9tPzogYm9vbGVhbjtcblxuXHRkaXNwbGF5Pzogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheTtcblxufVxuXG5leHBvcnQgZW51bSBHdWlUaGVtZSB7XG5cdEZBQlJJQyxcblx0TUFURVJJQUwsXG5cdExJR0hULFxuXHREQVJLLFxuXHRHRU5FUklDXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd0NvbG9yaW5nIHtcblx0Tk9ORSxcblx0RVZFTixcblx0T0REXG59XG5cbmV4cG9ydCBlbnVtIEd1aVNvcnRpbmdPcmRlciB7XG5cdE5PTkUsXG5cdEFTQyxcblx0REVTQ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRtdWx0aVNvcnRpbmc/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRmlsdGVyaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVF1aWNrRmlsdGVycyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWFyY2hpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGhpZ2hsaWdodGluZz86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0b3A/OiBib29sZWFuO1xuXG5cdGJvdHRvbT86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5TdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHN1bW1hcmllc1R5cGVzPzogQXJyYXk8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5Tb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdG9yZGVyPzogR3VpU29ydGluZ09yZGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uQ2VsbEVkaXRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uTWVudSB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c29ydD86IGJvb2xlYW47XG5cblx0ZmlsdGVyPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpUGFnaW5nRGlzcGxheSB7XG5cdEJBU0lDLFxuXHRBRFZBTkNFRFxufVxuXG5leHBvcnQgZW51bSBHdWlDb2x1bW5BbGlnbiB7XG5cdFJJR0hULFxuXHRDRU5URVIsXG5cdExFRlRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dEZXRhaWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRlbXBsYXRlPzogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xufVxuIl19