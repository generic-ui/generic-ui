/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureColumnConfigService } from './structure.column-config.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
var StructureColumnConfigTriggerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigTriggerComponent, _super);
    function StructureColumnConfigTriggerComponent(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        var _this = _super.call(this) || this;
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
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
            _this.changeDetectorRef.detectChanges();
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
    StructureColumnConfigTriggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-trigger',
                    template: "\n\t\t<div #headerDialogContainer\n\t\t\t *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-icon\"\n\t\t\t (click)=\"openConfigDialog()\">\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigTriggerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: StructureCommandService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVksU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdqRztJQVUyRCxpRUFBYztJQVV4RSwrQ0FBb0IsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxnQ0FBa0UsRUFDbEUsNEJBQTBEO1FBSnJFLFlBS0MsaUJBQU8sU0FDUDtRQU5tQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUVyRSxDQUFDOzs7O0lBRUQsd0RBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBaUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdFQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxpRUFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQseURBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBbERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUNBQXFDO29CQUMvQyxRQUFRLEVBQUUsZ0tBTVQ7aUJBQ0Q7Ozs7Z0JBbkIwQixVQUFVO2dCQUErQixpQkFBaUI7Z0JBRzVFLHVCQUF1QjtnQkFJdkIsZ0NBQWdDO2dCQUhoQyw0QkFBNEI7Ozt3Q0FrQm5DLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR3BELEtBQUs7O0lBcUNQLDRDQUFDO0NBQUEsQUFwREQsQ0FVMkQsY0FBYyxHQTBDeEU7U0ExQ1kscUNBQXFDOzs7SUFFakQsc0VBQ2tDOztJQUVsQyx1REFDZ0M7O0lBRWhDLHVEQUFrQzs7Ozs7SUFFdEIsMkRBQThCOzs7OztJQUN2QyxrRUFBNEM7Ozs7O0lBQzVDLHdFQUF3RDs7Ozs7SUFDeEQsaUZBQTBFOzs7OztJQUMxRSw2RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBJbmplY3RvciwgVmlld0NoaWxkLCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy10cmlnZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICNoZWFkZXJEaWFsb2dDb250YWluZXJcblx0XHRcdCAqbmdJZj1cImlzRW5hYmxlZCgpXCJcblx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pY29uXCJcblx0XHRcdCAoY2xpY2spPVwib3BlbkNvbmZpZ0RpYWxvZygpXCI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJEaWFsb2dDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aGVhZGVyRGlhbG9nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvcGVuQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5vcGVuKHRoaXMuaGVhZGVyRGlhbG9nQ29udGFpbmVyLCB0aGlzLmNvbHVtbik7XG5cdH1cblxuXHRjbG9zZUNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaXNFbmFibGVkKCk7XG5cdH1cblxufVxuIl19