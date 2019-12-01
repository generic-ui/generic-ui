/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureCommandService } from '../../../app/structure/structure-command.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFVbEYsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFLM0MsWUFBb0IsdUJBQWdELEVBQ3pELDRCQUEwRDtRQURqRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3pELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDckUsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGdtQkFBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVhRLHVCQUF1QjtZQUN2Qiw0QkFBNEI7OztzQkFhbkMsS0FBSzs7OztJQUFOLGtEQUN3Qzs7Ozs7SUFFNUIsa0VBQXdEOzs7OztJQUNqRSx1RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL3NvcnQvc29ydC1zdGF0dXMnO1xuXG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItY29sdW1ucycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHR9XG5cblx0dG9nZ2xlU29ydChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS50b2dnbGVTb3J0KGNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHR9XG5cblx0aXNTb3J0QXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydFN0YXR1cy5BU0M7XG5cdH1cblxuXHRpc1NvcnREZXNjKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29sdW1uLmdldFNvcnRTdGF0dXMoKSA9PT0gU29ydFN0YXR1cy5ERVNDO1xuXHR9XG5cblx0b3BlbkNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Uub3BlbigpO1xuXHR9XG5cblx0Y2xvc2VDb25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cbn1cbiJdfQ==