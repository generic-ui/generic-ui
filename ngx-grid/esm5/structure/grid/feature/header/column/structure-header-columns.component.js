/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SortingCommandInvoker } from '../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
var StructureHeaderColumnsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderColumnsComponent, _super);
    function StructureHeaderColumnsComponent(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.compositionId = compositionId;
        _this.structureId = structureId;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.sortingCommandDispatcher = sortingCommandDispatcher;
        _this.checkboxSelection = false;
        _this.globalSearching = false;
        return _this;
    }
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
                    template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox\">\n\t<gui-select-all></gui-select-all>\n</div>\n\n<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc': isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
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
        { type: FormationCommandInvoker },
        { type: SortingCommandInvoker }
    ]; };
    StructureHeaderColumnsComponent.propDecorators = {
        columns: [{ type: Input }],
        checkboxSelection: [{ type: Input }]
    };
    return StructureHeaderColumnsComponent;
}(SmartComponent));
export { StructureHeaderColumnsComponent };
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.checkboxSelection;
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
    StructureHeaderColumnsComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.sortingCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUcxRztJQVNxRCwyREFBYztJQVVsRSx5Q0FBNkIsVUFBc0IsRUFDL0IsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQ3BDLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLDBCQUFtRCxFQUNuRCx3QkFBK0M7UUFObkUsWUFPQyxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN4QjtRQVI0QixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUF5QjtRQUNuRCw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQXVCO1FBVm5FLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUVuQyxxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFVeEIsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFFekMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEc7SUFDRixDQUFDOzs7OztJQUVELG1EQUFTOzs7O0lBQVQsVUFBVSxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDZEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7O2dCQTlDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsNjBCQUF3RDtvQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1YsNEJBQTRCO3FCQUM1QjtpQkFDRDs7OztnQkFwQitELFVBQVU7Z0JBQUUsUUFBUTtnQkFBbEQsaUJBQWlCO2dCQU8xQyxhQUFhO2dCQUNiLFdBQVc7Z0JBQ1gsdUJBQXVCO2dCQUh2QixxQkFBcUI7OzswQkFpQjVCLEtBQUs7b0NBR0wsS0FBSzs7SUFrQ1Asc0NBQUM7Q0FBQSxBQWhERCxDQVNxRCxjQUFjLEdBdUNsRTtTQXZDWSwrQkFBK0I7OztJQUUzQyxrREFDd0M7O0lBRXhDLDREQUNtQzs7SUFFbkMsMERBQXdCOzs7OztJQUVaLHFEQUF1Qzs7Ozs7SUFDaEQsbURBQW1DOzs7OztJQUNuQyw0REFBcUQ7Ozs7O0lBQ3JELHdEQUE2Qzs7Ozs7SUFDN0Msc0RBQXlDOzs7OztJQUN6QyxxRUFBb0U7Ozs7O0lBQ3BFLG1FQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdGlmIChjb2x1bW4uaXNTb3J0RW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci50b2dnbGVTb3J0KGNvbHVtbi5nZXRGaWVsZElkKCksIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3J0QXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzU29ydERlc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuREVTQztcblx0fVxuXG5cdGlzR2xvYmFsU29ydEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsU2VhcmNoaW5nO1xuXHR9XG5cbn1cbiJdfQ==