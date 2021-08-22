/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureId } from '../../../../core/domain/structure.id';
var ActiveFilterMenuTriggerDirective = /** @class */ (function () {
    function ActiveFilterMenuTriggerDirective(el, structureId, activeFilterService, schemaReadModelRootId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkU7SUFLQywwQ0FBNkIsRUFBYyxFQUN2QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSG5DLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7UUFDQywrREFBK0Q7UUFDL0QsZ0ZBQWdGO1FBQ2hGLE1BQU07SUFDUCxDQUFDOztnQkFmRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztpQkFDNUM7Ozs7Z0JBVG1CLFVBQVU7Z0JBS3JCLFdBQVc7Z0JBSFgsbUJBQW1CO2dCQUVuQixxQkFBcUI7O0lBb0I5Qix1Q0FBQztDQUFBLEFBakJELElBaUJDO1NBZFksZ0NBQWdDOzs7Ozs7SUFFaEMsOENBQStCOzs7OztJQUN4Qyx1REFBeUM7Ozs7O0lBQ3pDLCtEQUF5RDs7Ozs7SUFDekQsaUVBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJTZXJ2aWNlOiBBY3RpdmVGaWx0ZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+IHtcblx0XHQvLyBcdHRoaXMuYWN0aXZlRmlsdGVyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHQvLyB9KTtcblx0fVxuXG59XG4iXX0=