/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { StructureId } from '../../../domain/structure-id';
export class StructureHeaderFiltersComponent {
    /**
     * @param {?} structureFilterCommandService
     * @param {?} formBuilder
     * @param {?} cd
     * @param {?} structureId
     */
    constructor(structureFilterCommandService, formBuilder, cd, structureId) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            this.filter(f[this.filterFieldName]);
        }));
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    filter(phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    }
    /**
     * @return {?}
     */
    clearFilters() {
        this.filterForm.reset();
    }
    /**
     * @return {?}
     */
    turnOnFilterMode() {
        this.filterMode = true;
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    turnOffFilterMode() {
        this.filterMode = false;
        this.cd.detectChanges();
    }
}
StructureHeaderFiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-filters',
                template: `
		
		<ng-container *ngIf="!filterMode">

			<div *ngFor="let cell of columns"
				 [style.width.px]="cell.width"
				 class="gui-header-cell">

				<!--				<gui-structure-header-filter [column]="cell">-->
				<!--				</gui-structure-header-filter>-->

				<button (click)="turnOnFilterMode()">Add Filter</button>

			</div>

		</ng-container>

		<ng-container *ngIf="filterMode">

			<gui-select [options]="['has value', 'is the same as', 'starts with', 'ends with']" [selected]="'has value'" >

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
            }] }
];
/** @nocollapse */
StructureHeaderFiltersComponent.ctorParameters = () => [
    { type: StructureFilterCommandService },
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: StructureId }
];
StructureHeaderFiltersComponent.propDecorators = {
    columns: [{ type: Input }],
    closed: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.closed;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterFieldName;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterForm;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterMode;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUEwQzNELE1BQU0sT0FBTywrQkFBK0I7Ozs7Ozs7SUFjM0MsWUFBb0IsNkJBQTRELEVBQ3JFLFdBQXdCLEVBQ3hCLEVBQXFCLEVBQ3JCLFdBQXdCO1FBSGYsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUErQjtRQUNyRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVhuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV6QixvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUlwQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBTTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRUosQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVTthQUNiLFlBQVk7WUFDYixTQUFTO1lBQ1Qsb0JBQW9CO1lBQ3BCLElBQUk7YUFDSCxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFFcEIsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDNUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBRUQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBOUZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0NUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQTFDUSw2QkFBNkI7WUFGN0IsV0FBVztZQURjLGlCQUFpQjtZQUkxQyxXQUFXOzs7c0JBNENsQixLQUFLO3FCQUdMLE1BQU07Ozs7SUFIUCxrREFDd0M7O0lBRXhDLGlEQUNrQzs7SUFFbEMsMERBQW9DOztJQUVwQyxxREFBc0I7O0lBRXRCLHFEQUE0Qjs7Ozs7SUFFaEIsd0VBQW9FOzs7OztJQUM3RSxzREFBZ0M7Ozs7O0lBQ2hDLDZDQUE2Qjs7Ozs7SUFDN0Isc0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVycycsXG5cdHRlbXBsYXRlOiBgXG5cdFx0XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWx0ZXJNb2RlXCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNlbGwgb2YgY29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbFwiPlxuXG5cdFx0XHRcdDwhLS1cdFx0XHRcdDxndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXIgW2NvbHVtbl09XCJjZWxsXCI+LS0+XG5cdFx0XHRcdDwhLS1cdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyPi0tPlxuXG5cdFx0XHRcdDxidXR0b24gKGNsaWNrKT1cInR1cm5PbkZpbHRlck1vZGUoKVwiPkFkZCBGaWx0ZXI8L2J1dHRvbj5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJNb2RlXCI+XG5cblx0XHRcdDxndWktc2VsZWN0IFtvcHRpb25zXT1cIlsnaGFzIHZhbHVlJywgJ2lzIHRoZSBzYW1lIGFzJywgJ3N0YXJ0cyB3aXRoJywgJ2VuZHMgd2l0aCddXCIgW3NlbGVjdGVkXT1cIidoYXMgdmFsdWUnXCIgPlxuXG5cdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0XHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIGd1aS1pbnB1dC8+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIj5DbGVhciBBbGw8L2J1dHRvbj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwidHVybk9mZkZpbHRlck1vZGUoKVwiPkNsb3NlPC9idXR0b24+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QE91dHB1dCgpXG5cdGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAncGhyYXNlJztcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0ZmlsdGVyTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRbdGhpcy5maWx0ZXJGaWVsZE5hbWVdOiBbJyddXG5cdFx0fSk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0Ly8gLnBpcGUoXG5cdFx0XHQvLyBkZWJvdW5jZVRpbWUoNTAwKVxuXHRcdFx0Ly8gKVxuXHRcdFx0LnN1YnNjcmliZSgoZikgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlcihmW3RoaXMuZmlsdGVyRmllbGROYW1lXSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGZpbHRlcihwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkIHx8IHBocmFzZSA9PT0gbnVsbCkge1xuXHRcdFx0cGhyYXNlID0gJyc7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW5zWzBdLmdldEZpZWxkSWQoKSwgJzEnLCBwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0dHVybk9uRmlsdGVyTW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1vZGUgPSB0cnVlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0dHVybk9mZkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19