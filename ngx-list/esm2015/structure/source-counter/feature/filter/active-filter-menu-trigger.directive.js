/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureId } from '../../../core/domain/structure.id';
export class ActiveFilterMenuTriggerDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} structureId
     * @param {?} activeFilterService
     * @param {?} schemaReadModelRootId
     */
    constructor(renderer, el, structureId, activeFilterService, schemaReadModelRootId) {
        this.renderer = renderer;
        this.el = el;
        this.structureId = structureId;
        this.activeFilterService = activeFilterService;
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.renderer.listen(this.el.nativeElement, 'click', () => {
        // 	this.activeFilterService.open(this.schemaReadModelRootId, this.structureId);
        // });
    }
}
ActiveFilterMenuTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gui-active-filter-menu-trigger]'
            },] }
];
/** @nocollapse */
ActiveFilterMenuTriggerDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: StructureId },
    { type: ActiveFilterService },
    { type: SchemaReadModelRootId }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFilterMenuTriggerDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterMenuTriggerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterMenuTriggerDirective.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterMenuTriggerDirective.prototype.activeFilterService;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterMenuTriggerDirective.prototype.schemaReadModelRootId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlLWNvdW50ZXIvZmVhdHVyZS9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS2hFLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7Ozs7O0lBRTVDLFlBQTZCLFFBQW1CLEVBQzVCLEVBQWMsRUFDZCxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSm5DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLCtEQUErRDtRQUMvRCxnRkFBZ0Y7UUFDaEYsTUFBTTtJQUNQLENBQUM7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQzthQUM1Qzs7OztZQVQrQixTQUFTO1lBQXJCLFVBQVU7WUFLckIsV0FBVztZQUhYLG1CQUFtQjtZQUVuQixxQkFBcUI7Ozs7Ozs7SUFRakIsb0RBQW9DOzs7OztJQUM3Qyw4Q0FBK0I7Ozs7O0lBQy9CLHVEQUF5Qzs7Ozs7SUFDekMsK0RBQXlEOzs7OztJQUN6RCxpRUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLWFjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyU2VydmljZTogQWN0aXZlRmlsdGVyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLmFjdGl2ZUZpbHRlclNlcnZpY2Uub3Blbih0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0Ly8gfSk7XG5cdH1cblxufVxuIl19