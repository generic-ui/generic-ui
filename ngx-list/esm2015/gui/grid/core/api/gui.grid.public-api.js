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
const GuiRowSelectionType = {
    ROW: 0,
    CHECKBOX: 1,
};
export { GuiRowSelectionType };
GuiRowSelectionType[GuiRowSelectionType.ROW] = 'ROW';
GuiRowSelectionType[GuiRowSelectionType.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
const GuiRowSelectionMode = {
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
export const GuiDefaultTranslation = defaultTranslation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFLbkYsb0NBTUM7OztJQUpBLGdDQUFnQjs7SUFFaEIsaUNBQTJCOzs7OztBQUk1QiwrQkEwQkM7OztJQXhCQSwwQkFBK0I7O0lBRS9CLHlCQUE0Qjs7SUFFNUIseUJBQW1EOztJQUVuRCwyQkFBZ0I7O0lBRWhCLDBCQUF3Qjs7SUFFeEIsNEJBQWtCOztJQUVsQiwwQkFBZ0M7O0lBRWhDLDhCQUErQjs7SUFFL0IsNEJBQTJCOztJQUUzQixnQ0FBbUM7O0lBRW5DLDhCQUE4Qzs7SUFFOUMsNEJBQTZCOzs7O0lBSzdCLFVBQU87SUFDUCxTQUFNO0lBQ04sU0FBTTtJQUNOLFVBQU87SUFDUCxPQUFJO0lBQ0osU0FBTTs7Ozs7Ozs7Ozs7SUFJTixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixRQUFLO0lBQ0wsT0FBSTtJQUNKLFNBQU07SUFDTixXQUFRO0lBQ1IsU0FBTTtJQUNOLE1BQUc7SUFDSCxpQkFBYztJQUNkLGNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJVixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJOzs7Ozs7Ozs7SUFJSixPQUFJO0lBQ0osT0FBSTtJQUNKLFNBQU07SUFDTixPQUFJO0lBQ0osV0FBUTs7Ozs7Ozs7OztJQUlSLE9BQUk7SUFDSixPQUFJO0lBQ0osU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7Ozs7QUFHTCwrQkFnQkM7OztJQWRBLDRCQUFrQjs7SUFFbEIseUJBQWM7O0lBRWQsNkJBQWtCOztJQUVsQiw4QkFBMEI7O0lBRTFCLDZCQUFtQjs7SUFFbkIsZ0NBQXNCOztJQUV0Qiw0QkFBb0M7Ozs7SUFLcEMsU0FBTTtJQUNOLFdBQVE7SUFDUixRQUFLO0lBQ0wsT0FBSTtJQUNKLFVBQU87Ozs7Ozs7Ozs7SUFJUCxPQUFJO0lBQ0osT0FBSTtJQUNKLE1BQUc7Ozs7Ozs7OztBQUdKLGlDQU1DOzs7SUFKQSw0QkFBZTs7SUFFZixvQ0FBdUQ7Ozs7O0FBSXhELGlDQU1DOzs7SUFKQSw0QkFBZTs7SUFFZixvQ0FBdUQ7Ozs7SUFLdkQsT0FBSTtJQUNKLE1BQUc7SUFDSCxPQUFJOzs7Ozs7Ozs7QUFHTCxnQ0FTQzs7O0lBUEEsNkJBQWtCOzs7OztJQUtsQixrQ0FBdUI7Ozs7O0FBSXhCLGtDQUlDOzs7SUFGQSwrQkFBa0I7Ozs7O0FBSW5CLHFDQUlDOzs7SUFGQSxrQ0FBa0I7Ozs7O0FBSW5CLGtDQVVDOzs7SUFSQSwrQkFBa0I7O0lBRWxCLG9DQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQiw4QkFBZ0I7Ozs7O0FBSWpCLGtDQVFDOzs7SUFOQSwrQkFBa0I7O0lBRWxCLDJCQUFjOztJQUVkLDhCQUFpQjs7Ozs7QUFJbEIsd0NBTUM7OztJQUpBLHFDQUFrQjs7SUFFbEIsNENBQTRCOzs7OztBQUk3QixzQ0FRQzs7O0lBTkEsbUNBQWtCOztJQUVsQixtQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7Ozs7QUFJeEIsMENBSUM7OztJQUZBLHVDQUFrQjs7Ozs7QUFJbkIsbUNBVUM7OztJQVJBLGdDQUFrQjs7SUFFbEIsNkJBQWU7O0lBRWYsK0JBQWlCOztJQUVqQix1Q0FBeUI7Ozs7SUFLekIsUUFBSztJQUNMLFdBQVE7Ozs7Ozs7SUFJUixRQUFLO0lBQ0wsU0FBTTtJQUNOLE9BQUk7Ozs7Ozs7OztBQUdMLGtDQU1DOzs7SUFKQSwrQkFBa0I7O0lBRWxCLGdDQUFnRDs7Ozs7QUFJakQsbUNBTUM7OztJQUpBLGdDQUFrQjs7SUFFbEIsaUNBQTZDOzs7OztBQUk5QyxvQ0FNQzs7O0lBSkEsaUNBQWlCOztJQUVqQixrQ0FBNkM7Ozs7O0FBSTlDLGtDQVlDOzs7SUFWQSwrQkFBa0I7O0lBRWxCLGtDQUFxQjs7SUFFckIsc0NBQXlCOztJQUV6QixxQ0FBd0I7O0lBRXhCLGtDQUFvQjs7OztJQUtwQixNQUFHO0lBQ0gsV0FBUTs7Ozs7OztJQUlSLFNBQU07SUFDTixXQUFROzs7Ozs7OztBQUdULHFDQVFDOzs7SUFOQSxrQ0FBa0I7O0lBRWxCLCtCQUFvQzs7SUFFcEMsK0JBQW9DOzs7OztBQUlyQyxvQ0FRQzs7O0lBTkEsZ0NBQWE7O0lBRWIsK0JBQWM7O0lBRWQsZ0NBQVk7Ozs7O0FBSWIscUNBTUM7OztJQUpBLHNDQUE2Qjs7SUFFN0IsOENBQTZEOzs7QUFNOUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0aW9uQ2hhbmdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS9kZWZhdWx0LXRyYW5zbGF0aW9uJztcblxuZXhwb3J0IHR5cGUgRmllbGRBY2Nlc3NvciA9IChlbGVtZW50PzogYW55KSA9PiBhbnk7XG5leHBvcnQgdHlwZSBWaWV3VGVtcGxhdGVGdW5jdGlvbiA9IChjZWxsVmFsdWU6IGFueSwgaXRlbT86IGFueSkgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1aU11bHRpQ29sdW1uIHtcblxuXHRoZWFkZXI/OiBzdHJpbmc7XG5cblx0Y29sdW1ucz86IEFycmF5PEd1aUNvbHVtbj47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW4ge1xuXG5cdGZpZWxkPzogc3RyaW5nIHwgRmllbGRBY2Nlc3NvcjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpRGF0YVR5cGU7XG5cblx0dmlldz86IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlRnVuY3Rpb247XG5cblx0aGVhZGVyPzogc3RyaW5nO1xuXG5cdHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGFsaWduPzogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ247XG5cblx0c3VtbWFyaWVzPzogR3VpQ29sdW1uU3VtbWFyaWVzO1xuXG5cdHNvcnRpbmc/OiBHdWlDb2x1bW5Tb3J0aW5nO1xuXG5cdGNlbGxFZGl0aW5nPzogR3VpQ29sdW1uQ2VsbEVkaXRpbmc7XG5cblx0Zm9ybWF0dGVyPzogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYW55O1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpRGF0YVR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBlbnVtIEd1aUNlbGxWaWV3IHtcblx0VEVYVCxcblx0Q0hJUCxcblx0TElOSyxcblx0SU1BR0UsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hFQ0tCT1gsXG5cdENVU1RPTSxcblx0QkFSLFxuXHRQRVJDRU5UQUdFX0JBUixcblx0UEVSQ0VOVEFHRVxufVxuXG5leHBvcnQgZW51bSBHdWlOdW1iZXJDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlTdHJpbmdDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgZW51bSBHdWlCb29sZWFuQ2VsbFZpZXcge1xuXHRURVhULFxuXHRCT0xELFxuXHRJVEFMSUMsXG5cdENISVAsXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aURhdGVDZWxsVmlldyB7XG5cdFRFWFQsXG5cdEJPTEQsXG5cdElUQUxJQyxcblx0Q0hJUFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVBhZ2luZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGFnZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZT86IG51bWJlcjtcblxuXHRwYWdlU2l6ZXM/OiBBcnJheTxudW1iZXI+O1xuXG5cdHBhZ2VyVG9wPzogYm9vbGVhbjtcblxuXHRwYWdlckJvdHRvbT86IGJvb2xlYW47XG5cblx0ZGlzcGxheT86IHN0cmluZyB8IEd1aVBhZ2luZ0Rpc3BsYXk7XG5cbn1cblxuZXhwb3J0IGVudW0gR3VpVGhlbWUge1xuXHRGQUJSSUMsXG5cdE1BVEVSSUFMLFxuXHRMSUdIVCxcblx0REFSSyxcblx0R0VORVJJQ1xufVxuXG5leHBvcnQgZW51bSBHdWlSb3dDb2xvcmluZyB7XG5cdE5PTkUsXG5cdEVWRU4sXG5cdE9ERFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVJvd1N0eWxlIHtcblxuXHRzdHlsZT86IHN0cmluZztcblxuXHRzdHlsZUZ1bmN0aW9uPzogKHNvdXJjZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlSb3dDbGFzcyB7XG5cblx0Y2xhc3M/OiBzdHJpbmc7XG5cblx0Y2xhc3NGdW5jdGlvbj86IChzb3VyY2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVNvcnRpbmdPcmRlciB7XG5cdE5PTkUsXG5cdEFTQyxcblx0REVTQ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAZXhwZXJpbWVudGFsXG5cdCAqL1xuXHRtdWx0aVNvcnRpbmc/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRmlsdGVyaW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVF1aWNrRmlsdGVycyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlTZWFyY2hpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGhpZ2hsaWdodGluZz86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpU3VtbWFyaWVzIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0b3A/OiBib29sZWFuO1xuXG5cdGJvdHRvbT86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlDb2x1bW5TdW1tYXJpZXMge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHN1bW1hcmllc1R5cGVzPzogQXJyYXk8YW55PjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtblNvcnRpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdG1hdGNoZXI/OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cblx0b3JkZXI/OiBHdWlTb3J0aW5nT3JkZXJcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbkNlbGxFZGl0aW5nIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUNvbHVtbk1lbnUge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHNvcnQ/OiBib29sZWFuO1xuXG5cdGZpbHRlcj86IGJvb2xlYW47XG5cblx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVBhZ2luZ0Rpc3BsYXkge1xuXHRCQVNJQyxcblx0QURWQU5DRURcbn1cblxuZXhwb3J0IGVudW0gR3VpQ29sdW1uQWxpZ24ge1xuXHRSSUdIVCxcblx0Q0VOVEVSLFxuXHRMRUZUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93RGV0YWlsIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0ZW1wbGF0ZT86IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVRpdGxlUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHRlbXBsYXRlPzogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpRm9vdGVyUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuXG5cblx0dGVtcGxhdGU/OiBzdHJpbmcgfCAoKHRpdGxlOiBhbnkpID0+IHN0cmluZyk7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlJbmZvUGFuZWwge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdGluZm9EaWFsb2c/OiBib29sZWFuO1xuXG5cdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbjtcblxuXHRzY2hlbWFNYW5hZ2VyPzogYm9vbGVhbjtcblxuXHRzb3VyY2VTaXplPzogYm9vbGVhblxuXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd1NlbGVjdGlvblR5cGUge1xuXHRST1csXG5cdENIRUNLQk9YXG59XG5cbmV4cG9ydCBlbnVtIEd1aVJvd1NlbGVjdGlvbk1vZGUge1xuXHRTSU5HTEUsXG5cdE1VTFRJUExFXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpUm93U2VsZWN0aW9uIHtcblxuXHRlbmFibGVkPzogYm9vbGVhbjtcblxuXHR0eXBlPzogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uVHlwZTtcblxuXHRtb2RlPzogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aVNlbGVjdGVkUm93IHtcblxuXHRzb3VyY2U/OiBhbnk7XG5cblx0aW5kZXg6IG51bWJlcjtcblxuXHRpdGVtSWQ6IGFueTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUxvY2FsaXphdGlvbiB7XG5cblx0dHJhbnNsYXRpb24/OiBHdWlUcmFuc2xhdGlvbjtcblxuXHR0cmFuc2xhdGlvblJlc29sdmVyPzogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IHR5cGUgR3VpVHJhbnNsYXRpb24gPSBUcmFuc2xhdGlvbkNoYW5nZTtcblxuZXhwb3J0IGNvbnN0IEd1aURlZmF1bHRUcmFuc2xhdGlvbiA9IGRlZmF1bHRUcmFuc2xhdGlvbjtcbiJdfQ==