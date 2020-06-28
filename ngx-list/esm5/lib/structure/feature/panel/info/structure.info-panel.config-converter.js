/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureInfoPanelConfig } from './structure.info-panel.config';
var StructureInfoPanelConfigConverter = /** @class */ (function () {
    function StructureInfoPanelConfigConverter() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureInfoPanelConfigConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var infoDialog;
        /** @type {?} */
        var columnsManager;
        /** @type {?} */
        var sourceSize;
        /** @type {?} */
        var schemaManager;
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
    };
    StructureInfoPanelConfigConverter.decorators = [
        { type: Injectable }
    ];
    return StructureInfoPanelConfigConverter;
}());
export { StructureInfoPanelConfigConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQUFBO0lBaUNBLENBQUM7Ozs7O0lBOUJBLG1EQUFPOzs7O0lBQVAsVUFBUSxNQUF1Qjs7WUFFMUIsVUFBVTs7WUFDYixjQUFjOztZQUNkLFVBQVU7O1lBQ1YsYUFBYTtRQUVkLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDcEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDL0I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQ3hDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUN2QyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNyQztRQUVELElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDcEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDL0I7UUFFRCxPQUFPLElBQUksd0JBQXdCLENBQ2xDLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxhQUFhLEVBQ2IsVUFBVSxDQUFDLENBQUM7SUFDZCxDQUFDOztnQkFoQ0QsVUFBVTs7SUFpQ1gsd0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChjb25maWc6IEluZm9QYW5lbENvbmZpZyk6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB7XG5cblx0XHRsZXQgaW5mb0RpYWxvZyxcblx0XHRcdGNvbHVtbnNNYW5hZ2VyLFxuXHRcdFx0c291cmNlU2l6ZSxcblx0XHRcdHNjaGVtYU1hbmFnZXI7XG5cblx0XHRpZiAoY29uZmlnLmluZm9EaWFsb2cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aW5mb0RpYWxvZyA9IGNvbmZpZy5pbmZvRGlhbG9nO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuY29sdW1uc01hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uc01hbmFnZXIgPSBjb25maWcuY29sdW1uc01hbmFnZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5zY2hlbWFNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHNjaGVtYU1hbmFnZXIgPSBjb25maWcuc2NoZW1hTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnNvdXJjZVNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c291cmNlU2l6ZSA9IGNvbmZpZy5zb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKFxuXHRcdFx0Y29uZmlnLmVuYWJsZWQsXG5cdFx0XHRpbmZvRGlhbG9nLFxuXHRcdFx0Y29sdW1uc01hbmFnZXIsXG5cdFx0XHRzY2hlbWFNYW5hZ2VyLFxuXHRcdFx0c291cmNlU2l6ZSk7XG5cdH1cbn1cbiJdfQ==