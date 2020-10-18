/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
export class VerticalFormationFactory {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @param {?} structureId
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    create(structureId, enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        /** @type {?} */
        const vf = new VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    }
}
VerticalFormationFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VerticalFormationFactory.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationFactory.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS3pELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCLEVBQzNCLFVBQW1CLEtBQUssRUFDeEIsaUJBQXlCLENBQUMsQ0FBQyxFQUMzQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjs7Y0FFdkIsRUFBRSxHQUFHLElBQUksaUJBQWlCLENBQy9CLFdBQVcsRUFDWCxPQUFPLEVBQ1AsY0FBYyxFQUNkLFVBQVUsRUFDVixjQUFjLEVBQ2QsU0FBUyxFQUNULGNBQWMsRUFDZCxpQkFBaUIsQ0FDakI7UUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBTkYsTUFBTTs7Ozs7OztJQVNGLDBDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHQgICBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0ICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IC0xLFxuXHRcdCAgIHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0ICAgc2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0ICAgcm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKTogVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdFx0Y29uc3QgdmYgPSBuZXcgVmVydGljYWxGb3JtYXRpb24oXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHR2aWV3cG9ydEhlaWdodCxcblx0XHRcdHNvdXJjZVNpemUsXG5cdFx0XHRzY3JvbGxQb3NpdGlvbixcblx0XHRcdHJvd0hlaWdodCxcblx0XHRcdGhpZGRlbkl0ZW1zVG9wLFxuXHRcdFx0aGlkZGVuSXRlbXNCb3R0b21cblx0XHQpO1xuXG5cdFx0dmYuc2V0TG9nZ2VyKHRoaXMubG9nZ2VyKTtcblxuXHRcdHJldHVybiB2Zjtcblx0fVxuXG59XG4iXX0=