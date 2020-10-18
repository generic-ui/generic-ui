/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './theme/set-schema-theme.command';
import { CreateSchemaCommand } from './create/create-schema.command';
import { SetRowColoringCommand } from './row-coloring/set-row-coloring.command';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUd0RztJQUdDLDBCQUE2QixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNqRSxDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxRQUFrQjtRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxtQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsUUFBa0I7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELHlDQUFjOzs7OztJQUFkLFVBQWUsV0FBOEIsRUFBRSxRQUFrQjtRQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRUQsMENBQWU7Ozs7O0lBQWYsVUFBZ0IsWUFBcUIsRUFBRSxRQUFrQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7O0lBRUQsNENBQWlCOzs7OztJQUFqQixVQUFrQixjQUF1QixFQUFFLFFBQWtCO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBOEIsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOztnQkF4QkQsVUFBVTs7OztnQkFaRixpQkFBaUI7O0lBc0MxQix1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGdCQUFnQjs7Ozs7O0lBRWhCLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNldFNjaGVtYVRoZW1lQ29tbWFuZCB9IGZyb20gJy4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kIH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2V0LXJvdy1jb2xvcmluZy5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTY2hlbWFDb21tYW5kKHNjaGVtYUlkKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYVRoZW1lQ29tbWFuZChzY2hlbWFJZCwgdGhlbWUpKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93Q29sb3JpbmdDb21tYW5kKHNjaGVtYUlkLCByb3dDb2xvcmluZykpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZChzY2hlbWFJZCwgdmVydGljYWxHcmlkKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kKHNjaGVtYUlkLCBob3Jpem9udGFsR3JpZCkpO1xuXHR9XG5cbn1cbiJdfQ==