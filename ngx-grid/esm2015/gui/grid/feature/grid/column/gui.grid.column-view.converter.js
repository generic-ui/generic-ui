/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../core/api/gui.grid.public-api';
import { CellView } from '../../../../../composition/core/domain/column/cell-view';
export class GuiGridColumnViewConverter {
    /**
     * @param {?} view
     * @return {?}
     */
    convert(view) {
        if (typeof view === 'string') {
            return this.convertString(view);
        }
        else if (typeof view === 'function') {
            return view;
        }
        else {
            return this.convertEnum(view);
        }
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    convertString(view) {
        /** @type {?} */
        const loweredView = view.toLocaleLowerCase();
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
    }
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    convertEnum(view) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvY29sdW1uL2d1aS5ncmlkLmNvbHVtbi12aWV3LmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBd0IsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFbkYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFdEMsT0FBTyxDQUFDLElBQWlEO1FBRXhELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxJQUFZOztjQUUzQixXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRTVDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssVUFBVTtnQkFDZCxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFFMUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXJCLEtBQUssZ0JBQWdCO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFFaEMsS0FBSyxZQUFZO2dCQUNoQixPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLElBQWlCO1FBRXBDLFFBQVEsSUFBSSxFQUFFO1lBRWIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDckIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNuQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFckIsS0FBSyxXQUFXLENBQUMsY0FBYztnQkFDOUIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBRWhDLEtBQUssV0FBVyxDQUFDLFVBQVU7Z0JBQzFCLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUU1QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlDZWxsVmlldywgVmlld1RlbXBsYXRlRnVuY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB7XG5cblx0Y29udmVydCh2aWV3OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZUZ1bmN0aW9uKTogQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVGdW5jdGlvbiB7XG5cblx0XHRpZiAodHlwZW9mIHZpZXcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHZpZXcpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB2aWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodmlldzogc3RyaW5nKTogQ2VsbFZpZXcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFZpZXcgPSB2aWV3LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRWaWV3KSB7XG5cblx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblxuXHRcdFx0Y2FzZSAnY2hpcCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSElQO1xuXG5cdFx0XHRjYXNlICdsaW5rJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklNQUdFO1xuXG5cdFx0XHRjYXNlICdib2xkJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJPTEQ7XG5cblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ1VTVE9NO1xuXG5cdFx0XHRjYXNlICdiYXInOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlICdwZXJjZW50YWdlX2Jhcic6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjtcblxuXHRcdFx0Y2FzZSAncGVyY2VudGFnZSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHZpZXc6IEd1aUNlbGxWaWV3KTogQ2VsbFZpZXcge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNISVA7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JTUFHRTtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQk9MRDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DVVNUT007XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0U7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=