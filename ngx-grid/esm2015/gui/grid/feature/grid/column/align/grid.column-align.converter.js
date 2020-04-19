/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../feature-api/grid.api';
import { ColumnAlign } from '../../../../../../lib/composition/domain/column/column-align';
export class GridColumnAlignConverter {
    /**
     * @param {?} align
     * @return {?}
     */
    convert(align) {
        if (typeof align === 'string') {
            return this.convertTypeString(align);
        }
        else {
            return this.convertTypeEnum(align);
        }
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    convertTypeEnum(align) {
        switch (align) {
            case GuiColumnAlign.RIGHT:
                return ColumnAlign.RIGHT;
            case GuiColumnAlign.CENTER:
                return ColumnAlign.CENTER;
            case GuiColumnAlign.LEFT:
                return ColumnAlign.LEFT;
            default:
                return ColumnAlign.LEFT;
        }
    }
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    convertTypeString(align) {
        /** @type {?} */
        const loweredType = align.toLocaleLowerCase();
        switch (loweredType) {
            case 'right':
                return ColumnAlign.RIGHT;
            case 'center':
                return ColumnAlign.CENTER;
            case 'left':
                return ColumnAlign.LEFT;
            default:
                return ColumnAlign.LEFT;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sdW1uL2FsaWduL2dyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUUzRixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVwQyxPQUFPLENBQUMsS0FBOEI7UUFFckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFxQjtRQUU1QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3hCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN6QixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLEtBQWE7O2NBQ2hDLFdBQVcsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7UUFFN0MsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi1hbGlnbic7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWxpZ246IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduKTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0aWYgKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlU3RyaW5nKGFsaWduKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVFbnVtKGFsaWduKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlRW51bShhbGlnbjogR3VpQ29sdW1uQWxpZ24pOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uUklHSFQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5DRU5URVI6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uTEVGVDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVTdHJpbmcoYWxpZ246IHN0cmluZyk6IENvbHVtbkFsaWduIHtcblx0XHRjb25zdCBsb3dlcmVkVHlwZSA9IGFsaWduLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUeXBlKSB7XG5cblx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXG5cdFx0XHRjYXNlICdjZW50ZXInOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXG5cdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxufVxuIl19