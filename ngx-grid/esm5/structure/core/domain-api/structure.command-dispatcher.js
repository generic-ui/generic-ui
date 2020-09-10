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
var StructureCommandDispatcher = /** @class */ (function () {
    function StructureCommandDispatcher(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
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
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
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
        { type: FilterCommandInvoker },
        { type: SourceDispatcher }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQy9ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBR3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBRTNILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBRzFJO0lBR0Msb0NBQTZCLGlCQUFvQyxFQUM3Qyw2QkFBbUQsRUFDbkQsZ0JBQWtDO1FBRnpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFzQjtRQUNuRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7Ozs7O0lBRUQsb0RB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bmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUtc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3Njcm9sbC1wb3NpdGlvbi9zZXQtc2Nyb2xsLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluLWFwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL3F1aWNrL3NldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0Y3JlYXRlU3RydWN0dXJlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCB0cnVlKSk7XG5cdH1cblxuXHRkaXNhYmxlVmVydGljYWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBmYWxzZSkpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIHBvc2l0aW9uKSk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyaW5nRW5hYmxlZChjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kKHN0cnVjdHVyZUlkLCAraGVpZ2h0KSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQoc3RydWN0dXJlSWQsIHRoZW1lKSk7XG5cdH1cblxufVxuIl19