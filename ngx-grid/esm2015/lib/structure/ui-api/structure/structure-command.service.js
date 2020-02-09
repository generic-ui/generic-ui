/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandService } from './filter/structure.filter.command.service';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { globalStructureId } from '../../domain/global-structure-id';
import { InitStructureCommand } from '../../domain/structure/command/init/init-structure.command';
import { SetVerticalScrollEnabledCommand } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollPositionCommand } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command';
import { SetSortingCommand } from '../../domain/structure/command/sort/set-config/set-sorting.command';
import { ToggleSortCommand } from '../../domain/structure/command/sort/toggle/toggle-sort.command';
import { StructureSetConfigQuickFilterCommand } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command';
import { StructureSetConfigSearchingCommand } from '../../domain/structure/command/search/config/structure.set-config-searching.command';
import { InitFieldsCommand } from '../../domain/structure/command/field/init/init-fields.command';
import { StructureSetSearchPhraseCommand } from '../../domain/structure/command/search/set/structure.set-search-phrase.command';
import { SetSortOrderCommand } from '../../domain/structure/command/sort/order/set-sort-order.command';
import { SetRowHeightCommand } from '../../domain/structure/command/vertical-formation/set-row-height/set-row-height.command';
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
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
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
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    initFields(columns, compositionId, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
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
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new StructureSetSearchPhraseCommand(structureId, phrase));
    }
    /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeight(rowHeight, structureId = globalStructureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, rowHeight));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUdBQW1HLENBQUM7QUFDcEosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFHdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFHbkcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFFN0ksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFFaEksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUZB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LGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBaUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQTlERCxVQUFVOzs7O1lBM0JGLGlCQUFpQjtZQUVqQiw2QkFBNkI7WUFDN0IsZ0JBQWdCOzs7Ozs7O0lBMkJaLG9EQUFxRDs7Ozs7SUFDOUQsZ0VBQTZFOzs7OztJQUM3RSxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLmNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEluaXRTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2luaXQvaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4vc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zZXQtY29uZmlnL3NldC1zb3J0aW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc2V0L3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvb3JkZXIvc2V0LXNvcnQtb3JkZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdFN0cnVjdHVyZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdHJ1ZSkpO1xuXHR9XG5cblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmFsc2UpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVG9nZ2xlU29ydENvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQpKTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0T3JkZXI6IFNvcnRTdGF0dXMsIGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRPcmRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRPcmRlcikpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRGaWVsZHNDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlKSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgcm93SGVpZ2h0KSk7XG5cdH1cblxufVxuIl19