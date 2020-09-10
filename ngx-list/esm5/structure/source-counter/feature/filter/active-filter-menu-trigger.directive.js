/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureId } from '../../../core/domain/structure.id';
var ActiveFilterMenuTriggerDirective = /** @class */ (function () {
    function ActiveFilterMenuTriggerDirective(renderer, el, structureId, activeFilterService, schemaReadModelRootId) {
        this.renderer = renderer;
        this.el = el;
        this.structureId = structureId;
        this.activeFilterService = activeFilterService;
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    ActiveFilterMenuTriggerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.renderer.listen(this.el.nativeElement, 'click', () => {
        // 	this.activeFilterService.open(this.schemaReadModelRootId, this.structureId);
        // });
    };
    ActiveFilterMenuTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gui-active-filter-menu-trigger]'
                },] }
    ];
    /** @nocollapse */
    ActiveFilterMenuTriggerDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: StructureId },
        { type: ActiveFilterService },
        { type: SchemaReadModelRootId }
    ]; };
    return ActiveFilterMenuTriggerDirective;
}());
export { ActiveFilterMenuTriggerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlLWNvdW50ZXIvZmVhdHVyZS9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDckcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWhFO0lBS0MsMENBQTZCLFFBQW1CLEVBQzVCLEVBQWMsRUFDZCxXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSm5DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7O0lBRUQsbURBQVE7OztJQUFSO1FBQ0MsK0RBQStEO1FBQy9ELGdGQUFnRjtRQUNoRixNQUFNO0lBQ1AsQ0FBQzs7Z0JBaEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO2lCQUM1Qzs7OztnQkFUK0IsU0FBUztnQkFBckIsVUFBVTtnQkFLckIsV0FBVztnQkFIWCxtQkFBbUI7Z0JBRW5CLHFCQUFxQjs7SUFxQjlCLHVDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSxnQ0FBZ0M7Ozs7OztJQUVoQyxvREFBb0M7Ozs7O0lBQzdDLDhDQUErQjs7Ozs7SUFDL0IsdURBQXlDOzs7OztJQUN6QywrREFBeUQ7Ozs7O0lBQ3pELGlFQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJTZXJ2aWNlOiBBY3RpdmVGaWx0ZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+IHtcblx0XHQvLyBcdHRoaXMuYWN0aXZlRmlsdGVyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHQvLyB9KTtcblx0fVxuXG59XG4iXX0=