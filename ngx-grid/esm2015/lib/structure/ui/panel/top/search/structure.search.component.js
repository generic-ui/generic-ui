/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
export class StructureSearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} structureCommandService
     */
    constructor(formBuilder, structureCommandService) {
        super();
        this.formBuilder = formBuilder;
        this.structureCommandService = structureCommandService;
        this.searchForm = this.formBuilder.group({
            'searchPhrase': ''
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchForm
            .controls['searchPhrase']
            .valueChanges
            .pipe(debounceTime(200), this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.structureCommandService.search(phrase);
        }));
    }
}
StructureSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-search-bar',
                template: `
		<form [formGroup]="searchForm">
			<div class="gui-search-icon"></div>
			<input formControlName="searchPhrase" [placeholder]="'Search ...'">
		</form>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureSearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: StructureCommandService }
];
if (false) {
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQWNqRyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7SUFJM0QsWUFBb0IsV0FBd0IsRUFDakMsdUJBQWdEO1FBQzFELEtBQUssRUFBRSxDQUFDO1FBRlcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLGNBQWMsRUFBRSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNyQixJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDeEIsWUFBWTthQUNaLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7O0VBS1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBbEJRLFdBQVc7WUFLWCx1QkFBdUI7Ozs7SUFnQi9CLDhDQUFzQjs7Ozs7SUFFViwrQ0FBZ0M7Ozs7O0lBQ3pDLDJEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zZWFyY2gtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktc2VhcmNoLWljb25cIj48L2Rpdj5cblx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIiBbcGxhY2Vob2xkZXJdPVwiJ1NlYXJjaCAuLi4nXCI+XG5cdFx0PC9mb3JtPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHQnc2VhcmNoUGhyYXNlJzogJydcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtXG5cdFx0XHQuY29udHJvbHNbJ3NlYXJjaFBocmFzZSddXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMCksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2VhcmNoKHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19