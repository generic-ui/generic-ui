/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class FilterMenuComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} fieldWarehouse
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     * @param {?} compositionWarehouse
     */
    constructor(changeDetectorRef, elementRef, structureId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.compositionWarehouse = compositionWarehouse;
        this.columns = [];
        this.fields = [];
        this.activeFilters = [];
        this.addClassToHost('gui-block');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} activeFilters
         * @return {?}
         */
        (activeFilters) => {
            this.activeFilters = activeFilters;
            this.changeDetectorRef.detectChanges();
        }));
        this.filterWarehouse
            .onFilterTypes(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} filterTypeMap
         * @return {?}
         */
        (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
            this.changeDetectorRef.detectChanges();
        }));
        this.fieldWarehouse
            .onFields(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fieldReadModels
         * @return {?}
         */
        (fieldReadModels) => {
            this.fields = fieldReadModels;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} selectedColumn
     * @return {?}
     */
    onColumnSelect(selectedColumn) {
        this.selectedColumn = selectedColumn;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedColumn.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} filterTypeId
     * @return {?}
     */
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    removeAllFilters() {
        this.filterCommandDispatcher.removeAllFilters(this.structureId);
    }
    /**
     * @return {?}
     */
    addFilter() {
        /** @type {?} */
        const fieldId = this.selectedField.getFieldId();
        /** @type {?} */
        const filterTypeId = this.selectedFilterTypeId;
        /** @type {?} */
        const value = this.selectedValue;
        this.filterCommandDispatcher.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChanged(value) {
        this.selectedValue = value;
    }
    /**
     * @return {?}
     */
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-filter-menu';
    }
}
FilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-menu]',
                template: "<div>\n\t<div gui-active-filter-list></div>\n</div>\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<div>\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields\" gui-field-selector></div>\n\n\t<ng-container *ngIf=\"selectedColumn\">\n\t\t{{selectedColumn.getFieldId()}}\n\t</ng-container>\n</div>\n\n<div>\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>\n\n\t<ng-container *ngIf=\"selectedFilterTypeId\">\n\t\t{{selectedFilterTypeId.toString()}}\n\t</ng-container>\n</div>\n\n<div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>\n\n</div>\n\n<div>\n\t<button (click)=\"addFilter()\"\n\t\t\t[disabled]=\"!selectedFilterTypeId\"\n\t\t\t[primary]=\"true\" gui-button>\n\t\tFilter\n\t</button>\n</div>\n\n<div>\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[secondary]=\"true\" gui-button>\n\t\tClear filters\n\t</button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FilterMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: FieldWarehouse },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker },
    { type: CompositionWarehouse }
];
if (false) {
    /** @type {?} */
    FilterMenuComponent.prototype.selectedColumn;
    /** @type {?} */
    FilterMenuComponent.prototype.columns;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedField;
    /** @type {?} */
    FilterMenuComponent.prototype.fields;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypeMap;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypes;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedFilterTypeId;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedValue;
    /** @type {?} */
    FilterMenuComponent.prototype.activeFilters;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVc3RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQW9CdEQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFQVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBdEI5RCxZQUFP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OztJQUMvQyw4Q0FBaUQ7Ozs7O0lBQ2pELHNEQUE4RDs7Ozs7SUFDOUQsbURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItbWVudV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZFJlYWRNb2RlbDtcblxuXHRmaWVsZHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXA7XG5cblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkZpbHRlclR5cGVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcCkgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAgPSBmaWx0ZXJUeXBlTWFwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5maWVsZFdhcmVob3VzZVxuXHRcdFx0Lm9uRmllbGRzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmllbGRSZWFkTW9kZWxzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5maWVsZHMgPSBmaWVsZFJlYWRNb2RlbHM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uQ29sdW1uU2VsZWN0KHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IHNlbGVjdGVkQ29sdW1uO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmllbGRTZWxlY3QoZmllbGQ6IEZpZWxkUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gZmllbGQ7XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpbHRlclR5cGVTZWxlY3QoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBmaWx0ZXJUeXBlSWQ7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVBbGxGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0YWRkRmlsdGVyKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc2VsZWN0ZWRGaWVsZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQsXG5cdFx0XHR2YWx1ZTogYW55ID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNsZWFyQWRkRmlsdGVyRm9ybSgpO1xuXHR9XG5cblx0b25WYWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Y2xlYXJBZGRGaWx0ZXJGb3JtKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudSc7XG5cdH1cbn1cbiJdfQ==