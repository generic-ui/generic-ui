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
var SchemaDispatcher = /** @class */ (function () {
    function SchemaDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    SchemaDispatcher.prototype.setSchema = /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    function (structureId, height) {
        this.commandDispatcher.dispatch(new SetSchemaCommand(structureId, height));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeVerticalGrid = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeHorizontalGrid = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    SchemaDispatcher.prototype.setTheme = /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    function (structureId, theme) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(structureId, theme));
    };
    /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    SchemaDispatcher.prototype.setRowColoring = /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    function (structureId, coloring) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetRowColoringCommand(structureId, coloring));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeTopHeader = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaTopHeaderCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeBottomHeader = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaBottomHeaderCommand(structureId, enabled));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRzdHO0lBR0MsMEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELG9DQUFTOzs7OztJQUFULFVBQVUsV0FBd0IsRUFBRSxNQUFjO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFFRCw2Q0FBa0I7Ozs7O0lBQWxCLFVBQW1CLFdBQXdCLEVBQUUsT0FBZ0I7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELCtDQUFvQjs7Ozs7SUFBcEIsVUFBcUIsV0FBd0IsRUFBRSxPQUFnQjtRQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksOEJBQThCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Ozs7O0lBRUQsbUNBQVE7Ozs7O0lBQVIsVUFBUyxXQUF3QixFQUFFLEtBQWtCO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7Ozs7SUFFRCx5Q0FBYzs7Ozs7SUFBZCxVQUFlLFdBQTRDLEVBQUUsUUFBMkI7UUFBekUsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELDBDQUFlOzs7OztJQUFmLFVBQWdCLFdBQXdCLEVBQUUsT0FBZ0I7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELDZDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsV0FBd0IsRUFBRSxPQUFnQjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7Z0JBaENELFVBQVU7Ozs7Z0JBZkYsaUJBQWlCOztJQWlEMUIsdUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxnQkFBZ0I7Ozs7OztJQUVoQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2V0U2NoZW1hQ29tbWFuZCB9IGZyb20gJy4vc2V0L3NldC1zY2hlbWEuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kIH0gZnJvbSAnLi9ncmlkL3ZlcnRpY2FsL3NldC1zY2hlbWEtdmVydGljYWwtZ3JpZC5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZCB9IGZyb20gJy4vZ3JpZC9ob3Jpem9udGFsL3NldC1zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2V0U2NoZW1hVGhlbWVDb21tYW5kIH0gZnJvbSAnLi90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTZXRSb3dDb2xvcmluZ0NvbW1hbmQgfSBmcm9tICcuL2NvbG9yaW5nL3NldC9zZXQtcm93LWNvbG9yaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ2hhbmdlU2NoZW1hVG9wSGVhZGVyQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uLWhlYWRlci90b3AvY2hhbmdlLXNjaGVtYS10b3AtaGVhZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ2hhbmdlU2NoZW1hQm90dG9tSGVhZGVyQ29tbWFuZCB9IGZyb20gJy4vY29sdW1uLWhlYWRlci9ib3R0b20vY2hhbmdlLXNjaGVtYS1ib3R0b20taGVhZGVyLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0U2NoZW1hKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY2hlbWFDb21tYW5kKHN0cnVjdHVyZUlkLCBoZWlnaHQpKTtcblx0fVxuXG5cdGNoYW5nZVZlcnRpY2FsR3JpZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY2hlbWFWZXJ0aWNhbEdyaWRDb21tYW5kKHN0cnVjdHVyZUlkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRjaGFuZ2VIb3Jpem9udGFsR3JpZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY2hlbWFIb3Jpem9udGFsR3JpZENvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNldFRoZW1lKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgdGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2NoZW1hVGhlbWVDb21tYW5kKHN0cnVjdHVyZUlkLCB0aGVtZSkpO1xuXHR9XG5cblx0c2V0Um93Q29sb3Jpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQsIGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0NvbG9yaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29sb3JpbmcpKTtcblx0fVxuXG5cdGNoYW5nZVRvcEhlYWRlcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDaGFuZ2VTY2hlbWFUb3BIZWFkZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBlbmFibGVkKSk7XG5cdH1cblxuXHRjaGFuZ2VCb3R0b21IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2hhbmdlU2NoZW1hQm90dG9tSGVhZGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==