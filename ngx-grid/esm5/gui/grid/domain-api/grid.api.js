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
var GuiDataType = {
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
var GuiCellView = {
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
var GuiNumberCellView = {
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
var GuiStringCellView = {
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
var GuiBooleanCellView = {
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
var GuiDateCellView = {
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
var GuiTheme = {
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
var GuiRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
export { GuiRowColoring };
GuiRowColoring[GuiRowColoring.NONE] = 'NONE';
GuiRowColoring[GuiRowColoring.EVEN] = 'EVEN';
GuiRowColoring[GuiRowColoring.ODD] = 'ODD';
/** @enum {number} */
var GuiSortingOrder = {
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
var GuiPagingDisplay = {
    BASIC: 0,
    ADVANCED: 1,
};
export { GuiPagingDisplay };
GuiPagingDisplay[GuiPagingDisplay.BASIC] = 'BASIC';
GuiPagingDisplay[GuiPagingDisplay.ADVANCED] = 'ADVANCED';
/** @enum {number} */
var GuiColumnAlign = {
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
/**
 * @record
 */
export function GuiTitlePanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiTitlePanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiTitlePanel.prototype.template;
}
/**
 * @record
 */
export function GuiFooterPanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiFooterPanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiFooterPanel.prototype.template;
}
/**
 * @record
 */
export function GuiInfoPanel() { }
if (false) {
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.enabled;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.infoDialog;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.columnsManager;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2RvbWFpbi1hcGkvZ3JpZC5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLCtCQXlCQzs7O0lBdkJBLDBCQUErQjs7SUFFL0IseUJBQTRCOztJQUU1Qix5QkFBaUQ7O0lBRWpELDJCQUFnQjs7SUFFaEIsbUNBQXdCOztJQUV4QiwwQkFBd0I7O0lBRXhCLDRCQUFrQjs7SUFFbEIsMEJBQWdDOztJQUVoQyw4QkFBK0I7O0lBRS9CLDRCQUEyQjs7SUFFM0IsZ0NBQW1DOztJQUVuQyw0QkFBNkI7Ozs7SUFJN0IsVUFBTztJQUNQLFNBQU07SUFDTixTQUFNO0lBQ04sVUFBTztJQUNQLE9BQUk7SUFDSixTQUFNOzs7Ozs7Ozs7OztJQUlOLE9BQUk7SUFDSixPQUFJO0lBQ0osT0FBSTtJQUNKLFFBQUs7SUFDTCxPQUFJO0lBQ0osU0FBTTtJQUNOLFdBQVE7SUFDUixTQUFNO0lBQ04sTUFBRztJQUNILGlCQUFjO0lBQ2QsY0FBVTs7Ozs7Ozs7Ozs7Ozs7OztJQUlWLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztJQUlKLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztJQUlKLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7SUFDSixXQUFROzs7Ozs7Ozs7O0lBSVIsT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7OztBQUdMLHFDQWdCQzs7O0lBZEEsa0NBQWtCOztJQUVsQiwrQkFBYzs7SUFFZCxtQ0FBa0I7O0lBRWxCLG9DQUEwQjs7SUFFMUIsbUNBQW1COztJQUVuQixzQ0FBc0I7O0lBRXRCLGtDQUFvQzs7OztJQUtwQyxTQUFNO0lBQ04sV0FBUTtJQUNSLFFBQUs7SUFDTCxPQUFJO0lBQ0osVUFBTzs7Ozs7Ozs7OztJQUlQLE9BQUk7SUFDSixPQUFJO0lBQ0osTUFBRzs7Ozs7Ozs7SUFJSCxPQUFJO0lBQ0osTUFBRztJQUNILE9BQUk7Ozs7Ozs7OztBQUdMLGdDQVNDOzs7SUFQQSw2QkFBa0I7Ozs7O0lBS2xCLGtDQUF1Qjs7Ozs7QUFJeEIsa0NBSUM7OztJQUZBLCtCQUFrQjs7Ozs7QUFJbkIscUNBSUM7OztJQUZBLGtDQUFrQjs7Ozs7QUFJbkIsa0NBVUM7OztJQVJBLCtCQUFrQjs7SUFFbEIsb0NBQXVCOztJQUV2QixtQ0FBcUI7O0lBRXJCLDhCQUFnQjs7Ozs7QUFJakIsa0NBUUM7OztJQU5BLCtCQUFrQjs7SUFFbEIsMkJBQWM7O0lBRWQsOEJBQWlCOzs7OztBQUlsQix3Q0FLQzs7O0lBSEEscUNBQWtCOztJQUVsQiw0Q0FBNEI7Ozs7O0FBRzdCLHNDQU9DOzs7SUFMQSxtQ0FBa0I7O0lBRWxCLG1DQUE2Qjs7SUFFN0IsaUNBQXVCOzs7OztBQUd4QiwwQ0FJQzs7O0lBRkEsdUNBQWtCOzs7OztBQUluQixtQ0FVQzs7O0lBUkEsZ0NBQWtCOztJQUVsQiw2QkFBZTs7SUFFZiwrQkFBaUI7O0lBRWpCLHVDQUF5Qjs7OztJQUt6QixRQUFLO0lBQ0wsV0FBUTs7Ozs7OztJQUlSLFFBQUs7SUFDTCxTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0FBR0wsa0NBS0M7OztJQUhBLCtCQUFrQjs7SUFFbEIsZ0NBQWlDOzs7OztBQUdsQyxtQ0FHQzs7O0lBRkEsZ0NBQWtCOztJQUNsQixpQ0FBNkM7Ozs7O0FBRzlDLG9DQUdDOzs7SUFGQSxpQ0FBaUI7O0lBQ2pCLGtDQUE2Qzs7Ozs7QUFHOUMsa0NBS0M7OztJQUpBLCtCQUFrQjs7SUFDbEIsa0NBQXFCOztJQUNyQixzQ0FBd0I7O0lBQ3hCLGtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEZpZWxkQWNjZXNzb3IgPSAoZWxlbWVudD86IGFueSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgVmlld1RlbXBsYXRlTWV0aG9kID0gKGNlbGxWYWx1ZTogYW55KSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uIHtcblxuXHRmaWVsZD86IHN0cmluZyB8IEZpZWxkQWNjZXNzb3I7XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aURhdGFUeXBlO1xuXG5cdHZpZXc/OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZDtcblxuXHRoZWFkZXI/OiBzdHJpbmc7XG5cblx0Y3VzdG9tVGVtcGxhdGU/OiBzdHJpbmc7XG5cblx0d2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0YWxpZ24/OiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbjtcblxuXHRzdW1tYXJpZXM/OiBHdWlDb2x1bW5TdW1tYXJpZXM7XG5cblx0c29ydGluZz86IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0Y2VsbEVkaXRpbmc/OiBHdWlDb2x1bW5DZWxsRWRpdGluZztcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xufVxuXG5leHBvcnQgZW51bSBHdWlEYXRhVHlwZSB7XG5cdFVOS05PV04sXG5cdE5VTUJFUixcblx0U1RSSU5HLFxuXHRCT09MRUFOLFxuXHREQVRFLFxuXHRDVVNUT01cbn1cblxuZXhwb3J0IGVudW0gR3VpQ2VsbFZpZXcge1xuXHRURVhULFxuXHRDSElQLFxuXHRMSU5LLFxuXHRJTUFHRSxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSEVDS0JPWCxcblx0Q1VTVE9NLFxuXHRCQVIsXG5cdFBFUkNFTlRBR0VfQkFSLFxuXHRQRVJDRU5UQUdFXG59XG5cbmV4cG9ydCBlbnVtIEd1aU51bWJlckNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aVN0cmluZ0NlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aUJvb2xlYW5DZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUCxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0ZUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUGFnaW5nQ29uZmlnIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRwYWdlPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplcz86IEFycmF5PG51bWJlcj47XG5cblx0cGFnZXJUb3A/OiBib29sZWFuO1xuXG5cdHBhZ2VyQm90dG9tPzogYm9vbGVhbjtcblxuXHRkaXNwbGF5Pzogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheTtcblxufVxuXG5leHBvcnQgZW51bSBHdWlUaGVtZSB7XG5cdEZBQlJJQyxcblx0TUFURVJJQUwsXG5cdExJR0hULFxuXHREQVJLLFxuXHRHRU5FUklDXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd0NvbG9yaW5nIHtcblx0Tk9ORSxcblx0RVZFTixcblx0T0REXG59XG5cbmV4cG9ydCBlbnVtIEd1aVNvcnRpbmdPcmRlciB7XG5cdE5PTkUsXG5cdEFTQyxcblx0REVTQ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRtdWx0aVNvcnRpbmc/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRmlsdGVyaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVF1aWNrRmlsdGVycyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWFyY2hpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGhpZ2hsaWdodGluZz86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0b3A/OiBib29sZWFuO1xuXG5cdGJvdHRvbT86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5TdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHN1bW1hcmllc1R5cGVzPzogQXJyYXk8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5Tb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdG9yZGVyPzogR3VpU29ydGluZ09yZGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uQ2VsbEVkaXRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uTWVudSB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c29ydD86IGJvb2xlYW47XG5cblx0ZmlsdGVyPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpUGFnaW5nRGlzcGxheSB7XG5cdEJBU0lDLFxuXHRBRFZBTkNFRFxufVxuXG5leHBvcnQgZW51bSBHdWlDb2x1bW5BbGlnbiB7XG5cdFJJR0hULFxuXHRDRU5URVIsXG5cdExFRlRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dEZXRhaWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRlbXBsYXRlPzogKGl0ZW06IGFueSkgPT4gc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVRpdGxlUGFuZWwge1xuXHRlbmFibGVkPzogYm9vbGVhbjtcblx0dGVtcGxhdGU/OiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRm9vdGVyUGFuZWwge1xuXHRlbmFibGVkPzogYm9vbGVhblxuXHR0ZW1wbGF0ZT86IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlJbmZvUGFuZWwge1xuXHRlbmFibGVkPzogYm9vbGVhbjtcblx0aW5mb0RpYWxvZz86IGJvb2xlYW47XG5cdGNvbHVtbnNNYW5hZ2VyPzpib29sZWFuO1xuXHRzb3VyY2VTaXplPzogYm9vbGVhblxufVxuIl19