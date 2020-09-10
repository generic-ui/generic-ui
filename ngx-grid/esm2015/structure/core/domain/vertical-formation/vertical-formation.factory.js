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
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    create(enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        /** @type {?} */
        const vf = new VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXpELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBbUIsS0FBSyxFQUMzQixpQkFBeUIsQ0FBQyxDQUFDLEVBQzNCLGFBQXFCLENBQUMsRUFDdEIsaUJBQXlCLENBQUMsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCOztjQUV2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FDL0IsT0FBTyxFQUNQLGNBQWMsRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxjQUFjLEVBQ2QsaUJBQWlCLENBQ2pCO1FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7WUEzQkQsVUFBVTs7OztZQUxGLE1BQU07Ozs7Ozs7SUFRRiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0ICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IC0xLFxuXHRcdCAgIHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0ICAgc2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0ICAgcm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKTogVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdFx0Y29uc3QgdmYgPSBuZXcgVmVydGljYWxGb3JtYXRpb24oXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQsXG5cdFx0XHRzb3VyY2VTaXplLFxuXHRcdFx0c2Nyb2xsUG9zaXRpb24sXG5cdFx0XHRyb3dIZWlnaHQsXG5cdFx0XHRoaWRkZW5JdGVtc1RvcCxcblx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tXG5cdFx0KTtcblxuXHRcdHZmLnNldExvZ2dlcih0aGlzLmxvZ2dlcik7XG5cblx0XHRyZXR1cm4gdmY7XG5cdH1cblxufVxuIl19