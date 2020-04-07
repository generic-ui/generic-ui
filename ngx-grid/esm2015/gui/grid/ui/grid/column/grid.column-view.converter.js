/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../ui-api/grid.api';
import { CellView } from '../../../../../lib/composition/domain/column/cell-view';
export class GridColumnViewConverter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUVsRixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxPQUFPLENBQUMsSUFBK0M7UUFFdEQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLElBQVk7O2NBRTNCLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssS0FBSztnQkFDVCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFckIsS0FBSyxnQkFBZ0I7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUVoQyxLQUFLLFlBQVk7Z0JBQ2hCLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUU1QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsSUFBaUI7UUFFcEMsUUFBUSxJQUFJLEVBQUU7WUFFYixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFFMUIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUVyQixLQUFLLFdBQVcsQ0FBQyxjQUFjO2dCQUM5QixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFFaEMsS0FBSyxXQUFXLENBQUMsVUFBVTtnQkFDMUIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aUNlbGxWaWV3LCBWaWV3VGVtcGxhdGVNZXRob2QgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtblZpZXdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodmlldzogc3RyaW5nIHwgR3VpQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVNZXRob2QpOiBDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZCB7XG5cblx0XHRpZiAodHlwZW9mIHZpZXcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHZpZXcpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZpZXcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB2aWV3O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodmlldzogc3RyaW5nKTogQ2VsbFZpZXcge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFZpZXcgPSB2aWV3LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRWaWV3KSB7XG5cblx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblxuXHRcdFx0Y2FzZSAnY2hpcCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSElQO1xuXG5cdFx0XHRjYXNlICdsaW5rJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklNQUdFO1xuXG5cdFx0XHRjYXNlICdib2xkJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJPTEQ7XG5cblx0XHRcdGNhc2UgJ2l0YWxpYyc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ1VTVE9NO1xuXG5cdFx0XHRjYXNlICdiYXInOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlICdwZXJjZW50YWdlX2Jhcic6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjtcblxuXHRcdFx0Y2FzZSAncGVyY2VudGFnZSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHZpZXc6IEd1aUNlbGxWaWV3KTogQ2VsbFZpZXcge1xuXG5cdFx0c3dpdGNoICh2aWV3KSB7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuVEVYVDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hJUDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNISVA7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuTElOSzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkxJTks7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuSU1BR0U6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JTUFHRTtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5CT0xEOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQk9MRDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5JVEFMSUM6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JVEFMSUM7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ0hFQ0tCT1g6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DVVNUT006XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DVVNUT007XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQkFSO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlBFUkNFTlRBR0VfQkFSOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuUEVSQ0VOVEFHRTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0U7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=