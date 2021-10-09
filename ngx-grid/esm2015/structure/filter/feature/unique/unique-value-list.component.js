/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class UniqueValueListComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} filterWarehouse
     * @param {?} filterCommandInvoker
     */
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.uniqueValues = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.fieldId);
            this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(this.fieldId);
            this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(this.fieldId);
        }));
    }
    /**
     * @return {?}
     */
    toggleAllSelect() {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    }
    /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    toggleSelect(uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    }
    /**
     * @return {?}
     */
    clearFilters() {
        this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-unique-value-list';
    }
}
UniqueValueListComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-unique-value-list][fieldId]',
                template: "<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n\tSelect all\n</gui-checkbox>\n\n<div class=\"gui-unique-value-list-container gui-overflow-y-scroll gui-overflow-x-hidden\">\n\t<div *ngFor=\"let value of uniqueValues\">\n\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t{{value.getValue()}}\n\t\t</gui-checkbox>\n\t</div>\n</div>\n\n<div class=\"gui-unique-value-list-actions gui-p-6 gui-flex gui-justify-end\">\n\t<button (click)=\"clearFilters()\"\n\t\t\t[outline]=\"true\"\n\t\t\t[primary]=\"true\"\n\t\t\tgui-button>\n\t\tClear\n\t</button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-unique-value-list-container{max-height:300px}"]
            }] }
];
/** @nocollapse */
UniqueValueListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker }
];
UniqueValueListComponent.propDecorators = {
    fieldId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UniqueValueListComponent.prototype.fieldId;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllChecked;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    UniqueValueListComponent.prototype.uniqueValues;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVc3RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7Ozs7SUFXM0QsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsb0JBQTBDO1FBQzdELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFOOUQsaUJBQVksR0FBZ0MsRUFBRSxDQUFDO0lBUS9DLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7OztRQUNyRCxDQUFDLHFCQUE0QyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRjtJQUNGLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLG9CQUEwQztRQUN0RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0c7YUFBTTtZQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRztJQUNGLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7OztZQW5FRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MseXNCQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUlyQzs7OztZQWxCaUMsaUJBQWlCO1lBQWEsVUFBVTtZQUtqRSxXQUFXO1lBQ1gsZUFBZTtZQUVmLG9CQUFvQjs7O3NCQWEzQixLQUFLOzs7O0lBQU4sMkNBQ2lCOztJQUVqQixvREFBMEI7O0lBRTFCLDBEQUFnQzs7SUFFaEMsZ0RBQStDOzs7OztJQUVuQyxxREFBcUQ7Ozs7O0lBRTlELCtDQUF5Qzs7Ozs7SUFDekMsbURBQWlEOzs7OztJQUNqRCx3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXVuaXF1ZS12YWx1ZS1saXN0XVtmaWVsZElkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vc3R5bGUvdW5pcXVlLXZhbHVlLWxpc3Qubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkSWQ6IEZpZWxkSWQ7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmRJbnZva2VyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdCh1bmlxdWVWYWx1ZXNSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuaXF1ZVZhbHVlcyA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5nZXRWYWx1ZXModGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNTZWxlY3RBbGxDaGVja2VkKHRoaXMuZmllbGRJZCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUodGhpcy5maWVsZElkKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlQWxsU2VsZWN0KCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlbGVjdCh1bmlxdWVWYWx1ZVJlYWRNb2RlbDogVW5pcXVlVmFsdWVSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh1bmlxdWVWYWx1ZVJlYWRNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXVuaXF1ZS12YWx1ZS1saXN0Jztcblx0fVxuXG59XG4iXX0=