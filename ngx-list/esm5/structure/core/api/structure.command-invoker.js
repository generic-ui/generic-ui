/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var StructureCommandInvoker = /** @class */ (function () {
    function StructureCommandInvoker() {
    }
    StructureCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCommandInvoker.ctorParameters = function () { return []; };
    return StructureCommandInvoker;
}());
export { StructureCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTM0M7SUFHQztJQUNBLENBQUM7O2dCQUpELFVBQVU7Ozs7SUFnQ1gsOEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQS9CcUIsdUJBQXVCOzs7Ozs7O0lBSzVDLHNFQUFpRDs7Ozs7O0lBRWpELG9GQUErRDs7Ozs7O0lBRS9ELHFGQUFnRTs7Ozs7O0lBRWhFLDJFQUFzRDs7Ozs7O0lBRXRELDhFQUF5RDs7Ozs7OztJQUV6RCxvRkFBdUU7Ozs7Ozs7SUFFdkUsMkZBQThFOzs7Ozs7O0lBRTlFLGdGQUF1RTs7Ozs7OztJQUV2RSx1RkFBZ0Y7Ozs7Ozs7SUFFaEYsNkZBQTRGOzs7Ozs7O0lBRTVGLHVGQUEwRTs7Ozs7OztJQUUxRSwwRkFBNkU7Ozs7Ozs7SUFFN0UsK0ZBQXVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZShzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlbmFibGVWZXJ0aWNhbFNjcm9sbChzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkaXNhYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2Nyb2xsVG9Cb3R0b20oc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZD86IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ/OiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cbn1cbiJdfQ==