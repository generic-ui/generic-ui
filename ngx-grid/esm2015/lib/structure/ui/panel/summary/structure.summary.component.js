/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoPanel } from './structure.info-panel';
import { StructureSummaryEnabledArchive } from './structure.summary-enabled.archive';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export class StructureSummaryComponent extends SmartComponent {
    /**
     * @param {?} structureSummaryEnabledArchive
     * @param {?} sourceQueryService
     * @param {?} dialog
     * @param {?} changeDetectorRef
     */
    constructor(structureSummaryEnabledArchive, sourceQueryService, dialog, changeDetectorRef) {
        super();
        this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        this.sourceQueryService = sourceQueryService;
        this.dialog = dialog;
        this.changeDetectorRef = changeDetectorRef;
        this.infoPanel = StructureInfoPanel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sourceQueryService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.originSize = size;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    openInfo() {
        this.dialog.open(this.infoPanel);
    }
}
StructureSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-summary',
                template: `

		<p>
			Showing <b>{{originSize | numberFormatter}}</b> items
		</p>
		<div>
			<p (click)="openInfo()">
				<button>i</button>
				Info
			</p>
		</div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureSummaryComponent.ctorParameters = () => [
    { type: StructureSummaryEnabledArchive },
    { type: SourceReadModelService },
    { type: FabricDialogService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    StructureSummaryComponent.prototype.originSize;
    /** @type {?} */
    StructureSummaryComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.structureSummaryEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL3N1bW1hcnkvc3RydWN0dXJlLnN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQXFCMUYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7Ozs7Ozs7SUFNNUQsWUFBb0IsOEJBQThELEVBQ3ZFLGtCQUEwQyxFQUMxQyxNQUEyQixFQUMzQixpQkFBb0M7UUFFOUMsS0FBSyxFQUFFLENBQUM7UUFMVyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQ3ZFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUwvQyxjQUFTLEdBQUcsa0JBQWtCLENBQUM7SUFRL0IsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBL0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztFQVlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQXRCUSw4QkFBOEI7WUFFOUIsc0JBQXNCO1lBUnRCLG1CQUFtQjtZQUY0QyxpQkFBaUI7Ozs7SUFpQ3hGLCtDQUFtQjs7SUFFbkIsOENBQStCOzs7OztJQUVuQixtRUFBc0U7Ozs7O0lBQy9FLHVEQUFrRDs7Ozs7SUFDbEQsMkNBQW1DOzs7OztJQUNuQyxzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJ5LWVuYWJsZWQuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc3VtbWFyeScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8cD5cblx0XHRcdFNob3dpbmcgPGI+e3tvcmlnaW5TaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0PC9wPlxuXHRcdDxkaXY+XG5cdFx0XHQ8cCAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHQ8YnV0dG9uPmk8L2J1dHRvbj5cblx0XHRcdFx0SW5mb1xuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcnlDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3JpZ2luU2l6ZTogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9QYW5lbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBkaWFsb2c6IEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5vcmlnaW5TaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5JbmZvKCkge1xuXHRcdHRoaXMuZGlhbG9nLm9wZW4odGhpcy5pbmZvUGFuZWwpO1xuXHR9XG5cbn1cbiJdfQ==