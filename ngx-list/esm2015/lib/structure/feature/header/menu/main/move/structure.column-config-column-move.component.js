/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../../../../composition/domain-api/composition.command-dispatcher';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export class StructureColumnConfigColumnMoveComponent {
    /**
     * @param {?} compositionCommandService
     * @param {?} structureColumnConfigService
     */
    constructor(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveLeft(column) {
        this.compositionCommandService.moveLeft(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    }
    /**
     * @param {?} column
     * @return {?}
     */
    moveRight(column) {
        this.compositionCommandService.moveRight(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnMoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-move',
                template: `
		<div class="gui-header-menu-column-move">
			<div class="gui-header-menu-column-move-item left"
				 (click)="moveLeft(column)">
				<gui-structure-column-menu-arrow-icon [rotateDeg]="-90"></gui-structure-column-menu-arrow-icon>
				Move Left
			</div>

			<div class="gui-header-menu-column-move-item right"
				 (click)="moveRight(column)">
				Move Right
				<gui-structure-column-menu-arrow-icon></gui-structure-column-menu-arrow-icon>
			</div>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnMoveComponent.ctorParameters = () => [
    { type: CompositionCommandDispatcher },
    { type: StructureColumnConfigService }
];
StructureColumnConfigColumnMoveComponent.propDecorators = {
    column: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9tb3ZlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFvQnJGLE1BQU0sT0FBTyx3Q0FBd0M7Ozs7O0lBS3BELFlBQW9CLHlCQUF1RCxFQUNoRSw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUE4QjtRQUNoRSxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQStCO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFuQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7RUFjVDthQUNEOzs7O1lBcEJRLDRCQUE0QjtZQUM1Qiw0QkFBNEI7OztxQkFzQm5DLEtBQUs7Ozs7SUFBTiwwREFDZ0M7Ozs7O0lBRXBCLDZFQUErRDs7Ozs7SUFDeEUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZS1pdGVtIGxlZnRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVMZWZ0KGNvbHVtbilcIj5cblx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbcm90YXRlRGVnXT1cIi05MFwiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHRNb3ZlIExlZnRcblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlLWl0ZW0gcmlnaHRcIlxuXHRcdFx0XHQgKGNsaWNrKT1cIm1vdmVSaWdodChjb2x1bW4pXCI+XG5cdFx0XHRcdE1vdmUgUmlnaHRcblx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj48L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UubW92ZUxlZnQoY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLm1vdmVSaWdodChjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==