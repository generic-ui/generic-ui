import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class UniqueValueListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.uniqueValues = [];
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.fieldId);
            this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(this.fieldId);
            this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(this.fieldId);
        });
    }
    toggleAllSelect() {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    }
    toggleSelect(uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    }
    clearFilters() {
        this.filterCommandInvoker.selectAllUniqueFilter(this.fieldId, this.structureId);
    }
    getSelectorName() {
        return 'gui-unique-value-list';
    }
}
UniqueValueListComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-unique-value-list][fieldId]',
                template: "<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n\tSelect all\n</gui-checkbox>\n\n<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t<div *ngFor=\"let value of uniqueValues\">\n\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t{{value.getValue()}}\n\t\t</gui-checkbox>\n\t</div>\n</div>\n\n<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t<button (click)=\"clearFilters()\"\n\t\t\t[outline]=\"true\"\n\t\t\t[primary]=\"true\"\n\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\tgui-button>\n\t\tClear\n\t</button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-unique-value-list-container{max-height:300px}\n"]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFXN0UsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFXM0QsWUFBWSxpQkFBb0MsRUFDN0MsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEM7UUFDN0QsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTjlELGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztJQVEzQyxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxDQUFDLHFCQUFpRCxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRjtJQUNGLENBQUM7SUFFRCxZQUFZLENBQUMsb0JBQXNDO1FBQ2xELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3RzthQUFNO1lBQ04sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNHO0lBQ0YsQ0FBQztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7WUFuRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLHN4QkFBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFJckM7OztZQWxCaUMsaUJBQWlCO1lBQWEsVUFBVTtZQUtqRSxXQUFXO1lBQ1gsZUFBZTtZQUVmLG9CQUFvQjs7O3NCQWEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktdW5pcXVlLXZhbHVlLWxpc3RdW2ZpZWxkSWRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9zdHlsZS91bmlxdWUtdmFsdWUtbGlzdC5uZ3guc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0ZmllbGRJZDogRmllbGRJZDtcblxuXHRzZWxlY3RBbGxDaGVja2VkOiBib29sZWFuO1xuXG5cdHNlbGVjdEFsbEluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG5cblx0dW5pcXVlVmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZU1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZEludm9rZXI6IEZpbHRlckNvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uVW5pcXVlVmFsdWVzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuZmllbGRJZCk7XG5cblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmlzU2VsZWN0QWxsQ2hlY2tlZCh0aGlzLmZpZWxkSWQpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNJbmRldGVybWluYXRlKHRoaXMuZmllbGRJZCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHRvZ2dsZUFsbFNlbGVjdCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIudW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVTZWxlY3QodW5pcXVlVmFsdWVSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlTW9kZWwpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh1bmlxdWVWYWx1ZVJlYWRNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXVuaXF1ZS12YWx1ZS1saXN0Jztcblx0fVxuXG59XG4iXX0=