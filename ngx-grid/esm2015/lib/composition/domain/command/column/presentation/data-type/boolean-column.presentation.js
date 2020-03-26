var BooleanColumnPresentation_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
let BooleanColumnPresentation = BooleanColumnPresentation_1 = class BooleanColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!BooleanColumnPresentation_1.instance) {
            BooleanColumnPresentation_1.instance = new BooleanColumnPresentation_1();
        }
        return BooleanColumnPresentation_1.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.CHIP,
            CellView.BOLD,
            CellView.CHECKBOX
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.CHECKBOX;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.CENTER;
    }
};
BooleanColumnPresentation.instance = null;
BooleanColumnPresentation = BooleanColumnPresentation_1 = tslib_1.__decorate([
    ValueObject,
    tslib_1.__metadata("design:paramtypes", [])
], BooleanColumnPresentation);
export { BooleanColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0lBSXBDLHlCQUF5Qix1Q0FBekIseUJBQTBCLFNBQVEsa0JBQWtCOzs7O0lBV2hFO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBWEQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLDJCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4QywyQkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTywyQkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxRQUFRO1NBQ2pCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0NBQ0QsQ0FBQTtBQXZCZSxrQ0FBUSxHQUE4QixJQUFJLENBQUM7QUFUOUMseUJBQXlCO0lBRHJDLFdBQVc7O0dBQ0MseUJBQXlCLENBZ0NyQztTQWhDWSx5QkFBeUI7Ozs7OztJQVNyQyxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZU9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBWYWx1ZU9iamVjdFxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIUJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFQsXG5cdFx0XHRDZWxsVmlldy5JVEFMSUMsXG5cdFx0XHRDZWxsVmlldy5DSElQLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LkNIRUNLQk9YXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hFQ0tCT1g7XG5cdH1cblxuXHRnZXREZWZhdWx0QWxpZ24oKTogQ29sdW1uQWxpZ24ge1xuXHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cdH1cbn1cbiJdfQ==