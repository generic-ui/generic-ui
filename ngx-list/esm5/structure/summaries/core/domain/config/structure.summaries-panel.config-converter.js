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
        /** @type {?} */
        var panelConfig = new StructureSummariesPanelConfig();
        if (config.top !== undefined && config.top !== null) {
            panelConfig.setTop(config.top);
        }
        if (config.bottom !== undefined && config.bottom !== null) {
            panelConfig.setBottom(config.bottom);
        }
        return panelConfig;
    };
    StructureSummariesPanelConfigConverter.decorators = [
        { type: Injectable }
    ];
    return StructureSummariesPanelConfigConverter;
}());
export { StructureSummariesPanelConfigConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLbkY7SUFBQTtJQWlCQSxDQUFDOzs7OztJQWRBLHdEQUFPOzs7O0lBQVAsVUFBUSxNQUF1Qjs7WUFFeEIsV0FBVyxHQUFHLElBQUksNkJBQTZCLEVBQUU7UUFFdkQsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNwRCxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOztnQkFoQkQsVUFBVTs7SUFpQlgsNkNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9zdW1tYXJpZXMtY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoY29uZmlnOiBTdW1tYXJpZXNDb25maWcpOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB7XG5cblx0XHRjb25zdCBwYW5lbENvbmZpZyA9IG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZygpO1xuXG5cdFx0aWYgKGNvbmZpZy50b3AgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudG9wICE9PSBudWxsKSB7XG5cdFx0XHRwYW5lbENvbmZpZy5zZXRUb3AoY29uZmlnLnRvcCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5ib3R0b20gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuYm90dG9tICE9PSBudWxsKSB7XG5cdFx0XHRwYW5lbENvbmZpZy5zZXRCb3R0b20oY29uZmlnLmJvdHRvbSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhbmVsQ29uZmlnO1xuXHR9XG59XG4iXX0=