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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBS25GO0lBQUE7SUFXQSxDQUFDOzs7OztJQVJBLHdEQUFPOzs7O0lBQVAsVUFBUSxNQUF1QjtRQUU5QixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTixPQUFPLElBQUksNkJBQTZCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0YsQ0FBQzs7Z0JBVkQsVUFBVTs7SUFXWCw2Q0FBQztDQUFBLEFBWEQsSUFXQztTQVZZLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcge1xuXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKGNvbmZpZy50b3AsIGNvbmZpZy5ib3R0b20pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKGZhbHNlLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=