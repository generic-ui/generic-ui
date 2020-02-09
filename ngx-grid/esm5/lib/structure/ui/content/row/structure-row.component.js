/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../domain/source/item.entity';
var StructureRowComponent = /** @class */ (function () {
    function StructureRowComponent() {
    }
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    StructureRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-row',
                    template: "<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    StructureRowComponent.propDecorators = {
        entity: [{ type: Input }],
        columns: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }]
    };
    return StructureRowComponent;
}());
export { StructureRowComponent };
if (false) {
    /** @type {?} */
    StructureRowComponent.prototype.entity;
    /** @type {?} */
    StructureRowComponent.prototype.columns;
    /** @type {?} */
    StructureRowComponent.prototype.editMode;
    /** @type {?} */
    StructureRowComponent.prototype.cellEditing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdoRTtJQUFBO0lBd0JBLENBQUM7Ozs7SUFKQSx5Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQXRCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isd1VBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7eUJBR0MsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7OEJBR0wsS0FBSzs7SUFPUCw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbEJZLHFCQUFxQjs7O0lBRWpDLHVDQUNtQjs7SUFFbkIsd0NBQ3lDOztJQUV6Qyx5Q0FDa0I7O0lBRWxCLDRDQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1yb3cnLFxuXHR0ZW1wbGF0ZVVybDogYHN0cnVjdHVyZS1yb3cuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdHRyYWNrQnlGbigpOiBudW1iZXIge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cbn1cbiJdfQ==