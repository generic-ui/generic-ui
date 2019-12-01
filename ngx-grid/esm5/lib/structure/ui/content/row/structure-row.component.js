/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { Entity } from '../../../domain/source/entity';
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
                    template: "<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl2RDtJQUFBO0lBd0JBLENBQUM7Ozs7SUFKQSx5Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQXRCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isd1VBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7eUJBR0MsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7OEJBR0wsS0FBSzs7SUFPUCw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbEJZLHFCQUFxQjs7O0lBRWpDLHVDQUNlOztJQUVmLHdDQUN5Qzs7SUFFekMseUNBQ2tCOztJQUVsQiw0Q0FDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9lbnRpdHknO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXJvdycsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBFbnRpdHk7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG59XG4iXX0=