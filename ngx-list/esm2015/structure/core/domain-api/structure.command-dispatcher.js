/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterCommandInvoker } from '../../filter/domain-api/filter.command-invoker';
import { SourceDispatcher } from '../../source/domain/source.dispatcher';
import { structureGlobalId } from './structure.global-id';
import { CreateStructureCommand } from '../domain/create-structure/create-structure.command';
import { SetVerticalScrollEnabledCommand } from '../domain/vertical-formation/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollPositionCommand } from '../domain/vertical-formation/scroll-position/set-scroll-position.command';
import { SetConfigQuickFilterCommand } from '../../filter/domain/quick/set-config-quick-filter.command';
import { SetRowHeightCommand } from '../domain/vertical-formation/set-row-height/set-row-height.command';
import { StructureSetHeightCommand } from '../domain/vertical-formation/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../domain/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command';
export class StructureCommandDispatcher {
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
    setFilterConfig(config, structureId = structureGlobalId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
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
    { type: FilterCommandInvoker },
    { type: SourceDispatcher }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBR3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBRTNILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBSTFJLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQUV0QyxZQUE2QixpQkFBb0MsRUFDN0MsNkJBQW1ELEVBQ25ELGdCQUFrQztRQUZ6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBc0I7UUFDbkQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxjQUEyQixpQkFBaUI7UUFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxRQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUMvRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksd0JBQXdCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWlCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNqRixJQUFJLENBQUMsNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFDLE1BQTBCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBaUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBYyxFQUFFLGNBQTJCLGlCQUFpQjtRQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFrQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN4RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFsQkYsaUJBQWlCO1lBRWpCLG9CQUFvQjtZQUNwQixnQkFBZ0I7Ozs7Ozs7SUFrQlosdURBQXFEOzs7OztJQUM5RCxtRUFBb0U7Ozs7O0lBQ3BFLHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGNyZWF0ZVN0cnVjdHVyZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdHJ1ZSkpO1xuXHR9XG5cblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmFsc2UpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRSb3dIZWlnaHRDb21tYW5kKHN0cnVjdHVyZUlkLCArcm93SGVpZ2h0KSk7XG5cdH1cblxuXHRzZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK2hlaWdodCkpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kKHN0cnVjdHVyZUlkLCB0aGVtZSkpO1xuXHR9XG5cbn1cbiJdfQ==