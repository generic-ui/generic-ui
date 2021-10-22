/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class CompositionCommandInvoker {
    /**
     * @protected
     */
    constructor() {
    }
}
CompositionCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionCommandInvoker.ctorParameters = () => [];
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.create = function (compositionId) { };
    /**
     * @abstract
     * @param {?} params
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setColumns = function (params, compositionId) { };
    /**
     * @abstract
     * @param {?} configs
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setGroups = function (configs, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setContainerWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setResizeWidth = function (enabled, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.enableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.disableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveLeft = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveRight = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.highlightColumn = function (columnDefinitionId, compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTM0MsTUFBTSxPQUFnQix5QkFBeUI7Ozs7SUFFOUM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsMEVBQW9EOzs7Ozs7O0lBRXBELHNGQUFxRjs7Ozs7OztJQUVyRixzRkFBcUU7Ozs7Ozs7SUFFckUsbUZBQXFFOzs7Ozs7O0lBRXJFLDRGQUE4RTs7Ozs7OztJQUU5RSwyRkFBOEU7Ozs7Ozs7SUFFOUUsb0dBQWtHOzs7Ozs7O0lBRWxHLHFHQUFtRzs7Ozs7OztJQUVuRyxnR0FBOEY7Ozs7Ozs7SUFFOUYsaUdBQStGOzs7Ozs7O0lBRS9GLHVHQUFxRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGUoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Q29sdW1ucyhwYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldEdyb3Vwcyhjb25maWdzOiBhbnksIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGVuYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgbW92ZUxlZnQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgaGlnaGxpZ2h0Q29sdW1uKGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcbn1cbiJdfQ==