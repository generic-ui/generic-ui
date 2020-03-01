/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../composition/domain/command/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureHeaderColumnsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderColumnsComponent, _super);
    function StructureHeaderColumnsComponent(elementRef, injector, changeDetectorRef, structureCommandService) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCommandService = structureCommandService;
        _this.globalSearching = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // 	this.structureSearchReadModelRepository
        // 		.onSearchEnabled()
        // 		.pipe(
        // 			this.takeUntil()
        // 		)
        // 		.subscribe((searching: boolean) => {
        // 			this.globalSearching = searching;
        // 			this.changeDetectorRef.detectChanges();
        // 		});
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.toggleSort = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.isSortEnabled()) {
            this.structureCommandService.toggleSort(column.getFieldId());
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortAsc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortOrder.ASC;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortDesc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortOrder.DESC;
    };
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isGlobalSortEnabled = /**
     * @return {?}
     */
    function () {
        return this.globalSearching;
    };
    StructureHeaderColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-columns',
                    template: "<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [style.width.px]=\"column.width\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc':  isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        StructureColumnConfigService
                    ]
                }] }
    ];
    /** @nocollapse */
    StructureHeaderColumnsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Injector },
        { type: ChangeDetectorRef },
        { type: StructureCommandService }
    ]; };
    StructureHeaderColumnsComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return StructureHeaderColumnsComponent;
}(SmartComponent));
export { StructureHeaderColumnsComponent };
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.globalSearching;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc5SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzNFO0lBU3FELDJEQUFjO0lBT2xFLHlDQUFvQixVQUFzQixFQUMvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsdUJBQWdEO1FBSDNELFlBSUMsaUJBQU8sU0FDUDtRQUxtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUwzRCxxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFPeEIsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNBLDJDQUEyQztRQUMzQyx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04seUNBQXlDO1FBQ3pDLHVDQUF1QztRQUN2Qyw2Q0FBNkM7UUFDN0MsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBRXpDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDOzs7OztJQUVELG1EQUFTOzs7O0lBQVQsVUFBVSxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDZEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzVCLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMseXNCQUF3RDtvQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1YsNEJBQTRCO3FCQUM1QjtpQkFDRDs7OztnQkFsQitELFVBQVU7Z0JBQUUsUUFBUTtnQkFBbEQsaUJBQWlCO2dCQUcxQyx1QkFBdUI7OzswQkFrQjlCLEtBQUs7O0lBMkNQLHNDQUFDO0NBQUEsQUF0REQsQ0FTcUQsY0FBYyxHQTZDbEU7U0E3Q1ksK0JBQStCOzs7SUFFM0Msa0RBQ3dDOztJQUV4QywwREFBd0I7Ozs7O0lBRVoscURBQThCOzs7OztJQUN2QyxtREFBMEI7Ozs7O0lBQzFCLDREQUE0Qzs7Ozs7SUFDNUMsa0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0Z2xvYmFsU2VhcmNoaW5nID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHQvLyBcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHQvLyBcdFx0Lm9uU2VhcmNoRW5hYmxlZCgpXG5cdC8vIFx0XHQucGlwZShcblx0Ly8gXHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHQvLyBcdFx0KVxuXHQvLyBcdFx0LnN1YnNjcmliZSgoc2VhcmNoaW5nOiBib29sZWFuKSA9PiB7XG5cdC8vIFx0XHRcdHRoaXMuZ2xvYmFsU2VhcmNoaW5nID0gc2VhcmNoaW5nO1xuXHQvLyBcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0Ly8gXHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlU29ydChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHRpZiAoY29sdW1uLmlzU29ydEVuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS50b2dnbGVTb3J0KGNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHRcdH1cblx0fVxuXG5cdGlzU29ydEFzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc1NvcnREZXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc0dsb2JhbFNvcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbFNlYXJjaGluZ1xuXHR9XG5cbn1cbiJdfQ==