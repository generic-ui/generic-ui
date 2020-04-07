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
export class SchemaDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    create(schemaId) {
        this.commandDispatcher.dispatch(new CreateSchemaCommand(schemaId));
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @return {?}
     */
    setTheme(theme, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(schemaId, theme));
    }
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(schemaId, rowColoring));
    }
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(schemaId, verticalGrid));
    }
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(schemaId, horizontalGrid));
    }
}
SchemaDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXRHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBNkIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDakUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsUUFBa0I7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxXQUE4QixFQUFFLFFBQWtCO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUIsRUFBRSxRQUFrQjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBdUIsRUFBRSxRQUFrQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksOEJBQThCLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7O1lBeEJELFVBQVU7Ozs7WUFaRixpQkFBaUI7Ozs7Ozs7SUFlYiw2Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNldFNjaGVtYVRoZW1lQ29tbWFuZCB9IGZyb20gJy4vdGhlbWUvc2V0LXNjaGVtYS10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IENyZWF0ZVNjaGVtYUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtc2NoZW1hLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93Q29sb3JpbmdDb21tYW5kIH0gZnJvbSAnLi9jb2xvcmluZy9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZCB9IGZyb20gJy4vZ3JpZC92ZXJ0aWNhbC9zZXQtc2NoZW1hLXZlcnRpY2FsLWdyaWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQgfSBmcm9tICcuL2dyaWQvaG9yaXpvbnRhbC9zZXQtc2NoZW1hLWhvcml6b250YWwtZ3JpZC5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTY2hlbWFDb21tYW5kKHNjaGVtYUlkKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHNjaGVtYUlkOiBTY2hlbWFJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYVRoZW1lQ29tbWFuZChzY2hlbWFJZCwgdGhlbWUpKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93Q29sb3JpbmdDb21tYW5kKHNjaGVtYUlkLCByb3dDb2xvcmluZykpO1xuXHR9XG5cblx0c2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hVmVydGljYWxHcmlkQ29tbWFuZChzY2hlbWFJZCwgdmVydGljYWxHcmlkKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kKHNjaGVtYUlkLCBob3Jpem9udGFsR3JpZCkpO1xuXHR9XG5cbn1cbiJdfQ==