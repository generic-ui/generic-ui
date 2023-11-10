import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import { hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../feature/gui-angular/state/gui.state";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/structure/filter/src/api/filter.warehouse";
import * as i4 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i5 from "@angular/common";
import * as i6 from "@generic-ui/fabric";
import * as i7 from "../../../../gui-angular/template/let/gui.let.directive";
export class UniqueValueListComponent extends SmartComponent {
    state;
    structureId;
    filterWarehouse;
    filterCommandInvoker;
    set fieldId(fieldId) {
        this.state.setValue({
            fieldId
        });
    }
    ;
    // @ts-ignore
    state$ = this.state.select();
    constructor(changeDetectorRef, elementRef, state, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.state = state;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.state.connect('uniqueValues', this.selectUniqueValues());
        this.state.connect('selectAllChecked', this.isSelectAllChecked());
        this.state.connect('selectAllIndeterminate', this.isSelectAllIndeterminate());
    }
    toggleAllSelect() {
        event.stopPropagation();
        const fieldId = this.state.getValue('fieldId'), selectAllChecked = this.state.getValue('selectAllChecked');
        if (selectAllChecked) {
            this.filterCommandInvoker.unselectAllUniqueFilter(fieldId, this.structureId);
        }
        else {
            this.filterCommandInvoker.selectAllUniqueFilter(fieldId, this.structureId);
        }
    }
    toggleSelect(uniqueValueModel) {
        event.stopPropagation();
        const fieldId = this.state.getValue('fieldId');
        if (uniqueValueModel.isEnabled()) {
            this.filterCommandInvoker.unselectUniqueFilter(fieldId, uniqueValueModel.getId(), this.structureId);
        }
        else {
            this.filterCommandInvoker.selectUniqueFilter(fieldId, uniqueValueModel.getId(), this.structureId);
        }
    }
    clearFilters() {
        const fieldId = this.state.getValue('fieldId');
        this.filterCommandInvoker.selectAllUniqueFilter(fieldId, this.structureId);
    }
    getSelectorName() {
        return 'gui-unique-value-list';
    }
    selectUniqueValues() {
        return this.state
            .select('fieldId')
            .pipe(hermesSwitchMap((fieldId) => {
            return this.filterWarehouse
                .onUniqueValues(this.structureId)
                .pipe(hermesMap((uniqueValueCollectionModel) => {
                return uniqueValueCollectionModel.getValues(fieldId);
            }));
        }));
    }
    isSelectAllChecked() {
        return this.state
            .select('fieldId')
            .pipe(hermesSwitchMap((fieldId) => {
            return this.filterWarehouse
                .onUniqueValues(this.structureId)
                .pipe(hermesMap((uniqueValueCollectionModel) => {
                return uniqueValueCollectionModel.isSelectAllChecked(fieldId);
            }));
        }));
    }
    isSelectAllIndeterminate() {
        return this.state
            .select('fieldId')
            .pipe(hermesSwitchMap((fieldId) => {
            return this.filterWarehouse
                .onUniqueValues(this.structureId)
                .pipe(hermesMap((uniqueValueCollectionModel) => {
                return uniqueValueCollectionModel.isIndeterminate(fieldId);
            }));
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UniqueValueListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.StructureId }, { token: i3.FilterWarehouse }, { token: i4.FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: UniqueValueListComponent, selector: "div[gui-unique-value-list][fieldId]", inputs: { fieldId: "fieldId" }, providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let state\">\n\t<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t\t  [checked]=\"state.selectAllChecked\"\n\t\t\t\t  [indeterminate]=\"state.selectAllIndeterminate\">\n\t\tSelect all\n\t</gui-checkbox>\n\n\t<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t\t<div *ngFor=\"let value of state.uniqueValues\">\n\t\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t\t{{value.getValue()}}\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t\t<button (click)=\"clearFilters()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\t\tgui-button>\n\t\t\tClear\n\t\t</button>\n\t</div>\n</ng-container>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i6.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i6.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i7.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UniqueValueListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-unique-value-list][fieldId]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let state\">\n\t<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t\t  [checked]=\"state.selectAllChecked\"\n\t\t\t\t  [indeterminate]=\"state.selectAllIndeterminate\">\n\t\tSelect all\n\t</gui-checkbox>\n\n\t<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t\t<div *ngFor=\"let value of state.uniqueValues\">\n\t\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t\t{{value.getValue()}}\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t\t<button (click)=\"clearFilters()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\t\tgui-button>\n\t\t\tClear\n\t\t</button>\n\t</div>\n</ng-container>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.StructureId }, { type: i3.FilterWarehouse }, { type: i4.FilterPublisher }]; }, propDecorators: { fieldId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFPbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7QUEwQmxGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBY3ZDO0lBQ0E7SUFDQTtJQUNBO0lBZnBCLElBQ0ksT0FBTyxDQUFDLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU87U0FDUCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLGFBQWE7SUFDSixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV0QyxZQUFZLGlCQUFvQyxFQUM3QyxVQUFzQixFQUNMLEtBQXFDLEVBQ3JDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUFxQztRQUN4RCxLQUFLLENBQUMsaUJBQWlCLEVB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LGVBQWU7aUJBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNoQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsMEJBQXNELEVBQUUsRUFBRTtnQkFDcEUsT0FBTywwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FDRixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFFTyx3QkFBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxDQUNKLGVBQWUsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDaEMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLDBCQUFzRCxFQUFFLEVBQUU7Z0JBQ3BFLE9BQU8sMEJBQTBCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzt3R0F6R1csd0JBQXdCOzRGQUF4Qix3QkFBd0IsOEZBSnpCO1lBQ1YsUUFBUTtTQUNSLGlEQ2xDRix5NEJBMEJBOzs0RkRVYSx3QkFBd0I7a0JBWnBDLFNBQVM7K0JBQ0MscUNBQXFDLG1CQUs5Qix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1I7OE9BS0csT0FBTztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvc3RhdGUvZ3VpLnN0YXRlJztcbmltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgaGVybWVzU3dpdGNoTWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBVbmlxdWVWYWx1ZUxpc3RTdGF0ZSB7XG5cblx0ZmllbGRJZDogRmllbGRJZDtcblxuXHR1bmlxdWVWYWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlTW9kZWw+O1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXVuaXF1ZS12YWx1ZS1saXN0XVtmaWVsZElkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9zdHlsZS91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQuc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdEd1aVN0YXRlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNldCBmaWVsZElkKGZpZWxkSWQ6IEZpZWxkSWQpIHtcblx0XHR0aGlzLnN0YXRlLnNldFZhbHVlKHtcblx0XHRcdGZpZWxkSWRcblx0XHR9KTtcblx0fTtcblxuXHQvLyBAdHMtaWdub3JlXG5cdHJlYWRvbmx5IHN0YXRlJCA9IHRoaXMuc3RhdGUuc2VsZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBHdWlTdGF0ZTxVbmlxdWVWYWx1ZUxpc3RTdGF0ZT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmRJbnZva2VyOiBGaWx0ZXJQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ3VuaXF1ZVZhbHVlcycsIHRoaXMuc2VsZWN0VW5pcXVlVmFsdWVzKCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc2VsZWN0QWxsQ2hlY2tlZCcsIHRoaXMuaXNTZWxlY3RBbGxDaGVja2VkKCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZScsIHRoaXMuaXNTZWxlY3RBbGxJbmRldGVybWluYXRlKCkpO1xuXHR9XG5cblx0dG9nZ2xlQWxsU2VsZWN0KCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ2ZpZWxkSWQnKSBhcyBGaWVsZElkLFxuXHRcdFx0c2VsZWN0QWxsQ2hlY2tlZCA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ3NlbGVjdEFsbENoZWNrZWQnKTtcblxuXHRcdGlmIChzZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVTZWxlY3QodW5pcXVlVmFsdWVNb2RlbDogVW5pcXVlVmFsdWVNb2RlbCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ2ZpZWxkSWQnKSBhcyBGaWVsZElkO1xuXG5cdFx0aWYgKHVuaXF1ZVZhbHVlTW9kZWwuaXNFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIudW5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZCwgdW5pcXVlVmFsdWVNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZCwgdW5pcXVlVmFsdWVNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cdFx0Y29uc3QgZmllbGRJZCA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ2ZpZWxkSWQnKSBhcyBGaWVsZElkO1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXVuaXF1ZS12YWx1ZS1saXN0Jztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0VW5pcXVlVmFsdWVzKCk6IEhlcm1lc09ic2VydmFibGU8QXJyYXk8VW5pcXVlVmFsdWVNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVxuXHRcdFx0XHQgICAuc2VsZWN0KCdmaWVsZElkJylcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzU3dpdGNoTWFwKChmaWVsZElkOiBGaWVsZElkKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uVW5pcXVlVmFsdWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgodW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWw6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICByZXR1cm4gdW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwuZ2V0VmFsdWVzKGZpZWxkSWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgaXNTZWxlY3RBbGxDaGVja2VkKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlXG5cdFx0XHRcdCAgIC5zZWxlY3QoJ2ZpZWxkSWQnKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNTd2l0Y2hNYXAoKGZpZWxkSWQ6IEZpZWxkSWQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVybWVzTWFwKCh1bmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbDogVW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHJldHVybiB1bmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbC5pc1NlbGVjdEFsbENoZWNrZWQoZmllbGRJZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1NlbGVjdEFsbEluZGV0ZXJtaW5hdGUoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVcblx0XHRcdFx0ICAgLnNlbGVjdCgnZmllbGRJZCcpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZmllbGRJZDogRmllbGRJZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKHVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsLmlzSW5kZXRlcm1pbmF0ZShmaWVsZElkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwic3RhdGUkOyBsZXQgc3RhdGVcIj5cblx0PGd1aS1jaGVja2JveCAoY2hhbmdlZCk9XCJ0b2dnbGVBbGxTZWxlY3QoKVwiXG5cdFx0XHRcdCAgW2NoZWNrZWRdPVwic3RhdGUuc2VsZWN0QWxsQ2hlY2tlZFwiXG5cdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic3RhdGUuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiPlxuXHRcdFNlbGVjdCBhbGxcblx0PC9ndWktY2hlY2tib3g+XG5cblx0PGRpdiBjbGFzcz1cImd1aS11bmlxdWUtdmFsdWUtbGlzdC1jb250YWluZXIgZ3VpLW92ZXJmbG93LXktYXV0byBndWktb3ZlcmZsb3cteC1oaWRkZW5cIj5cblx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBzdGF0ZS51bmlxdWVWYWx1ZXNcIj5cblx0XHRcdDxndWktY2hlY2tib3ggKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0KHZhbHVlKVwiXG5cdFx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlLmlzRW5hYmxlZCgpXCI+XG5cdFx0XHRcdHt7dmFsdWUuZ2V0VmFsdWUoKX19XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImd1aS11bmlxdWUtdmFsdWUtbGlzdC1hY3Rpb25zIGd1aS1weC00IGd1aS1wYi00IGd1aS1wdC0yIGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWVuZFwiPlxuXHRcdDxidXR0b24gKGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCJcblx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRjbGFzcz1cImd1aS1jbGVhci11bmlxdWUtZmlsdGVycyBndWktcHgtNCBndWktcHktMlwiXG5cdFx0XHRcdGd1aS1idXR0b24+XG5cdFx0XHRDbGVhclxuXHRcdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19