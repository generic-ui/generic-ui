/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../composition/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SortingCommandInvoker } from '../../../../sorting/domain-api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
export class StructureHeaderColumnsComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} formationCommandDispatcher
     * @param {?} sortingCommandDispatcher
     */
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super();
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
}
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
StructureHeaderColumnsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: CompositionId },
    { type: StructureId },
    { type: FormationCommandInvoker },
    { type: SortingCommandInvoker }
];
StructureHeaderColumnsComponent.propDecorators = {
    columns: [{ type: Input }],
    checkboxSelection: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQVk1RyxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQVVsRSxZQUE2QixVQUFzQixFQUMvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsMEJBQW1ELEVBQ25ELHdCQUErQztRQUNsRSxLQUFLLEVBQUUsQ0FBQztRQVBvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBdUI7UUFWbkUsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBVXhCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBRXpDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7OztZQTlDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsNjBCQUF3RDtnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1YsNEJBQTRCO2lCQUM1QjthQUNEOzs7O1lBcEIrRCxVQUFVO1lBQUUsUUFBUTtZQUFsRCxpQkFBaUI7WUFPMUMsYUFBYTtZQUNiLFdBQVc7WUFDWCx1QkFBdUI7WUFIdkIscUJBQXFCOzs7c0JBaUI1QixLQUFLO2dDQUdMLEtBQUs7Ozs7SUFITixrREFDd0M7O0lBRXhDLDREQUNtQzs7SUFFbkMsMERBQXdCOzs7OztJQUVaLHFEQUF1Qzs7Ozs7SUFDaEQsbURBQW1DOzs7OztJQUNuQyw0REFBcUQ7Ozs7O0lBQ3JELHdEQUE2Qzs7Ozs7SUFDN0Msc0RBQXlDOzs7OztJQUN6QyxxRUFBb0U7Ozs7O0lBQ3BFLG1FQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvcnRpbmcvZG9tYWluLWFwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHRpZiAoY29sdW1uLmlzU29ydEVuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5zb3J0aW5nQ29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU29ydChjb2x1bW4uZ2V0RmllbGRJZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGlzU29ydEFzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc1NvcnREZXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc0dsb2JhbFNvcnRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbFNlYXJjaGluZztcblx0fVxuXG59XG4iXX0=