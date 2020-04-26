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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUtYXBpL2dyaWQuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSwrQkF5QkM7OztJQXZCQSwwQkFBK0I7O0lBRS9CLHlCQUE0Qjs7SUFFNUIseUJBQWlEOztJQUVqRCwyQkFBZ0I7O0lBRWhCLG1DQUF3Qjs7SUFFeEIsMEJBQXdCOztJQUV4Qiw0QkFBa0I7O0lBRWxCLDBCQUFnQzs7SUFFaEMsOEJBQStCOztJQUUvQiw0QkFBMkI7O0lBRTNCLGdDQUFtQzs7SUFFbkMsNEJBQTZCOzs7O0lBSTdCLFVBQU87SUFDUCxTQUFNO0lBQ04sU0FBTTtJQUNOLFVBQU87SUFDUCxPQUFJO0lBQ0osU0FBTTs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixRQUFLO0lBQ0wsT0FBSTtJQUNKLFNBQU07SUFDTixXQUFRO0lBQ1IsU0FBTTtJQUNOLE1BQUc7SUFDSCxpQkFBYztJQUNkLGNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJVixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCxxQ0FnQkM7OztJQWRBLGtDQUFrQjs7SUFFbEIsK0JBQWM7O0lBRWQsbUNBQWtCOztJQUVsQixvQ0FBMEI7O0lBRTFCLG1DQUFtQjs7SUFFbkIsc0NBQXNCOztJQUV0QixrQ0FBb0M7Ozs7SUFLcEMsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTtJQUNKLFVBQU87Ozs7Ozs7Ozs7SUFJUCxPQUFJO0lBQ0osT0FBSTtJQUNKLE1BQUc7Ozs7Ozs7O0lBSUgsT0FBSTtJQUNKLE1BQUc7SUFDSCxPQUFJOzs7Ozs7Ozs7QUFHTCxnQ0FTQzs7O0lBUEEsNkJBQWtCOzs7OztJQUtsQixrQ0FBdUI7Ozs7O0FBSXhCLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLHFDQUlDOzs7SUFGQSxrQ0FBa0I7Ozs7O0FBSW5CLGtDQVVDOzs7SUFSQSwrQkFBa0I7O0lBRWxCLG9DQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQiw4QkFBZ0I7Ozs7O0FBSWpCLGtDQVFDOzs7SUFOQSwrQkFBa0I7O0lBRWxCLDJCQUFjOztJQUVkLDhCQUFpQjs7Ozs7QUFJbEIsd0NBS0M7OztJQUhBLHFDQUFrQjs7SUFFbEIsNENBQTRCOzs7OztBQUc3QixzQ0FPQzs7O0lBTEEsbUNBQWtCOztJQUVsQixtQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7Ozs7QUFHeEIsMENBSUM7OztJQUZBLHVDQUFrQjs7Ozs7QUFJbkIsbUNBVUM7OztJQVJBLGdDQUFrQjs7SUFFbEIsNkJBQWU7O0lBRWYsK0JBQWlCOztJQUVqQix1Q0FBeUI7Ozs7SUFLekIsUUFBSztJQUNMLFdBQVE7Ozs7Ozs7SUFJUixRQUFLO0lBQ0wsU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztBQUdMLGtDQUtDOzs7SUFIQSwrQkFBa0I7O0lBRWxCLGdDQUFpQzs7Ozs7QUFHbEMsbUNBR0M7OztJQUZBLGdDQUFpQjs7SUFDakIsaUNBQTZDOzs7OztBQUc5QyxvQ0FHQzs7O0lBRkEsaUNBQWlCOztJQUNqQixrQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBGaWVsZEFjY2Vzc29yID0gKGVsZW1lbnQ/OiBhbnkpID0+IGFueTtcbmV4cG9ydCB0eXBlIFZpZXdUZW1wbGF0ZU1ldGhvZCA9IChjZWxsVmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbiB7XG5cblx0ZmllbGQ/OiBzdHJpbmcgfCBGaWVsZEFjY2Vzc29yO1xuXG5cdHR5cGU/OiBzdHJpbmcgfCBHdWlEYXRhVHlwZTtcblxuXHR2aWV3Pzogc3RyaW5nIHwgR3VpQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVNZXRob2Q7XG5cblx0aGVhZGVyPzogc3RyaW5nO1xuXG5cdGN1c3RvbVRlbXBsYXRlPzogc3RyaW5nO1xuXG5cdHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGFsaWduPzogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ247XG5cblx0c3VtbWFyaWVzPzogR3VpQ29sdW1uU3VtbWFyaWVzO1xuXG5cdHNvcnRpbmc/OiBHdWlDb2x1bW5Tb3J0aW5nO1xuXG5cdGNlbGxFZGl0aW5nPzogR3VpQ29sdW1uQ2VsbEVkaXRpbmc7XG5cblx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueTtcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0YVR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Q0hJUCxcblx0TElOSyxcblx0SU1BR0UsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hFQ0tCT1gsXG5cdENVU1RPTSxcblx0QkFSLFxuXHRQRVJDRU5UQUdFX0JBUixcblx0UEVSQ0VOVEFHRVxufVxuXG5leHBvcnQgZW51bSBHdWlOdW1iZXJDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlTdHJpbmdDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlCb29sZWFuQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVAsXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGVDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVBhZ2luZ0NvbmZpZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGFnZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+O1xuXG5cdHBhZ2VyVG9wPzogYm9vbGVhbjtcblxuXHRwYWdlckJvdHRvbT86IGJvb2xlYW47XG5cblx0ZGlzcGxheT86IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpVGhlbWUge1xuXHRGQUJSSUMsXG5cdE1BVEVSSUFMLFxuXHRMSUdIVCxcblx0REFSSyxcblx0R0VORVJJQ1xufVxuXG5leHBvcnQgZW51bSBHdWlSb3dDb2xvcmluZyB7XG5cdE5PTkUsXG5cdEVWRU4sXG5cdE9ERFxufVxuXG5leHBvcnQgZW51bSBHdWlTb3J0aW5nT3JkZXIge1xuXHROT05FLFxuXHRBU0MsXG5cdERFU0Ncbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0bXVsdGlTb3J0aW5nPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZpbHRlcmluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlRdWlja0ZpbHRlcnMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU2VhcmNoaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRoaWdobGlnaHRpbmc/OiBib29sZWFuO1xuXG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG5cdHBocmFzZT86IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVN1bW1hcmllcyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dG9wPzogYm9vbGVhbjtcblxuXHRib3R0b20/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzdW1tYXJpZXNUeXBlcz86IEFycmF5PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueTtcblxuXHRvcmRlcj86IEd1aVNvcnRpbmdPcmRlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbkNlbGxFZGl0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbk1lbnUge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHNvcnQ/OiBib29sZWFuO1xuXG5cdGZpbHRlcj86IGJvb2xlYW47XG5cblx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVBhZ2luZ0Rpc3BsYXkge1xuXHRCQVNJQyxcblx0QURWQU5DRURcbn1cblxuZXhwb3J0IGVudW0gR3VpQ29sdW1uQWxpZ24ge1xuXHRSSUdIVCxcblx0Q0VOVEVSLFxuXHRMRUZUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93RGV0YWlsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0ZW1wbGF0ZT86IChpdGVtOiBhbnkpID0+IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlUaXRsZVBhbmVsIHtcblx0ZW5hYmxlZD86IGJvb2xlYW5cblx0dGVtcGxhdGU/OiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRm9vdGVyUGFuZWwge1xuXHRlbmFibGVkPzogYm9vbGVhblxuXHR0ZW1wbGF0ZT86IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcbn1cbiJdfQ==