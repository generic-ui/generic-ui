/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export class StructureSearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        super();
        this.formBuilder = formBuilder;
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
        this.searchForm.controls['searchPhrase'].valueChanges
            .pipe(
        // debounceTime(0),
        this.takeUntil())
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        (name) => console.log(name)));
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
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBYzNFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjOzs7O0lBSTNELFlBQW9CLFdBQXdCO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBRFcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxjQUFjLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLGNBQWM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWTthQUMxQyxJQUFJO1FBQ0osbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7RUFLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFmUSxXQUFXOzs7O0lBa0JuQiw4Q0FBc0I7Ozs7O0lBRVYsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zZWFyY2gtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktc2VhcmNoLWljb25cIj48L2Rpdj5cblx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIiBbcGxhY2Vob2xkZXJdPVwiJ1NlYXJjaCAuLi4nXCI+XG5cdFx0PC9mb3JtPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdCdzZWFyY2hQaHJhc2UnOiAnJ1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZvcm0uY29udHJvbHNbJ3NlYXJjaFBocmFzZSddLnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGRlYm91bmNlVGltZSgwKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZSgobmFtZSkgPT4gY29uc29sZS5sb2cobmFtZSkpO1xuXHR9XG59XG4iXX0=