/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../../../common/cdk/logger/logger';
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
        if (viewportHeight === void 0) { viewportHeight = 0; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHekQ7SUFHQyxrQ0FBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDOzs7Ozs7Ozs7OztJQUV0Qyx5Q0FBTTs7Ozs7Ozs7OztJQUFOLFVBQU8sT0FBd0IsRUFDM0IsY0FBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBMEIsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCO1FBTnZCLHdCQUFBLEVBQUEsZUFBd0I7UUFDM0IsK0JBQUEsRUFBQSxrQkFBMEI7UUFDMUIsMkJBQUEsRUFBQSxjQUFzQjtRQUN0QiwrQkFBQSxFQUFBLGtCQUEwQjs7WUFLdkIsRUFBRSxHQUFHLElBQUksaUJBQWlCLENBQy9CLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixDQUNqQjtRQUVELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBMUJELFVBQVU7Ozs7Z0JBSkYsTUFBTTs7SUFnQ2YsK0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTNCWSx3QkFBd0I7Ozs7OztJQUV4QiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge31cblxuXHRjcmVhdGUoZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdCAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSAwLFxuXHRcdCAgIHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0ICAgc2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0ICAgcm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKTogVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdFx0Y29uc3QgdmYgPSBuZXcgVmVydGljYWxGb3JtYXRpb24oXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQsXG5cdFx0XHRzb3VyY2VTaXplLFxuXHRcdFx0c2Nyb2xsUG9zaXRpb24sXG5cdFx0XHRyb3dIZWlnaHQsXG5cdFx0XHRoaWRkZW5JdGVtc1RvcCxcblx0XHRcdGhpZGRlbkl0ZW1zQm90dG9tXG5cdFx0KTtcblxuXHRcdHZmLnNldExvZ2dlcih0aGlzLmxvZ2dlcik7XG5cblx0XHRyZXR1cm4gdmY7XG5cdH1cblxufVxuIl19