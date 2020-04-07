/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
var VerticalFormationFactory = /** @class */ (function () {
    function VerticalFormationFactory(logger) {
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
    VerticalFormationFactory.prototype.create = /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    function (enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = -1; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        /** @type {?} */
        var vf = new VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pEO0lBR0Msa0NBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7O0lBRUQseUNBQU07Ozs7Ozs7Ozs7SUFBTixVQUFPLE9BQXdCLEVBQzNCLGNBQTJCLEVBQzNCLFVBQXNCLEVBQ3RCLGNBQTBCLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQU52Qix3QkFBQSxFQUFBLGVBQXdCO1FBQzNCLCtCQUFBLEVBQUEsa0JBQTBCLENBQUM7UUFDM0IsMkJBQUEsRUFBQSxjQUFzQjtRQUN0QiwrQkFBQSxFQUFBLGtCQUEwQjs7WUFLdkIsRUFBRSxHQUFHLElBQUksaUJBQWlCLENBQy9CLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixDQUNqQjtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBM0JELFVBQVU7Ozs7Z0JBSkYsTUFBTTs7SUFpQ2YsK0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSx3QkFBd0I7Ozs7OztJQUV4QiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0Y3JlYXRlKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHQgICB2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gLTEsXG5cdFx0ICAgc291cmNlU2l6ZTogbnVtYmVyID0gMCxcblx0XHQgICBzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHQgICByb3dIZWlnaHQ/OiBudW1iZXIsXG5cdFx0ICAgaGlkZGVuSXRlbXNUb3A/OiBudW1iZXIsXG5cdFx0ICAgaGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0XHRjb25zdCB2ZiA9IG5ldyBWZXJ0aWNhbEZvcm1hdGlvbihcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHR2aWV3cG9ydEhlaWdodCxcblx0XHRcdHNvdXJjZVNpemUsXG5cdFx0XHRzY3JvbGxQb3NpdGlvbixcblx0XHRcdHJvd0hlaWdodCxcblx0XHRcdGhpZGRlbkl0ZW1zVG9wLFxuXHRcdFx0aGlkZGVuSXRlbXNCb3R0b21cblx0XHQpO1xuXG5cdFx0dmYuc2V0TG9nZ2VyKHRoaXMubG9nZ2VyKTtcblxuXHRcdHJldHVybiB2Zjtcblx0fVxuXG59XG4iXX0=