/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defaultTranslation } from '../../../../l10n/core/api/default-translation';
/**
 * @record
 */
export function GuiListPaging() { }
if (false) {
    /** @type {?|undefined} */
    GuiListPaging.prototype.enabled;
    /** @type {?|undefined} */
    GuiListPaging.prototype.page;
    /** @type {?|undefined} */
    GuiListPaging.prototype.pageSize;
    /** @type {?|undefined} */
    GuiListPaging.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiListPaging.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiListPaging.prototype.pagerBottom;
}
/** @enum {number} */
const GuiListMode = {
    LIST: 0,
    CARD: 1,
};
export { GuiListMode };
GuiListMode[GuiListMode.LIST] = 'LIST';
GuiListMode[GuiListMode.CARD] = 'CARD';
/**
 * @record
 */
export function GuiListView() { }
if (false) {
    /** @type {?|undefined} */
    GuiListView.prototype.active;
    /** @type {?|undefined} */
    GuiListView.prototype.selector;
}
/**
 * @record
 */
export function GuiListField() { }
if (false) {
    /** @type {?|undefined} */
    GuiListField.prototype.field;
    /** @type {?|undefined} */
    GuiListField.prototype.type;
}
/** @enum {number} */
const GuiListFieldType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
export { GuiListFieldType };
GuiListFieldType[GuiListFieldType.UNKNOWN] = 'UNKNOWN';
GuiListFieldType[GuiListFieldType.NUMBER] = 'NUMBER';
GuiListFieldType[GuiListFieldType.STRING] = 'STRING';
GuiListFieldType[GuiListFieldType.BOOLEAN] = 'BOOLEAN';
GuiListFieldType[GuiListFieldType.DATE] = 'DATE';
GuiListFieldType[GuiListFieldType.CUSTOM] = 'CUSTOM';
/**
 * @record
 */
export function GuiListSearching() { }
if (false) {
    /** @type {?|undefined} */
    GuiListSearching.prototype.enabled;
    /** @type {?|undefined} */
    GuiListSearching.prototype.placeholder;
    /** @type {?|undefined} */
    GuiListSearching.prototype.phrase;
}
/**
 * @record
 */
export function GuiListLocalization() { }
if (false) {
    /** @type {?|undefined} */
    GuiListLocalization.prototype.translation;
    /** @type {?|undefined} */
    GuiListLocalization.prototype.translationResolver;
}
/** @type {?} */
export const GuiListDefaultTranslation = defaultTranslation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QucHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiZ3VpL2xpc3QvY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7QUFFbkYsbUNBY0M7OztJQVpBLGdDQUFrQjs7SUFFbEIsNkJBQWM7O0lBRWQsaUNBQWtCOztJQUVsQixrQ0FBMEI7O0lBRTFCLGlDQUFtQjs7SUFFbkIsb0NBQXNCOzs7O0lBS3RCLE9BQUk7SUFDSixPQUFJOzs7Ozs7OztBQUdMLGlDQU1DOzs7SUFKQSw2QkFBcUI7O0lBRXJCLCtCQUFtQjs7Ozs7QUFJcEIsa0NBTUM7OztJQUpBLDZCQUFlOztJQUVmLDRCQUF3Qjs7OztJQUt4QixVQUFPO0lBQ1AsU0FBTTtJQUNOLFNBQU07SUFDTixVQUFPO0lBQ1AsT0FBSTtJQUNKLFNBQU07Ozs7Ozs7Ozs7OztBQUdQLHNDQVFDOzs7SUFOQSxtQ0FBa0I7O0lBRWxCLHVDQUFxQjs7SUFFckIsa0NBQWdCOzs7OztBQUlqQix5Q0FNQzs7O0lBSkEsMENBQWlDOztJQUVqQyxrREFBNkQ7OztBQU05RCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLWNoYW5nZSc7XG5pbXBvcnQgeyBkZWZhdWx0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL2RlZmF1bHQtdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUxpc3RQYWdpbmcge1xuXG5cdGVuYWJsZWQ/OiBib29sZWFuO1xuXG5cdHBhZ2U/OiBudW1iZXI7XG5cblx0cGFnZVNpemU/OiBudW1iZXI7XG5cblx0cGFnZVNpemVzPzogQXJyYXk8bnVtYmVyPjtcblxuXHRwYWdlclRvcD86IGJvb2xlYW47XG5cblx0cGFnZXJCb3R0b20/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aUxpc3RNb2RlIHtcblx0TElTVCxcblx0Q0FSRFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUxpc3RWaWV3IHtcblxuXHRhY3RpdmU/OiBHdWlMaXN0TW9kZTtcblxuXHRzZWxlY3Rvcj86IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlMaXN0RmllbGQge1xuXG5cdGZpZWxkPzogc3RyaW5nO1xuXG5cdHR5cGU/OiBHdWlMaXN0RmllbGRUeXBlO1xuXG59XG5cbmV4cG9ydCBlbnVtIEd1aUxpc3RGaWVsZFR5cGUge1xuXHRVTktOT1dOLFxuXHROVU1CRVIsXG5cdFNUUklORyxcblx0Qk9PTEVBTixcblx0REFURSxcblx0Q1VTVE9NXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpTGlzdFNlYXJjaGluZyB7XG5cblx0ZW5hYmxlZD86IGJvb2xlYW47XG5cblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cblx0cGhyYXNlPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpTGlzdExvY2FsaXphdGlvbiB7XG5cblx0dHJhbnNsYXRpb24/OiBHdWlMaXN0VHJhbnNsYXRpb247XG5cblx0dHJhbnNsYXRpb25SZXNvbHZlcj86IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCB0eXBlIEd1aUxpc3RUcmFuc2xhdGlvbiA9IFRyYW5zbGF0aW9uQ2hhbmdlO1xuXG5leHBvcnQgY29uc3QgR3VpTGlzdERlZmF1bHRUcmFuc2xhdGlvbiA9IGRlZmF1bHRUcmFuc2xhdGlvbjtcbiJdfQ==