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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNbkYsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7SUFFbEQsT0FBTyxDQUFDLE1BQXVCO1FBRTlCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLElBQUksNkJBQTZCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNOLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkQ7SUFDRixDQUFDOzs7WUFWRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIHtcblxuXHRcdGlmIChjb25maWcuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyhjb25maWcudG9wLCBjb25maWcuYm90dG9tKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyhmYWxzZSwgZmFsc2UpO1xuXHRcdH1cblx0fVxufVxuIl19