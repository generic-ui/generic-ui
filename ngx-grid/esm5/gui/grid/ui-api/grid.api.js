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
    GuiColumn.prototype.aggregation;
    /** @type {?|undefined} */
    GuiColumn.prototype.sorting;
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
};
export { GuiTheme };
GuiTheme[GuiTheme.FABRIC] = 'FABRIC';
GuiTheme[GuiTheme.MATERIAL] = 'MATERIAL';
GuiTheme[GuiTheme.LIGHT] = 'LIGHT';
GuiTheme[GuiTheme.DARK] = 'DARK';
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
export function GuiAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiAggregation.prototype.top;
    /** @type {?|undefined} */
    GuiAggregation.prototype.bottom;
}
/**
 * @record
 */
export function GuiColumnAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.aggregationTypes;
}
/**
 * @record
 */
export function GuiColumnSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnSorting.prototype.order;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpLWFwaS9ncmlkLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsK0JBbUJDOzs7SUFqQkEsMEJBQStCOztJQUUvQix5QkFBNEI7O0lBRTVCLHlCQUFpRDs7SUFFakQsMkJBQWdCOztJQUVoQixtQ0FBd0I7O0lBRXhCLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQixnQ0FBbUM7O0lBRW5DLDRCQUEyQjs7OztJQUkzQixVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7O0lBSU4sT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osUUFBSztJQUNMLE9BQUk7SUFDSixTQUFNO0lBQ04sV0FBUTtJQUNSLFNBQU07Ozs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCxxQ0FnQkM7OztJQWRBLGtDQUFrQjs7SUFFbEIsK0JBQWM7O0lBRWQsbUNBQWtCOztJQUVsQixvQ0FBMEI7O0lBRTFCLG1DQUFtQjs7SUFFbkIsc0NBQXNCOztJQUV0QixrQ0FBb0M7Ozs7SUFLcEMsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixNQUFHOzs7Ozs7OztJQUlILE9BQUk7SUFDSixNQUFHO0lBQ0gsT0FBSTs7Ozs7Ozs7O0FBR0wsZ0NBU0M7OztJQVBBLDZCQUFrQjs7Ozs7SUFLbEIsa0NBQXVCOzs7OztBQUl4QixrQ0FJQzs7O0lBRkEsK0JBQWtCOzs7OztBQUluQixxQ0FJQzs7O0lBRkEsa0NBQWtCOzs7OztBQUluQixrQ0FVQzs7O0lBUkEsK0JBQWtCOztJQUVsQixvQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsOEJBQWdCOzs7OztBQUlqQixvQ0FRQzs7O0lBTkEsaUNBQWtCOztJQUVsQiw2QkFBYzs7SUFFZCxnQ0FBaUI7Ozs7O0FBSWxCLDBDQUtDOzs7SUFIQSx1Q0FBa0I7O0lBRWxCLGdEQUE4Qjs7Ozs7QUFHL0Isc0NBS0M7OztJQUhBLG1DQUFrQjs7SUFFbEIsaUNBQXVCOzs7OztBQUd4QixtQ0FVQzs7O0lBUkEsZ0NBQWtCOztJQUVsQiw2QkFBZTs7SUFFZiwrQkFBaUI7O0lBRWpCLHVDQUF5Qjs7OztJQUt6QixRQUFLO0lBQ0wsV0FBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEZpZWxkQWNjZXNzb3IgPSAoZWxlbWVudD86IGFueSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgVmlld1RlbXBsYXRlTWV0aG9kID0gKGNlbGxWYWx1ZTogYW55KSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uIHtcblxuXHRmaWVsZD86IHN0cmluZyB8IEZpZWxkQWNjZXNzb3I7XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aURhdGFUeXBlO1xuXG5cdHZpZXc/OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZDtcblxuXHRoZWFkZXI/OiBzdHJpbmc7XG5cblx0Y3VzdG9tVGVtcGxhdGU/OiBzdHJpbmc7XG5cblx0d2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0YWdncmVnYXRpb24/OiBHdWlDb2x1bW5BZ2dyZWdhdGlvbjtcblxuXHRzb3J0aW5nPzogR3VpQ29sdW1uU29ydGluZztcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0YVR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Q0hJUCxcblx0TElOSyxcblx0SU1BR0UsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hFQ0tCT1gsXG5cdENVU1RPTVxufVxuXG5leHBvcnQgZW51bSBHdWlOdW1iZXJDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlTdHJpbmdDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlCb29sZWFuQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVAsXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGVDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVBhZ2luZ0NvbmZpZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGFnZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+O1xuXG5cdHBhZ2VyVG9wPzogYm9vbGVhbjtcblxuXHRwYWdlckJvdHRvbT86IGJvb2xlYW47XG5cblx0ZGlzcGxheT86IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpVGhlbWUge1xuXHRGQUJSSUMsXG5cdE1BVEVSSUFMLFxuXHRMSUdIVCxcblx0REFSS1xufVxuXG5leHBvcnQgZW51bSBHdWlSb3dDb2xvcmluZyB7XG5cdE5PTkUsXG5cdEVWRU4sXG5cdE9ERFxufVxuXG5leHBvcnQgZW51bSBHdWlTb3J0aW5nT3JkZXIge1xuXHROT05FLFxuXHRBU0MsXG5cdERFU0Ncbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0bXVsdGlTb3J0aW5nPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZpbHRlcmluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlRdWlja0ZpbHRlcnMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU2VhcmNoaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRoaWdobGlnaHRpbmc/OiBib29sZWFuO1xuXG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG5cdHBocmFzZT86IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUFnZ3JlZ2F0aW9uIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0b3A/OiBib29sZWFuO1xuXG5cdGJvdHRvbT86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5BZ2dyZWdhdGlvbiB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0YWdncmVnYXRpb25UeXBlcz86IEFycmF5PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0b3JkZXI/OiBHdWlTb3J0aW5nT3JkZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5NZW51IHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzb3J0PzogYm9vbGVhbjtcblxuXHRmaWx0ZXI/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgZW51bSBHdWlQYWdpbmdEaXNwbGF5IHtcblx0QkFTSUMsXG5cdEFEVkFOQ0VEXG59XG4iXX0=