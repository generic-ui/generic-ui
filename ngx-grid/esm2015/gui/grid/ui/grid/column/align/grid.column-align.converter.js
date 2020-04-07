/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiColumnAlign } from '../../../../ui-api/grid.api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tYWxpZ24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC91aS9ncmlkL2NvbHVtbi9hbGlnbi9ncmlkLmNvbHVtbi1hbGlnbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFFM0YsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFcEMsT0FBTyxDQUFDLEtBQThCO1FBRXJDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsS0FBcUI7UUFFNUMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN4QixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDekIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDOzs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxLQUFhOztjQUNoQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1FBRTdDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssT0FBTztnQkFDWCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUUzQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENvbHVtbkFsaWduIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWFsaWduJztcblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5BbGlnbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChhbGlnbjogc3RyaW5nIHwgR3VpQ29sdW1uQWxpZ24pOiBDb2x1bW5BbGlnbiB7XG5cblx0XHRpZiAodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVTdHJpbmcoYWxpZ24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZUVudW0oYWxpZ24pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVFbnVtKGFsaWduOiBHdWlDb2x1bW5BbGlnbik6IENvbHVtbkFsaWduIHtcblxuXHRcdHN3aXRjaCAoYWxpZ24pIHtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5SSUdIVDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXG5cdFx0XHRjYXNlIEd1aUNvbHVtbkFsaWduLkNFTlRFUjpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkNFTlRFUjtcblxuXHRcdFx0Y2FzZSBHdWlDb2x1bW5BbGlnbi5MRUZUOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZVN0cmluZyhhbGlnbjogc3RyaW5nKTogQ29sdW1uQWxpZ24ge1xuXHRcdGNvbnN0IGxvd2VyZWRUeXBlID0gYWxpZ24udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFR5cGUpIHtcblxuXHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uUklHSFQ7XG5cblx0XHRcdGNhc2UgJ2NlbnRlcic6XG5cdFx0XHRcdHJldHVybiBDb2x1bW5BbGlnbi5DRU5URVI7XG5cblx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENvbHVtbkFsaWduLkxFRlQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=