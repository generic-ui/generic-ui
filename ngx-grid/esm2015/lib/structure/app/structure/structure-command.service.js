/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandService } from '../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { globalStructureId } from '../../domain/global-structure-id';
import { InitStructureCommand } from '../../domain/structure/command/init/init-structure.command';
import { SetVerticalScrollEnabledCommand } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollPositionCommand } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command';
import { SetSortingCommand } from '../../domain/structure/command/sort/set/set-sorting.command';
import { ToggleSortCommand } from '../../domain/structure/command/sort/toggle/toggle-sort.command';
import { StructureSetConfigQuickFilterCommand } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command';
import { StructureSetConfigSearchingCommand } from '../../domain/structure/command/search/config/structure.set-config-searching.command';
import { InitFieldsCommand } from '../../domain/structure/command/field/init/init-fields.command';
export class StructureCommandService {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     */
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    init(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new InitStructureCommand(structureId));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enableVerticalScroll(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disableVerticalScroll(structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    setScrollPosition(position, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = globalStructureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    toggleSort(fieldId, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = globalStructureId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    }
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    initFields(columns, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    }
}
StructureCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCommandService.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureFilterCommandService },
    { type: SourceDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.sourceDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDL0csT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUdBQW1HLENBQUM7QUFDcEosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFHbkcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFFN0ksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFJbEcsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBRW5DLFlBQTZCLGlCQUFvQyxFQUM3Qyw2QkFBNEQsRUFDNUQsZ0JBQWtDO1FBRnpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msa0NBQTZCLEdBQTdCLDZCQUE2QixDQUErQjtRQUM1RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLGNBQTJCLGlCQUFpQjtRQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFFBQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBcUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDbkYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0IsRUFBRSxhQUE2QixFQUFFLGNBQTJCLGlCQUFpQjtRQUN2RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNqRixJQUFJLENBQUMsNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFDLE1BQTBCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNwRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksa0NBQWtDLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUE0QixFQUFFLGFBQTRCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2xILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7O1lBbERELFVBQVU7Ozs7WUF2QkYsaUJBQWlCO1lBRWpCLDZCQUE2QjtZQUM3QixnQkFBZ0I7Ozs7Ozs7SUF1Qlosb0RBQXFEOzs7OztJQUM5RCxnRUFBNkU7Ozs7O0lBQzdFLG1EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIuY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgSW5pdFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvaW5pdC9pbml0LXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTZXRTb3J0aW5nQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC9zZXQtc29ydGluZy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdFN0cnVjdHVyZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdHJ1ZSkpO1xuXHR9XG5cblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmFsc2UpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU29ydENvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0RmllbGRzQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgY29sdW1ucykpO1xuXHR9XG5cbn1cbiJdfQ==