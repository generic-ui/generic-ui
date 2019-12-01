/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoPanel } from './structure.info-panel';
import { StructureSummaryEnabledArchive } from './structure.summary-enabled.archive';
import { SourceQueryService } from '../../../app/source/source-query.service';
var StructureSummaryComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummaryComponent, _super);
    function StructureSummaryComponent(structureSummaryEnabledArchive, sourceQueryService, dialog, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.sourceQueryService = sourceQueryService;
        _this.dialog = dialog;
        _this.changeDetectorRef = changeDetectorRef;
        _this.infoPanel = StructureInfoPanel;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummaryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceQueryService
            .selectOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.originSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureSummaryComponent.prototype.openInfo = /**
     * @return {?}
     */
    function () {
        this.dialog.open(this.infoPanel);
    };
    StructureSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-summary',
                    template: "\n\n\t\t<p>\n\t\t\tShowing <b>{{originSize | numberFormatter}}</b> items\n\t\t</p>\n\t\t<div>\n\t\t\t<p (click)=\"openInfo()\">\n\t\t\t\t<button>i</button>\n\t\t\t\tInfo\n\t\t\t</p>\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSummaryComponent.ctorParameters = function () { return [
        { type: StructureSummaryEnabledArchive },
        { type: SourceQueryService },
        { type: FabricDialogService },
        { type: ChangeDetectorRef }
    ]; };
    return StructureSummaryComponent;
}(SmartComponent));
export { StructureSummaryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL3N1bW1hcnkvc3RydWN0dXJlLnN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHOUU7SUFrQitDLHFEQUFjO0lBTTVELG1DQUFvQiw4QkFBOEQsRUFDdkUsa0JBQXNDLEVBQ3RDLE1BQTJCLEVBQzNCLGlCQUFvQztRQUgvQyxZQUtDLGlCQUFPLFNBQ1A7UUFObUIsb0NBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUN2RSx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU0sR0FBTixNQUFNLENBQXFCO1FBQzNCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFML0MsZUFBUyxHQUFHLGtCQUFrQixDQUFDOztJQVEvQixDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFUQSxJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBWTtZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQS9DRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHlNQVlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBdEJRLDhCQUE4QjtnQkFFOUIsa0JBQWtCO2dCQVJsQixtQkFBbUI7Z0JBRjRDLGlCQUFpQjs7SUE4RHpGLGdDQUFDO0NBQUEsQUFqREQsQ0FrQitDLGNBQWMsR0ErQjVEO1NBL0JZLHlCQUF5Qjs7O0lBRXJDLCtDQUFtQjs7SUFFbkIsOENBQStCOzs7OztJQUVuQixtRUFBc0U7Ozs7O0lBQy9FLHVEQUE4Qzs7Ozs7SUFDOUMsMkNBQW1DOzs7OztJQUNuQyxzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJ5LWVuYWJsZWQuYXJjaGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zb3VyY2Uvc291cmNlLXF1ZXJ5LnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc3VtbWFyeScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8cD5cblx0XHRcdFNob3dpbmcgPGI+e3tvcmlnaW5TaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0PC9wPlxuXHRcdDxkaXY+XG5cdFx0XHQ8cCAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHQ8YnV0dG9uPmk8L2J1dHRvbj5cblx0XHRcdFx0SW5mb1xuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcnlDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3JpZ2luU2l6ZTogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9QYW5lbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUXVlcnlTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RPcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5vcmlnaW5TaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5JbmZvKCkge1xuXHRcdHRoaXMuZGlhbG9nLm9wZW4odGhpcy5pbmZvUGFuZWwpO1xuXHR9XG5cbn1cbiJdfQ==