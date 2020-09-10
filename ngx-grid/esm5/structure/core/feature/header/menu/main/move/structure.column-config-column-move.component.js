/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/domain-api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
var StructureColumnConfigColumnMoveComponent = /** @class */ (function () {
    function StructureColumnConfigColumnMoveComponent(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveLeft = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.moveLeft(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnMoveComponent.prototype.moveRight = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.moveRight(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnMoveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-move',
                    template: "\n\t\t<div class=\"gui-header-menu-column-move\">\n\t\t\t<div class=\"gui-header-menu-column-move-item left\"\n\t\t\t\t (click)=\"moveLeft(column)\">\n\t\t\t\t<gui-structure-column-menu-arrow-icon [rotateDeg]=\"-90\"></gui-structure-column-menu-arrow-icon>\n\t\t\t\tMove Left\n\t\t\t</div>\n\n\t\t\t<div class=\"gui-header-menu-column-move-item right\"\n\t\t\t\t (click)=\"moveRight(column)\">\n\t\t\t\tMove Right\n\t\t\t\t<gui-structure-column-menu-arrow-icon></gui-structure-column-menu-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnMoveComponent.ctorParameters = function () { return [
        { type: CompositionCommandInvoker },
        { type: StructureColumnConfigService }
    ]; };
    StructureColumnConfigColumnMoveComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureColumnConfigColumnMoveComponent;
}());
export { StructureColumnConfigColumnMoveComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnMoveComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnMoveComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQ2pJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJGO0lBdUJDLGtEQUFvQix5QkFBb0QsRUFDN0QsNEJBQTBEO1FBRGpELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDN0QsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUNyRSxDQUFDOzs7OztJQUVELDJEQUFROzs7O0lBQVIsVUFBUyxNQUErQjtRQUN2QyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsNERBQVM7Ozs7SUFBVCxVQUFVLE1BQStCO1FBQ3hDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUNBQXlDO29CQUNuRCxRQUFRLEVBQUUsb2hCQWNUO2lCQUNEOzs7O2dCQXBCUSx5QkFBeUI7Z0JBQ3pCLDRCQUE0Qjs7O3lCQXNCbkMsS0FBSzs7SUFpQlAsK0NBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQW5CWSx3Q0FBd0M7OztJQUVwRCwwREFDZ0M7Ozs7O0lBRXBCLDZFQUE0RDs7Ozs7SUFDckUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIGxlZnRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVMZWZ0KGNvbHVtbilcIj5cblx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbcm90YXRlRGVnXT1cIi05MFwiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHRNb3ZlIExlZnRcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlLWl0ZW0gcmlnaHRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVSaWdodChjb2x1bW4pXCI+XG5cdFx0XHRcdE1vdmUgUmlnaHRcblx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj48L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UubW92ZUxlZnQoY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVSaWdodChjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==