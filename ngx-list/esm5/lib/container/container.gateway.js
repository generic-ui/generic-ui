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
    function ContainerGateway(structureId, sourceCommandService, containerTemplateArchive) {
        this.structureId = structureId;
        this.sourceCommandService = sourceCommandService;
        this.containerTemplateArchive = containerTemplateArchive;
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
        /**
         * Setting source should be last step
         */
        if (simpleChanges.source) {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        }
    };
    ContainerGateway.propDecorators = {
        source: [{ type: Input }],
        template: [{ type: Input }]
    };
    return ContainerGateway;
}());
export { ContainerGateway };
if (false) {
    /** @type {?} */
    ContainerGateway.prototype.source;
    /** @type {?} */
    ContainerGateway.prototype.template;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29udGFpbmVyLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBS2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBR2xFO0lBUUMsMEJBQ2lCLFdBQXdCLEVBQ3JCLG9CQUE2QyxFQUM3Qyx3QkFBa0Q7UUFGckQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtRQUM3Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXRFLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBRXZDLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQ7O1dBRUc7UUFDSCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRTtJQUNGLENBQUM7O3lCQXpCQSxLQUFLOzJCQUdMLEtBQUs7O0lBdUJQLHVCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QnFCLGdCQUFnQjs7O0lBRXJDLGtDQUNtQjs7SUFFbkIsb0NBQzRCOztJQUczQix1Q0FBd0M7Ozs7O0lBQ3hDLGdEQUFnRTs7Ozs7SUFDaEUsb0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbnRhaW5lclRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvY29udGFpbmVyLXRlbXBsYXRlLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29udGFuaWVyVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2NvbnRhbmllci10ZW1wbGF0ZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRhaW5lckdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PjtcblxuXHRASW5wdXQoKVxuXHR0ZW1wbGF0ZTogQ29udGFuaWVyVGVtcGxhdGU7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGFpbmVyVGVtcGxhdGVBcmNoaXZlOiBDb250YWluZXJUZW1wbGF0ZUFyY2hpdmVcblx0XHQpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRlbXBsYXRlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50ZW1wbGF0ZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb250YWluZXJUZW1wbGF0ZUFyY2hpdmUubmV4dCh0aGlzLnRlbXBsYXRlKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=