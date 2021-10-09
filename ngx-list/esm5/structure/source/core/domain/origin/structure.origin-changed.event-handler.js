/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSourceOriginArchive } from './structure.source-origin.archive';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
var StructureOriginChangedEventHandler = /** @class */ (function () {
    function StructureOriginChangedEventHandler(structureSourceOriginRepository) {
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @return {?}
     */
    StructureOriginChangedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return OriginSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureOriginChangedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('OriginSetEvent')) {
            /** @type {?} */
            var origin_1 = event.getOrigin();
            this.structureSourceOriginRepository.next(event.getAggregateId(), origin_1);
        }
    };
    StructureOriginChangedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureOriginChangedEventHandler.ctorParameters = function () { return [
        { type: StructureSourceOriginArchive }
    ]; };
    return StructureOriginChangedEventHandler;
}());
export { StructureOriginChangedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUlqRjtJQUdDLDRDQUFvQiwrQkFBNkQ7UUFBN0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUE4QjtJQUNqRixDQUFDOzs7O0lBRUQscURBQVE7OztJQUFSO1FBQ0MsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8sS0FBcUI7UUFFM0IsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7O2dCQUNwQyxRQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUVoQyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxRQUFNLENBQUMsQ0FBQztTQUMxRTtJQUNGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUxGLDRCQUE0Qjs7SUF1QnJDLHlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksa0NBQWtDOzs7Ozs7SUFFbEMsNkVBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLmFyY2hpdmUnO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIE9yaWdpblNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5BcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8T3JpZ2luU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gT3JpZ2luU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IE9yaWdpblNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnT3JpZ2luU2V0RXZlbnQnKSkge1xuXHRcdFx0Y29uc3Qgb3JpZ2luID0gZXZlbnQuZ2V0T3JpZ2luKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG9yaWdpbik7XG5cdFx0fVxuXHR9XG59XG4iXX0=