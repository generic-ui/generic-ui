import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import { hermesMap, hermesSwitchMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/filter/src/api/filter.warehouse";
import * as i3 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i4 from "@angular/common";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../../gui-angular/template/let/gui.let.directive";
export class UniqueValueListComponent extends SmartComponent {
    structureId;
    filterWarehouse;
    filterCommandInvoker;
    set fieldId(fieldId) {
        this.state.setValue({
            fieldId
        });
    }
    ;
    state = inject((GuiState));
    state$ = this.state.select();
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UniqueValueListComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.FilterWarehouse }, { token: i3.FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: UniqueValueListComponent, selector: "div[gui-unique-value-list][fieldId]", inputs: { fieldId: "fieldId" }, providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let state\">\n\t<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t\t  [checked]=\"state.selectAllChecked\"\n\t\t\t\t  [indeterminate]=\"state.selectAllIndeterminate\">\n\t\tSelect all\n\t</gui-checkbox>\n\n\t<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t\t<div *ngFor=\"let value of state.uniqueValues\">\n\t\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t\t{{value.getValue()}}\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t\t<button (click)=\"clearFilters()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\t\tgui-button>\n\t\t\tClear\n\t\t</button>\n\t</div>\n</ng-container>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i5.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UniqueValueListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-unique-value-list][fieldId]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let state\">\n\t<gui-checkbox (changed)=\"toggleAllSelect()\"\n\t\t\t\t  [checked]=\"state.selectAllChecked\"\n\t\t\t\t  [indeterminate]=\"state.selectAllIndeterminate\">\n\t\tSelect all\n\t</gui-checkbox>\n\n\t<div class=\"gui-unique-value-list-container gui-overflow-y-auto gui-overflow-x-hidden\">\n\t\t<div *ngFor=\"let value of state.uniqueValues\">\n\t\t\t<gui-checkbox (changed)=\"toggleSelect(value)\"\n\t\t\t\t\t\t  [checked]=\"value.isEnabled()\">\n\t\t\t\t{{value.getValue()}}\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-unique-value-list-actions gui-px-4 gui-pb-4 gui-pt-2 gui-flex gui-justify-end\">\n\t\t<button (click)=\"clearFilters()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tclass=\"gui-clear-unique-filters gui-px-4 gui-py-2\"\n\t\t\t\tgui-button>\n\t\t\tClear\n\t\t</button>\n\t</div>\n</ng-container>\n", styles: [".gui-unique-value-list-container{max-height:300px}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FilterWarehouse }, { type: i3.FilterPublisher }], propDecorators: { fieldId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBT2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7QUEwQmxGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBZ0J6QztJQUNBO0lBQ0E7SUFoQmxCLElBQ0ksT0FBTyxDQUFDLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU87U0FDUCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVlLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQSxRQUE4QixDQUFBLENBQUMsQ0FBQztJQUV2RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV0QyxZQUNDLGlCQUFvQyxFQUNwQyxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLGVBQWdDLEVB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SUFBSSxDQUFDLGVBQWU7aUJBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNoQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsMEJBQXNELEVBQUUsRUFBRTtnQkFDcEUsT0FBTywwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FDRixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFFTyx3QkFBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxDQUNKLGVBQWUsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDaEMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLDBCQUFzRCxFQUFFLEVBQUU7Z0JBQ3BFLE9BQU8sMEJBQTBCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzt1R0EzR1csd0JBQXdCOzJGQUF4Qix3QkFBd0IsOEZBSnpCO1lBQ1YsUUFBUTtTQUNSLGlEQ2xDRix5NEJBMEJBOzsyRkRVYSx3QkFBd0I7a0JBWnBDLFNBQVM7K0JBQ0MscUNBQXFDLG1CQUs5Qix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1I7cU1BS0csT0FBTztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGluamVjdCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZS5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIucHVibGlzaGVyJztcbmltcG9ydCB7IEd1aVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9ndWktYW5ndWxhci9zdGF0ZS9ndWkuc3RhdGUnO1xuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXF1ZVZhbHVlTGlzdFN0YXRlIHtcblxuXHRmaWVsZElkOiBGaWVsZElkO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVNb2RlbD47XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktdW5pcXVlLXZhbHVlLWxpc3RdW2ZpZWxkSWRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL3N0eWxlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0c2V0IGZpZWxkSWQoZmllbGRJZDogRmllbGRJZCkge1xuXHRcdHRoaXMuc3RhdGUuc2V0VmFsdWUoe1xuXHRcdFx0ZmllbGRJZFxuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGUgPSBpbmplY3QoR3VpU3RhdGU8VW5pcXVlVmFsdWVMaXN0U3RhdGU+KTtcblxuXHRyZWFkb25seSBzdGF0ZSQgPSB0aGlzLnN0YXRlLnNlbGVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kSW52b2tlcjogRmlsdGVyUHVibGlzaGVyXG5cdCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgndW5pcXVlVmFsdWVzJywgdGhpcy5zZWxlY3RVbmlxdWVWYWx1ZXMoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzZWxlY3RBbGxDaGVja2VkJywgdGhpcy5pc1NlbGVjdEFsbENoZWNrZWQoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzZWxlY3RBbGxJbmRldGVybWluYXRlJywgdGhpcy5pc1NlbGVjdEFsbEluZGV0ZXJtaW5hdGUoKSk7XG5cdH1cblxuXHR0b2dnbGVBbGxTZWxlY3QoKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnZmllbGRJZCcpIGFzIEZpZWxkSWQsXG5cdFx0XHRzZWxlY3RBbGxDaGVja2VkID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnc2VsZWN0QWxsQ2hlY2tlZCcpO1xuXG5cdFx0aWYgKHNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIudW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZEludm9rZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlbGVjdCh1bmlxdWVWYWx1ZU1vZGVsOiBVbmlxdWVWYWx1ZU1vZGVsKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnZmllbGRJZCcpIGFzIEZpZWxkSWQ7XG5cblx0XHRpZiAodW5pcXVlVmFsdWVNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci51bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkLCB1bmlxdWVWYWx1ZU1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkLCB1bmlxdWVWYWx1ZU1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnZmllbGRJZCcpIGFzIEZpZWxkSWQ7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktdW5pcXVlLXZhbHVlLWxpc3QnO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RVbmlxdWVWYWx1ZXMoKTogSGVybWVzT2JzZXJ2YWJsZTxBcnJheTxVbmlxdWVWYWx1ZU1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlXG5cdFx0XHRcdCAgIC5zZWxlY3QoJ2ZpZWxkSWQnKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNTd2l0Y2hNYXAoKGZpZWxkSWQ6IEZpZWxkSWQpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVybWVzTWFwKCh1bmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbDogVW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHJldHVybiB1bmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbC5nZXRWYWx1ZXMoZmllbGRJZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1NlbGVjdEFsbENoZWNrZWQoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVcblx0XHRcdFx0ICAgLnNlbGVjdCgnZmllbGRJZCcpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZmllbGRJZDogRmllbGRJZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoZXJtZXNNYXAoKHVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsLmlzU2VsZWN0QWxsQ2hlY2tlZChmaWVsZElkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0ICApO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIGlzU2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVxuXHRcdFx0XHQgICAuc2VsZWN0KCdmaWVsZElkJylcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzU3dpdGNoTWFwKChmaWVsZElkOiBGaWVsZElkKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uVW5pcXVlVmFsdWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlcm1lc01hcCgodW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWw6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICByZXR1cm4gdW5pcXVlVmFsdWVDb2xsZWN0aW9uTW9kZWwuaXNJbmRldGVybWluYXRlKGZpZWxkSWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBzdGF0ZVwiPlxuXHQ8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInRvZ2dsZUFsbFNlbGVjdCgpXCJcblx0XHRcdFx0ICBbY2hlY2tlZF09XCJzdGF0ZS5zZWxlY3RBbGxDaGVja2VkXCJcblx0XHRcdFx0ICBbaW5kZXRlcm1pbmF0ZV09XCJzdGF0ZS5zZWxlY3RBbGxJbmRldGVybWluYXRlXCI+XG5cdFx0U2VsZWN0IGFsbFxuXHQ8L2d1aS1jaGVja2JveD5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0LWNvbnRhaW5lciBndWktb3ZlcmZsb3cteS1hdXRvIGd1aS1vdmVyZmxvdy14LWhpZGRlblwiPlxuXHRcdDxkaXYgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHN0YXRlLnVuaXF1ZVZhbHVlc1wiPlxuXHRcdFx0PGd1aS1jaGVja2JveCAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3QodmFsdWUpXCJcblx0XHRcdFx0XHRcdCAgW2NoZWNrZWRdPVwidmFsdWUuaXNFbmFibGVkKClcIj5cblx0XHRcdFx0e3t2YWx1ZS5nZXRWYWx1ZSgpfX1cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0LWFjdGlvbnMgZ3VpLXB4LTQgZ3VpLXBiLTQgZ3VpLXB0LTIgZ3VpLWZsZXggZ3VpLWp1c3RpZnktZW5kXCI+XG5cdFx0PGJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIlxuXHRcdFx0XHRbb3V0bGluZV09XCJ0cnVlXCJcblx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdGNsYXNzPVwiZ3VpLWNsZWFyLXVuaXF1ZS1maWx0ZXJzIGd1aS1weC00IGd1aS1weS0yXCJcblx0XHRcdFx0Z3VpLWJ1dHRvbj5cblx0XHRcdENsZWFyXG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=