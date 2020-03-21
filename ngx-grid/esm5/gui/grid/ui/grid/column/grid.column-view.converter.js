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
            case 'bar':
                return CellView.BAR;
            case 'percentage_bar':
                return CellView.PERCENTAGE_BAR;
            case 'percentage':
                return CellView.PERCENTAGE;
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
            case GuiCellView.BAR:
                return CellView.BAR;
            case GuiCellView.PERCENTAGE_BAR:
                return CellView.PERCENTAGE_BAR;
            case GuiCellView.PERCENTAGE:
                return CellView.PERCENTAGE;
            default:
                return CellView.TEXT;
        }
    };
    return GridColumnViewConverter;
}());
export { GridColumnViewConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUUzRTtJQUFBO0lBbUdBLENBQUM7Ozs7O0lBakdBLHlDQUFPOzs7O0lBQVAsVUFBUSxJQUErQztRQUV0RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTywrQ0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBWTs7WUFFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUU1QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxLQUFLO2dCQUNULE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUVyQixLQUFLLGdCQUFnQjtnQkFDcEIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBRWhDLEtBQUssWUFBWTtnQkFDaEIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7Ozs7OztJQUVPLDZDQUFXOzs7OztJQUFuQixVQUFvQixJQUFpQjtRQUVwQyxRQUFRLElBQUksRUFBRTtZQUViLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXJCLEtBQUssV0FBVyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUVoQyxLQUFLLFdBQVcsQ0FBQyxVQUFVO2dCQUMxQixPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQW5HRCxJQW1HQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNlbGxWaWV3LCBWaWV3VGVtcGxhdGVNZXRob2QgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NlbGwtdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB7XG5cblx0Y29udmVydCh2aWV3OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZCk6IENlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kIHtcblxuXHRcdGlmICh0eXBlb2YgdmlldyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodmlldyk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyh2aWV3OiBzdHJpbmcpOiBDZWxsVmlldyB7XG5cblx0XHRjb25zdCBsb3dlcmVkVmlldyA9IHZpZXcudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFZpZXcpIHtcblxuXHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXG5cdFx0XHRjYXNlICdjaGlwJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNISVA7XG5cblx0XHRcdGNhc2UgJ2xpbmsnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuTElOSztcblxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSU1BR0U7XG5cblx0XHRcdGNhc2UgJ2JvbGQnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQk9MRDtcblxuXHRcdFx0Y2FzZSAnaXRhbGljJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklUQUxJQztcblxuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hFQ0tCT1g7XG5cblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DVVNUT007XG5cblx0XHRcdGNhc2UgJ2Jhcic6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CQVI7XG5cblx0XHRcdGNhc2UgJ3BlcmNlbnRhZ2VfYmFyJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSO1xuXG5cdFx0XHRjYXNlICdwZXJjZW50YWdlJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0U7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0odmlldzogR3VpQ2VsbFZpZXcpOiBDZWxsVmlldyB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DSElQOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hJUDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuTElOSztcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklNQUdFO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkJPTEQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CT0xEO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklUQUxJQztcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNVU1RPTTtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5CQVI6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CQVI7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5QRVJDRU5UQUdFOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==