/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class UnknownColumnPresentation extends ColumnPresentation {
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
        if (!UnknownColumnPresentation.instance) {
            UnknownColumnPresentation.instance = new UnknownColumnPresentation();
        }
        return UnknownColumnPresentation.instance;
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
}
UnknownColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnknownColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS91bmtub3duLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGtCQUFrQjs7OztJQVdoRTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEMseUJBQXlCLENBQUMsUUFBUSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztTQUNyRTtRQUNELE9BQU8seUJBQXlCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFRRCxnQkFBZ0I7UUFDZixPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7QUFsQmMsa0NBQVEsR0FBOEIsSUFBSSxDQUFDOzs7Ozs7SUFBMUQsbUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gZXh0ZW5kcyBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFVua25vd25Db2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UgPSBuZXcgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uID0gbnVsbDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRQb3NzaWJsZVZpZXdzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENlbGxWaWV3LlRFWFRcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19