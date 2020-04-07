/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { CompositionId } from '../../../composition/domain/composition.id';
export class StructureColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, compositionCommandService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandService = compositionCommandService;
        this.compositionReadModelService = compositionReadModelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
            .onAllColumns(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.enabledColumnsCount = this.columns
                .map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => +c.isEnabled()))
                .reduce((/**
             * @param {?} accumulator
             * @param {?} currentValue
             * @return {?}
             */
            (accumulator, currentValue) => accumulator + currentValue));
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandService.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
}
StructureColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-manager',
                template: `

		<ol>
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)">

				<gui-checkbox [checked]="column.isEnabled()"
							  [disabled]="enabledColumnsCount === 1 && column.isEnabled()">

					<ng-container
							*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
					</ng-container>
				</gui-checkbox>

			</li>
		</ol>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-column-manager]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureColumnManagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CompositionId },
    { type: CompositionCommandDispatcher },
    { type: CompositionReadModelWarehouse }
];
if (false) {
    /** @type {?} */
    StructureColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUU3RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUE4QjNFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUFjOzs7Ozs7O0lBTWxFLFlBQW9CLGlCQUFvQyxFQUM3QyxhQUE0QixFQUM1Qix5QkFBdUQsRUFDdkQsMkJBQTBEO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBSlcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBQ3ZELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBK0I7SUFFckUsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDNUIsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQztpQkFDMUIsTUFBTTs7Ozs7WUFBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZLEVBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUErQjtRQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7O1lBaEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxzQ0FBc0MsRUFBRSxNQUFNO2lCQUM5QzthQUNEOzs7O1lBcENpQyxpQkFBaUI7WUFPMUMsYUFBYTtZQURiLDRCQUE0QjtZQUY1Qiw2QkFBNkI7Ozs7SUFtQ3JDLGtEQUF3Qzs7SUFFeEMsOERBQTRCOzs7OztJQUVoQiw0REFBNEM7Ozs7O0lBQ3JELHdEQUFvQzs7Ozs7SUFDcEMsb0VBQStEOzs7OztJQUMvRCxzRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8b2w+XG5cdFx0XHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCJcblx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZUNvbHVtbihjb2x1bW4pXCI+XG5cblx0XHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHQgIFtkaXNhYmxlZF09XCJlbmFibGVkQ29sdW1uc0NvdW50ID09PSAxICYmIGNvbHVtbi5pc0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cblx0XHRcdDwvbGk+XG5cdFx0PC9vbD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlcl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRlbmFibGVkQ29sdW1uc0NvdW50OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZENvbHVtbnNDb3VudCA9IHRoaXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGMpID0+ICtjLmlzRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlKTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxufVxuIl19