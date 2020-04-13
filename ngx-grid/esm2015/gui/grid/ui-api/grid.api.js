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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpLWFwaS9ncmlkLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsK0JBeUJDOzs7SUF2QkEsMEJBQStCOztJQUUvQix5QkFBNEI7O0lBRTVCLHlCQUFpRDs7SUFFakQsMkJBQWdCOztJQUVoQixtQ0FBd0I7O0lBRXhCLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQiwwQkFBZ0M7O0lBRWhDLDhCQUErQjs7SUFFL0IsNEJBQTJCOztJQUUzQixnQ0FBbUM7O0lBRW5DLDRCQUE2Qjs7OztJQUk3QixVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7O0lBSU4sT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osUUFBSztJQUNMLE9BQUk7SUFDSixTQUFNO0lBQ04sV0FBUTtJQUNSLFNBQU07SUFDTixNQUFHO0lBQ0gsaUJBQWM7SUFDZCxjQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0lBSVYsT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTtJQUNKLFdBQVE7Ozs7Ozs7Ozs7SUFJUixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7O0FBR0wscUNBZ0JDOzs7SUFkQSxrQ0FBa0I7O0lBRWxCLCtCQUFjOztJQUVkLG1DQUFrQjs7SUFFbEIsb0NBQTBCOztJQUUxQixtQ0FBbUI7O0lBRW5CLHNDQUFzQjs7SUFFdEIsa0NBQW9DOzs7O0lBS3BDLFNBQU07SUFDTixXQUFRO0lBQ1IsUUFBSztJQUNMLE9BQUk7SUFDSixVQUFPOzs7Ozs7Ozs7O0lBSVAsT0FBSTtJQUNKLE9BQUk7SUFDSixNQUFHOzs7Ozs7OztJQUlILE9BQUk7SUFDSixNQUFHO0lBQ0gsT0FBSTs7Ozs7Ozs7O0FBR0wsZ0NBU0M7OztJQVBBLDZCQUFrQjs7Ozs7SUFLbEIsa0NBQXVCOzs7OztBQUl4QixrQ0FJQzs7O0lBRkEsK0JBQWtCOzs7OztBQUluQixxQ0FJQzs7O0lBRkEsa0NBQWtCOzs7OztBQUluQixrQ0FVQzs7O0lBUkEsK0JBQWtCOztJQUVsQixvQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsOEJBQWdCOzs7OztBQUlqQixrQ0FRQzs7O0lBTkEsK0JBQWtCOztJQUVsQiwyQkFBYzs7SUFFZCw4QkFBaUI7Ozs7O0FBSWxCLHdDQUtDOzs7SUFIQSxxQ0FBa0I7O0lBRWxCLDRDQUE0Qjs7Ozs7QUFHN0Isc0NBT0M7OztJQUxBLG1DQUFrQjs7SUFFbEIsbUNBQTZCOztJQUU3QixpQ0FBdUI7Ozs7O0FBR3hCLDBDQUlDOzs7SUFGQSx1Q0FBa0I7Ozs7O0FBSW5CLG1DQVVDOzs7SUFSQSxnQ0FBa0I7O0lBRWxCLDZCQUFlOztJQUVmLCtCQUFpQjs7SUFFakIsdUNBQXlCOzs7O0lBS3pCLFFBQUs7SUFDTCxXQUFROzs7Ozs7O0lBSVIsUUFBSztJQUNMLFNBQU07SUFDTixPQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVNZXRob2QgPSAoY2VsbFZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kO1xuXG5cdGhlYWRlcj86IHN0cmluZztcblxuXHRjdXN0b21UZW1wbGF0ZT86IHN0cmluZztcblxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdHN1bW1hcmllcz86IEd1aUNvbHVtblN1bW1hcmllcztcblxuXHRzb3J0aW5nPzogR3VpQ29sdW1uU29ydGluZztcblxuXHRjZWxsRWRpdGluZz86IEd1aUNvbHVtbkNlbGxFZGl0aW5nO1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGFUeXBlIHtcblx0VU5LTk9XTixcblx0TlVNQkVSLFxuXHRTVFJJTkcsXG5cdEJPT0xFQU4sXG5cdERBVEUsXG5cdENVU1RPTVxufVxuXG5leHBvcnQgZW51bSBHdWlDZWxsVmlldyB7XG5cdFRFWFQsXG5cdENISVAsXG5cdExJTkssXG5cdElNQUdFLFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENIRUNLQk9YLFxuXHRDVVNUT00sXG5cdEJBUixcblx0UEVSQ0VOVEFHRV9CQVIsXG5cdFBFUkNFTlRBR0Vcbn1cblxuZXhwb3J0IGVudW0gR3VpTnVtYmVyQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGVudW0gR3VpU3RyaW5nQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGVudW0gR3VpQm9vbGVhbkNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBHdWlEYXRlQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlQYWdpbmdDb25maWcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHBhZ2U/OiBudW1iZXI7XG5cblx0cGFnZVNpemU/OiBudW1iZXI7XG5cblx0cGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPjtcblxuXHRwYWdlclRvcD86IGJvb2xlYW47XG5cblx0cGFnZXJCb3R0b20/OiBib29sZWFuO1xuXG5cdGRpc3BsYXk/OiBzdHJpbmcgfCBHdWlQYWdpbmdEaXNwbGF5O1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVRoZW1lIHtcblx0RkFCUklDLFxuXHRNQVRFUklBTCxcblx0TElHSFQsXG5cdERBUkssXG5cdEdFTkVSSUNcbn1cblxuZXhwb3J0IGVudW0gR3VpUm93Q29sb3Jpbmcge1xuXHROT05FLFxuXHRFVkVOLFxuXHRPRERcbn1cblxuZXhwb3J0IGVudW0gR3VpU29ydGluZ09yZGVyIHtcblx0Tk9ORSxcblx0QVNDLFxuXHRERVNDXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBleHBlcmltZW50YWxcblx0ICovXG5cdG11bHRpU29ydGluZz86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlGaWx0ZXJpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUXVpY2tGaWx0ZXJzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNlYXJjaGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0aGlnaGxpZ2h0aW5nPzogYm9vbGVhbjtcblxuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblxuXHRwaHJhc2U/OiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRvcD86IGJvb2xlYW47XG5cblx0Ym90dG9tPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtblN1bW1hcmllcyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0c3VtbWFyaWVzVHlwZXM/OiBBcnJheTxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtblNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cblx0b3JkZXI/OiBHdWlTb3J0aW5nT3JkZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5DZWxsRWRpdGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5NZW51IHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzb3J0PzogYm9vbGVhbjtcblxuXHRmaWx0ZXI/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgZW51bSBHdWlQYWdpbmdEaXNwbGF5IHtcblx0QkFTSUMsXG5cdEFEVkFOQ0VEXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNvbHVtbkFsaWduIHtcblx0UklHSFQsXG5cdENFTlRFUixcblx0TEVGVFxufVxuIl19