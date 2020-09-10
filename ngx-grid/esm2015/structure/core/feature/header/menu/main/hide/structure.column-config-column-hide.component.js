/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/domain-api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export class StructureColumnConfigColumnHideComponent {
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
    hideColumn(column) {
        this.compositionCommandService.disableColumn(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    }
}
StructureColumnConfigColumnHideComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-column-hide',
                template: `

		<div class="gui-header-menu-item"
			 (click)="hideColumn(column)">
			Hide Column
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigColumnHideComponent.ctorParameters = () => [
    { type: CompositionCommandInvoker },
    { type: StructureColumnConfigService }
];
StructureColumnConfigColumnHideComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQ2pJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBYXJGLE1BQU0sT0FBTyx3Q0FBd0M7Ozs7O0lBS3BELFlBQW9CLHlCQUFvRCxFQUM3RCw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7O1lBdkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxRQUFRLEVBQUU7Ozs7OztFQU1UO2FBQ0Q7Ozs7WUFiUSx5QkFBeUI7WUFDekIsNEJBQTRCOzs7cUJBZW5DLEtBQUs7Ozs7SUFBTiwwREFDZ0M7Ozs7O0lBRXBCLDZFQUE0RDs7Ozs7SUFDckUsZ0ZBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiXG5cdFx0XHQgKGNsaWNrKT1cImhpZGVDb2x1bW4oY29sdW1uKVwiPlxuXHRcdFx0SGlkZSBDb2x1bW5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKSB7XG5cdH1cblxuXHRoaWRlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxufVxuIl19