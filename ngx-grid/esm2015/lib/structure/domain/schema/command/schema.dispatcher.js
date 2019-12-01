/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetSchemaCommand } from './set/set-schema.command';
import { SetSchemaVerticalGridCommand } from './grid/vertical/set-schema-vertical-grid.command';
import { SetSchemaHorizontalGridCommand } from './grid/horizontal/set-schema-horizontal-grid.command';
import { SetSchemaThemeCommand } from './theme/set-schema-theme.command';
import { globalStructureId } from '../../global-structure-id';
import { SetRowColoringCommand } from './coloring/set/set-row-coloring.command';
import { ChangeSchemaTopHeaderCommand } from './column-header/top/change-schema-top-header.command';
import { ChangeSchemaBottomHeaderCommand } from './column-header/bottom/change-schema-bottom-header.command';
export class SchemaDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    setSchema(structureId, height) {
        this.commandDispatcher.dispatch(new SetSchemaCommand(structureId, height));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeVerticalGrid(structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeHorizontalGrid(structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    setTheme(structureId, theme) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(structureId, theme));
    }
    /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    setRowColoring(structureId = globalStructureId, coloring) {
        this.commandDispatcher.dispatch(new SetRowColoringCommand(structureId, coloring));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeTopHeader(structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaTopHeaderCommand(structureId, enabled));
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    changeBottomHeader(structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaBottomHeaderCommand(structureId, enabled));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBSTdHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFdBQXdCLEVBQUUsTUFBYztRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBd0IsRUFBRSxPQUFnQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsV0FBd0IsRUFBRSxPQUFnQjtRQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksOEJBQThCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCLEVBQUUsS0FBa0I7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxjQUEyQixpQkFBaUIsRUFBRSxRQUEyQjtRQUN2RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQXdCLEVBQUUsT0FBZ0I7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLFdBQXdCLEVBQUUsT0FBZ0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQWhDRCxVQUFVOzs7O1lBZkYsaUJBQWlCOzs7Ozs7O0lBa0JiLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFDb21tYW5kIH0gZnJvbSAnLi9zZXQvc2V0LXNjaGVtYS5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQgfSBmcm9tICcuL2dyaWQvdmVydGljYWwvc2V0LXNjaGVtYS12ZXJ0aWNhbC1ncmlkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTZXRTY2hlbWFUaGVtZUNvbW1hbmQgfSBmcm9tICcuL3RoZW1lL3NldC1zY2hlbWEtdGhlbWUuY29tbWFuZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNldFJvd0NvbG9yaW5nQ29tbWFuZCB9IGZyb20gJy4vY29sb3Jpbmcvc2V0L3NldC1yb3ctY29sb3JpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4taGVhZGVyL3RvcC9jaGFuZ2Utc2NoZW1hLXRvcC1oZWFkZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kIH0gZnJvbSAnLi9jb2x1bW4taGVhZGVyL2JvdHRvbS9jaGFuZ2Utc2NoZW1hLWJvdHRvbS1oZWFkZXIuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRTY2hlbWEoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYUNvbW1hbmQoc3RydWN0dXJlSWQsIGhlaWdodCkpO1xuXHR9XG5cblx0Y2hhbmdlVmVydGljYWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYVZlcnRpY2FsR3JpZENvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdGNoYW5nZUhvcml6b250YWxHcmlkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2V0VGhlbWUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCB0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY2hlbWFUaGVtZUNvbW1hbmQoc3RydWN0dXJlSWQsIHRoZW1lKSk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCwgY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93Q29sb3JpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb2xvcmluZykpO1xuXHR9XG5cblx0Y2hhbmdlVG9wSGVhZGVyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENoYW5nZVNjaGVtYVRvcEhlYWRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdGNoYW5nZUJvdHRvbUhlYWRlcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDaGFuZ2VTY2hlbWFCb3R0b21IZWFkZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBlbmFibGVkKSk7XG5cdH1cblxufVxuIl19