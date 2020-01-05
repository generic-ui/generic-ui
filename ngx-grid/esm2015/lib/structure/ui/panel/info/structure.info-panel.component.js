/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export class StructureInfoPanelComponent extends SmartComponent {
    /**
     * @param {?} sourceQueryService
     * @param {?} dialog
     * @param {?} changeDetectorRef
     */
    constructor(sourceQueryService, dialog, changeDetectorRef) {
        super();
        this.sourceQueryService = sourceQueryService;
        this.dialog = dialog;
        this.changeDetectorRef = changeDetectorRef;
        this.infoPanel = StructureInfoModalComponent;
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
            this.totalItemsSize = size;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .onPreparedEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} preparedItems
         * @return {?}
         */
        (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
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
StructureInfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-info-panel',
                template: `

		<ng-container *ngIf="preparedItemsSize !== undefined && totalItemsSize !== undefined">
			
			<p *ngIf="preparedItemsSize === totalItemsSize">
				Showing <b>{{totalItemsSize | numberFormatter}}</b> items
			</p>

			<p *ngIf="preparedItemsSize !== totalItemsSize">
				Showing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items
			</p>
			
		</ng-container>
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
StructureInfoPanelComponent.ctorParameters = () => [
    { type: SourceReadModelService },
    { type: FabricDialogService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    StructureInfoPanelComponent.prototype.totalItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.preparedItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQTRCMUYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7Ozs7OztJQVE5RCxZQUFvQixrQkFBMEMsRUFDbkQsTUFBMkIsRUFDM0IsaUJBQW9DO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBSFcsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF3QjtRQUNuRCxXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSi9DLGNBQVMsR0FBRywyQkFBMkIsQ0FBQztJQU14QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLGtCQUFrQixFQUFFO2FBQ3BCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsYUFBeUIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQWhFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQTNCUSxzQkFBc0I7WUFOdEIsbUJBQW1CO1lBRk0saUJBQWlCOzs7O0lBc0NsRCxxREFBdUI7O0lBRXZCLHdEQUEwQjs7SUFFMUIsZ0RBQXdDOzs7OztJQUU1Qix5REFBa0Q7Ozs7O0lBQzNELDZDQUFtQzs7Ozs7SUFDbkMsd0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHVuZGVmaW5lZCAmJiB0b3RhbEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkXCI+XG5cdFx0XHRcblx0XHRcdDxwICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgPT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdFNob3dpbmcgPGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiBpdGVtc1xuXHRcdFx0PC9wPlxuXG5cdFx0XHQ8cCAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRTaG93aW5nIDxiPnt7cHJlcGFyZWRJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gb3V0IG9mIDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gaXRlbXNcblx0XHRcdDwvcD5cblx0XHRcdFxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxkaXY+XG5cdFx0XHQ8cCAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHQ8YnV0dG9uPmk8L2J1dHRvbj5cblx0XHRcdFx0SW5mb1xuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBkaWFsb2c6IEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsSXRlbXNTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25QcmVwYXJlZEVudGl0aWVzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwcmVwYXJlZEl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMucHJlcGFyZWRJdGVtc1NpemUgPSBwcmVwYXJlZEl0ZW1zLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5JbmZvKCkge1xuXHRcdHRoaXMuZGlhbG9nLm9wZW4odGhpcy5pbmZvUGFuZWwpO1xuXHR9XG5cbn1cbiJdfQ==