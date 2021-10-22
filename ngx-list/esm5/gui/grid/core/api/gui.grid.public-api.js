/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defaultTranslation } from '../../../../l10n/core/api/default-translation';
/**
 * @record
 */
export function GuiMultiColumn() { }
if (false) {
    /** @type {?|undefined} */
    GuiMultiColumn.prototype.header;
    /** @type {?|undefined} */
    GuiMultiColumn.prototype.columns;
}
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
    GuiColumn.prototype.formatter;
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
/**
 * @record
 */
export function GuiRowStyle() { }
if (false) {
    /** @type {?|undefined} */
    GuiRowStyle.prototype.style;
    /** @type {?|undefined} */
    GuiRowStyle.prototype.styleFunction;
}
/**
 * @record
 */
export function GuiRowClass() { }
if (false) {
    /** @type {?|undefined} */
    GuiRowClass.prototype.class;
    /** @type {?|undefined} */
    GuiRowClass.prototype.classFunction;
}
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
    /** @type {?|undefined} */
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
    GuiSelectedRow.prototype.source;
    /** @type {?} */
    GuiSelectedRow.prototype.index;
    /** @type {?} */
    GuiSelectedRow.prototype.itemId;
}
/**
 * @record
 */
export function GuiLocalization() { }
if (false) {
    /** @type {?|undefined} */
    GuiLocalization.prototype.translation;
    /** @type {?|undefined} */
    GuiLocalization.prototype.translationResolver;
}
/** @type {?} */
export var GuiDefaultTranslation = defaultTranslation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFLbkYsb0NBTUM7OztJQUpBLGdDQUF1Qzs7SUFFdkMsaUNBQTJCOzs7OztBQUk1QiwrQkEwQkM7OztJQXhCQSwwQkFBK0I7O0lBRS9CLHlCQUE0Qjs7SUFFNUIseUJBQW1EOztJQUVuRCwyQkFBdUM7O0lBRXZDLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQiwwQkFBZ0M7O0lBRWhDLDhCQUErQjs7SUFFL0IsNEJBQXFDOztJQUVyQyxnQ0FBNkM7O0lBRTdDLDhCQUE4Qzs7SUFFOUMsNEJBQTZCOzs7O0lBSzdCLFVBQU87SUFDUCxTQUFNO0lBQ04sU0FBTTtJQUNOLFVBQU87SUFDUCxPQUFJO0lBQ0osU0FBTTs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixRQUFLO0lBQ0wsT0FBSTtJQUNKLFNBQU07SUFDTixXQUFRO0lBQ1IsU0FBTTtJQUNOLE1BQUc7SUFDSCxpQkFBYztJQUNkLGNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJVixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCwrQkFnQkM7OztJQWRBLDRCQUFrQjs7SUFFbEIseUJBQWM7O0lBRWQsNkJBQWtCOztJQUVsQiw4QkFBMEI7O0lBRTFCLDZCQUFtQjs7SUFFbkIsZ0NBQXNCOztJQUV0Qiw0QkFBb0M7Ozs7SUFLcEMsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTtJQUNKLFVBQU87Ozs7Ozs7Ozs7SUFJUCxPQUFJO0lBQ0osT0FBSTtJQUNKLE1BQUc7Ozs7Ozs7OztBQUdKLGlDQU1DOzs7SUFKQSw0QkFBZTs7SUFFZixvQ0FBdUQ7Ozs7O0FBSXhELGlDQU1DOzs7SUFKQSw0QkFBZTs7SUFFZixvQ0FBdUQ7Ozs7SUFLdkQsT0FBSTtJQUNKLE1BQUc7SUFDSCxPQUFJOzs7Ozs7Ozs7QUFHTCxnQ0FNQzs7O0lBSkEsNkJBQWtCOztJQUVsQixrQ0FBdUI7Ozs7O0FBSXhCLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLHFDQUlDOzs7SUFGQSxrQ0FBa0I7Ozs7O0FBSW5CLGtDQVVDOzs7SUFSQSwrQkFBa0I7O0lBRWxCLG9DQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQiw4QkFBZ0I7Ozs7O0FBSWpCLGtDQVFDOzs7SUFOQSwrQkFBa0I7O0lBRWxCLDJCQUFjOztJQUVkLDhCQUFpQjs7Ozs7QUFJbEIsd0NBTUM7OztJQUpBLHFDQUFrQjs7SUFFbEIsNENBQStCOzs7OztBQUloQyxzQ0FRQzs7O0lBTkEsbUNBQWtCOztJQUVsQixtQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7Ozs7QUFJeEIsMENBSUM7OztJQUZBLHVDQUFrQjs7Ozs7QUFJbkIsbUNBVUM7OztJQVJBLGdDQUFrQjs7SUFFbEIsNkJBQWU7O0lBRWYsK0JBQWlCOztJQUVqQix1Q0FBeUI7Ozs7SUFLekIsUUFBSztJQUNMLFdBQVE7Ozs7Ozs7SUFJUixRQUFLO0lBQ0wsU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztBQUdMLGtDQU1DOzs7SUFKQSwrQkFBa0I7O0lBRWxCLGdDQUFnRDs7Ozs7QUFJakQsbUNBTUM7OztJQUpBLGdDQUFrQjs7SUFFbEIsaUNBQTZDOzs7OztBQUk5QyxvQ0FNQzs7O0lBSkEsaUNBQWlCOztJQUVqQixrQ0FBNkM7Ozs7O0FBSTlDLGtDQVlDOzs7SUFWQSwrQkFBa0I7O0lBRWxCLGtDQUFxQjs7SUFFckIsc0NBQXlCOztJQUV6QixxQ0FBd0I7O0lBRXhCLGtDQUFvQjs7OztJQUtwQixNQUFHO0lBQ0gsV0FBUTs7Ozs7OztJQUlSLFNBQU07SUFDTixXQUFROzs7Ozs7OztBQUdULHFDQVFDOzs7SUFOQSxrQ0FBa0I7O0lBRWxCLCtCQUFvQzs7SUFFcEMsK0JBQW9DOzs7OztBQUlyQyxvQ0FRQzs7O0lBTkEsZ0NBQWE7O0lBRWIsK0JBQWM7O0lBRWQsZ0NBQVk7Ozs7O0FBSWIscUNBTUM7OztJQUpBLHNDQUE2Qjs7SUFFN0IsOENBQTZEOzs7QUFNOUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0aW9uQ2hhbmdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS9kZWZhdWx0LXRyYW5zbGF0aW9uJztcblxuZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVGdW5jdGlvbiA9IChjZWxsVmFsdWU/OiBhbnksIGl0ZW0/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpTXVsdGlDb2x1bW4ge1xuXG5cdGhlYWRlcj86IHN0cmluZyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uO1xuXG5cdGNvbHVtbnM/OiBBcnJheTxHdWlDb2x1bW4+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uIHtcblxuXHRmaWVsZD86IHN0cmluZyB8IEZpZWxkQWNjZXNzb3I7XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aURhdGFUeXBlO1xuXG5cdHZpZXc/OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uO1xuXG5cdGhlYWRlcj86IHN0cmluZyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uO1xuXG5cdHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGFsaWduPzogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ247XG5cblx0c3VtbWFyaWVzPzogR3VpQ29sdW1uU3VtbWFyaWVzO1xuXG5cdHNvcnRpbmc/OiBib29sZWFuIHwgR3VpQ29sdW1uU29ydGluZztcblxuXHRjZWxsRWRpdGluZz86IGJvb2xlYW4gfCBHdWlDb2x1bW5DZWxsRWRpdGluZztcblxuXHRmb3JtYXR0ZXI/OiAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBhbnk7XG5cblx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueTtcblxufVxuXG5leHBvcnQgZW51bSBHdWlEYXRhVHlwZSB7XG5cdFVOS05PV04sXG5cdE5VTUJFUixcblx0U1RSSU5HLFxuXHRCT09MRUFOLFxuXHREQVRFLFxuXHRDVVNUT01cbn1cblxuZXhwb3J0IGVudW0gR3VpQ2VsbFZpZXcge1xuXHRURVhULFxuXHRDSElQLFxuXHRMSU5LLFxuXHRJTUFHRSxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSEVDS0JPWCxcblx0Q1VTVE9NLFxuXHRCQVIsXG5cdFBFUkNFTlRBR0VfQkFSLFxuXHRQRVJDRU5UQUdFXG59XG5cbmV4cG9ydCBlbnVtIEd1aU51bWJlckNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aVN0cmluZ0NlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBlbnVtIEd1aUJvb2xlYW5DZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUCxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0ZUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Qk9MRCxcblx0SVRBTElDLFxuXHRDSElQXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUGFnaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRwYWdlPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplPzogbnVtYmVyO1xuXG5cdHBhZ2VTaXplcz86IEFycmF5PG51bWJlcj47XG5cblx0cGFnZXJUb3A/OiBib29sZWFuO1xuXG5cdHBhZ2VyQm90dG9tPzogYm9vbGVhbjtcblxuXHRkaXNwbGF5Pzogc3RyaW5nIHwgR3VpUGFnaW5nRGlzcGxheTtcblxufVxuXG5leHBvcnQgZW51bSBHdWlUaGVtZSB7XG5cdEZBQlJJQyxcblx0TUFURVJJQUwsXG5cdExJR0hULFxuXHREQVJLLFxuXHRHRU5FUklDXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd0NvbG9yaW5nIHtcblx0Tk9ORSxcblx0RVZFTixcblx0T0REXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93U3R5bGUge1xuXG5cdHN0eWxlPzogc3RyaW5nO1xuXG5cdHN0eWxlRnVuY3Rpb24/OiAoc291cmNlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd0NsYXNzIHtcblxuXHRjbGFzcz86IHN0cmluZztcblxuXHRjbGFzc0Z1bmN0aW9uPzogKHNvdXJjZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpU29ydGluZ09yZGVyIHtcblx0Tk9ORSxcblx0QVNDLFxuXHRERVNDXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU29ydGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0bXVsdGlTb3J0aW5nPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZpbHRlcmluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlRdWlja0ZpbHRlcnMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU2VhcmNoaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRoaWdobGlnaHRpbmc/OiBib29sZWFuO1xuXG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG5cdHBocmFzZT86IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVN1bW1hcmllcyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dG9wPzogYm9vbGVhbjtcblxuXHRib3R0b20/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpQ29sdW1uU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzdW1tYXJpZXNUeXBlcz86IEFycmF5PHN0cmluZz47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5Tb3J0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRtYXRjaGVyPzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdG9yZGVyPzogR3VpU29ydGluZ09yZGVyXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5DZWxsRWRpdGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5NZW51IHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRzb3J0PzogYm9vbGVhbjtcblxuXHRmaWx0ZXI/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgZW51bSBHdWlQYWdpbmdEaXNwbGF5IHtcblx0QkFTSUMsXG5cdEFEVkFOQ0VEXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNvbHVtbkFsaWduIHtcblx0UklHSFQsXG5cdENFTlRFUixcblx0TEVGVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd0RldGFpbCB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dGVtcGxhdGU/OiAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlUaXRsZVBhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0ZW1wbGF0ZT86IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUZvb3RlclBhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhblxuXG5cdHRlbXBsYXRlPzogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpSW5mb1BhbmVsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHRpbmZvRGlhbG9nPzogYm9vbGVhbjtcblxuXHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW47XG5cblx0c2NoZW1hTWFuYWdlcj86IGJvb2xlYW47XG5cblx0c291cmNlU2l6ZT86IGJvb2xlYW5cblxufVxuXG5leHBvcnQgZW51bSBHdWlSb3dTZWxlY3Rpb25UeXBlIHtcblx0Uk9XLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBHdWlSb3dTZWxlY3Rpb25Nb2RlIHtcblx0U0lOR0xFLFxuXHRNVUxUSVBMRVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd1NlbGVjdGlvbiB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0dHlwZT86IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvblR5cGU7XG5cblx0bW9kZT86IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvbk1vZGU7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWxlY3RlZFJvdyB7XG5cblx0c291cmNlPzogYW55O1xuXG5cdGluZGV4OiBudW1iZXI7XG5cblx0aXRlbUlkOiBhbnk7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlMb2NhbGl6YXRpb24ge1xuXG5cdHRyYW5zbGF0aW9uPzogR3VpVHJhbnNsYXRpb247XG5cblx0dHJhbnNsYXRpb25SZXNvbHZlcj86IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCB0eXBlIEd1aVRyYW5zbGF0aW9uID0gVHJhbnNsYXRpb25DaGFuZ2U7XG5cbmV4cG9ydCBjb25zdCBHdWlEZWZhdWx0VHJhbnNsYXRpb24gPSBkZWZhdWx0VHJhbnNsYXRpb247XG4iXX0=