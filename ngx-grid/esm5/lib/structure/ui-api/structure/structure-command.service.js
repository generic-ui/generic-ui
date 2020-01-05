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
import { SetSortingCommand } from '../../domain/structure/command/sort/set/set-sorting.command';
import { ToggleSortCommand } from '../../domain/structure/command/sort/toggle/toggle-sort.command';
import { StructureSetConfigQuickFilterCommand } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command';
import { StructureSetConfigSearchingCommand } from '../../domain/structure/command/search/config/structure.set-config-searching.command';
import { InitFieldsCommand } from '../../domain/structure/command/field/init/init-fields.command';
import { StructureSetSearchPhraseCommand } from '../../domain/structure/command/search/set/structure.set-search-phrase.command';
var StructureCommandService = /** @class */ (function () {
    function StructureCommandService(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.init = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new InitStructureCommand(structureId));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.enableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.disableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    };
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setScrollPosition = /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    function (position, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    };
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setSortingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.toggleSort = /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (fieldId, compositionId, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    };
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.initFields = /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (columns, compositionId, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    };
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.search = /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new StructureSetSearchPhraseCommand(structureId, phrase));
    };
    StructureCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCommandService.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: StructureFilterCommandService },
        { type: SourceDispatcher }
    ]; };
    return StructureCommandService;
}());
export { StructureCommandService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUdBQW1HLENBQUM7QUFDcEosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFHbkcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFFN0ksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFFekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFHaEk7SUFHQyxpQ0FBNkIsaUJBQW9DLEVBQzdDLDZCQUE0RCxFQUM1RCxnQkFBa0M7UUFGekIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFt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QUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7Ozs7SUFFRCx3Q0FBTTs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Z0JBdERELFVBQVU7Ozs7Z0JBeEJGLGlCQUFpQjtnQkFFakIsNkJBQTZCO2dCQUM3QixnQkFBZ0I7O0lBNkV6Qiw4QkFBQztDQUFBLEFBeERELElBd0RDO1NBdkRZLHVCQUF1Qjs7Ozs7O0lBRXZCLG9EQUFxRDs7Ozs7SUFDOUQsZ0VBQTZFOzs7OztJQUM3RSxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLmNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEluaXRTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2luaXQvaW5pdC1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4vc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zZXQvc2V0LXNvcnRpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvdG9nZ2xlL3RvZ2dsZS1zb3J0LmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zZXQvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0U3RydWN0dXJlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCB0cnVlKSk7XG5cdH1cblxuXHRkaXNhYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBmYWxzZSkpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIHBvc2l0aW9uKSk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U29ydGluZ0NvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkPzogQ29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBUb2dnbGVTb3J0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgZmllbGRJZCkpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRGaWVsZHNDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBjb2x1bW5zKSk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlKSk7XG5cdH1cblxufVxuIl19