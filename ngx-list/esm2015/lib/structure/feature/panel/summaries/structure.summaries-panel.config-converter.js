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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU1uRixNQUFNLE9BQU8sc0NBQXNDOzs7OztJQUVsRCxPQUFPLENBQUMsTUFBdUI7UUFFOUIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ04sT0FBTyxJQUFJLDZCQUE2QixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7OztZQVZELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3VtbWFyaWVzL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIHtcblxuXHRcdGlmIChjb25maWcuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyhjb25maWcudG9wLCBjb25maWcuYm90dG9tKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyhmYWxzZSwgZmFsc2UpO1xuXHRcdH1cblx0fVxufVxuIl19