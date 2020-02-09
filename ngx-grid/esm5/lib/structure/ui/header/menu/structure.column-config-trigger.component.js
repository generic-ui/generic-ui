/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
                    template: "\n\t\t<div #headerDialogContainer\n\t\t\t *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-icon-wrapper\"\n\t\t\t (click)=\"openConfigDialog()\">\n\t\t\t<span class=\"gui-header-menu-icon\"></span>\n\t\t</div>\n\t"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdqRztJQVcyRCxpRUFBYztJQVV4RSwrQ0FBb0IsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxnQ0FBa0UsRUFDbEUsNEJBQTBEO1FBSnJFLFlBS0MsaUJBQU8sU0FDUDtRQU5tQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsc0NBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUVyRSxDQUFDOzs7O0lBRUQsd0RBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBaUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdFQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxpRUFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQseURBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBbkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUNBQXFDO29CQUMvQyxRQUFRLEVBQUUsNE5BT1Q7aUJBQ0Q7Ozs7Z0JBcEJzQyxVQUFVO2dCQUF4QyxpQkFBaUI7Z0JBR2pCLHVCQUF1QjtnQkFJdkIsZ0NBQWdDO2dCQUhoQyw0QkFBNEI7Ozt3Q0FtQm5DLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR3BELEtBQUs7O0lBcUNQLDRDQUFDO0NBQUEsQUFyREQsQ0FXMkQsY0FBYyxHQTBDeEU7U0ExQ1kscUNBQXFDOzs7SUFFakQsc0VBQ2tDOztJQUVsQyx1REFDZ0M7O0lBRWhDLHVEQUFrQzs7Ozs7SUFFdEIsMkRBQThCOzs7OztJQUN2QyxrRUFBNEM7Ozs7O0lBQzVDLHdFQUF3RDs7Ozs7SUFDeEQsaUZBQTBFOzs7OztJQUMxRSw2RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXRyaWdnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI2hlYWRlckRpYWxvZ0NvbnRhaW5lclxuXHRcdFx0ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWljb24td3JhcHBlclwiXG5cdFx0XHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaWNvblwiPjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlckRpYWxvZ0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJEaWFsb2dDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIsIHRoaXMuY29sdW1uKTtcblx0fVxuXG5cdGNsb3NlQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG4iXX0=