/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaDispatcher } from './schema.dispatcher';
import { StructureCommandInvoker } from '../../../structure/core/api/structure.command-invoker';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
import { schemaGlobalId } from '../api/schema.global-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { structureGlobalId } from '../../../structure/core/api/structure.global-id';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { Injectable } from '@angular/core';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
var SchemaDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaDomainCommandInvoker, _super);
    function SchemaDomainCommandInvoker(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        var _this = _super.call(this) || this;
        _this.schemaDispatcher = schemaDispatcher;
        _this.structureCommandService = structureCommandService;
        _this.fabricModalThemeService = fabricModalThemeService;
        return _this;
    }
    /**
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.create = /**
     * @param {?=} schemaId
     * @return {?}
     */
    function (schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.create(schemaId.toAggregateId());
    };
    /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, schemaId, structureId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    };
    /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        /** @type {?} */
        var schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    };
    /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    };
    /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        if (schemaId === void 0) { schemaId = schemaGlobalId; }
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.toSchemaRowColoring = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                break;
        }
    };
    /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    SchemaDomainCommandInvoker.prototype.toFabricTheme = /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    function (schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                break;
        }
    };
    SchemaDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDomainCommandInvoker.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: StructureCommandInvoker },
        { type: FabricModalThemeService }
    ]; };
    return SchemaDomainCommandInvoker;
}(SchemaCommandInvoker));
export { SchemaDomainCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.fabricModalThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFO0lBQ2dELHNEQUFvQjtJQUVuRSxvQ0FBNkIsZ0JBQWtDLEVBQzNDLHVCQUFnRCxFQUNoRCx1QkFBZ0Q7UUFGcEUsWUFHQyxpQkFBTyxTQUNQO1FBSjRCLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCOztJQUVwRSxDQUFDOzs7OztJQUVELDJDQUFNOzs7O0lBQU4sVUFBTyxRQUFnRDtRQUFoRCx5QkFBQSxFQUFBLHlCQUFnRDtRQUN0RCxJ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WSwwQkFBMEI7Ozs7OztJQUUxQixzREFBbUQ7Ozs7O0lBQzVELDZEQUFpRTs7Ozs7SUFDakUsNkRBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSwgVGhlbWUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgc2NoZW1hR2xvYmFsSWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTY2hlbWFDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNNb2RhbFRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQgPSBzY2hlbWFHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jcmVhdGUoc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSxcblx0XHRcdCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkID0gc2NoZW1hR2xvYmFsSWQsXG5cdFx0XHQgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWRcblx0KTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHRcdHRoaXMuZmFicmljTW9kYWxUaGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhpcy50b0ZhYnJpY1RoZW1lKHRoZW1lKSk7IC8vIFRPRE8gZ2l0aHViICMyMTYyXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzY2hlbWFSb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgPSB0aGlzLnRvU2NoZW1hUm93Q29sb3Jpbmcocm93Q29sb3JpbmcpO1xuXG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCA9IHNjaGVtYUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvRmFicmljVGhlbWUoc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lKTogVGhlbWUge1xuXG5cdFx0c3dpdGNoIChzY2hlbWFUaGVtZSkge1xuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblx0XHRcdH1cblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdH1cbn1cbiJdfQ==