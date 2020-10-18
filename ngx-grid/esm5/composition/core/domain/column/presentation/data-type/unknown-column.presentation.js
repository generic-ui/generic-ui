/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
var UnknownColumnPresentation = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownColumnPresentation, _super);
    function UnknownColumnPresentation() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    UnknownColumnPresentation.getInstance = /**
     * @return {?}
     */
    function () {
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getPossibleViews = /**
     * @return {?}
     */
    function () {
        return [
            CellView.TEXT
        ];
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getDefaultView = /**
     * @return {?}
     */
    function () {
        return CellView.TEXT;
    };
    /**
     * @return {?}
     */
    UnknownColumnPresentation.prototype.getDefaultAlign = /**
     * @return {?}
     */
    function () {
        return ColumnAlign.LEFT;
    };
    UnknownColumnPresentation.instance = null;
    return UnknownColumnPresentation;
}(ColumnPresentation));
export { UnknownColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnknownColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS91bmtub3duLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDO0lBQStDLHFEQUFrQjtJQVdoRTtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQVhNLHFDQUFXOzs7SUFBbEI7UUFDQyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFO1lBQ3hDLHlCQUF5QixDQUFDLFFBQVEsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7U0FDckU7UUFDRCxPQUFPLHlCQUF5QixDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBUUQsb0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFsQmMsa0NBQVEsR0FBOEIsSUFBSSxDQUFDO0lBbUIzRCxnQ0FBQztDQUFBLEFBNUJELENBQStDLGtCQUFrQixHQTRCaEU7U0E1QlkseUJBQXlCOzs7Ozs7SUFTckMsbUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFRcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19