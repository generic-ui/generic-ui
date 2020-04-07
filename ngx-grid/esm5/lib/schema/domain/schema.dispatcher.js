/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './theme/set-schema-theme.command';
import { CreateSchemaCommand } from './create/create-schema.command';
import { SetRowColoringCommand } from './coloring/set-row-coloring.command';
import { SetSchemaVerticalGridCommand } from './grid/vertical/set-schema-vertical-grid.command';
import { SetSchemaHorizontalGridCommand } from './grid/horizontal/set-schema-horizontal-grid.command';
var SchemaDispatcher = /** @class */ (function () {
    function SchemaDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDispatcher.prototype.create = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        this.commandDispatcher.dispatch(new CreateSchemaCommand(schemaId));
    };
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDispatcher.prototype.setTheme = /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    function (theme, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(schemaId, theme));
    };
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDispatcher.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    function (rowColoring, schemaId) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(schemaId, rowColoring));
    };
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDispatcher.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (verticalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(schemaId, verticalGrid));
    };
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDispatcher.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    function (horizontalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(schemaId, horizontalGrid));
    };
    SchemaDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SchemaDispatcher;
}());
export { SchemaDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3RHO0lBR0MsMEJBQTZCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ2pFLENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLFFBQWtCO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELG1DQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxRQUFrQjtRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQseUNBQWM7Ozs7O0lBQWQsVUFBZSxXQUE4QixFQUFFLFFBQWtCO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCwwQ0FBZTs7Ozs7SUFBZixVQUFnQixZQUFxQixFQUFFLFFBQWtCO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7O0lBQWpCLFVBQWtCLGNBQXVCLEVBQUUsUUFBa0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7O2dCQXhCRCxVQUFVOzs7O2dCQVpGLGlCQUFpQjs7SUFzQzFCLHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksZ0JBQWdCOzs7Ozs7SUFFaEIsNkNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFUaGVtZUNvbW1hbmQgfSBmcm9tICcuL3RoZW1lL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZCc7XG5pbXBvcnQgeyBDcmVhdGVTY2hlbWFDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLXNjaGVtYS5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZCB9IGZyb20gJy4vY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlU2NoZW1hQ29tbWFuZChzY2hlbWFJZCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY2hlbWFUaGVtZUNvbW1hbmQoc2NoZW1hSWQsIHRoZW1lKSk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0NvbG9yaW5nQ29tbWFuZChzY2hlbWFJZCwgcm93Q29sb3JpbmcpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQoc2NoZW1hSWQsIHZlcnRpY2FsR3JpZCkpO1xuXHR9XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZChzY2hlbWFJZCwgaG9yaXpvbnRhbEdyaWQpKTtcblx0fVxuXG59XG4iXX0=