/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureInfoPanelConfig } from './structure.info-panel.config';
export class StructureInfoPanelConfigConverter {
    /**
     * @param {?} config
     * @return {?}
     */
    convert(config) {
        /** @type {?} */
        let infoDialog;
        /** @type {?} */
        let columnsManager;
        /** @type {?} */
        let sourceSize;
        /** @type {?} */
        let schemaManager;
        if (config.infoDialog !== undefined) {
            infoDialog = config.infoDialog;
        }
        if (config.columnsManager !== undefined) {
            columnsManager = config.columnsManager;
        }
        if (config.schemaManager !== undefined) {
            schemaManager = config.schemaManager;
        }
        if (config.sourceSize !== undefined) {
            sourceSize = config.sourceSize;
        }
        return new StructureInfoPanelConfig(config.enabled, infoDialog, columnsManager, schemaManager, sourceSize);
    }
}
StructureInfoPanelConfigConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHekUsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7SUFFN0MsT0FBTyxDQUFDLE1BQXVCOztZQUUxQixVQUFVOztZQUNiLGNBQWM7O1lBQ2QsVUFBVTs7WUFDVixhQUFhO1FBRWQsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMvQjtRQUVELElBQUksTUFBTSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDdkM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMvQjtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FDbEMsTUFBTSxDQUFDLE9BQU8sRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGFBQWEsRUFDYixVQUFVLENBQUMsQ0FBQztJQUNkLENBQUM7OztZQWhDRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoY29uZmlnOiBJbmZvUGFuZWxDb25maWcpOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcge1xuXG5cdFx0bGV0IGluZm9EaWFsb2csXG5cdFx0XHRjb2x1bW5zTWFuYWdlcixcblx0XHRcdHNvdXJjZVNpemUsXG5cdFx0XHRzY2hlbWFNYW5hZ2VyO1xuXG5cdFx0aWYgKGNvbmZpZy5pbmZvRGlhbG9nICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGluZm9EaWFsb2cgPSBjb25maWcuaW5mb0RpYWxvZztcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLmNvbHVtbnNNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbnNNYW5hZ2VyID0gY29uZmlnLmNvbHVtbnNNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuc2NoZW1hTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzY2hlbWFNYW5hZ2VyID0gY29uZmlnLnNjaGVtYU1hbmFnZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5zb3VyY2VTaXplICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHNvdXJjZVNpemUgPSBjb25maWcuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyhcblx0XHRcdGNvbmZpZy5lbmFibGVkLFxuXHRcdFx0aW5mb0RpYWxvZyxcblx0XHRcdGNvbHVtbnNNYW5hZ2VyLFxuXHRcdFx0c2NoZW1hTWFuYWdlcixcblx0XHRcdHNvdXJjZVNpemUpO1xuXHR9XG59XG4iXX0=