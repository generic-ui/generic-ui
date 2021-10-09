/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLaEUsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7OztJQUU1QyxZQUE2QixFQUFjLEVBQ3ZCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxxQkFBNEM7UUFIbkMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCwrREFBK0Q7UUFDL0QsZ0ZBQWdGO1FBQ2hGLE1BQU07SUFDUCxDQUFDOzs7WUFmRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQzthQUM1Qzs7OztZQVRtQixVQUFVO1lBS3JCLFdBQVc7WUFIWCxtQkFBbUI7WUFFbkIscUJBQXFCOzs7Ozs7O0lBUWpCLDhDQUErQjs7Ozs7SUFDeEMsdURBQXlDOzs7OztJQUN6QywrREFBeUQ7Ozs7O0lBQ3pELGlFQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyU2VydmljZTogQWN0aXZlRmlsdGVyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLmFjdGl2ZUZpbHRlclNlcnZpY2Uub3Blbih0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0Ly8gfSk7XG5cdH1cblxufVxuIl19