import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
export class FilterMenuComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, compositionId, fieldWarehouse, filterWarehouse, filterCommandInvoker, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.columns = [];
        this.fields = [];
        this.activeFilters = [];
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
        this.subscribe(this.filterWarehouse.onFilterTypes(this.structureId), (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
        });
        this.subscribe(this.fieldWarehouse.onFields(this.structureId), (fieldReadModels) => {
            this.fields = fieldReadModels;
        });
        this.subscribe(this.compositionWarehouse.onHeaderColumns(this.compositionId), (columns) => {
            this.columns = columns;
        });
    }
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.reRender();
    }
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.reRender();
    }
    removeAllFilters() {
        this.filterCommandInvoker.removeAll(this.structureId);
    }
    onValueChanged(value) {
        this.selectedValue = value;
    }
    addFilter() {
        const fieldId = this.selectedField.getFieldId(), filterTypeId = this.selectedFilterTypeId, value = this.selectedValue;
        this.filterCommandInvoker.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    onRemovedFilter(filterId) {
        event.preventDefault();
        this.filterCommandInvoker.remove(filterId, this.structureId);
    }
    removeFilter() {
    }
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.reRender();
    }
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-menu]',
                template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FilterMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: CompositionId },
    { type: FieldWarehouse },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker },
    { type: CompositionWarehouse }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSWxFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVVoRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYztJQW9CdEQsWUFBWSxpQkFBb0MsRUFDN0MsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixhQUE0QixFQUM1QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsb0JBQTBDO1FBQzdELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5sQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixH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UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7WUF6SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDZ4RUFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBeEJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBTWpFLFdBQVc7WUFTWCxhQUFhO1lBVmIsY0FBYztZQUdkLGVBQWU7WUFJZixvQkFBb0I7WUFScEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUNvbGxlY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUtY29sbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItbWVudV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZE1vZGVsO1xuXG5cdGZpZWxkczogQXJyYXk8RmllbGRNb2RlbD4gPSBbXTtcblxuXHRmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsO1xuXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlck1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZEludm9rZXI6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vbkFjdGl2ZUZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25GaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcCA9IGZpbHRlclR5cGVNYXA7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWVsZFdhcmVob3VzZS5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChmaWVsZFJlYWRNb2RlbHM6IEFycmF5PEZpZWxkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmllbGRzID0gZmllbGRSZWFkTW9kZWxzO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25IZWFkZXJDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3QoZmllbGQ6IEZpZWxkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBmaWVsZDtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVTZWxlY3QoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cblx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIucmVtb3ZlQWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25WYWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0YWRkRmlsdGVyKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQsXG5cdFx0XHR2YWx1ZTogYW55ID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNsZWFyQWRkRmlsdGVyRm9ybSgpO1xuXHR9XG5cblx0b25SZW1vdmVkRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5yZW1vdmUoZmlsdGVySWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKCk6IHZvaWQge1xuXHR9XG5cblx0Y2xlYXJBZGRGaWx0ZXJGb3JtKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUnO1xuXHR9XG59XG4iXX0=