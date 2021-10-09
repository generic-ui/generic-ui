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
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.create = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.enableVirtualScroll = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.disableVirtualScroll = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToTop = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToBottom = function (structureId) { };
    /**
     * @abstract
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.scrollToIndex = function (index, structureId) { };
    /**
     * @abstract
     * @param {?} position
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setScrollPosition = function (position, structureId) { };
    /**
     * @abstract
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setOrigin = function (items, structureId) { };
    /**
     * @abstract
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setFilterConfig = function (config, structureId) { };
    /**
     * @abstract
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setQuickFiltersConfig = function (config, structureId) { };
    /**
     * @abstract
     * @param {?} rowHeight
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setRowHeight = function (rowHeight, structureId) { };
    /**
     * @abstract
     * @param {?} height
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setContainerHeight = function (height, structureId) { };
    /**
     * @abstract
     * @param {?} theme
     * @param {?} structureId
     * @return {?}
     */
    StructureCommandInvoker.prototype.setRowHeightBasedOnTheme = function (theme, structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVM0MsTUFBTSxPQUFnQix1QkFBdUI7Ozs7SUFFNUM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsc0VBQWdEOzs7Ozs7SUFFaEQsbUZBQTZEOzs7Ozs7SUFFN0Qsb0ZBQThEOzs7Ozs7SUFFOUQsMkVBQXFEOzs7Ozs7SUFFckQsOEVBQXdEOzs7Ozs7O0lBRXhELG9GQUFzRTs7Ozs7OztJQUV0RSwyRkFBNkU7Ozs7Ozs7SUFFN0UsZ0ZBQXNFOzs7Ozs7O0lBRXRFLHVGQUErRTs7Ozs7OztJQUUvRSw2RkFBMkY7Ozs7Ozs7SUFFM0YsdUZBQXlFOzs7Ozs7O0lBRXpFLDBGQUE0RTs7Ozs7OztJQUU1RSwrRkFBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGVuYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2Nyb2xsVG9Cb3R0b20oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cbn1cbiJdfQ==