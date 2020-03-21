/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../ui-api/grid.api';
import { ColumnAlign } from '../../../../../../lib/composition/domain/column-align';
var GridColumnAlignConverter = /** @class */ (function () {
    function GridColumnAlignConverter() {
    }
    /**
     * @param {?} align
     * @return {?}
     */
    GridColumnAlignConverter.prototype.convert = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        if (typeof align === 'string') {
            return this.convertTypeString(align);
        }
        else {
            return this.convertTypeEnum(align);
        }
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    GridColumnAlignConverter.prototype.convertTypeEnum = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
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
    };
    /**
     * @private
     * @param {?} align
     * @return {?}
     */
    GridColumnAlignConverter.prototype.convertTypeString = /**
     * @private
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var loweredType = align.toLocaleLowerCase();
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
    };
    return GridColumnAlignConverter;
}());
export { GridColumnAlignConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9hbGlnbi9ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFcEY7SUFBQTtJQStDQSxDQUFDOzs7OztJQTdDQSwwQ0FBTzs7OztJQUFQLFVBQVEsS0FBOEI7UUFFckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7OztJQUVPLGtEQUFlOzs7OztJQUF2QixVQUF3QixLQUFxQjtRQUU1QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3hCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN6QixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7OztJQUVPLG9EQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTs7WUFDaEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDO0lBQ0YsK0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi1hbGlnbic7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uQWxpZ25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoYWxpZ246IHN0cmluZyB8IEd1aUNvbHVtbkFsaWduKTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0aWYgKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlU3RyaW5nKGFsaWduKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVFbnVtKGFsaWduKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlRW51bShhbGlnbjogR3VpQ29sdW1uQWxpZ24pOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uUklHSFQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5DRU5URVI6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uTEVGVDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVTdHJpbmcoYWxpZ246IHN0cmluZyk6IENvbHVtbkFsaWduIHtcblx0XHRjb25zdCBsb3dlcmVkVHlwZSA9IGFsaWduLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUeXBlKSB7XG5cblx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXG5cdFx0XHRjYXNlICdjZW50ZXInOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXG5cdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXHRcdH1cblx0fVxufVxuIl19