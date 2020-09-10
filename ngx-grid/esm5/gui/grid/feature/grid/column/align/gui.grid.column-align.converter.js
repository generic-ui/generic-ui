/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../domain-api/gui.grid.public-api';
import { ColumnAlign } from '../../../../../../composition/domain/column/column-align';
var GuiGridColumnAlignConverter = /** @class */ (function () {
    function GuiGridColumnAlignConverter() {
    }
    /**
     * @param {?} align
     * @return {?}
     */
    GuiGridColumnAlignConverter.prototype.convert = /**
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
    GuiGridColumnAlignConverter.prototype.convertTypeEnum = /**
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
    GuiGridColumnAlignConverter.prototype.convertTypeString = /**
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
    return GuiGridColumnAlignConverter;
}());
export { GuiGridColumnAlignConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9hbGlnbi9ndWkuZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRXZGO0lBQUE7SUErQ0EsQ0FBQzs7Ozs7SUE3Q0EsNkNBQU87Ozs7SUFBUCxVQUFRLEtBQThCO1FBRXJDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7Ozs7SUFFTyxxREFBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBcUI7UUFFNUMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN4QixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDekIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDOzs7Ozs7SUFFTyx1REFBaUI7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7O1lBQ2hDLFdBQVcsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7UUFFN0MsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztJQUNGLGtDQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tYWxpZ24nO1xuXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbHVtbkFsaWduQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFsaWduOiBzdHJpbmcgfCBHdWlDb2x1bW5BbGlnbik6IENvbHVtbkFsaWduIHtcblxuXHRcdGlmICh0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZVN0cmluZyhhbGlnbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlRW51bShhbGlnbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZUVudW0oYWxpZ246IEd1aUNvbHVtbkFsaWduKTogQ29sdW1uQWxpZ24ge1xuXG5cdFx0c3dpdGNoIChhbGlnbikge1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLlJJR0hUOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cblx0XHRcdGNhc2UgR3VpQ29sdW1uQWxpZ24uQ0VOVEVSOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uQ0VOVEVSO1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLkxFRlQ6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlU3RyaW5nKGFsaWduOiBzdHJpbmcpOiBDb2x1bW5BbGlnbiB7XG5cdFx0Y29uc3QgbG93ZXJlZFR5cGUgPSBhbGlnbi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVHlwZSkge1xuXG5cdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5SSUdIVDtcblxuXHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblxuXHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5MRUZUO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==