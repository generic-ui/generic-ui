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
        if (config.infoDialog !== undefined) {
            infoDialog = config.infoDialog;
        }
        if (config.columnsManager !== undefined) {
            columnsManager = config.columnsManager;
        }
        if (config.sourceSize !== undefined) {
            sourceSize = config.sourceSize;
        }
        return new StructureInfoPanelConfig(config.enabled, infoDialog, columnsManager, sourceSize);
    }
}
StructureInfoPanelConfigConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RSxNQUFNLE9BQU8saUNBQWlDOzs7OztJQUU3QyxPQUFPLENBQUMsTUFBdUI7O1lBRTFCLFVBQVU7O1lBQ2IsY0FBYzs7WUFDZCxVQUFVO1FBRVgsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMvQjtRQUVELElBQUksTUFBTSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDdkM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ3BDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxJQUFJLHdCQUF3QixDQUNsQyxNQUFNLENBQUMsT0FBTyxFQUNkLFVBQVUsRUFDVixjQUFjLEVBQ2QsVUFBVSxDQUFDLENBQUM7SUFDZCxDQUFDOzs7WUExQkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogSW5mb1BhbmVsQ29uZmlnKTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRcdGxldCBpbmZvRGlhbG9nLFxuXHRcdFx0Y29sdW1uc01hbmFnZXIsXG5cdFx0XHRzb3VyY2VTaXplO1xuXG5cdFx0aWYgKGNvbmZpZy5pbmZvRGlhbG9nICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGluZm9EaWFsb2cgPSBjb25maWcuaW5mb0RpYWxvZztcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLmNvbHVtbnNNYW5hZ2VyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbnNNYW5hZ2VyID0gY29uZmlnLmNvbHVtbnNNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuc291cmNlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzb3VyY2VTaXplID0gY29uZmlnLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGluZm9EaWFsb2csXG5cdFx0XHRjb2x1bW5zTWFuYWdlcixcblx0XHRcdHNvdXJjZVNpemUpO1xuXHR9XG59XG4iXX0=