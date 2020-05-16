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
export class StructureCommandDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     * @param {?} structureSearchDispatcher
     */
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
        this.structureSearchDispatcher = structureSearchDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    createStructure(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    enableVerticalScroll(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    disableVerticalScroll(structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    setScrollPosition(position, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = structureGlobalId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    toggleSort(fieldId, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = structureGlobalId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    }
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    initFields(columns, compositionId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
        this.structureSearchDispatcher.setSearchingConfig(config, structureId);
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.structureSearchDispatcher.search(phrase, structureId);
    }
    /**
     * @param {?} rowHeight
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeight(rowHeight, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setContainerHeight(height, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    setRowHeightBasedOnTheme(theme, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
}
StructureCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureFilterCommandDispatcher },
    { type: SourceDispatcher },
    { type: StructureSearchDispatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDekksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFFOUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHeEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFHbEksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEZB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cmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9zb3J0L3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4vZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgU2V0U29ydE9yZGVyQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGVTdHJ1Y3R1cmUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHRlbmFibGVWZXJ0aWNhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIHRydWUpKTtcblx0fVxuXG5cdGRpc2FibGVWZXJ0aWNhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIGZhbHNlKSk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcG9zaXRpb24pKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0T3JpZ2luKHN0cnVjdHVyZUlkLCBpdGVtcyk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTb3J0aW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFRvZ2dsZVNvcnRDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkKSk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIsIGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRPcmRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRPcmRlcikpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRGaWVsZHNDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kKHN0cnVjdHVyZUlkLCAraGVpZ2h0KSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQoc3RydWN0dXJlSWQsIHRoZW1lKSk7XG5cdH1cblxufVxuIl19