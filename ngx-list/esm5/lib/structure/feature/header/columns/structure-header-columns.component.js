/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SortingCommandDispatcher } from '../../../../../structure/sorting/domain-api/sorting.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
var StructureHeaderColumnsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderColumnsComponent, _super);
    function StructureHeaderColumnsComponent(elementRef, injector, changeDetectorRef, compositionId, structureId, sortingCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionId = compositionId;
        _this.structureId = structureId;
        _this.sortingCommandDispatcher = sortingCommandDispatcher;
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
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
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
                    template: "<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc': isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
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
        { type: CompositionId },
        { type: StructureId },
        { type: SortingCommandDispatcher }
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
    StructureHeaderColumnsComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.sortingCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9jb2x1bW5zL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUczRDtJQVNxRCwyREFBYztJQU9sRSx5Q0FBNkIsVUFBc0IsRUFDL0IsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQ3BDLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLHdCQUFrRDtRQUx0RSxZQU1DLGlCQUFPLFNBQ1A7UUFQNEIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFQdEUscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBU3hCLENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQywyQ0FBMkM7UUFDM0MsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsNkNBQTZDO1FBQzdDLFFBQVE7SUFDVCxDQUFDOzs7OztJQUVELG9EQUFVOzs7O0lBQVYsVUFBVyxNQUErQjtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRztJQUNGLENBQUM7Ozs7O0lBRUQsbURBQVM7Ozs7SUFBVCxVQUFVLE1BQStCO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFDekMsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsNkRBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7Z0JBdERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyw0c0JBQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDViw0QkFBNEI7cUJBQzVCO2lCQUNEOzs7O2dCQXhCQSxVQUFVO2dCQUNWLFFBQVE7Z0JBSFIsaUJBQWlCO2dCQWNULGFBQWE7Z0JBQ2IsV0FBVztnQkFGWCx3QkFBd0I7OzswQkFnQi9CLEtBQUs7O0lBNkNQLHNDQUFDO0NBQUEsQUF4REQsQ0FTcUQsY0FBYyxHQStDbEU7U0EvQ1ksK0JBQStCOzs7SUFFM0Msa0RBQ3dDOztJQUV4QywwREFBd0I7Ozs7O0lBRVoscURBQXVDOzs7OztJQUNoRCxtREFBbUM7Ozs7O0lBQ25DLDREQUFxRDs7Ozs7SUFDckQsd0RBQTZDOzs7OztJQUM3QyxzREFBeUM7Ozs7O0lBQ3pDLG1FQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi1hcGkvc29ydGluZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdC8vIFx0XHQub25TZWFyY2hFbmFibGVkKClcblx0XHQvLyBcdFx0LnBpcGUoXG5cdFx0Ly8gXHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdC8vIFx0XHQpXG5cdFx0Ly8gXHRcdC5zdWJzY3JpYmUoKHNlYXJjaGluZzogYm9vbGVhbikgPT4ge1xuXHRcdC8vIFx0XHRcdHRoaXMuZ2xvYmFsU2VhcmNoaW5nID0gc2VhcmNoaW5nO1xuXHRcdC8vIFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdC8vIFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxufVxuIl19