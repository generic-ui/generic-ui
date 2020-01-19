/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../../ui-api/composition/composition-read-model.service';
import { CompositionCommandService } from '../../../../ui-api/composition/composition.command-service';
export class StructureMenuColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionCommandService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.compositionCommandService = compositionCommandService;
        this.compositionReadModelService = compositionReadModelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
            .onAllColumns()
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
            this.compositionCommandService.disableColumn(column.getColumnId());
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnId());
        }
    }
}
StructureMenuColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-menu-column-manager',
                template: `

		<div *ngFor="let column of columns">

			<gui-checkbox [checked]="column.isEnabled()"
						  [disabled]="enabledColumnsCount === 1 && column.isEnabled()"
						  (click)="toggleColumn(column)">

				<ng-container
						*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
				</ng-container>
			</gui-checkbox>
			
		</div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-menu-column-manager]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureMenuColumnManagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CompositionCommandService },
    { type: CompositionReadModelService }
];
if (false) {
    /** @type {?} */
    StructureMenuColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureMenuColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureMenuColumnManagerComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5tZW51LWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFNUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUE0QnZHLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxjQUFjOzs7Ozs7SUFNdEUsWUFBb0IsaUJBQW9DLEVBQzdDLHlCQUFvRCxFQUNwRCwyQkFBd0Q7UUFDbEUsS0FBSyxFQUFFLENBQUM7UUFIVyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUVuRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUF1QyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDO2lCQUMxQixNQUFNOzs7OztZQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVksRUFBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQStCO1FBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7O1lBNURELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsMkNBQTJDLEVBQUUsTUFBTTtpQkFDbkQ7YUFDRDs7OztZQWpDaUMsaUJBQWlCO1lBTTFDLHlCQUF5QjtZQUZ6QiwyQkFBMkI7Ozs7SUFnQ25DLHNEQUF3Qzs7SUFFeEMsa0VBQTRCOzs7OztJQUVoQixnRUFBNEM7Ozs7O0lBQ3JELHdFQUE0RDs7Ozs7SUFDNUQsMEVBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cblxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0ICBbZGlzYWJsZWRdPVwiZW5hYmxlZENvbHVtbnNDb3VudCA9PT0gMSAmJiBjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0ICAoY2xpY2spPVwidG9nZ2xlQ29sdW1uKGNvbHVtbilcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGVuYWJsZWRDb2x1bW5zQ291bnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25BbGxDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5lbmFibGVkQ29sdW1uc0NvdW50ID0gdGhpcy5jb2x1bW5zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLm1hcCgoYykgPT4gK2MuaXNFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWUpO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVDb2x1bW4oY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChjb2x1bW4uaXNFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5kaXNhYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5JZCgpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLmVuYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uSWQoKSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=