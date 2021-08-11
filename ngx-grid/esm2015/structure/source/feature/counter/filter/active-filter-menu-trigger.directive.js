/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { StructureId } from '../../../../core/api/structure.id';
export class ActiveFilterMenuTriggerDirective {
    /**
     * @param {?} el
     * @param {?} structureId
     * @param {?} activeFilterService
     * @param {?} schemaReadModelRootId
     */
    constructor(el, structureId, activeFilterService, schemaReadModelRootId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLaEUsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7OztJQUU1QyxZQUE2QixFQUFjLEVBQ3ZCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxxQkFBNEM7UUFIbkMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCwrREFBK0Q7UUFDL0QsZ0ZBQWdGO1FBQ2hGLE1BQU07SUFDUCxDQUFDOzs7WUFmRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQzthQUM1Qzs7OztZQVRtQixVQUFVO1lBS3JCLFdBQVc7WUFIWCxtQkFBbUI7WUFFbkIscUJBQXFCOzs7Ozs7O0lBUWpCLDhDQUErQjs7Ozs7SUFDeEMsdURBQXlDOzs7OztJQUN6QywrREFBeUQ7Ozs7O0lBQ3pELGlFQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJTZXJ2aWNlOiBBY3RpdmVGaWx0ZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+IHtcblx0XHQvLyBcdHRoaXMuYWN0aXZlRmlsdGVyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHQvLyB9KTtcblx0fVxuXG59XG4iXX0=