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
    GuiColumn.prototype.aggregation;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpLWFwaS9ncmlkLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsK0JBeUJDOzs7SUF2QkEsMEJBQStCOztJQUUvQix5QkFBNEI7O0lBRTVCLHlCQUFpRDs7SUFFakQsMkJBQWdCOztJQUVoQixtQ0FBd0I7O0lBRXhCLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQiwwQkFBZ0M7O0lBRWhDLGdDQUFtQzs7SUFFbkMsNEJBQTJCOztJQUUzQixnQ0FBbUM7O0lBRW5DLDRCQUE2Qjs7OztJQUk3QixVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7O0lBSU4sT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osUUFBSztJQUNMLE9BQUk7SUFDSixTQUFNO0lBQ04sV0FBUTtJQUNSLFNBQU07SUFDTixNQUFHO0lBQ0gsaUJBQWM7SUFDZCxjQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0lBSVYsT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTtJQUNKLFdBQVE7Ozs7Ozs7Ozs7SUFJUixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7O0FBR0wscUNBZ0JDOzs7SUFkQSxrQ0FBa0I7O0lBRWxCLCtCQUFjOztJQUVkLG1DQUFrQjs7SUFFbEIsb0NBQTBCOztJQUUxQixtQ0FBbUI7O0lBRW5CLHNDQUFzQjs7SUFFdEIsa0NBQW9DOzs7O0lBS3BDLFNBQU07SUFDTixXQUFRO0lBQ1IsUUFBSztJQUNMLE9BQUk7SUFDSixVQUFPOzs7Ozs7Ozs7O0lBSVAsT0FBSTtJQUNKLE9BQUk7SUFDSixNQUFHOzs7Ozs7OztJQUlILE9BQUk7SUFDSixNQUFHO0lBQ0gsT0FBSTs7Ozs7Ozs7O0FBR0wsZ0NBU0M7OztJQVBBLDZCQUFrQjs7Ozs7SUFLbEIsa0NBQXVCOzs7OztBQUl4QixrQ0FJQzs7O0lBRkEsK0JBQWtCOzs7OztBQUluQixxQ0FJQzs7O0lBRkEsa0NBQWtCOzs7OztBQUluQixrQ0FVQzs7O0lBUkEsK0JBQWtCOztJQUVsQixvQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsOEJBQWdCOzs7OztBQUlqQixvQ0FRQzs7O0lBTkEsaUNBQWtCOztJQUVsQiw2QkFBYzs7SUFFZCxnQ0FBaUI7Ozs7O0FBSWxCLDBDQUtDOzs7SUFIQSx1Q0FBa0I7O0lBRWxCLGdEQUE4Qjs7Ozs7QUFHL0Isc0NBT0M7OztJQUxBLG1DQUFrQjs7SUFFbEIsbUNBQTZCOztJQUU3QixpQ0FBdUI7Ozs7O0FBR3hCLDBDQUlDOzs7SUFGQSx1Q0FBa0I7Ozs7O0FBSW5CLG1DQVVDOzs7SUFSQSxnQ0FBa0I7O0lBRWxCLDZCQUFlOztJQUVmLCtCQUFpQjs7SUFFakIsdUNBQXlCOzs7O0lBS3pCLFFBQUs7SUFDTCxXQUFROzs7Ozs7O0lBSVIsUUFBSztJQUNMLFNBQU07SUFDTixPQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVNZXRob2QgPSAoY2VsbFZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kO1xuXG5cdGhlYWRlcj86IHN0cmluZztcblxuXHRjdXN0b21UZW1wbGF0ZT86IHN0cmluZztcblxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdGFnZ3JlZ2F0aW9uPzogR3VpQ29sdW1uQWdncmVnYXRpb247XG5cblx0c29ydGluZz86IEd1aUNvbHVtblNvcnRpbmc7XG5cblx0Y2VsbEVkaXRpbmc/OiBHdWlDb2x1bW5DZWxsRWRpdGluZztcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xufVxuXG5leHBvcnQgZW51bSBHdWlEYXRhVHlwZSB7XG5cdFVOS05PV04sXG5cdE5VTUJFUixcblx0U1RSSU5HLFxuXHRCT09MRUFOLFxuXHREQVRFLFxuXHRDVVNUT01cbn1cblxuZXhwb3J0IGVudW0gR3VpQ2VsbFZpZXcge1xuXHRURVhULFxuXHRDSElQLFxuXHRMSU5LLFxuXHRJTUFHRSxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSEVDS0JPWCxcblx0Q1VTVE9NLFxuXHRCQVIsXG5cdFBFUkNFTlRBR0VfQkFSLFxuXHRQRVJDRU5UQUdFXG59XG5cbmV4cG9ydCBlbnVtIEd1aU51bWJlckNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aVN0cmluZ0NlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aUJvb2xlYW5DZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUCxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0ZUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUGFnaW5nQ29uZmlnIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRwYWdlPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplcz86IEFycmF5PG51bWJlcj47XG5cblx0cGFnZXJUb3A/OiBib29sZWFuO1xuXG5cdHBhZ2VyQm90dG9tPzogYm9vbGVhbjtcblxuXHRkaXNwbGF5Pzogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheTtcblxufVxuXG5leHBvcnQgZW51bSBHdWlUaGVtZSB7XG5cdEZBQlJJQyxcblx0TUFURVJJQUwsXG5cdExJR0hULFxuXHREQVJLLFxuXHRHRU5FUklDXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd0NvbG9yaW5nIHtcblx0Tk9ORSxcblx0RVZFTixcblx0T0REXG59XG5cbmV4cG9ydCBlbnVtIEd1aVNvcnRpbmdPcmRlciB7XG5cdE5PTkUsXG5cdEFTQyxcblx0REVTQ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRtdWx0aVNvcnRpbmc/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRmlsdGVyaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVF1aWNrRmlsdGVycyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWFyY2hpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGhpZ2hsaWdodGluZz86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQWdncmVnYXRpb24ge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRvcD86IGJvb2xlYW47XG5cblx0Ym90dG9tPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbkFnZ3JlZ2F0aW9uIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRhZ2dyZWdhdGlvblR5cGVzPzogQXJyYXk8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5Tb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdG9yZGVyPzogR3VpU29ydGluZ09yZGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uQ2VsbEVkaXRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uTWVudSB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c29ydD86IGJvb2xlYW47XG5cblx0ZmlsdGVyPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpUGFnaW5nRGlzcGxheSB7XG5cdEJBU0lDLFxuXHRBRFZBTkNFRFxufVxuXG5leHBvcnQgZW51bSBHdWlDb2x1bW5BbGlnbiB7XG5cdFJJR0hULFxuXHRDRU5URVIsXG5cdExFRlRcbn1cbiJdfQ==