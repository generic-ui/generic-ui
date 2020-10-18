/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class BooleanColumnPresentation extends ColumnPresentation {
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
        if (!BooleanColumnPresentation.instance) {
            BooleanColumnPresentation.instance = new BooleanColumnPresentation();
        }
        return BooleanColumnPresentation.instance;
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
        return CellView.TEXT;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        if (view.getCellView() === CellView.CHECKBOX) {
            return ColumnAlign.CENTER;
        }
        else {
            return ColumnAlign.LEFT;
        }
    }
}
BooleanColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9ib29sZWFuLWNvbHVtbi5wcmVzZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGtCQUFrQjs7OztJQVdoRTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEMseUJBQXlCLENBQUMsUUFBUSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztTQUNyRTtRQUNELE9BQU8seUJBQXlCLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFRRCxnQkFBZ0I7UUFDZixPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsUUFBUTtTQUNqQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBZ0I7UUFFL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUI7YUFBTTtZQUNOLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUVGLENBQUM7O0FBNUJjLGtDQUFRLEdBQThCLElBQUksQ0FBQzs7Ozs7O0lBQTFELG1DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL3ZpZXcuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24ge1xuXHRcdGlmICghQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0Qm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uKCk7XG5cdFx0fVxuXHRcdHJldHVybiBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkNISVAsXG5cdFx0XHRDZWxsVmlldy5CT0xELFxuXHRcdFx0Q2VsbFZpZXcuQ0hFQ0tCT1hcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKHZpZXc6IFZpZXdFbnRpdHkpOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRpZiAodmlldy5nZXRDZWxsVmlldygpID09PSBDZWxsVmlldy5DSEVDS0JPWCkge1xuXHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==