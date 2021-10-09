/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureCommandInvoker } from '../../../../../core/api/structure.command-invoker';
import { StructureColumnConfigService } from '../structure.column-config.service';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { StructureColumnMenuConfigArchive } from '../config/structure.column-menu-config.archive';
var StructureColumnConfigTriggerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigTriggerComponent, _super);
    function StructureColumnConfigTriggerComponent(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCommandService = structureCommandService;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.structureColumnConfigService = structureColumnConfigService;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigTriggerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.structureColumnMenuConfigArchive.on(), (/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
        }));
    };
    /**
     * @return {?}
     */
    StructureColumnConfigTriggerComponent.prototype.openConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    };
    /**
     * @return {?}
     */
    StructureColumnConfigTriggerComponent.prototype.closeConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.close();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigTriggerComponent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.config && this.config.isEnabled();
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnConfigTriggerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-config-trigger';
    };
    StructureColumnConfigTriggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-config-trigger]',
                    template: "<div #headerDialogContainer\n\t (click)=\"openConfigDialog()\"\n\t *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-icon-wrapper\">\n\n\t<gui-structure-column-menu-icon [ngClass]=\"'gui-header-menu-icon'\"></gui-structure-column-menu-icon>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigTriggerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: StructureCommandInvoker },
        { type: StructureColumnMenuConfigArchive },
        { type: StructureColumnConfigService }
    ]; };
    StructureColumnConfigTriggerComponent.propDecorators = {
        headerDialogContainer: [{ type: ViewChild, args: ['headerDialogContainer', { static: false },] }],
        column: [{ type: Input }]
    };
    return StructureColumnConfigTriggerComponent;
}(SmartComponent));
export { StructureColumnConfigTriggerComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.headerDialogContainer;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvdHJpZ2dlci9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0ksT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR2xHO0lBTTJELGlFQUFjO0lBVXhFLCtDQUE2QixVQUFzQixFQUMvQixpQkFBb0MsRUFDcEMsdUJBQWdELEVBQ2hELGdDQUFrRSxFQUNsRSw0QkFBMEQ7UUFKOUUsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFONEIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHNDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFFOUUsQ0FBQzs7OztJQUVELHdEQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsRUFBRTs7OztRQUMxQyxVQUFDLE1BQWlDO1lBQ2pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLENBQUMsRUFDRCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGdFQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxpRUFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQseURBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFUywrREFBZTs7OztJQUF6QjtRQUNDLE9BQU8scUNBQXFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBL0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMENBQTBDO29CQUNwRCx3UUFBK0Q7b0JBQy9ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZitELFVBQVU7Z0JBQXhDLGlCQUFpQjtnQkFHMUMsdUJBQXVCO2dCQUl2QixnQ0FBZ0M7Z0JBSGhDLDRCQUE0Qjs7O3dDQWNuQyxTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUdwRCxLQUFLOztJQXNDUCw0Q0FBQztDQUFBLEFBakRELENBTTJELGNBQWMsR0EyQ3hFO1NBM0NZLHFDQUFxQzs7O0lBRWpELHNFQUNrQzs7SUFFbEMsdURBQ2dDOztJQUVoQyx1REFBa0M7Ozs7O0lBRXRCLDJEQUF1Qzs7Ozs7SUFDaEQsa0VBQXFEOzs7OztJQUNyRCx3RUFBaUU7Ozs7O0lBQ2pFLGlGQUFtRjs7Ozs7SUFDbkYsNkVBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctdHJpZ2dlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyRGlhbG9nQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlckRpYWxvZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0b3BlbkNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Uub3Blbih0aGlzLmhlYWRlckRpYWxvZ0NvbnRhaW5lciwgdGhpcy5jb2x1bW4pO1xuXHR9XG5cblx0Y2xvc2VDb25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXRyaWdnZXInO1xuXHR9XG5cbn1cbiJdfQ==