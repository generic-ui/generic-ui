/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class StringColumnPresentation extends ColumnPresentation {
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
        if (!StringColumnPresentation.instance) {
            StringColumnPresentation.instance = new StringColumnPresentation();
        }
        return StringColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
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
StringColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9zdHJpbmctY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCOzs7O0lBVy9EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBWEQsTUFBTSxDQUFDLFdBQVc7UUFDakIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtZQUN2Qyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1NBQ25FO1FBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQVFELGdCQUFnQjtRQUNmLE9BQU87WUFDTixRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxNQUFNO1lBQ2YsUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsS0FBSztZQUNkLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLElBQUk7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7QUF2QmMsaUNBQVEsR0FBNkIsSUFBSSxDQUFDOzs7Ozs7SUFBekQsa0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiBleHRlbmRzIENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0c3RhdGljIGdldEluc3RhbmNlKCk6IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiB7XG5cdFx0aWYgKCFTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24uaW5zdGFuY2UpIHtcblx0XHRcdFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSA9IG5ldyBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24oKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdHJpbmdDb2x1bW5QcmVzZW50YXRpb24gPSBudWxsO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFBvc3NpYmxlVmlld3MoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Q2VsbFZpZXcuVEVYVCxcblx0XHRcdENlbGxWaWV3LklUQUxJQyxcblx0XHRcdENlbGxWaWV3LkJPTEQsXG5cdFx0XHRDZWxsVmlldy5JTUFHRSxcblx0XHRcdENlbGxWaWV3LkxJTkssXG5cdFx0XHRDZWxsVmlldy5DSElQXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0fVxuXG5cdGdldERlZmF1bHRBbGlnbigpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdH1cbn1cbiJdfQ==