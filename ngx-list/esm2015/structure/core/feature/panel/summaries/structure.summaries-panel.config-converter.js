/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfig } from './structure.summaries-panel.config';
export class StructureSummariesPanelConfigConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        if (config.enabled) {
            return new StructureSummariesPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureSummariesPanelConfig(false, false);
        }
    }
}
StructureSummariesPanelConfigConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNbkYsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7SUFFbEQsT0FBTyxDQUFDLE1BQXVCO1FBRTlCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLElBQUksNkJBQTZCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkQ7SUFDRixDQUFDOzs7WUFWRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N1bW1hcmllcy9zdW1tYXJpZXMtY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoY29uZmlnOiBTdW1tYXJpZXNDb25maWcpOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB7XG5cblx0XHRpZiAoY29uZmlnLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcoY29uZmlnLnRvcCwgY29uZmlnLmJvdHRvbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcoZmFsc2UsIGZhbHNlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==