/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandDispatcher } from './filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../domain/source/source.dispatcher';
import { structureGlobalId } from './structure.global-id';
import { CreateStructureCommand } from '../domain/structure/create-structure/create-structure.command';
import { SetVerticalScrollEnabledCommand } from '../domain/structure/vertical-formation/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollPositionCommand } from '../domain/structure/vertical-formation/scroll-position/set-scroll-position.command';
import { SetSortingCommand } from '../domain/structure/sort/set-config/set-sorting.command';
import { ToggleSortCommand } from '../domain/structure/sort/toggle/toggle-sort.command';
import { StructureSetConfigQuickFilterCommand } from '../domain/structure/filter/quick/structure.set-config-quick-filter.command';
import { InitFieldsCommand } from '../domain/structure/field/init/init-fields.command';
import { SetSortOrderCommand } from '../domain/structure/sort/order/set-sort-order.command';
import { SetRowHeightCommand } from '../domain/structure/vertical-formation/set-row-height/set-row-height.command';
import { StructureSearchDispatcher } from '../domain/structure/search/structure.search.dispatcher';
import { StructureSetHeightCommand } from '../domain/structure/vertical-formation/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../domain/structure/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command';
var StructureCommandDispatcher = /** @class */ (function () {
    function StructureCommandDispatcher(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
        this.structureSearchDispatcher = structureSearchDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.createStructure = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.enableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.disableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    };
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setScrollPosition = /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    function (position, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    };
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setSortingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.toggleSort = /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (fieldId, compositionId, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    };
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setSortOrder = /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (fieldId, sortOrder, compositionId, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    };
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.initFields = /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (columns, compositionId, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.structureSearchDispatcher.setSearchingConfig(config, structureId);
    };
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.search = /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.structureSearchDispatcher.search(phrase, structureId);
    };
    /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    function (rowHeight, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setContainerHeight = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    };
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandDispatcher.prototype.setRowHeightBasedOnTheme = /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    };
    StructureCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCommandDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: StructureFilterCommandDispatcher },
        { type: SourceDispatcher },
        { type: StructureSearchDispatcher }
    ]; };
    return StructureCommandDispatcher;
}());
export { StructureCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandDispatcher.prototype.structureSearchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDekksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFFOUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHeEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFHbEksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEZB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LENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCw2REFBd0I7Ozs7O0lBQXhCLFVBQXlCLEtBQWtCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQXZFRCxVQUFVOzs7O2dCQTdCRixpQkFBaUI7Z0JBRWpCLGdDQUFnQztnQkFDaEMsZ0JBQWdCO2dCQW9CaEIseUJBQXlCOztJQStFbEMsaUNBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXhFWSwwQkFBMEI7Ozs7OztJQUUxQix1REFBcUQ7Ozs7O0lBQzlELG1FQUFnRjs7Ozs7SUFDaEYsc0RBQW1EOzs7OztJQUNuRCwrREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4vc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3NvcnQvc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXI6IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZVN0cnVjdHVyZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdHJ1ZSkpO1xuXHR9XG5cblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmFsc2UpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU29ydENvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0T3JkZXI6IFNvcnRPcmRlciwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U29ydE9yZGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCwgc29ydE9yZGVyKSk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5zZXRGaWx0ZXJpbmdFbmFibGVkKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRpbml0RmllbGRzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdEZpZWxkc0NvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGNvbHVtbnMpKTtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2VhcmNoKHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK3Jvd0hlaWdodCkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtoZWlnaHQpKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdGhlbWUpKTtcblx0fVxuXG59XG4iXX0=