/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ActiveFilterService } from './active-filter.service';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { StructureId } from '../../../../core/api/structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEU7SUFLQywwQ0FBNkIsRUFBYyxFQUN2QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSG5DLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7UUFDQywrREFBK0Q7UUFDL0QsZ0ZBQWdGO1FBQ2hGLE1BQU07SUFDUCxDQUFDOztnQkFmRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztpQkFDNUM7Ozs7Z0JBVG1CLFVBQVU7Z0JBS3JCLFdBQVc7Z0JBSFgsbUJBQW1CO2dCQUVuQixxQkFBcUI7O0lBb0I5Qix1Q0FBQztDQUFBLEFBakJELElBaUJDO1NBZFksZ0NBQWdDOzs7Ozs7SUFFaEMsOENBQStCOzs7OztJQUN4Qyx1REFBeUM7Ozs7O0lBQ3pDLCtEQUF5RDs7Ozs7SUFDekQsaUVBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2ZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZ3VpLWFjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTWVudVRyaWdnZXJEaXJlY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlclNlcnZpY2U6IEFjdGl2ZUZpbHRlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vIFx0dGhpcy5hY3RpdmVGaWx0ZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdC8vIH0pO1xuXHR9XG5cbn1cbiJdfQ==