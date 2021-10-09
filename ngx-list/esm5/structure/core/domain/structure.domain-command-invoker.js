/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StructureDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDomainCommandInvoker, _super);
    function StructureDomainCommandInvoker(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        var _this = _super.call(this) || this;
        _this.commandDispatcher = commandDispatcher;
        _this.structureFilterCommandService = structureFilterCommandService;
        _this.sourceDispatcher = sourceDispatcher;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.create = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.enableVirtualScroll = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.disableVirtualScroll = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.scrollToTop = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, 0));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.scrollToBottom = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, Number.MAX_SAFE_INTEGER));
    };
    /**
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.scrollToIndex = /**
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    function (index, structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, index));
    };
    /**
     * @param {?} position
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setScrollPosition = /**
     * @param {?} position
     * @param {?} structureId
     * @return {?}
     */
    function (position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    };
    /**
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setOrigin = /**
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    function (items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    };
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
    };
    /**
     * @param {?} rowHeight
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @param {?} structureId
     * @return {?}
     */
    function (rowHeight, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    };
    /**
     * @param {?} height
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setContainerHeight = /**
     * @param {?} height
     * @param {?} structureId
     * @return {?}
     */
    function (height, structureId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    };
    /**
     * @param {?} theme
     * @param {?} structureId
     * @return {?}
     */
    StructureDomainCommandInvoker.prototype.setRowHeightBasedOnTheme = /**
     * @param {?} theme
     * @param {?} structureId
     * @return {?}
     */
    function (theme, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    };
    StructureDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureDomainCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: FilterCommandInvoker },
        { type: SourceDispatcher }
    ]; };
    return StructureDomainCommandInvoker;
}(StructureCommandInvoker));
export { StructureDomainCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzlILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBRzVILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ2pILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQ25JLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ2xKLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFDbUQseURBQXVCO0lBRXpFLHVDQUE2QixpQkFBb0MsRUFDN0MsNkJBQW1ELEVBQ25ELGdCQUFrQztRQUZ0RCxZQUdDLGlCQUFPLFNBQ1A7UUFKNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtR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QUksK0JBQStCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBM0RELFVBQVU7Ozs7Z0JBbEJGLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixnQkFBZ0I7O0lBNkV6QixvQ0FBQztDQUFBLEFBN0RELENBQ21ELHVCQUF1QixHQTREekU7U0E1RFksNkJBQTZCOzs7Ozs7SUFFN0IsMERBQXFEOzs7OztJQUM5RCxzRUFBb0U7Ozs7O0lBQ3BFLHlEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtZW5hYmxlZC9zZXQtdmVydGljYWwtc2Nyb2xsLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLWJhci9zZXQtc2Nyb2xsLWJhci1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vcXVpY2svc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0L3NldC1yb3ctaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LXJvdy1oZWlnaHQtdGhlbWUvc2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0ZW5hYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCB0cnVlKSk7XG5cdH1cblxuXHRkaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBmYWxzZSkpO1xuXHR9XG5cblx0c2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCAwKSk7XG5cdH1cblxuXHRzY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgaW5kZXgpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcG9zaXRpb24pKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK2hlaWdodCkpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdGhlbWUpKTtcblx0fVxuXG59XG4iXX0=