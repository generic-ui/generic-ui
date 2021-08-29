/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/domain/structure.id';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class StructureHeaderFiltersComponent extends PureComponent {
    /**
     * @param {?} structureFilterCommandService
     * @param {?} formBuilder
     * @param {?} cd
     * @param {?} elementRef
     * @param {?} structureId
     */
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
        // this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
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
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return '';
    }
}
StructureHeaderFiltersComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
StructureHeaderFiltersComponent.ctorParameters = () => [
    { type: FilterCommandInvoker },
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: ElementRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQTJDbkYsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGFBQWE7Ozs7Ozs7O0lBY2pFLFlBQTZCLDZCQUFtRCxFQUM1RCxXQUF3QixFQUN4QixFQUFxQixFQUN0QyxVQUFzQixFQUNMLFdBQXdCO1FBQzNDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUxVLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBc0I7UUFDNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFaNUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFekIsb0JBQWUsR0FBRyxRQUFRLENBQUM7UUFJcEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVEzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUVKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVU7YUFDYixZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBRXBCLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzVDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELDZHQUE2RztJQUM5RyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQXRHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQTdDUSxvQkFBb0I7WUFGcEIsV0FBVztZQURjLGlCQUFpQjtZQUFhLFVBQVU7WUFJakUsV0FBVzs7O3NCQStDbEIsS0FBSztxQkFHTCxNQUFNOzs7O0lBSFAsa0RBQ3dDOztJQUV4QyxpREFDa0M7O0lBRWxDLDBEQUFvQzs7SUFFcEMscURBQXNCOztJQUV0QixxREFBNEI7Ozs7O0lBRWhCLHdFQUFvRTs7Ozs7SUFDN0Usc0RBQXlDOzs7OztJQUN6Qyw2Q0FBc0M7Ozs7O0lBRXRDLHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyc11bY29sdW1uc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWx0ZXJNb2RlXCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNlbGwgb2YgY29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuXG5cXHQgZ3VpLW92ZXJmbG93LWhpZGRlbiBndWktcmVsYXRpdmUgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWJveC1ib3JkZXJcblxcdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyIFtjb2x1bW5dPVwiY2VsbFwiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcj4tLT5cblxuXHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJ0dXJuT25GaWx0ZXJNb2RlKClcIj5BZGQgRmlsdGVyPC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyTW9kZVwiPlxuXG5cdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJbJ2hhcyB2YWx1ZScsICdpcyB0aGUgc2FtZSBhcycsICdzdGFydHMgd2l0aCcsICdlbmRzIHdpdGgnXVwiIFtzZWxlY3RlZF09XCInaGFzIHZhbHVlJ1wiPlxuXG5cdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0XHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIGd1aS1pbnB1dC8+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIj5DbGVhciBBbGw8L2J1dHRvbj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwidHVybk9mZkZpbHRlck1vZGUoKVwiPkNsb3NlPC9idXR0b24+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdEBPdXRwdXQoKVxuXHRjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGZpbHRlck1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC8vIC5waXBlKFxuXHRcdFx0Ly8gZGVib3VuY2VUaW1lKDUwMClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKGYpID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXIoZlt0aGlzLmZpbHRlckZpZWxkTmFtZV0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXIocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCB8fCBwaHJhc2UgPT09IG51bGwpIHtcblx0XHRcdHBocmFzZSA9ICcnO1xuXHRcdH1cblxuXHRcdC8vIHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uc1swXS5nZXRGaWVsZElkKCksICcxJywgcGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHR1cm5PbkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gdHJ1ZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHR1cm5PZmZGaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG59XG4iXX0=