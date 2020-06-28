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
export function GuiPaging() { }
if (false) {
    /** @type {?|undefined} */
    GuiPaging.prototype.enabled;
    /** @type {?|undefined} */
    GuiPaging.prototype.page;
    /** @type {?|undefined} */
    GuiPaging.prototype.pageSize;
    /** @type {?|undefined} */
    GuiPaging.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiPaging.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiPaging.prototype.pagerBottom;
    /** @type {?|undefined} */
    GuiPaging.prototype.display;
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
    GuiInfoPanel.prototype.schemaManager;
    /** @type {?|undefined} */
    GuiInfoPanel.prototype.sourceSize;
}
/** @enum {number} */
var GuiRowSelectionType = {
    ROW: 0,
    CHECKBOX: 1,
};
export { GuiRowSelectionType };
GuiRowSelectionType[GuiRowSelectionType.ROW] = 'ROW';
GuiRowSelectionType[GuiRowSelectionType.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
var GuiRowSelectionMode = {
    SINGLE: 0,
    MULTIPLE: 1,
};
export { GuiRowSelectionMode };
GuiRowSelectionMode[GuiRowSelectionMode.SINGLE] = 'SINGLE';
GuiRowSelectionMode[GuiRowSelectionMode.MULTIPLE] = 'MULTIPLE';
/**
 * @record
 */
export function GuiRowSelection() { }
if (false) {
    /** @type {?|undefined} */
    GuiRowSelection.prototype.enabled;
    /** @type {?|undefined} */
    GuiRowSelection.prototype.type;
    /** @type {?|undefined} */
    GuiRowSelection.prototype.mode;
}
/**
 * @record
 */
export function GuiSelectedRow() { }
if (false) {
    /** @type {?|undefined} */
    GuiSelectedRow.prototype.data;
    /** @type {?} */
    GuiSelectedRow.prototype.index;
    /** @type {?} */
    GuiSelectedRow.prototype.itemId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSwrQkF3QkM7OztJQXRCQSwwQkFBK0I7O0lBRS9CLHlCQUE0Qjs7SUFFNUIseUJBQWlEOztJQUVqRCwyQkFBZ0I7O0lBRWhCLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQiwwQkFBZ0M7O0lBRWhDLDhCQUErQjs7SUFFL0IsNEJBQTJCOztJQUUzQixnQ0FBbUM7O0lBRW5DLDRCQUE2Qjs7OztJQUs3QixVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7O0lBSU4sT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osUUFBSztJQUNMLE9BQUk7SUFDSixTQUFNO0lBQ04sV0FBUTtJQUNSLFNBQU07SUFDTixNQUFHO0lBQ0gsaUJBQWM7SUFDZCxjQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0lBSVYsT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTs7Ozs7Ozs7O0lBSUosT0FBSTtJQUNKLE9BQUk7SUFDSixTQUFNO0lBQ04sT0FBSTtJQUNKLFdBQVE7Ozs7Ozs7Ozs7SUFJUixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7O0FBR0wsK0JBZ0JDOzs7SUFkQSw0QkFBa0I7O0lBRWxCLHlCQUFjOztJQUVkLDZCQUFrQjs7SUFFbEIsOEJBQTBCOztJQUUxQiw2QkFBbUI7O0lBRW5CLGdDQUFzQjs7SUFFdEIsNEJBQW9DOzs7O0lBS3BDLFNBQU07SUFDTixXQUFRO0lBQ1IsUUFBSztJQUNMLE9BQUk7SUFDSixVQUFPOzs7Ozs7Ozs7O0lBSVAsT0FBSTtJQUNKLE9BQUk7SUFDSixNQUFHOzs7Ozs7OztJQUlILE9BQUk7SUFDSixNQUFHO0lBQ0gsT0FBSTs7Ozs7Ozs7O0FBR0wsZ0NBU0M7OztJQVBBLDZCQUFrQjs7Ozs7SUFLbEIsa0NBQXVCOzs7OztBQUl4QixrQ0FJQzs7O0lBRkEsK0JBQWtCOzs7OztBQUluQixxQ0FJQzs7O0lBRkEsa0NBQWtCOzs7OztBQUluQixrQ0FVQzs7O0lBUkEsK0JBQWtCOztJQUVsQixvQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsOEJBQWdCOzs7OztBQUlqQixrQ0FRQzs7O0lBTkEsK0JBQWtCOztJQUVsQiwyQkFBYzs7SUFFZCw4QkFBaUI7Ozs7O0FBSWxCLHdDQU1DOzs7SUFKQSxxQ0FBa0I7O0lBRWxCLDRDQUE0Qjs7Ozs7QUFJN0Isc0NBUUM7OztJQU5BLG1DQUFrQjs7SUFFbEIsbUNBQTZCOztJQUU3QixpQ0FBdUI7Ozs7O0FBSXhCLDBDQUlDOzs7SUFGQSx1Q0FBa0I7Ozs7O0FBSW5CLG1DQVVDOzs7SUFSQSxnQ0FBa0I7O0lBRWxCLDZCQUFlOztJQUVmLCtCQUFpQjs7SUFFakIsdUNBQXlCOzs7O0lBS3pCLFFBQUs7SUFDTCxXQUFROzs7Ozs7O0lBSVIsUUFBSztJQUNMLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7QUFHTCxrQ0FNQzs7O0lBSkEsK0JBQWtCOztJQUVsQixnQ0FBaUM7Ozs7O0FBSWxDLG1DQU1DOzs7SUFKQSxnQ0FBa0I7O0lBRWxCLGlDQUE2Qzs7Ozs7QUFJOUMsb0NBTUM7OztJQUpBLGlDQUFpQjs7SUFFakIsa0NBQTZDOzs7OztBQUk5QyxrQ0FZQzs7O0lBVkEsK0JBQWtCOztJQUVsQixrQ0FBcUI7O0lBRXJCLHNDQUF5Qjs7SUFFekIscUNBQXdCOztJQUV4QixrQ0FBb0I7Ozs7SUFLcEIsTUFBRztJQUNILFdBQVE7Ozs7Ozs7SUFJUixTQUFNO0lBQ04sV0FBUTs7Ozs7Ozs7QUFHVCxxQ0FRQzs7O0lBTkEsa0NBQWtCOztJQUVsQiwrQkFBb0M7O0lBRXBDLCtCQUFvQzs7Ozs7QUFJckMsb0NBUUM7OztJQU5BLDhCQUFXOztJQUVYLCtCQUFjOztJQUVkLGdDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVNZXRob2QgPSAoY2VsbFZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kO1xuXG5cdGhlYWRlcj86IHN0cmluZztcblxuXHR3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRhbGlnbj86IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduO1xuXG5cdHN1bW1hcmllcz86IEd1aUNvbHVtblN1bW1hcmllcztcblxuXHRzb3J0aW5nPzogR3VpQ29sdW1uU29ydGluZztcblxuXHRjZWxsRWRpdGluZz86IEd1aUNvbHVtbkNlbGxFZGl0aW5nO1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0YVR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Q0hJUCxcblx0TElOSyxcblx0SU1BR0UsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hFQ0tCT1gsXG5cdENVU1RPTSxcblx0QkFSLFxuXHRQRVJDRU5UQUdFX0JBUixcblx0UEVSQ0VOVEFHRVxufVxuXG5leHBvcnQgZW51bSBHdWlOdW1iZXJDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlTdHJpbmdDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlCb29sZWFuQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVAsXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGVDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVBhZ2luZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGFnZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+O1xuXG5cdHBhZ2VyVG9wPzogYm9vbGVhbjtcblxuXHRwYWdlckJvdHRvbT86IGJvb2xlYW47XG5cblx0ZGlzcGxheT86IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpVGhlbWUge1xuXHRGQUJSSUMsXG5cdE1BVEVSSUFMLFxuXHRMSUdIVCxcblx0REFSSyxcblx0R0VORVJJQ1xufVxuXG5leHBvcnQgZW51bSBHdWlSb3dDb2xvcmluZyB7XG5cdE5PTkUsXG5cdEVWRU4sXG5cdE9ERFxufVxuXG5leHBvcnQgZW51bSBHdWlTb3J0aW5nT3JkZXIge1xuXHROT05FLFxuXHRBU0MsXG5cdERFU0Ncbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQGV4cGVyaW1lbnRhbFxuXHQgKi9cblx0bXVsdGlTb3J0aW5nPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZpbHRlcmluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlRdWlja0ZpbHRlcnMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU2VhcmNoaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRoaWdobGlnaHRpbmc/OiBib29sZWFuO1xuXG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG5cdHBocmFzZT86IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVN1bW1hcmllcyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dG9wPzogYm9vbGVhbjtcblxuXHRib3R0b20/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzdW1tYXJpZXNUeXBlcz86IEFycmF5PGFueT47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5Tb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdG9yZGVyPzogR3VpU29ydGluZ09yZGVyXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5DZWxsRWRpdGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5NZW51IHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzb3J0PzogYm9vbGVhbjtcblxuXHRmaWx0ZXI/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgZW51bSBHdWlQYWdpbmdEaXNwbGF5IHtcblx0QkFTSUMsXG5cdEFEVkFOQ0VEXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNvbHVtbkFsaWduIHtcblx0UklHSFQsXG5cdENFTlRFUixcblx0TEVGVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd0RldGFpbCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dGVtcGxhdGU/OiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlUaXRsZVBhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0ZW1wbGF0ZT86IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZvb3RlclBhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhblxuXG5cdHRlbXBsYXRlPzogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpSW5mb1BhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRpbmZvRGlhbG9nPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cblx0c2NoZW1hTWFuYWdlcj86IGJvb2xlYW47XG5cblx0c291cmNlU2l6ZT86IGJvb2xlYW5cblxufVxuXG5leHBvcnQgZW51bSBHdWlSb3dTZWxlY3Rpb25UeXBlIHtcblx0Uk9XLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBHdWlSb3dTZWxlY3Rpb25Nb2RlIHtcblx0U0lOR0xFLFxuXHRNVUxUSVBMRVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd1NlbGVjdGlvbiB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvblR5cGU7XG5cblx0bW9kZT86IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvbk1vZGU7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWxlY3RlZFJvdyB7XG5cblx0ZGF0YT86IGFueTtcblxuXHRpbmRleDogbnVtYmVyO1xuXG5cdGl0ZW1JZDogYW55O1xuXG59XG4iXX0=