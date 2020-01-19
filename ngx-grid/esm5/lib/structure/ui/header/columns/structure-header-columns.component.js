/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation, Injector } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortStatus } from '../../../domain/composition/command/column/sort/sort-status';
var StructureHeaderColumnsComponent = /** @class */ (function () {
    function StructureHeaderColumnsComponent(elementRef, injector, structureCommandService) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.structureCommandService = structureCommandService;
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
        this.structureCommandService.toggleSort(column.getFieldId());
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
        return column.getSortStatus() === SortStatus.ASC;
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
        return column.getSortStatus() === SortStatus.DESC;
    };
    StructureHeaderColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-columns',
                    template: "<div *ngFor=\"let column of columns\"\n\t [style.width.px]=\"column.width\"\n\t (click)=\"toggleSort(column)\"\n\t class=\"gui-header-cell\">\n\n\t<div class=\"gui-header-title\">\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t   context: column.context\">\n\t\t</ng-container>\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(column), 'gui-sort-desc':  isSortDesc(column)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-header-menu\">\n\t\t<gui-structure-column-config-trigger\n\t\t\t[column]=\"column\">\n\t\t</gui-structure-column-config-trigger>\n\t</div>\n</div>\n",
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
        { type: StructureCommandService }
    ]; };
    StructureHeaderColumnsComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return StructureHeaderColumnsComponent;
}());
export { StructureHeaderColumnsComponent };
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
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
    StructureHeaderColumnsComponent.prototype.structureCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUd6RjtJQWNDLHlDQUFvQixVQUFzQixFQUMvQixRQUFrQixFQUNsQix1QkFBZ0Q7UUFGdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxvREFBVTs7OztJQUFWLFVBQVcsTUFBK0I7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELG1EQUFTOzs7O0lBQVQsVUFBVSxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsb0RBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7Z0JBN0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyx1b0JBQXdEO29CQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDViw0QkFBNEI7cUJBQzVCO2lCQUNEOzs7O2dCQWhCNEMsVUFBVTtnQkFBdUMsUUFBUTtnQkFHN0YsdUJBQXVCOzs7MEJBZ0I5QixLQUFLOztJQW9CUCxzQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBdEJZLCtCQUErQjs7O0lBRTNDLGtEQUN3Qzs7Ozs7SUFFNUIscURBQThCOzs7OztJQUN2QyxtREFBMEI7Ozs7O0lBQzFCLGtFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1zdGF0dXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UpIHtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UudG9nZ2xlU29ydChjb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0fVxuXG5cdGlzU29ydEFzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRTdGF0dXMuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRTdGF0dXMuREVTQztcblx0fVxuXG59XG4iXX0=