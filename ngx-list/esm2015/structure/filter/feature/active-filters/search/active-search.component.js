/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SearchWarehouse } from '../../../../search/domain-api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { SearchCommandDispatcher } from '../../../../search/domain-api/search.command-dispatcher';
export class ActiveSearchComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} searchWarehouse
     */
    constructor(changeDetectorRef, structureId, searchCommandDispatcher, searchWarehouse) {
        super();
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
    { type: SearchCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUE2QmxHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjOzs7Ozs7O0lBSXhELFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4Qix1QkFBZ0QsRUFDaEQsZUFBZ0M7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFKb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUVwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlO2FBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXJERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBaENpQyxpQkFBaUI7WUFHMUMsV0FBVztZQUNYLHVCQUF1QjtZQUh2QixlQUFlOzs7O0lBa0N2Qix1Q0FBZTs7Ozs7SUFFSCxrREFBcUQ7Ozs7O0lBQzlELDRDQUF5Qzs7Ozs7SUFDekMsd0RBQWlFOzs7OztJQUNqRSxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYWN0aXZlLXNlYXJjaCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicGhyYXNlXCI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRBY3RpdmUgc2VhcmNoIGJ5OlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxndWktY2hpcD57e3BocmFzZX19PC9ndWktY2hpcD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRcdFtvdXRsaW5lXT1cInRydWVcIlxuXHRcdFx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwiY2xlYXJTZWFyY2goKVwiPlxuXHRcdFx0XHRcdENsZWFyIHNlYXJjaFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwaHJhc2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlXG5cdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBocmFzZSA9IHBocmFzZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyU2VhcmNoKCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKCcnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=