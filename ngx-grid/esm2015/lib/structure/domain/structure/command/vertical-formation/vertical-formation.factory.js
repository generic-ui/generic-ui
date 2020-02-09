/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Logger } from '../../../../../../common/cdk/logger/logger';
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
    create(enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJekQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUVwQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDOzs7Ozs7Ozs7OztJQUVELE1BQU0sQ0FBQyxVQUFtQixLQUFLLEVBQzNCLGlCQUF5QixDQUFDLEVBQzFCLGFBQXFCLENBQUMsRUFDdEIsaUJBQXlCLENBQUMsRUFDMUIsU0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsaUJBQTBCOztjQUV2QixFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FDL0IsT0FBTyxFQUNQLGNBQWMsRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxjQUFjLEVBQ2QsaUJBQWlCLENBQ2pCO1FBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs7WUEzQkQsVUFBVTs7OztZQUpGLE1BQU07Ozs7Ozs7SUFPRiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0Y3JlYXRlKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHQgICB2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gMCxcblx0XHQgICBzb3VyY2VTaXplOiBudW1iZXIgPSAwLFxuXHRcdCAgIHNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwLFxuXHRcdCAgIHJvd0hlaWdodD86IG51bWJlcixcblx0XHQgICBoaWRkZW5JdGVtc1RvcD86IG51bWJlcixcblx0XHQgICBoaWRkZW5JdGVtc0JvdHRvbT86IG51bWJlcik6IFZlcnRpY2FsRm9ybWF0aW9uIHtcblxuXHRcdGNvbnN0IHZmID0gbmV3IFZlcnRpY2FsRm9ybWF0aW9uKFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHZpZXdwb3J0SGVpZ2h0LFxuXHRcdFx0c291cmNlU2l6ZSxcblx0XHRcdHNjcm9sbFBvc2l0aW9uLFxuXHRcdFx0cm93SGVpZ2h0LFxuXHRcdFx0aGlkZGVuSXRlbXNUb3AsXG5cdFx0XHRoaWRkZW5JdGVtc0JvdHRvbVxuXHRcdCk7XG5cblx0XHR2Zi5zZXRMb2dnZXIodGhpcy5sb2dnZXIpO1xuXG5cdFx0cmV0dXJuIHZmO1xuXHR9XG5cbn1cbiJdfQ==