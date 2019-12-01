/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureAggregationPanelConfig } from './structure.aggregation-panel.config';
var StructureAggregationPanelConfigConverter = /** @class */ (function () {
    function StructureAggregationPanelConfigConverter() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregationPanelConfigConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.enabled) {
            return new StructureAggregationPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureAggregationPanelConfig(false, false);
        }
    };
    StructureAggregationPanelConfigConverter.decorators = [
        { type: Injectable }
    ];
    return StructureAggregationPanelConfigConverter;
}());
export { StructureAggregationPanelConfigConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFLdkY7SUFBQTtJQVdBLENBQUM7Ozs7O0lBUkEsMERBQU87Ozs7SUFBUCxVQUFRLE1BQXlCO1FBRWhDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLElBQUksK0JBQStCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNOLE9BQU8sSUFBSSwrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekQ7SUFDRixDQUFDOztnQkFWRCxVQUFVOztJQVdYLCtDQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29uZmlnJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoY29uZmlnOiBBZ2dyZWdhdGlvbkNvbmZpZyk6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWcge1xuXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb25maWcoY29uZmlnLnRvcCwgY29uZmlnLmJvdHRvbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbmZpZyhmYWxzZSwgZmFsc2UpO1xuXHRcdH1cblx0fVxufVxuIl19