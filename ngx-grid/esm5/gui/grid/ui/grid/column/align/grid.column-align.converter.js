/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../ui-api/grid.api';
import { ColumnAlign } from '../../../../../../lib/composition/domain/column/column-align';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9hbGlnbi9ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFFM0Y7SUFBQTtJQStDQSxDQUFDOzs7OztJQTdDQSwwQ0FBTzs7OztJQUFQLFVBQVEsS0FBOEI7UUFFckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7OztJQUVPLGtEQUFlOzs7OztJQUF2QixVQUF3QixLQUFxQjtRQUU1QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3hCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUN6QixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Ozs7OztJQUVPLG9EQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTs7WUFDaEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDO0lBQ0YsK0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtbkFsaWduQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFsaWduOiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbik6IENvbHVtbkFsaWduIHtcblxuXHRcdGlmICh0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZVN0cmluZyhhbGlnbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlRW51bShhbGlnbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZUVudW0oYWxpZ246IEd1aUNvbHVtbkFsaWduKTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0c3dpdGNoIChhbGlnbikge1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLlJJR0hUOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uQ0VOVEVSOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLkxFRlQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlU3RyaW5nKGFsaWduOiBzdHJpbmcpOiBDb2x1bW5BbGlnbiB7XG5cdFx0Y29uc3QgbG93ZXJlZFR5cGUgPSBhbGlnbi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVHlwZSkge1xuXG5cdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblxuXHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblxuXHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==