/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../feature-api/grid.api';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQXNCLE1BQU0sK0JBQStCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRWxGLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLE9BQU8sQ0FBQyxJQUErQztRQUV0RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsSUFBWTs7Y0FFM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUU1QyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxLQUFLO2dCQUNULE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUVyQixLQUFLLGdCQUFnQjtnQkFDcEIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBRWhDLEtBQUssWUFBWTtnQkFDaEIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFpQjtRQUVwQyxRQUFRLElBQUksRUFBRTtZQUViLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXJCLEtBQUssV0FBVyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUVoQyxLQUFLLFdBQVcsQ0FBQyxVQUFVO2dCQUMxQixPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ2VsbFZpZXcsIFZpZXdUZW1wbGF0ZU1ldGhvZCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL2dyaWQuYXBpJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5WaWV3Q29udmVydGVyIHtcblxuXHRjb252ZXJ0KHZpZXc6IHN0cmluZyB8IEd1aUNlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kKTogQ2VsbFZpZXcgfCBWaWV3VGVtcGxhdGVNZXRob2Qge1xuXG5cdFx0aWYgKHR5cGVvZiB2aWV3ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyh2aWV3KTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2aWV3ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gdmlldztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0odmlldyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHZpZXc6IHN0cmluZyk6IENlbGxWaWV3IHtcblxuXHRcdGNvbnN0IGxvd2VyZWRWaWV3ID0gdmlldy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVmlldykge1xuXG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cblx0XHRcdGNhc2UgJ2NoaXAnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hJUDtcblxuXHRcdFx0Y2FzZSAnbGluayc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5MSU5LO1xuXG5cdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5JTUFHRTtcblxuXHRcdFx0Y2FzZSAnYm9sZCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CT0xEO1xuXG5cdFx0XHRjYXNlICdpdGFsaWMnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSVRBTElDO1xuXG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSEVDS0JPWDtcblxuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNVU1RPTTtcblxuXHRcdFx0Y2FzZSAnYmFyJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJBUjtcblxuXHRcdFx0Y2FzZSAncGVyY2VudGFnZV9iYXInOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVI7XG5cblx0XHRcdGNhc2UgJ3BlcmNlbnRhZ2UnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuUEVSQ0VOVEFHRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bSh2aWV3OiBHdWlDZWxsVmlldyk6IENlbGxWaWV3IHtcblxuXHRcdHN3aXRjaCAodmlldykge1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlRFWFQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNISVA6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DSElQO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkxJTks6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5MSU5LO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LklNQUdFOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSU1BR0U7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQk9MRDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJPTEQ7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuSVRBTElDOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSVRBTElDO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNIRUNLQk9YOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hFQ0tCT1g7XG5cblx0XHRcdGNhc2UgR3VpQ2VsbFZpZXcuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ1VTVE9NO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkJBUjpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkJBUjtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5QRVJDRU5UQUdFX0JBUjpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlBFUkNFTlRBR0VfQkFSO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LlBFUkNFTlRBR0U6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5QRVJDRU5UQUdFO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblx0XHR9XG5cdH1cblxufVxuIl19