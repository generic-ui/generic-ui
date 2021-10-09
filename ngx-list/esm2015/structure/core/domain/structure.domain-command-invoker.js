/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterCommandInvoker } from '../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../source/core/domain/source.dispatcher';
import { CreateStructureCommand } from './create-structure/create-structure.command';
import { SetVerticalScrollEnabledCommand } from '../../vertical-formation/core/domain/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollBarPositionCommand } from '../../vertical-formation/core/domain/scroll-bar/set-scroll-bar-position.command';
import { SetScrollPositionCommand } from '../../vertical-formation/core/domain/scroll-position/set-scroll-position.command';
import { SetConfigQuickFilterCommand } from '../../filter/core/domain/quick/set-config-quick-filter.command';
import { SetRowHeightCommand } from '../../vertical-formation/core/domain/set-row-height/set-row-height.command';
import { StructureSetHeightCommand } from '../../vertical-formation/core/domain/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../../vertical-formation/core/domain/set-row-height-theme/set-row-height-based-on-theme.command';
import { StructureCommandInvoker } from '../api/structure.command-invoker';
import { Injectable } from '@angular/core';
export class StructureDomainCommandInvoker extends StructureCommandInvoker {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     */
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        super();
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    enableVirtualScroll(structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    disableVirtualScroll(structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    scrollToTop(structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, 0));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    scrollToBottom(structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, Number.MAX_SAFE_INTEGER));
    }
    /**
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    scrollToIndex(index, structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, index));
    }
    /**
     * @param {?} position
     * @param {?} structureId
     * @return {?}
     */
    setScrollPosition(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    /**
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    setOrigin(items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
    }
    /**
     * @param {?} rowHeight
     * @param {?} structureId
     * @return {?}
     */
    setRowHeight(rowHeight, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    /**
     * @param {?} height
     * @param {?} structureId
     * @return {?}
     */
    setContainerHeight(height, structureId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    /**
     * @param {?} theme
     * @param {?} structureId
     * @return {?}
     */
    setRowHeightBasedOnTheme(theme, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
}
StructureDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDomainCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: FilterCommandInvoker },
    { type: SourceDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDomainCommandInvoker.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureDomainCommandInvoker.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureDomainCommandInvoker.prototype.sourceDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDdkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDOUgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFHNUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDN0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDakgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDbkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDbEosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsdUJBQXVCOzs7Ozs7SUFFekUsWUFBNkIsaUJBQW9DLEVBQzdDLDZCQUFtRCxFQUNuRCxnQkFBa0M7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFIb0Isc0JBQWlCLEdB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OztJQW1CWiwwREFBcUQ7Ozs7O0lBQzlELHNFQUFvRTs7Ozs7SUFDcEUseURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zY3JvbGwtYmFyL3NldC1zY3JvbGwtYmFyLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHRlbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIHRydWUpKTtcblx0fVxuXG5cdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIGZhbHNlKSk7XG5cdH1cblxuXHRzY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIDApKTtcblx0fVxuXG5cdHNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpKTtcblx0fVxuXG5cdHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBpbmRleCkpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0T3JpZ2luKHN0cnVjdHVyZUlkLCBpdGVtcyk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK3Jvd0hlaWdodCkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVySGVpZ2h0KGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kKHN0cnVjdHVyZUlkLCAraGVpZ2h0KSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kKHN0cnVjdHVyZUlkLCB0aGVtZSkpO1xuXHR9XG5cbn1cbiJdfQ==