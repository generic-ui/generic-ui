/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { ContanierTemplate } from './template/contanier-template';
/**
 * @abstract
 */
var ContainerGateway = /** @class */ (function () {
    function ContainerGateway(structureId, sourceCommandService, containerTemplateArchive, structurePagingCommandDispatcher) {
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
        this.containerTemplateArchive = containerTemplateArchive;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
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
        paging: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBS2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS2xFO0lBV0MsMEJBQ2lCLFdBQXdCLEVBQ3JCLG9CQUE2QyxFQUM3Qyx3QkFBa0QsRUFDbEQsZ0NBQXlEO1FBSDVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7UUFDN0MsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQXlCO0lBRTdFLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBRXZDLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7O2dCQUV0RixZQUFZLFNBQWM7WUFFOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLCtDQUErQztnQkFDL0MseUVBQXlFO2dCQUN6RSxJQUFJO2FBQ0o7WUFFRCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO1FBRUQ7O1dBRUc7UUFDSCxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7O3dCQWhEQSxLQUFLOzJCQUdMLEtBQUs7eUJBR0wsS0FBSzs7SUEyQ1AsdUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQW5EcUIsZ0JBQWdCOzs7SUFFckMsaUNBQ2tCOztJQUVsQixvQ0FDNEI7O0lBRTVCLGtDQUNxQjs7SUFHcEIsdUNBQXdDOzs7OztJQUN4QyxnREFBZ0U7Ozs7O0lBQ2hFLG9EQUFxRTs7Ozs7SUFDckUsNERBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9jb250YWluZXItdGVtcGxhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb250YW5pZXJUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvY29udGFuaWVyLXRlbXBsYXRlJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGFpbmVyR2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0aXRlbXM6IEFycmF5PGFueT47XG5cblx0QElucHV0KClcblx0dGVtcGxhdGU6IENvbnRhbmllclRlbXBsYXRlO1xuXG5cdEBJbnB1dCgpXG5cdHBhZ2luZzogUGFnaW5nQ29uZmlnO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZTogQ29udGFpbmVyVGVtcGxhdGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZERpc3BhdGNoZXJcblx0XHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRlbXBsYXRlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50ZW1wbGF0ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdC8vIGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuaXRlbXMpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxufVxuIl19