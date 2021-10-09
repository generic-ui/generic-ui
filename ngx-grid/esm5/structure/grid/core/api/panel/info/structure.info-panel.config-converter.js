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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFO0lBQUE7SUFpQ0EsQ0FBQzs7Ozs7SUE5QkEsbURBQU87Ozs7SUFBUCxVQUFRLE1BQXVCOztZQUUxQixVQUFVOztZQUNiLGNBQWM7O1lBQ2QsVUFBVTs7WUFDVixhQUFhO1FBRWQsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMvQjtRQUVELElBQUksTUFBTSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDdkM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMvQjtRQUVELE9BQU8sSUFBSSx3QkFBd0IsQ0FDbEMsTUFBTSxDQUFDLE9BQU8sRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGFBQWEsRUFDYixVQUFVLENBQUMsQ0FBQztJQUNkLENBQUM7O2dCQWhDRCxVQUFVOztJQWlDWCx3Q0FBQztDQUFBLEFBakNELElBaUNDO1NBaENZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogSW5mb1BhbmVsQ29uZmlnKTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRcdGxldCBpbmZvRGlhbG9nLFxuXHRcdFx0Y29sdW1uc01hbmFnZXIsXG5cdFx0XHRzb3VyY2VTaXplLFxuXHRcdFx0c2NoZW1hTWFuYWdlcjtcblxuXHRcdGlmIChjb25maWcuaW5mb0RpYWxvZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpbmZvRGlhbG9nID0gY29uZmlnLmluZm9EaWFsb2c7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5jb2x1bW5zTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5zTWFuYWdlciA9IGNvbmZpZy5jb2x1bW5zTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnNjaGVtYU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c2NoZW1hTWFuYWdlciA9IGNvbmZpZy5zY2hlbWFNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuc291cmNlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzb3VyY2VTaXplID0gY29uZmlnLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGluZm9EaWFsb2csXG5cdFx0XHRjb2x1bW5zTWFuYWdlcixcblx0XHRcdHNjaGVtYU1hbmFnZXIsXG5cdFx0XHRzb3VyY2VTaXplKTtcblx0fVxufVxuIl19