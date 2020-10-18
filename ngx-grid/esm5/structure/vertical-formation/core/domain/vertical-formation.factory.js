/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
var VerticalFormationFactory = /** @class */ (function () {
    function VerticalFormationFactory(logger) {
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
    VerticalFormationFactory.prototype.create = /**
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
    function (structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = -1; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        /** @type {?} */
        var vf = new VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    };
    VerticalFormationFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VerticalFormationFactory.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return VerticalFormationFactory;
}());
export { VerticalFormationFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationFactory.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXpEO0lBR0Msa0NBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7OztJQUVELHlDQUFNOzs7Ozs7Ozs7OztJQUFOLFVBQU8sV0FBd0IsRUFDM0IsT0FBd0IsRUFDeEIsY0FBMkIsRUFDM0IsVUFBc0IsRUFDdEIsY0FBMEIsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBTjFCLHdCQUFBLEVBQUEsZUFBd0I7UUFDeEIsK0JBQUEsRUFBQSxrQkFBMEIsQ0FBQztRQUMzQiwyQkFBQSxFQUFBLGNBQXNCO1FBQ3RCLCtCQUFBLEVBQUEsa0JBQTBCOztZQUt2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FDL0IsV0FBVyxFQUNYLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixDQUNqQjtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBN0JELFVBQVU7Ozs7Z0JBTkYsTUFBTTs7SUFxQ2YsK0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSx3QkFBd0I7Ozs7OztJQUV4QiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0ICAgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdCAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAtMSxcblx0XHQgICBzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdCAgIHNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwLFxuXHRcdCAgIHJvd0hlaWdodD86IG51bWJlcixcblx0XHQgICBoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHQgICBoaWRkZW5JdGVtc0JvdHRvbT86IG51bWJlcik6IFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRcdGNvbnN0IHZmID0gbmV3IFZlcnRpY2FsRm9ybWF0aW9uKFxuXHRcdFx0c3RydWN0dXJlSWQsXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQsXG5cdFx0XHRzb3VyY2VTaXplLFxuXHRcdFx0c2Nyb2xsUG9zaXRpb24sXG5cdFx0XHRyb3dIZWlnaHQsXG5cdFx0XHRoaWRkZW5JdGVtc1RvcCxcblx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tXG5cdFx0KTtcblxuXHRcdHZmLnNldExvZ2dlcih0aGlzLmxvZ2dlcik7XG5cblx0XHRyZXR1cm4gdmY7XG5cdH1cblxufVxuIl19