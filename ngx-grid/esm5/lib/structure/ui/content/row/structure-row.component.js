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
                    template: "<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    StructureRowComponent.propDecorators = {
        entity: [{ type: Input }],
        columns: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        searchPhrase: [{ type: Input }]
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
    /** @type {?} */
    StructureRowComponent.prototype.searchPhrase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdoRTtJQUFBO0lBMkJBLENBQUM7Ozs7SUFKQSx5Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbVhBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7eUJBR0MsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7OEJBR0wsS0FBSzsrQkFHTCxLQUFLOztJQU9QLDRCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FyQlkscUJBQXFCOzs7SUFFakMsdUNBQ21COztJQUVuQix3Q0FDeUM7O0lBRXpDLHlDQUNrQjs7SUFFbEIsNENBQ3FCOztJQUVyQiw2Q0FDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcm93Jyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUtcm93LmNvbXBvbmVudC5odG1sYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG59XG4iXX0=