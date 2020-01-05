/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(sourceQueryService, dialog, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.sourceQueryService = sourceQueryService;
        _this.dialog = dialog;
        _this.changeDetectorRef = changeDetectorRef;
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
        { type: SourceReadModelService },
        { type: FabricDialogService },
        { type: ChangeDetectorRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHMUY7SUF5QmlELHVEQUFjO0lBUTlELHFDQUFvQixrQkFBMEMsRUFDbkQsTUFBMkIsRUFDM0IsaUJBQW9DO1FBRi9DLFlBR0MsaUJBQU8sU0FDUDtRQUptQix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO1FBQ25ELFlBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKL0MsZUFBUyxHQUFHLDJCQUEyQixDQUFDOztJQU14QyxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsa0JBQWtCLEVBQUU7YUFDcEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxhQUF5QjtZQUNwQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQWhFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG9rQkFtQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkEzQlEsc0JBQXNCO2dCQU50QixtQkFBbUI7Z0JBRk0saUJBQWlCOztJQTZFbkQsa0NBQUM7Q0FBQSxBQWxFRCxDQXlCaUQsY0FBYyxHQXlDOUQ7U0F6Q1ksMkJBQTJCOzs7SUFFdkMscURBQXVCOztJQUV2Qix3REFBMEI7O0lBRTFCLGdEQUF3Qzs7Ozs7SUFFNUIseURBQWtEOzs7OztJQUMzRCw2Q0FBbUM7Ozs7O0lBQ25DLHdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWluZm8tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB1bmRlZmluZWQgJiYgdG90YWxJdGVtc1NpemUgIT09IHVuZGVmaW5lZFwiPlxuXHRcdFx0XG5cdFx0XHQ8cCAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplID09PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRTaG93aW5nIDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gaXRlbXNcblx0XHRcdDwvcD5cblxuXHRcdFx0PHAgKm5nSWY9XCJwcmVwYXJlZEl0ZW1zU2l6ZSAhPT0gdG90YWxJdGVtc1NpemVcIj5cblx0XHRcdFx0U2hvd2luZyA8Yj57e3ByZXBhcmVkSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IG91dCBvZiA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0XHQ8L3A+XG5cdFx0XHRcblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8ZGl2PlxuXHRcdFx0PHAgKGNsaWNrKT1cIm9wZW5JbmZvKClcIj5cblx0XHRcdFx0PGJ1dHRvbj5pPC9idXR0b24+XG5cdFx0XHRcdEluZm9cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvdGFsSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cHJlcGFyZWRJdGVtc1NpemU6IG51bWJlcjtcblxuXHRpbmZvUGFuZWwgPSBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VRdWVyeVNlcnZpY2U6IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgZGlhbG9nOiBGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy50b3RhbEl0ZW1zU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uUHJlcGFyZWRFbnRpdGllcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocHJlcGFyZWRJdGVtczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvcGVuSW5mbygpIHtcblx0XHR0aGlzLmRpYWxvZy5vcGVuKHRoaXMuaW5mb1BhbmVsKTtcblx0fVxuXG59XG4iXX0=