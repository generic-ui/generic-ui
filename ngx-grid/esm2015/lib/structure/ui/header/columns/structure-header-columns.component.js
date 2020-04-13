/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandDispatcher } from '../../../ui-api/structure.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFZM0UsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGNBQWM7Ozs7Ozs7SUFPbEUsWUFBb0IsVUFBc0IsRUFDL0IsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQ3BDLHVCQUFtRDtRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQUpXLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFMOUQsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFPeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCwyQ0FBMkM7UUFDM0MsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLHlDQUF5QztRQUN6Qyx1Q0FBdUM7UUFDdkMsNkNBQTZDO1FBQzdDLFFBQVE7SUFDVCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUErQjtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7OztZQXBERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsNnNCQUF3RDtnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1YsNEJBQTRCO2lCQUM1QjthQUNEOzs7O1lBdEJBLFVBQVU7WUFDVixRQUFRO1lBSFIsaUJBQWlCO1lBVVQsMEJBQTBCOzs7c0JBaUJqQyxLQUFLOzs7O0lBQU4sa0RBQ3dDOztJQUV4QywwREFBd0I7Ozs7O0lBRVoscURBQThCOzs7OztJQUN2QyxtREFBMEI7Ozs7O0lBQzFCLDREQUE0Qzs7Ozs7SUFDNUMsa0VBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEluamVjdG9yLFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gXHR0aGlzLnN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHQvLyBcdFx0Lm9uU2VhcmNoRW5hYmxlZCgpXG5cdFx0Ly8gXHRcdC5waXBlKFxuXHRcdC8vIFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHQvLyBcdFx0KVxuXHRcdC8vIFx0XHQuc3Vic2NyaWJlKChzZWFyY2hpbmc6IGJvb2xlYW4pID0+IHtcblx0XHQvLyBcdFx0XHR0aGlzLmdsb2JhbFNlYXJjaGluZyA9IHNlYXJjaGluZztcblx0XHQvLyBcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHQvLyBcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdGlmIChjb2x1bW4uaXNTb3J0RW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdFx0fVxuXHR9XG5cblx0aXNTb3J0QXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzU29ydERlc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuREVTQztcblx0fVxuXG5cdGlzR2xvYmFsU29ydEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsU2VhcmNoaW5nO1xuXHR9XG5cbn1cbiJdfQ==