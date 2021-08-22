/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class StructureCommandInvoker {
    /**
     * @protected
     */
    constructor() {
    }
}
StructureCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCommandInvoker.ctorParameters = () => [];
if (false) {
    /**
     * @abstract
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.create = function (structureId) { };
    /**
     * @abstract
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.enableVerticalScroll = function (structureId) { };
    /**
     * @abstract
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.disableVerticalScroll = function (structureId) { };
    /**
     * @abstract
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToTop = function (structureId) { };
    /**
     * @abstract
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToBottom = function (structureId) { };
    /**
     * @abstract
     * @param {?} index
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToIndex = function (index, structureId) { };
    /**
     * @abstract
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setScrollPosition = function (position, structureId) { };
    /**
     * @abstract
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setOrigin = function (items, structureId) { };
    /**
     * @abstract
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setFilterConfig = function (config, structureId) { };
    /**
     * @abstract
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setQuickFiltersConfig = function (config, structureId) { };
    /**
     * @abstract
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setRowHeight = function (rowHeight, structureId) { };
    /**
     * @abstract
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setContainerHeight = function (height, structureId) { };
    /**
     * @abstract
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setRowHeightBasedOnTheme = function (theme, structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVM0MsTUFBTSxPQUFnQix1QkFBdUI7Ozs7SUFFNUM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsc0VBQWlEOzs7Ozs7SUFFakQsb0ZBQStEOzs7Ozs7SUFFL0QscUZBQWdFOzs7Ozs7SUFFaEUsMkVBQXNEOzs7Ozs7SUFFdEQsOEVBQXlEOzs7Ozs7O0lBRXpELG9GQUF1RTs7Ozs7OztJQUV2RSwyRkFBOEU7Ozs7Ozs7SUFFOUUsZ0ZBQXVFOzs7Ozs7O0lBRXZFLHVGQUFnRjs7Ozs7OztJQUVoRiw2RkFBNEY7Ozs7Ozs7SUFFNUYsdUZBQTBFOzs7Ozs7O0lBRTFFLDBGQUE2RTs7Ozs7OztJQUU3RSwrRkFBdUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWJzdHJhY3QgY3JlYXRlKHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGVuYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRpc2FibGVWZXJ0aWNhbFNjcm9sbChzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxufVxuIl19