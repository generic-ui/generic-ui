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
import { StructureSetConfigQuickFilterCommand } from '../domain/structure/filter/quick/structure.set-config-quick-filter.command';
import { SetRowHeightCommand } from '../domain/structure/vertical-formation/set-row-height/set-row-height.command';
import { StructureSetHeightCommand } from '../domain/structure/vertical-formation/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../domain/structure/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command';
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
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDekksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFHOUgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDbEksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDbkgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFFckksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUdBQW1HLENBQUM7QUFJcEosTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXRDLFlBQTZCLGlCQUFvQyxFQUM3Qyw2QkFBK0QsRUFDL0QsZ0JBQWtDO1FBRnpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFrQztRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGNBQTJCLGlCQUFpQjtRQUMzRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLGNBQTJCLGlCQUFpQjtRQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxjQUEyQixpQkFBaUI7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLCtCQUErQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFFBQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQW9CLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2pGLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQscUJBQXFCLENBQUMsTUFBMEIsRUFBRSxjQUEyQixpQkFBaUI7UUFDN0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxTQUFpQixFQUFFLGNBQTJCLGlCQUFpQjtRQUMzRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7OztJQUVELHdCQUF3QixDQUFDLEtBQWtCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUE5Q0QsVUFBVTs7OztZQWxCRixpQkFBaUI7WUFFakIsZ0NBQWdDO1lBQ2hDLGdCQUFnQjs7Ozs7OztJQWtCWix1REFBcUQ7Ozs7O0lBQzlELG1FQUFnRjs7Ozs7SUFDaEYsc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlU3RydWN0dXJlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCB0cnVlKSk7XG5cdH1cblxuXHRkaXNhYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBmYWxzZSkpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIHBvc2l0aW9uKSk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kKHN0cnVjdHVyZUlkLCAraGVpZ2h0KSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQoc3RydWN0dXJlSWQsIHRoZW1lKSk7XG5cdH1cblxufVxuIl19