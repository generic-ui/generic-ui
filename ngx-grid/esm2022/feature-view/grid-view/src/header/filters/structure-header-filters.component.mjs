import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/component/src/pure-component';
import { GuiEffects } from '../../../../../feature/gui-angular/effect/gui.effects';
import { fromRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i2 from "@angular/forms";
import * as i3 from "../../../../../feature/gui-angular/effect/gui.effects";
import * as i4 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i5 from "@angular/common";
import * as i6 from "@generic-ui/fabric";
export class StructureHeaderFiltersComponent extends PureComponent {
    structureFilterCommandService;
    formBuilder;
    cd;
    effects;
    structureId;
    columns;
    closed = new EventEmitter();
    filterFieldName = 'phrase';
    filterForm;
    filterMode = false;
    constructor(structureFilterCommandService, formBuilder, cd, effects, elementRef, structureId) {
        super(elementRef);
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.effects = effects;
        this.structureId = structureId;
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    ngOnInit() {
        this.effects
            .register(this.selectFilterFormChanges(), (f) => {
            this.filter(f[this.filterFieldName]);
        });
    }
    filter(phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        // this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    }
    clearFilters() {
        this.filterForm.reset();
    }
    turnOnFilterMode() {
        this.filterMode = true;
        this.cd.detectChanges();
    }
    turnOffFilterMode() {
        this.filterMode = false;
        this.cd.detectChanges();
    }
    getSelectorName() {
        return '';
    }
    selectFilterFormChanges() {
        return fromRxJsObservable(this.filterForm.valueChanges);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderFiltersComponent, deps: [{ token: i1.FilterPublisher }, { token: i2.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i3.GuiEffects }, { token: i0.ElementRef }, { token: i4.StructureId }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: { columns: "columns" }, outputs: { closed: "closed" }, providers: [
            GuiEffects
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!filterMode\">\n\n\t<div *ngFor=\"let cell of columns\"\n\t\t [style.width.px]=\"cell.width\"\n\t\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t</div>\n\n</ng-container>\n\n<ng-container *ngIf=\"filterMode\">\n\n\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\">\n\n\t</gui-select>\n\n\t<form [formGroup]=\"filterForm\">\n\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t</form>\n\n\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n</ng-container>\n\n", dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i6.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { kind: "component", type: i6.FabricInputComponent, selector: "input[gui-input]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureHeaderFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-header-filters][columns]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiEffects
                    ], template: "<ng-container *ngIf=\"!filterMode\">\n\n\t<div *ngFor=\"let cell of columns\"\n\t\t [style.width.px]=\"cell.width\"\n\t\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t</div>\n\n</ng-container>\n\n<ng-container *ngIf=\"filterMode\">\n\n\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\">\n\n\t</gui-select>\n\n\t<form [formGroup]=\"filterForm\">\n\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t</form>\n\n\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n</ng-container>\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.FilterPublisher }, { type: i2.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i3.GuiEffects }, { type: i0.ElementRef }, { type: i4.StructureId }]; }, propDecorators: { columns: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTFKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQVkxRSxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsYUFBYTtJQWNwQztJQUNUO0lBQ0E7SUFDQTtJQUVBO0lBaEJwQixPQUFPLENBQWlDO0lBR3hDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRXpCLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFFcEMsVUFBVSxDQUFZO0lBRXRCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIsWUFBNkIsNkJBQThDLEVBQ3ZELFdBQXdCLEVBQ3hCLEVBQXFCLEVBQ3JCLE9BQW1CLEVBQ3BDLFVBQXNCLEVBQ0wsV0FBd0I7UUFDM0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTlUsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFpQjtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsT0FBTzthQUNWLFFBQVEsQ0FDUixJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FDRCxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBRXBCLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzVDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELDZHQUE2RztJQUM5RyxDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVPLHVCQUF1QjtRQUM5QixPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBbUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7d0dBbEVXLCtCQUErQjs0RkFBL0IsK0JBQStCLG9JQUpoQztZQUNWLFVBQVU7U0FDVixpRENsQkYsaytCQWdDQTs7NEZEWmEsK0JBQStCO2tCQVQzQyxTQUFTOytCQUNDLDRDQUE0QyxtQkFFckMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVixVQUFVO3FCQUNWOzRPQUtELE9BQU87c0JBRE4sS0FBSztnQkFJTixNQUFNO3NCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvY29yZS1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpRWZmZWN0cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvZWZmZWN0L2d1aS5lZmZlY3RzJztcbmltcG9ydCB7IGZyb21SeEpzT2JzZXJ2YWJsZSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnNdW2NvbHVtbnNdJyxcblx0dGVtcGxhdGVVcmw6IGAuL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRHdWlFZmZlY3RzXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRmaWx0ZXJNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogRmlsdGVyUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWZmZWN0czogR3VpRWZmZWN0cyxcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5lZmZlY3RzXG5cdFx0XHQucmVnaXN0ZXIoXG5cdFx0XHRcdHRoaXMuc2VsZWN0RmlsdGVyRm9ybUNoYW5nZXMoKSxcblx0XHRcdFx0KGYpID0+IHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlcihmW3RoaXMuZmlsdGVyRmllbGROYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0fVxuXG5cdGZpbHRlcihwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkIHx8IHBocmFzZSA9PT0gbnVsbCkge1xuXHRcdFx0cGhyYXNlID0gJyc7XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW5zWzBdLmdldEZpZWxkSWQoKSwgJzEnLCBwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0dHVybk9uRmlsdGVyTW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1vZGUgPSB0cnVlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0dHVybk9mZkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RGaWx0ZXJGb3JtQ2hhbmdlcygpOiBIZXJtZXNPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiBmcm9tUnhKc09ic2VydmFibGUodGhpcy5maWx0ZXJGb3JtLnZhbHVlQ2hhbmdlcyBhcyBhbnkpO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlsdGVyTW9kZVwiPlxuXG5cdDxkaXYgKm5nRm9yPVwibGV0IGNlbGwgb2YgY29sdW1uc1wiXG5cdFx0IFtzdHlsZS53aWR0aC5weF09XCJjZWxsLndpZHRoXCJcblx0XHQgY2xhc3M9XCJndWktaGVhZGVyLWNlbGwgZ3VpLWZsZXggZ3VpLWp1c3RpZnktYmV0d2VlblxuXHQgZ3VpLW92ZXJmbG93LWhpZGRlbiBndWktcmVsYXRpdmUgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWJveC1ib3JkZXJcblx0IGd1aS1sZWFkaW5nLTQgZ3VpLXdoaXRlc3BhY2Utbm93cmFwIGd1aS1vdmVyZmxvdy1lbGxpcHNpc1wiPlxuXG5cdFx0PCEtLVx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlciBbY29sdW1uXT1cImNlbGxcIj4tLT5cblx0XHQ8IS0tXHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcj4tLT5cblxuXHRcdDxidXR0b24gKGNsaWNrKT1cInR1cm5PbkZpbHRlck1vZGUoKVwiPkFkZCBGaWx0ZXI8L2J1dHRvbj5cblxuXHQ8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJNb2RlXCI+XG5cblx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiWydoYXMgdmFsdWUnLCAnaXMgdGhlIHNhbWUgYXMnLCAnc3RhcnRzIHdpdGgnLCAnZW5kcyB3aXRoJ11cIiBbc2VsZWN0ZWRdPVwiJ2hhcyB2YWx1ZSdcIj5cblxuXHQ8L2d1aS1zZWxlY3Q+XG5cblx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIiBndWktaW5wdXQvPlxuXHQ8L2Zvcm0+XG5cblx0PGJ1dHRvbiBndWktYnV0dG9uIChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPkNsZWFyIEFsbDwvYnV0dG9uPlxuXHQ8YnV0dG9uIGd1aS1idXR0b24gKGNsaWNrKT1cInR1cm5PZmZGaWx0ZXJNb2RlKClcIj5DbG9zZTwvYnV0dG9uPlxuXG48L25nLWNvbnRhaW5lcj5cblxuIl19