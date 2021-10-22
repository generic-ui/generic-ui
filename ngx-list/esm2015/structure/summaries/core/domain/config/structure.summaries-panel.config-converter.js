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
        /** @type {?} */
        const panelConfig = new StructureSummariesPanelConfig();
        if (config.top !== undefined && config.top !== null) {
            panelConfig.setTop(config.top);
        }
        if (config.bottom !== undefined && config.bottom !== null) {
            panelConfig.setBottom(config.bottom);
        }
        return panelConfig;
    }
}
StructureSummariesPanelConfigConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNbkYsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7SUFFbEQsT0FBTyxDQUFDLE1BQXVCOztjQUV4QixXQUFXLEdBQUcsSUFBSSw2QkFBNkIsRUFBRTtRQUV2RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3BELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUMxRCxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7OztZQWhCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcge1xuXG5cdFx0Y29uc3QgcGFuZWxDb25maWcgPSBuZXcgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcoKTtcblxuXHRcdGlmIChjb25maWcudG9wICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFuZWxDb25maWcuc2V0VG9wKGNvbmZpZy50b3ApO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuYm90dG9tICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFuZWxDb25maWcuc2V0Qm90dG9tKGNvbmZpZy5ib3R0b20pO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYW5lbENvbmZpZztcblx0fVxufVxuIl19