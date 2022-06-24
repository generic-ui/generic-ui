import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/filter/api/filter.publisher";
import * as i2 from "@angular/forms";
import * as i3 from "../../../../core/structure/core/api/global/structure.id";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "@angular/common";
export class StructureHeaderFiltersComponent extends PureComponent {
    constructor(structureFilterCommandService, formBuilder, cd, elementRef, structureId) {
        super(elementRef);
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.structureId = structureId;
        this.closed = new EventEmitter();
        this.filterFieldName = 'phrase';
        this.filterMode = false;
        this.filterForm = this.formBuilder.group({
            [this.filterFieldName]: ['']
        });
    }
    ngOnInit() {
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((f) => {
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
}
StructureHeaderFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureHeaderFiltersComponent, deps: [{ token: i1.FilterPublisher }, { token: i2.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i3.StructureId }], target: i0.ɵɵFactoryTarget.Component });
StructureHeaderFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureHeaderFiltersComponent, selector: "div[gui-structure-header-filters][columns]", inputs: { columns: "columns" }, outputs: { closed: "closed" }, usesInheritance: true, ngImport: i0, template: `

		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell gui-flex gui-justify-between
\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border
\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis">

				<!--				<gui-structure-header-filter [column]="cell">-->
				<!--				</gui-structure-header-filter>-->

				<button (click)="turnOnFilterMode()">Add Filter</button>

			</div>

		</ng-container>

		<ng-container *ngIf="filterMode">

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'">

			</gui-select>

			<form [formGroup]="filterForm">
				<input type="text" [formControlName]="filterFieldName" gui-input/>
			</form>

			<button gui-button (click)="clearFilters()">Clear All</button>
			<button gui-button (click)="turnOffFilterMode()">Close</button>

		</ng-container>

	`, isInline: true, components: [{ type: i4.FabricSelectComponent, selector: "gui-select", inputs: ["options", "placeholder", "selected", "width", "disabled"], outputs: ["optionChanged"] }, { type: i4.FabricInputComponent, selector: "input[gui-input]" }, { type: i4.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureHeaderFiltersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-header-filters][columns]',
                    template: `

		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell gui-flex gui-justify-between
\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border
\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis">

				<!--				<gui-structure-header-filter [column]="cell">-->
				<!--				</gui-structure-header-filter>-->

				<button (click)="turnOnFilterMode()">Add Filter</button>

			</div>

		</ng-container>

		<ng-container *ngIf="filterMode">

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'">

			</gui-select>

			<form [formGroup]="filterForm">
				<input type="text" [formControlName]="filterFieldName" gui-input/>
			</form>

			<button gui-button (click)="clearFilters()">Clear All</button>
			<button gui-button (click)="turnOffFilterMode()">Close</button>

		</ng-container>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.FilterPublisher }, { type: i2.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i3.StructureId }]; }, propDecorators: { columns: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTFKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7Ozs7OztBQTJDeEYsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGFBQWE7SUFjakUsWUFBNkIsNkJBQThDLEVBQ3ZELFdBQXdCLEVBQ3hCLEVBQXFCLEVBQ3RDLFVBQXNCLEVBQ0wsV0FBd0I7UUFDM0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTFUsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFpQjtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUVyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVo1QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV6QixvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUlwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBUTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVTthQUNiLFlBQVk7WUFDYixTQUFTO1lBQ1Qsb0JBQW9CO1lBQ3BCLElBQUk7YUFDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCw2R0FBNkc7SUFDOUcsQ0FBQztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OzZIQTlEVywrQkFBK0I7aUhBQS9CLCtCQUErQix3S0F0Q2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NUOzRGQUlXLCtCQUErQjtrQkF4QzNDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7bU5BSUEsT0FBTztzQkFETixLQUFLO2dCQUlOLE1BQU07c0JBREwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvZmlsdGVyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzXVtjb2x1bW5zXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY2VsbCBvZiBjb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjZWxsLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1mbGV4IGd1aS1qdXN0aWZ5LWJldHdlZW5cblxcdCBndWktb3ZlcmZsb3ctaGlkZGVuIGd1aS1yZWxhdGl2ZSBndWktcHktMCBndWktcHgtNiBndWktYm94LWJvcmRlclxuXFx0IGd1aS1sZWFkaW5nLTQgZ3VpLXdoaXRlc3BhY2Utbm93cmFwIGd1aS1vdmVyZmxvdy1lbGxpcHNpc1wiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdDxndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXIgW2NvbHVtbl09XCJjZWxsXCI+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyPi0tPlxuXG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cInR1cm5PbkZpbHRlck1vZGUoKVwiPkFkZCBGaWx0ZXI8L2J1dHRvbj5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJNb2RlXCI+XG5cblx0XHRcdDxndWktc2VsZWN0IFtvcHRpb25zXT1cIlsnaGFzIHZhbHVlJywgJ2lzIHRoZSBzYW1lIGFzJywgJ3N0YXJ0cyB3aXRoJywgJ2VuZHMgd2l0aCddXCIgW3NlbGVjdGVkXT1cIidoYXMgdmFsdWUnXCI+XG5cblx0XHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRcdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgZ3VpLWlucHV0Lz5cblx0XHRcdDwvZm9ybT5cblxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uIChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPkNsZWFyIEFsbDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uIChjbGljayk9XCJ0dXJuT2ZmRmlsdGVyTW9kZSgpXCI+Q2xvc2U8L2J1dHRvbj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QE91dHB1dCgpXG5cdGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAncGhyYXNlJztcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0ZmlsdGVyTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlclB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC8vIC5waXBlKFxuXHRcdFx0Ly8gZGVib3VuY2VUaW1lKDUwMClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKGYpID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXIoZlt0aGlzLmZpbHRlckZpZWxkTmFtZV0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXIocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCB8fCBwaHJhc2UgPT09IG51bGwpIHtcblx0XHRcdHBocmFzZSA9ICcnO1xuXHRcdH1cblxuXHRcdC8vIHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uc1swXS5nZXRGaWVsZElkKCksICcxJywgcGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHR1cm5PbkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gdHJ1ZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHR1cm5PZmZGaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG59XG4iXX0=