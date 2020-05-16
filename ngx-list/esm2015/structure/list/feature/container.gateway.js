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
export class ContainerGateway {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} listViewReadModelRootId
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} listCardTemplateArchive
     * @param {?} structurePagingCommandDispatcher
     * @param {?} listViewCommandDispatcher
     */
    constructor(structureId, listViewReadModelRootId, sourceCommandService, containerTemplateArchive, listCardTemplateArchive, structurePagingCommandDispatcher, listViewCommandDispatcher) {
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
    ngOnChanges(simpleChanges) {
        if (simpleChanges.template !== undefined && simpleChanges.template.currentValue !== undefined) {
            this.containerTemplateArchive.next(this.template);
        }
        if (simpleChanges.cardTemplate !== undefined && simpleChanges.cardTemplate.currentValue !== undefined) {
            this.listCardTemplateArchive.next(this.cardTemplate);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            let pagingConfig;
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
    }
}
ContainerGateway.propDecorators = {
    items: [{ type: Input }],
    template: [{ type: Input }],
    cardTemplate: [{ type: Input }],
    paging: [{ type: Input }],
    mode: [{ type: Input }],
    modeSelector: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBTWhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUs3RCxNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7Ozs7Ozs7SUFvQnJDLFlBQ2lCLFdBQXdCLEVBQ3hCLHVCQUFnRCxFQUM3QyxvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELHVCQUFnRCxFQUNoRCxnQ0FBeUQsRUFDekQseUJBQW9EO1FBTnZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDN0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtRQUM3Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUF5QjtRQUN6RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBRXhFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBRXZDLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxhQUFhLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTs7Z0JBRXRGLFlBQTBCO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDckMsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUzQiwrQ0FBK0M7Z0JBQy9DLHlFQUF5RTtnQkFDekUsSUFBSTthQUNKO1lBRUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3RGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksYUFBYSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3RHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMvRjtRQUVEOztXQUVHO1FBQ0gsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzs7b0JBeEVBLEtBQUs7dUJBR0wsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLEtBQUs7bUJBR0wsS0FBSzsyQkFHTCxLQUFLOzs7O0lBZk4saUNBQ2tCOztJQUVsQixvQ0FDNEI7O0lBRTVCLHdDQUMrQjs7SUFFL0Isa0NBQ3FCOztJQUVyQixnQ0FDbUI7O0lBRW5CLHdDQUNzQjs7SUFHckIsdUNBQXdDOztJQUN4QyxtREFBZ0U7Ozs7O0lBQ2hFLGdEQUFnRTs7Ozs7SUFDaEUsb0RBQXFFOzs7OztJQUNyRSxtREFBbUU7Ozs7O0lBQ25FLDREQUE0RTs7Ozs7SUFDNUUscURBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZSB9IGZyb20gJy4vc291cmNlL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3NvdXJjZS90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vY2FyZC90ZW1wbGF0ZS9saXN0LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi9jYXJkL3RlbXBsYXRlL2xpc3QuY2FyZC10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9saXN0LXZpZXcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250YWluZXJHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogQ29udGFpbmVyVGVtcGxhdGU7XG5cblx0QElucHV0KClcblx0Y2FyZFRlbXBsYXRlOiBMaXN0Q2FyZFRlbXBsYXRlO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRASW5wdXQoKVxuXHRtb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHVibGljIHJlYWRvbmx5IGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBjb250YWluZXJUZW1wbGF0ZUFyY2hpdmU6IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgbGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXJcblx0XHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRlbXBsYXRlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50ZW1wbGF0ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jYXJkVGVtcGxhdGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNhcmRUZW1wbGF0ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMuY2FyZFRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdC8vIGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5tb2RlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5tb2RlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuc2V0TW9kZSh0aGlzLm1vZGUsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLm1vZGVTZWxlY3RvciAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMubW9kZVNlbGVjdG9yLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IodGhpcy5tb2RlU2VsZWN0b3IsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pdGVtcykge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5pdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=