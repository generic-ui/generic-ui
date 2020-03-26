var UnknownColumnPresentation_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
let UnknownColumnPresentation = UnknownColumnPresentation_1 = class UnknownColumnPresentation extends ColumnPresentation {
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
        if (!UnknownColumnPresentation_1.instance) {
            UnknownColumnPresentation_1.instance = new UnknownColumnPresentation_1();
        }
        return UnknownColumnPresentation_1.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
};
UnknownColumnPresentation.instance = null;
UnknownColumnPresentation = UnknownColumnPresentation_1 = tslib_1.__decorate([
    ValueObject,
    tslib_1.__metadata("design:paramtypes", [])
], UnknownColumnPresentation);
export { UnknownColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnknownColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3ByZXNlbnRhdGlvbi9kYXRhLXR5cGUvdW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0lBSXBDLHlCQUF5Qix1Q0FBekIseUJBQTBCLFNBQVEsa0JBQWtCOzs7O0lBV2hFO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBWEQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLDJCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUN4QywyQkFBeUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBeUIsRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsT0FBTywyQkFBeUIsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7OztJQVFELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtTQUNiLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0NBQ0QsQ0FBQTtBQW5CZSxrQ0FBUSxHQUE4QixJQUFJLENBQUM7QUFUOUMseUJBQXlCO0lBRHJDLFdBQVc7O0dBQ0MseUJBQXlCLENBNEJyQztTQTVCWSx5QkFBeUI7Ozs7OztJQVNyQyxtQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZU9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBWYWx1ZU9iamVjdFxuZXhwb3J0IGNsYXNzIFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFRcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19