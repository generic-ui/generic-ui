/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureColumnConfigService } from '../config/structure.column-config.service';
import { SortStatus } from '../../../domain/composition/command/sort/sort-status';
export class StructureHeaderColumnsComponent {
    /**
     * @param {?} structureCommandService
     * @param {?} structureColumnConfigService
     */
    constructor(structureCommandService, structureColumnConfigService) {
        this.structureCommandService = structureCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleSort(column) {
        this.structureCommandService.toggleSort(column.getFieldId());
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortAsc(column) {
        return column.getSortStatus() === SortStatus.ASC;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortDesc(column) {
        return column.getSortStatus() === SortStatus.DESC;
    }
    /**
     * @return {?}
     */
    openConfigDialog() {
        this.structureColumnConfigService.open();
    }
    /**
     * @return {?}
     */
    closeConfigDialog() {
        this.structureColumnConfigService.close();
    }
}
StructureHeaderColumnsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-header-columns',
                template: "<div *ngFor=\"let cell of columns\"\n\t [style.width.px]=\"cell.width\"\n\t (click)=\"toggleSort(cell)\"\n\t class=\"gui-header-cell\">\n\n\t<span>\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.viewTemplate;\n\t\t\t\t\t\t\t\t   context: cell.context\">\n\t\t</ng-container>\n\t</span>\n\n\t<div class=\"gui-header-menu\">\n<!--\t\t<div class=\"gui-header-menu-icon\"-->\n<!--\t\t\t (click)=\"openConfigDialog()\">-->\n<!--\t\t</div>-->\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(cell), 'gui-sort-desc':  isSortDesc(cell)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureHeaderColumnsComponent.ctorParameters = () => [
    { type: StructureCommandService },
    { type: StructureColumnConfigService }
];
StructureHeaderColumnsComponent.propDecorators = {
    columns: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFVbEYsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFLM0MsWUFBb0IsdUJBQWdELEVBQ3pELDRCQUEwRDtRQURqRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3pELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDckUsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGdtQkFBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVhRLHVCQUF1QjtZQUN2Qiw0QkFBNEI7OztzQkFhbkMsS0FBSzs7OztJQUFOLGtEQUN3Qzs7Ozs7SUFFNUIsa0VBQXdEOzs7OztJQUNqRSx1RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvc29ydC9zb3J0LXN0YXR1cyc7XG5cblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0U3RhdHVzLkFTQztcblx0fVxuXG5cdGlzU29ydERlc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0U3RhdHVzLkRFU0M7XG5cdH1cblxuXHRvcGVuQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5vcGVuKCk7XG5cdH1cblxuXHRjbG9zZUNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxufVxuIl19