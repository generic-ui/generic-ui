/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfig } from './structure.summaries-panel.config';
var StructureSummariesPanelConfigConverter = /** @class */ (function () {
    function StructureSummariesPanelConfigConverter() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureSummariesPanelConfigConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.enabled) {
            return new StructureSummariesPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureSummariesPanelConfig(false, false);
        }
    };
    StructureSummariesPanelConfigConverter.decorators = [
        { type: Injectable }
    ];
    return StructureSummariesPanelConfigConverter;
}());
export { StructureSummariesPanelConfigConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLbkY7SUFBQTtJQVdBLENBQUM7Ozs7O0lBUkEsd0RBQU87Ozs7SUFBUCxVQUFRLE1BQXVCO1FBRTlCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLElBQUksNkJBQTZCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkQ7SUFDRixDQUFDOztnQkFWRCxVQUFVOztJQVdYLDZDQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcge1xuXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKGNvbmZpZy50b3AsIGNvbmZpZy5ib3R0b20pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKGZhbHNlLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=