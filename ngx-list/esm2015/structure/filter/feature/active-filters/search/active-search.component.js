/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SearchWarehouse } from '../../../../search/core/api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
export class ActiveSearchComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} searchWarehouse
     */
    constructor(changeDetectorRef, structureId, searchCommandDispatcher, searchWarehouse) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchWarehouse = searchWarehouse;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchWarehouse
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.phrase = phrase;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    clearSearch() {
        event.stopPropagation();
        this.searchCommandDispatcher.search('', this.structureId);
    }
}
ActiveSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-active-search',
                template: `

		<ng-container *ngIf="phrase">
			<div>
				Active search by:
			</div>

			<div>
				<gui-chip>{{phrase}}</gui-chip>
			</div>

			<div>
				<button gui-button
						[outline]="true"
						[primary]="true"
						(click)="clearSearch()">
					Clear search
				</button>
			</div>
		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ActiveSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: SearchCommandInvoker },
    { type: SearchWarehouse }
];
if (false) {
    /** @type {?} */
    ActiveSearchComponent.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUE2QjFGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjOzs7Ozs7O0lBSXhELFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix1QkFBNkMsRUFDN0MsZUFBZ0M7UUFDbkQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFKRyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBc0I7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBRXBELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWU7YUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDMUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBckRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFoQ2lDLGlCQUFpQjtZQUcxQyxXQUFXO1lBQ1gsb0JBQW9CO1lBSHBCLGVBQWU7Ozs7SUFrQ3ZCLHVDQUFlOzs7OztJQUVILGtEQUFxRDs7Ozs7SUFDOUQsNENBQXlDOzs7OztJQUN6Qyx3REFBOEQ7Ozs7O0lBQzlELGdEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWFjdGl2ZS1zZWFyY2gnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInBocmFzZVwiPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0QWN0aXZlIHNlYXJjaCBieTpcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8Z3VpLWNoaXA+e3twaHJhc2V9fTwvZ3VpLWNoaXA+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0XHRbb3V0bGluZV09XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cImNsZWFyU2VhcmNoKClcIj5cblx0XHRcdFx0XHRDbGVhciBzZWFyY2hcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cGhyYXNlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlXG5cdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBocmFzZSA9IHBocmFzZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyU2VhcmNoKCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKCcnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=