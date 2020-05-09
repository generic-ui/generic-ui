/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ContanierTemplate } from './template/contanier-template';
/**
 * @abstract
 */
export class ContainerGateway {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} sourceCommandService
     * @param {?} containerTemplateArchive
     * @param {?} structurePagingCommandDispatcher
     */
    constructor(structureId, sourceCommandService, containerTemplateArchive, structurePagingCommandDispatcher) {
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
        this.containerTemplateArchive = containerTemplateArchive;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.template !== undefined && simpleChanges.template.currentValue !== undefined) {
            this.containerTemplateArchive.next(this.template);
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
    paging: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContainerGateway.prototype.items;
    /** @type {?} */
    ContainerGateway.prototype.template;
    /** @type {?} */
    ContainerGateway.prototype.paging;
    /** @type {?} */
    ContainerGateway.prototype.structureId;
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
    ContainerGateway.prototype.structurePagingCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBS2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS2xFLE1BQU0sT0FBZ0IsZ0JBQWdCOzs7Ozs7OztJQVdyQyxZQUNpQixXQUF3QixFQUNyQixvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELGdDQUF5RDtRQUg1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO1FBQzdDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUF5QjtJQUU3RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUE0QjtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM5RixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFOztnQkFFdEYsWUFBMEI7WUFFOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLCtDQUErQztnQkFDL0MseUVBQXlFO2dCQUN6RSxJQUFJO2FBQ0o7WUFFRCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO1FBRUQ7O1dBRUc7UUFDSCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7OztvQkFoREEsS0FBSzt1QkFHTCxLQUFLO3FCQUdMLEtBQUs7Ozs7SUFOTixpQ0FDa0I7O0lBRWxCLG9DQUM0Qjs7SUFFNUIsa0NBQ3FCOztJQUdwQix1Q0FBd0M7Ozs7O0lBQ3hDLGdEQUFnRTs7Ozs7SUFDaEUsb0RBQXFFOzs7OztJQUNyRSw0REFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUgfSBmcm9tICcuL3RlbXBsYXRlL2NvbnRhaW5lci10ZW1wbGF0ZS5hcmNoaXZlJztcbmltcG9ydCB7IENvbnRhbmllclRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9jb250YW5pZXItdGVtcGxhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250YWluZXJHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpdGVtczogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogQ29udGFuaWVyVGVtcGxhdGU7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBQYWdpbmdDb25maWc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCkge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGVtcGxhdGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRlbXBsYXRlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZS5uZXh0KHRoaXMudGVtcGxhdGUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0Ly8gaWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pdGVtcykge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRPcmlnaW4odGhpcy5pdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=