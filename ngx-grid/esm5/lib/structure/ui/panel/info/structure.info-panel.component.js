/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureReadModelService } from '../../../ui-api/structure/structure-read-model.service';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../composition/domain/composition-id';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(changeDetectorRef, renderer, elementRef, sourceQueryService, dialog, compositionId, menuColumnManagerService, structureReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.sourceQueryService = sourceQueryService;
        _this.dialog = dialog;
        _this.compositionId = compositionId;
        _this.menuColumnManagerService = menuColumnManagerService;
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
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openColumnManager = /**
     * @return {?}
     */
    function () {
        this.menuColumnManagerService.open(this.compositionId);
    };
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-info-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t<p *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\tShowing <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t</p>\n\n\t\t\t<p *ngIf=\"preparedItemsSize !== totalItemsSize\">\n\t\t\t\tShowing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t</p>\n\n\t\t</ng-container>\n\t\t<div>\n\t\t\t<div class=\"gui-right-section\">\n\t\t\t\t<div [gui-tooltip]=\"'Manage Columns'\"\n\t\t\t\t\t\t(click)=\"openColumnManager()\">\n\t\t\t\t\t<button>C</button>\n\t\t\t\t</div>\n\n\t\t\t\t<span [gui-tooltip]=\"'Info'\"\n\t\t\t\t\t  (click)=\"openInfo()\">\n\t\t\t\t<button>i</button>\n\t\t\t\t\tInfo\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t",
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
        { type: CompositionId },
        { type: StructureDialogColumnManagerService },
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
    StructureInfoPanelComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.menuColumnManagerService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHOUU7SUFpQ2lELHVEQUFjO0lBVTlELHFDQUFvQixpQkFBb0MsRUFDN0MsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsa0JBQTBDLEVBQzFDLE1BQTJCLEVBQzNCLGFBQTRCLEVBQzVCLHdCQUE2RCxFQUM3RCx5QkFBb0Q7UUFQL0QsWUFRQyxpQkFBTyxTQUNQO1FBVG1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO1FBQzFDLFlBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBcUM7UUFDN0QsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQVQvRCxlQUFTLEdBQUcsMkJBQTJCLENBQUM7O0lBV3hDLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkErQkM7UUE3QkEsSUFBSSxDQUFDLGtCQUFrQjthQUNyQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixrQkFBa0IsRUFBRTthQUNwQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLGFBQXlCO1lBQ3BDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxTQUFpQjtZQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCx1REFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQTdGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLGd6QkEyQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkE5Q2lDLGlCQUFpQjtnQkFBaUMsU0FBUztnQkFBN0IsVUFBVTtnQkFRakUsc0JBQXNCO2dCQU50QixtQkFBbUI7Z0JBU25CLGFBQWE7Z0JBRGIsbUNBQW1DO2dCQURuQyx5QkFBeUI7O0lBb0dsQyxrQ0FBQztDQUFBLEFBL0ZELENBaUNpRCxjQUFjLEdBOEQ5RDtTQTlEWSwyQkFBMkI7OztJQUV2QyxxREFBdUI7O0lBRXZCLHdEQUEwQjs7SUFFMUIsZ0RBQWtCOztJQUVsQixnREFBd0M7Ozs7O0lBRTVCLHdEQUE0Qzs7Ozs7SUFDckQsK0NBQTJCOzs7OztJQUMzQixpREFBOEI7Ozs7O0lBQzlCLHlEQUFrRDs7Ozs7SUFDbEQsNkNBQW1DOzs7OztJQUNuQyxvREFBb0M7Ozs7O0lBQ3BDLCtEQUFxRTs7Ozs7SUFDckUsZ0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWluZm8tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB1bmRlZmluZWQgJiYgdG90YWxJdGVtc1NpemUgIT09IHVuZGVmaW5lZFwiPlxuXG5cdFx0XHQ8cCAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplID09PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRTaG93aW5nIDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gaXRlbXNcblx0XHRcdDwvcD5cblxuXHRcdFx0PHAgKm5nSWY9XCJwcmVwYXJlZEl0ZW1zU2l6ZSAhPT0gdG90YWxJdGVtc1NpemVcIj5cblx0XHRcdFx0U2hvd2luZyA8Yj57e3ByZXBhcmVkSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IG91dCBvZiA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0XHQ8L3A+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1yaWdodC1zZWN0aW9uXCI+XG5cdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNYW5hZ2UgQ29sdW1ucydcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIm9wZW5Db2x1bW5NYW5hZ2VyKClcIj5cblx0XHRcdFx0XHQ8YnV0dG9uPkM8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidJbmZvJ1wiXG5cdFx0XHRcdFx0ICAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHQ8YnV0dG9uPmk8L2J1dHRvbj5cblx0XHRcdFx0XHRJbmZvXG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUXVlcnlTZXJ2aWNlOiBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIG1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy50b3RhbEl0ZW1zU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uUHJlcGFyZWRFbnRpdGllcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocHJlcGFyZWRJdGVtczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJvd0hlaWdodCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdsaW5lLWhlaWdodCcsICczMHB4Jyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5JbmZvKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlhbG9nLm9wZW4odGhpcy5pbmZvUGFuZWwpO1xuXHR9XG5cblx0b3BlbkNvbHVtbk1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51Q29sdW1uTWFuYWdlclNlcnZpY2Uub3Blbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cbn1cbiJdfQ==