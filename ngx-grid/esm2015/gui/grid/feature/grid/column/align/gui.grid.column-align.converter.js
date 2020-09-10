/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../domain-api/gui.grid.public-api';
import { ColumnAlign } from '../../../../../../composition/domain/column/column-align';
export class GuiGridColumnAlignConverter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLWFsaWduLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL2NvbHVtbi9hbGlnbi9ndWkuZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRXZGLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXZDLE9BQU8sQ0FBQyxLQUE4QjtRQUVyQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQXFCO1FBRTVDLFFBQVEsS0FBSyxFQUFFO1lBRWQsS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDeEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUUzQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBYTs7Y0FDaEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi1hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChhbGlnbjogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ24pOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRpZiAodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVTdHJpbmcoYWxpZ24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZUVudW0oYWxpZ24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVFbnVtKGFsaWduOiBHdWlDb2x1bW5BbGlnbik6IENvbHVtbkFsaWduIHtcblxuXHRcdHN3aXRjaCAoYWxpZ24pIHtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5SSUdIVDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLkNFTlRFUjpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5MRUZUOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZVN0cmluZyhhbGlnbjogc3RyaW5nKTogQ29sdW1uQWxpZ24ge1xuXHRcdGNvbnN0IGxvd2VyZWRUeXBlID0gYWxpZ24udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFR5cGUpIHtcblxuXHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cblx0XHRcdGNhc2UgJ2NlbnRlcic6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cblx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=