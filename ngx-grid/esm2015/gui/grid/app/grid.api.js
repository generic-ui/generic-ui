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
    GuiColumn.prototype.aggregation;
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
}
/** @enum {number} */
const GuiTheme = {
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
const GuiRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
export { GuiRowColoring };
GuiRowColoring[GuiRowColoring.NONE] = 'NONE';
GuiRowColoring[GuiRowColoring.EVEN] = 'EVEN';
GuiRowColoring[GuiRowColoring.ODD] = 'ODD';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2FwcC9ncmlkLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsK0JBZUM7OztJQWJBLDBCQUErQjs7SUFFL0IseUJBQTRCOztJQUU1Qix5QkFBaUQ7O0lBRWpELDJCQUFnQjs7SUFFaEIsbUNBQXdCOztJQUV4QiwwQkFBd0I7O0lBRXhCLGdDQUFtQzs7OztJQUluQyxVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7O0lBSU4sT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osUUFBSztJQUNMLE9BQUk7SUFDSixTQUFNO0lBQ04sV0FBUTtJQUNSLFNBQU07Ozs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCxxQ0FjQzs7O0lBWkEsa0NBQWtCOztJQUVsQiwrQkFBYzs7SUFFZCxtQ0FBa0I7O0lBRWxCLG9DQUEwQjs7SUFFMUIsbUNBQW1COztJQUVuQixzQ0FBc0I7Ozs7SUFLdEIsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixNQUFHOzs7Ozs7Ozs7QUFHSixnQ0FTQzs7O0lBUEEsNkJBQWtCOzs7OztJQUtsQixrQ0FBdUI7Ozs7O0FBSXhCLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLHFDQUlDOzs7SUFGQSxrQ0FBa0I7Ozs7O0FBSW5CLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLG9DQVFDOzs7SUFOQSxpQ0FBa0I7O0lBRWxCLDZCQUFjOztJQUVkLGdDQUFpQjs7Ozs7QUFJbEIsMENBS0M7OztJQUhBLHVDQUFrQjs7SUFFbEIsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVNZXRob2QgPSAoY2VsbFZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kO1xuXG5cdGhlYWRlcj86IHN0cmluZztcblxuXHRjdXN0b21UZW1wbGF0ZT86IHN0cmluZztcblxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRhZ2dyZWdhdGlvbj86IEd1aUNvbHVtbkFnZ3JlZ2F0aW9uO1xufVxuXG5leHBvcnQgZW51bSBHdWlEYXRhVHlwZSB7XG5cdFVOS05PV04sXG5cdE5VTUJFUixcblx0U1RSSU5HLFxuXHRCT09MRUFOLFxuXHREQVRFLFxuXHRDVVNUT01cbn1cblxuZXhwb3J0IGVudW0gR3VpQ2VsbFZpZXcge1xuXHRURVhULFxuXHRDSElQLFxuXHRMSU5LLFxuXHRJTUFHRSxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSEVDS0JPWCxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aU51bWJlckNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aVN0cmluZ0NlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aUJvb2xlYW5DZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUCxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0ZUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUGFnaW5nQ29uZmlnIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRwYWdlPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplcz86IEFycmF5PG51bWJlcj47XG5cblx0cGFnZXJUb3A/OiBib29sZWFuO1xuXG5cdHBhZ2VyQm90dG9tPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgZW51bSBHdWlUaGVtZSB7XG5cdEZBQlJJQyxcblx0TUFURVJJQUwsXG5cdExJR0hULFxuXHREQVJLXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd0NvbG9yaW5nIHtcblx0Tk9ORSxcblx0RVZFTixcblx0T0REXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdG11bHRpU29ydGluZz86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlGaWx0ZXJpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUXVpY2tGaWx0ZXJzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNlYXJjaGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlBZ2dyZWdhdGlvbiB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dG9wPzogYm9vbGVhbjtcblxuXHRib3R0b20/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uQWdncmVnYXRpb24ge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGFnZ3JlZ2F0aW9uVHlwZXM/OiBBcnJheTxhbnk+O1xufVxuIl19