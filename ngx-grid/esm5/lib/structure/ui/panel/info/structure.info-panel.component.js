/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(changeDetectorRef, renderer, elementRef, sourceQueryService, dialog, structureReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.sourceQueryService = sourceQueryService;
        _this.dialog = dialog;
        _this.structureReadModelService = structureReadModelService;
        _this.infoPanel = StructureInfoModalComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceQueryService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.totalItemsSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .onPreparedEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} preparedItems
         * @return {?}
         */
        function (preparedItems) {
            _this.preparedItemsSize = preparedItems.length;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            _this.rowHeight = rowHeight;
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'line-height', '30px');
        }));
    };
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openInfo = /**
     * @return {?}
     */
    function () {
        this.dialog.open(this.infoPanel);
    };
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-info-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\t\t\t\n\t\t\t<p *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\tShowing <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t</p>\n\n\t\t\t<p *ngIf=\"preparedItemsSize !== totalItemsSize\">\n\t\t\t\tShowing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t</p>\n\t\t\t\n\t\t</ng-container>\n\t\t<div>\n\t\t\t<p (click)=\"openInfo()\">\n\t\t\t\t<button>i</button>\n\t\t\t\tInfo\n\t\t\t</p>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureInfoPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: SourceReadModelService },
        { type: FabricDialogService },
        { type: StructureReadModelService }
    ]; };
    return StructureInfoPanelComponent;
}(SmartComponent));
export { StructureInfoPanelComponent };
if (false) {
    /** @type {?} */
    StructureInfoPanelComponent.prototype.totalItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.preparedItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.rowHeight;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.elementRef;
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
    StructureInfoPanelComponent.prototype.structureReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUduRztJQXlCaUQsdURBQWM7SUFVOUQscUNBQW9CLGlCQUFvQyxFQUM3QyxRQUFtQixFQUNuQixVQUFzQixFQUN0QixrQkFBMEMsRUFDMUMsTUFBMkIsRUFDM0IseUJBQW9EO1FBTC9ELFlBTUMsaUJBQU8sU0FDUDtRQVBtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUF3QjtRQUMxQyxZQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUMzQiwrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBUC9ELGVBQVMsR0FBRywyQkFBMkIsQ0FBQzs7SUFTeEMsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQStCQztRQTdCQSxJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLGtCQUFrQixFQUFFO2FBQ3BCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsYUFBeUI7WUFDcEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDOUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHlCQUF5QjthQUM1QixXQUFXLEVBQUU7YUFDYixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWlCO1lBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBL0VELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsb2tCQW1CVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXBDaUMsaUJBQWlCO2dCQUF3QyxTQUFTO2dCQUFFLFVBQVU7Z0JBUXZHLHNCQUFzQjtnQkFOdEIsbUJBQW1CO2dCQU9uQix5QkFBeUI7O0lBb0ZsQyxrQ0FBQztDQUFBLEFBakZELENBeUJpRCxjQUFjLEdBd0Q5RDtTQXhEWSwyQkFBMkI7OztJQUV2QyxxREFBdUI7O0lBRXZCLHdEQUEwQjs7SUFFMUIsZ0RBQWtCOztJQUVsQixnREFBd0M7Ozs7O0lBRTVCLHdEQUE0Qzs7Ozs7SUFDckQsK0NBQTJCOzs7OztJQUMzQixpREFBOEI7Ozs7O0lBQzlCLHlEQUFrRDs7Ozs7SUFDbEQsNkNBQW1DOzs7OztJQUNuQyxnRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHVuZGVmaW5lZCAmJiB0b3RhbEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkXCI+XG5cdFx0XHRcblx0XHRcdDxwICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgPT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdFNob3dpbmcgPGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiBpdGVtc1xuXHRcdFx0PC9wPlxuXG5cdFx0XHQ8cCAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRTaG93aW5nIDxiPnt7cHJlcGFyZWRJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gb3V0IG9mIDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gaXRlbXNcblx0XHRcdDwvcD5cblx0XHRcdFxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxkaXY+XG5cdFx0XHQ8cCAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHQ8YnV0dG9uPmk8L2J1dHRvbj5cblx0XHRcdFx0SW5mb1xuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUXVlcnlTZXJ2aWNlOiBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsSXRlbXNTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25QcmVwYXJlZEVudGl0aWVzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwcmVwYXJlZEl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMucHJlcGFyZWRJdGVtc1NpemUgPSBwcmVwYXJlZEl0ZW1zLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93SGVpZ2h0KClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dIZWlnaHQ6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2xpbmUtaGVpZ2h0JywgJzMwcHgnKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b3BlbkluZm8oKSB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih0aGlzLmluZm9QYW5lbCk7XG5cdH1cblxufVxuIl19