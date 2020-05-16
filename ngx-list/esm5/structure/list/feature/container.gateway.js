/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ContainerTemplate } from './source/template/container-template';
import { ListCardTemplate } from './card/template/list.card-template';
import { ListViewMode } from '../domain/mode/list-view-mode';
/**
 * @abstract
 */
var ContainerGateway = /** @class */ (function () {
    function ContainerGateway(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structurePagingCommandDispatcher, listViewCommandDispatcher) {
        this.structureId = structureId;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.sourceCommandService = sourceCommandService;
        this.containerTemplateArchive = containerTemplateArchive;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.listViewCommandDispatcher = listViewCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ContainerGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (simpleChanges.template !== undefined && simpleChanges.template.currentValue !== undefined) {
            this.containerTemplateArchive.next(this.template);
        }
        if (simpleChanges.cardTemplate !== undefined && simpleChanges.cardTemplate.currentValue !== undefined) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            var pagingConfig = void 0;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                // if (this.paging.displayMode !== undefined) {
                // 	this.structurePagingDisplayModeArchive.next(this.paging.displayMode);
                // }
            }
            this.structurePagingCommandDispatcher.setPaging(pagingConfig);
        }
        if (simpleChanges.mode !== undefined && simpleChanges.mode.currentValue !== undefined) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (simpleChanges.modeSelector !== undefined && simpleChanges.modeSelector.currentValue !== undefined) {
            this.listViewCommandDispatcher.toggleSelector(this.modeSelector, this.listViewReadModelRootId);
        }
        /**
         * Setting source should be last step
         */
        if (simpleChanges.items) {
            this.sourceCommandService.setOrigin(this.items, this.structureId);
        }
    };
    ContainerGateway.propDecorators = {
        items: [{ type: Input }],
        template: [{ type: Input }],
        cardTemplate: [{ type: Input }],
        paging: [{ type: Input }],
        mode: [{ type: Input }],
        modeSelector: [{ type: Input }]
    };
    return ContainerGateway;
}());
export { ContainerGateway };
if (false) {
    /** @type {?} */
    ContainerGateway.prototype.items;
    /** @type {?} */
    ContainerGateway.prototype.template;
    /** @type {?} */
    ContainerGateway.prototype.cardTemplate;
    /** @type {?} */
    ContainerGateway.prototype.paging;
    /** @type {?} */
    ContainerGateway.prototype.mode;
    /** @type {?} */
    ContainerGateway.prototype.modeSelector;
    /** @type {?} */
    ContainerGateway.prototype.structureId;
    /** @type {?} */
    ContainerGateway.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @protected
     */
    ContainerGateway.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    ContainerGateway.prototype.containerTemplateArchive;
    /**
     * @type {?}
     * @protected
     */
    ContainerGateway.prototype.listCardTemplateArchive;
    /**
     * @type {?}
     * @protected
     */
    ContainerGateway.prototype.structurePagingCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    ContainerGateway.prototype.listViewCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBTWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUs3RDtJQW9CQywwQkFDaUIsV0FBd0IsRUFDeEIsdUJBQWdELEVBQzdDLG9CQUE2QyxFQUM3Qyx3QkFBa0QsRUFDbEQsdUJBQWdELEVBQ2hELGdDQUF5RCxFQUN6RCx5QkFBb0Q7UUFOdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO1FBQzdDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXlCO1FBQ3pELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFFeEUsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksYUFBNEI7UUFFdkMsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDOUYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUN0RyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFOztnQkFFdEYsWUFBWSxTQUFjO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3RGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksYUFBYSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3RHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMvRjtRQUVEOztXQUVHO1FBQ0gsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzt3QkF4RUEsS0FBSzsyQkFHTCxLQUFLOytCQUdMLEtBQUs7eUJBR0wsS0FBSzt1QkFHTCxLQUFLOytCQUdMLEtBQUs7O0lBMERQLHVCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0EzRXFCLGdCQUFnQjs7O0lBRXJDLGlDQUNrQjs7SUFFbEIsb0NBQzRCOztJQUU1Qix3Q0FDK0I7O0lBRS9CLGtDQUNxQjs7SUFFckIsZ0NBQ21COztJQUVuQix3Q0FDc0I7O0lBR3JCLHVDQUF3Qzs7SUFDeEMsbURBQWdFOzs7OztJQUNoRSxnREFBZ0U7Ozs7O0lBQ2hFLG9EQUFxRTs7Ozs7SUFDckUsbURBQW1FOzs7OztJQUNuRSw0REFBNEU7Ozs7O0lBQzVFLHFEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGUgfSBmcm9tICcuL3NvdXJjZS90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUnO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi9zb3VyY2UvdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL2NhcmQvdGVtcGxhdGUvbGlzdC5jYXJkLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdENhcmRUZW1wbGF0ZSB9IGZyb20gJy4vY2FyZC90ZW1wbGF0ZS9saXN0LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvbGlzdC12aWV3LmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGFpbmVyR2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0aXRlbXM6IEFycmF5PGFueT47XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IENvbnRhaW5lclRlbXBsYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGNhcmRUZW1wbGF0ZTogTGlzdENhcmRUZW1wbGF0ZTtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0QElucHV0KClcblx0bW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlOiBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBsaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyOiBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyXG5cdFx0KSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy50ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudGVtcGxhdGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLm5leHQodGhpcy50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY2FyZFRlbXBsYXRlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jYXJkVGVtcGxhdGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMubGlzdENhcmRUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLmNhcmRUZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblxuXHRcdFx0XHQvLyBpZiAodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm5leHQodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUpO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubW9kZSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMubW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnNldE1vZGUodGhpcy5tb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5tb2RlU2VsZWN0b3IgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLm1vZGVTZWxlY3Rvci5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdG9yKHRoaXMubW9kZVNlbGVjdG9yLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuaXRlbXMpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxufVxuIl19