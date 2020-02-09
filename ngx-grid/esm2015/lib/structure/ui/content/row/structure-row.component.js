/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../domain/source/item.entity';
export class StructureRowComponent {
    /**
     * @return {?}
     */
    trackByFn() {
        return 0;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVNoRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBY2pDLFNBQVM7UUFDUixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQXRCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd1VBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7OztxQkFHQyxLQUFLO3NCQUdMLEtBQUs7dUJBR0wsS0FBSzswQkFHTCxLQUFLOzs7O0lBVE4sdUNBQ21COztJQUVuQix3Q0FDeUM7O0lBRXpDLHlDQUNrQjs7SUFFbEIsNENBQ3FCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXJvdycsXG5cdHRlbXBsYXRlVXJsOiBgc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj47XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0dHJhY2tCeUZuKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxufVxuIl19