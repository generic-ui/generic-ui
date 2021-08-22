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
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.create = function (compositionId) { };
    /**
     * @abstract
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setColumns = function (params, compositionId) { };
    /**
     * @abstract
     * @param {?} configs
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setGroups = function (configs, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setContainerWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setResizeWidth = function (enabled, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.enableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.disableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveLeft = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveRight = function (columnDefinitionId, compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTM0MsTUFBTSxPQUFnQix5QkFBeUI7Ozs7SUFFOUM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsMEVBQXFEOzs7Ozs7O0lBRXJELHNGQUFzRjs7Ozs7OztJQUV0RixzRkFBc0U7Ozs7Ozs7SUFFdEUsbUZBQXNFOzs7Ozs7O0lBRXRFLDRGQUErRTs7Ozs7OztJQUUvRSwyRkFBK0U7Ozs7Ozs7SUFFL0Usb0dBQW1HOzs7Ozs7O0lBRW5HLHFHQUFvRzs7Ozs7OztJQUVwRyxnR0FBK0Y7Ozs7Ozs7SUFFL0YsaUdBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGUoY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+LCBjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0R3JvdXBzKGNvbmZpZ3M6IGFueSwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFdpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25JZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGVuYWJsZUNvbHVtbihjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRpc2FibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBtb3ZlTGVmdChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IG1vdmVSaWdodChjb2x1bW5EZWZpbml0aW9uSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xufVxuIl19