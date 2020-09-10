/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
export class StructureOriginChangedEventHandler {
    /**
     * @param {?} structureSourceOriginRepository
     */
    constructor(structureSourceOriginRepository) {
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return OriginSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('OriginSetEvent')) {
            /** @type {?} */
            const origin = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin, event.getAggregateId());
        }
    }
}
StructureOriginChangedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureOriginChangedEventHandler.ctorParameters = () => [
    { type: StructureSourceOriginRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBS2pGLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7SUFFOUMsWUFBb0IsK0JBQWdFO1FBQWhFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7SUFDcEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFxQjtRQUUzQixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs7a0JBQ3BDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBRWhDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO0lBQ0YsQ0FBQzs7O1lBakJELFVBQVU7Ozs7WUFMRiwrQkFBK0I7Ozs7Ozs7SUFRM0IsNkVBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgT3JpZ2luU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIE9yaWdpblNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8T3JpZ2luU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gT3JpZ2luU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IE9yaWdpblNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnT3JpZ2luU2V0RXZlbnQnKSkge1xuXHRcdFx0Y29uc3Qgb3JpZ2luID0gZXZlbnQuZ2V0T3JpZ2luKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeS5zZXRPcmlnaW4ob3JpZ2luLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==