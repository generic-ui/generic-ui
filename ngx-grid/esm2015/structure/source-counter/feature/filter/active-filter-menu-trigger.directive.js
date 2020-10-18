/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../schema/core/domain-read/schema.read-model-root-id';
import { StructureId } from '../../../core/api/structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlLWNvdW50ZXIvZmVhdHVyZS9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSzdELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7Ozs7O0lBRTVDLFlBQTZCLFFBQW1CLEVBQzVCLEVBQWMsRUFDZCxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSm5DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLCtEQUErRDtRQUMvRCxnRkFBZ0Y7UUFDaEYsTUFBTTtJQUNQLENBQUM7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQzthQUM1Qzs7OztZQVQrQixTQUFTO1lBQXJCLFVBQVU7WUFLckIsV0FBVztZQUhYLG1CQUFtQjtZQUVuQixxQkFBcUI7Ozs7Ozs7SUFRakIsb0RBQW9DOzs7OztJQUM3Qyw4Q0FBK0I7Ozs7O0lBQy9CLHVEQUF5Qzs7Ozs7SUFDekMsK0RBQXlEOzs7OztJQUN6RCxpRUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlclNlcnZpY2U6IEFjdGl2ZUZpbHRlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vIFx0dGhpcy5hY3RpdmVGaWx0ZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdC8vIH0pO1xuXHR9XG5cbn1cbiJdfQ==