/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../core/api/gui.grid.public-api';
import { CellView } from '../../../../../composition/core/domain/column/cell-view';
var GuiGridColumnViewConverter = /** @class */ (function () {
    function GuiGridColumnViewConverter() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    GuiGridColumnViewConverter.prototype.convert = /**
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
    GuiGridColumnViewConverter.prototype.convertString = /**
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
    GuiGridColumnViewConverter.prototype.convertEnum = /**
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
    return GuiGridColumnViewConverter;
}());
export { GuiGridColumnViewConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sdW1uL2d1aS5ncmlkLmNvbHVtbi12aWV3LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBd0IsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFbkY7SUFBQTtJQW1HQSxDQUFDOzs7OztJQWpHQSw0Q0FBTzs7OztJQUFQLFVBQVEsSUFBaUQ7UUFFeEQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0RBQWE7Ozs7O0lBQXJCLFVBQXNCLElBQVk7O1lBRTNCLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssS0FBSztnQkFDVCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFckIsS0FBSyxnQkFBZ0I7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUVoQyxLQUFLLFlBQVk7Z0JBQ2hCLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUU1QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7Ozs7SUFFTyxnREFBVzs7Ozs7SUFBbkIsVUFBb0IsSUFBaUI7UUFFcEMsUUFBUSxJQUFJLEVBQUU7WUFFYixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFFMUIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUVyQixLQUFLLFdBQVcsQ0FBQyxjQUFjO2dCQUM5QixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFFaEMsS0FBSyxXQUFXLENBQUMsVUFBVTtnQkFDMUIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7SUFFRixpQ0FBQztBQUFELENBQUMsQUFuR0QsSUFtR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDZWxsVmlldywgVmlld1RlbXBsYXRlRnVuY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB7XG5cblx0Y29udmVydCh2aWV3OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uKTogQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbiB7XG5cblx0XHRpZiAodHlwZW9mIHZpZXcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHZpZXcpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB2aWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodmlldzogc3RyaW5nKTogQ2VsbFZpZXcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFZpZXcgPSB2aWV3LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRWaWV3KSB7XG5cblx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblxuXHRcdFx0Y2FzZSAnY2hpcCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSElQO1xuXG5cdFx0XHRjYXNlICdsaW5rJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklNQUdFO1xuXG5cdFx0XHRjYXNlICdib2xkJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJPTEQ7XG5cblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ1VTVE9NO1xuXG5cdFx0XHRjYXNlICdiYXInOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlICdwZXJjZW50YWdlX2Jhcic6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjtcblxuXHRcdFx0Y2FzZSAncGVyY2VudGFnZSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHZpZXc6IEd1aUNlbGxWaWV3KTogQ2VsbFZpZXcge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNISVA7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JTUFHRTtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQk9MRDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DVVNUT007XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0U7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=