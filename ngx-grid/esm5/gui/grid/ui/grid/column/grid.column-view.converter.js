/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../ui-api/grid.api';
import { CellView } from '../../../../../lib/composition/domain/cell-view';
var GridColumnViewConverter = /** @class */ (function () {
    function GridColumnViewConverter() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convert = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (typeof view === 'string') {
            return this.convertString(view);
        }
        else if (typeof view === 'function') {
            return view;
        }
        else {
            return this.convertEnum(view);
        }
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convertString = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        /** @type {?} */
        var loweredView = view.toLocaleLowerCase();
        switch (loweredView) {
            case 'text':
                return CellView.TEXT;
            case 'chip':
                return CellView.CHIP;
            case 'link':
                return CellView.LINK;
            case 'image':
                return CellView.IMAGE;
            case 'bold':
                return CellView.BOLD;
            case 'italic':
                return CellView.ITALIC;
            case 'checkbox':
                return CellView.CHECKBOX;
            case 'custom':
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convertEnum = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        switch (view) {
            case GuiCellView.TEXT:
                return CellView.TEXT;
            case GuiCellView.CHIP:
                return CellView.CHIP;
            case GuiCellView.LINK:
                return CellView.LINK;
            case GuiCellView.IMAGE:
                return CellView.IMAGE;
            case GuiCellView.BOLD:
                return CellView.BOLD;
            case GuiCellView.ITALIC:
                return CellView.ITALIC;
            case GuiCellView.CHECKBOX:
                return CellView.CHECKBOX;
            case GuiCellView.CUSTOM:
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    };
    return GridColumnViewConverter;
}());
export { GridColumnViewConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUUzRTtJQUFBO0lBaUZBLENBQUM7Ozs7O0lBL0VBLHlDQUFPOzs7O0lBQVAsVUFBUSxJQUErQztRQUV0RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTywrQ0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBWTs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUU1QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sNkNBQVc7Ozs7O0lBQW5CLFVBQW9CLElBQWlCO1FBRXBDLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDckIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDO0lBRUYsOEJBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ2VsbFZpZXcsIFZpZXdUZW1wbGF0ZU1ldGhvZCB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY2VsbC12aWV3JztcblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5WaWV3Q29udmVydGVyIHtcblxuXHRjb252ZXJ0KHZpZXc6IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kKTogQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVNZXRob2Qge1xuXG5cdFx0aWYgKHR5cGVvZiB2aWV3ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyh2aWV3KTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2aWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gdmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0odmlldyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHZpZXc6IHN0cmluZyk6IENlbGxWaWV3IHtcblxuXHRcdGNvbnN0IGxvd2VyZWRWaWV3ID0gdmlldy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVmlldykge1xuXG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cblx0XHRcdGNhc2UgJ2NoaXAnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hJUDtcblxuXHRcdFx0Y2FzZSAnbGluayc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5MSU5LO1xuXG5cdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JTUFHRTtcblxuXHRcdFx0Y2FzZSAnYm9sZCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CT0xEO1xuXG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSVRBTElDO1xuXG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblxuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bSh2aWV3OiBHdWlDZWxsVmlldyk6IENlbGxWaWV3IHtcblxuXHRcdHN3aXRjaCAodmlldykge1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlRFWFQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSElQO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5MSU5LO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LklNQUdFOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSU1BR0U7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJPTEQ7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSVRBTElDO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNIRUNLQk9YOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hFQ0tCT1g7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ1VTVE9NO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0XHR9XG5cdH1cblxufVxuIl19