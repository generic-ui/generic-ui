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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTM0M7SUFHQztJQUNBLENBQUM7O2dCQUpELFVBQVU7Ozs7SUFnQ1gsOEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQS9CcUIsdUJBQXVCOzs7Ozs7O0lBSzVDLHNFQUFnRDs7Ozs7O0lBRWhELG1GQUE2RDs7Ozs7O0lBRTdELG9GQUE4RDs7Ozs7O0lBRTlELDJFQUFxRDs7Ozs7O0lBRXJELDhFQUF3RDs7Ozs7OztJQUV4RCxvRkFBc0U7Ozs7Ozs7SUFFdEUsMkZBQTZFOzs7Ozs7O0lBRTdFLGdGQUFzRTs7Ozs7OztJQUV0RSx1RkFBK0U7Ozs7Ozs7SUFFL0UsNkZBQTJGOzs7Ozs7O0lBRTNGLHVGQUF5RTs7Ozs7OztJQUV6RSwwRkFBNEU7Ozs7Ozs7SUFFNUUsK0ZBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGlzYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG59XG4iXX0=