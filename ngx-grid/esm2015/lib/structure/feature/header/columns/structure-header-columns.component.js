/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export class StructureHeaderColumnsComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     */
    constructor(elementRef, injector, changeDetectorRef, structureCommandService) {
        super();
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.globalSearching = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 	this.structureSearchReadModelRepository
        // 		.onSearchEnabled()
        // 		.pipe(
        // 			this.takeUntil()
        // 		)
        // 		.subscribe((searching: boolean) => {
        // 			this.globalSearching = searching;
        // 			this.changeDetectorRef.detectChanges();
        // 		});
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.structureCommandService.toggleSort(column.getFieldId());
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
                template: "<div (click)=\"toggleSort(column)\"\n\t *ngFor=\"let column of columns\"\n\t [ngClass]=\"{'gui-header-sortable': column.isSortEnabled()}\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc':  isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
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
    { type: StructureCommandDispatcher }
];
StructureHeaderColumnsComponent.propDecorators = {
    columns: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2hlYWRlci9jb2x1bW5zL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFFTCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQVkzRSxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsY0FBYzs7Ozs7OztJQU9sRSxZQUFvQixVQUFzQixFQUMvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsdUJBQW1EO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBSlcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUw5RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQU94QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLDJDQUEyQztRQUMzQyx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04seUNBQXlDO1FBQ3pDLHVDQUF1QztRQUN2Qyw2Q0FBNkM7UUFDN0MsUUFBUTtJQUNULENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBRXpDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw2c0JBQXdEO2dCQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDViw0QkFBNEI7aUJBQzVCO2FBQ0Q7Ozs7WUF0QkEsVUFBVTtZQUNWLFFBQVE7WUFIUixpQkFBaUI7WUFVVCwwQkFBMEI7OztzQkFpQmpDLEtBQUs7Ozs7SUFBTixrREFDd0M7O0lBRXhDLDBEQUF3Qjs7Ozs7SUFFWixxREFBOEI7Ozs7O0lBQ3ZDLG1EQUEwQjs7Ozs7SUFDMUIsNERBQTRDOzs7OztJQUM1QyxrRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5qZWN0b3IsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1ucycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGdsb2JhbFNlYXJjaGluZyA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBcdHRoaXMuc3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdC8vIFx0XHQub25TZWFyY2hFbmFibGVkKClcblx0XHQvLyBcdFx0LnBpcGUoXG5cdFx0Ly8gXHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdC8vIFx0XHQpXG5cdFx0Ly8gXHRcdC5zdWJzY3JpYmUoKHNlYXJjaGluZzogYm9vbGVhbikgPT4ge1xuXHRcdC8vIFx0XHRcdHRoaXMuZ2xvYmFsU2VhcmNoaW5nID0gc2VhcmNoaW5nO1xuXHRcdC8vIFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdC8vIFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UudG9nZ2xlU29ydChjb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxufVxuIl19