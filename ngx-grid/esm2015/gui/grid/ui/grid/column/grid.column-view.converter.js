/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiCellView } from '../../../ui-api/grid.api';
import { CellView } from '../../../../../lib/structure/domain/composition/cell-view';
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
            default:
                return CellView.TEXT;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdmlldy5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXZpZXcuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLDBCQUEwQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUVyRixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUVuQyxPQUFPLENBQUMsSUFBK0M7UUFFdEQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLElBQVk7O2NBRTNCLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN0QjtJQUNGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFpQjtRQUVwQyxRQUFRLElBQUksRUFBRTtZQUViLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUUxQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ2VsbFZpZXcsIFZpZXdUZW1wbGF0ZU1ldGhvZCB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL2NvbXBvc2l0aW9uL2NlbGwtdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uVmlld0NvbnZlcnRlciB7XG5cblx0Y29udmVydCh2aWV3OiBzdHJpbmcgfCBHdWlDZWxsVmlldyB8IFZpZXdUZW1wbGF0ZU1ldGhvZCk6IENlbGxWaWV3IHwgVmlld1RlbXBsYXRlTWV0aG9kIHtcblxuXHRcdGlmICh0eXBlb2YgdmlldyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodmlldyk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHZpZXc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHZpZXcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyh2aWV3OiBzdHJpbmcpOiBDZWxsVmlldyB7XG5cblx0XHRjb25zdCBsb3dlcmVkVmlldyA9IHZpZXcudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFZpZXcpIHtcblxuXHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXG5cdFx0XHRjYXNlICdjaGlwJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNISVA7XG5cblx0XHRcdGNhc2UgJ2xpbmsnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuTElOSztcblxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuSU1BR0U7XG5cblx0XHRcdGNhc2UgJ2JvbGQnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQk9MRDtcblxuXHRcdFx0Y2FzZSAnaXRhbGljJzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklUQUxJQztcblxuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hFQ0tCT1g7XG5cblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5DVVNUT007XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0odmlldzogR3VpQ2VsbFZpZXcpOiBDZWxsVmlldyB7XG5cblx0XHRzd2l0Y2ggKHZpZXcpIHtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5URVhUOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuVEVYVDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DSElQOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuQ0hJUDtcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5MSU5LOlxuXHRcdFx0XHRyZXR1cm4gQ2VsbFZpZXcuTElOSztcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5JTUFHRTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklNQUdFO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkJPTEQ6XG5cdFx0XHRcdHJldHVybiBDZWxsVmlldy5CT0xEO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LklUQUxJQzpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LklUQUxJQztcblxuXHRcdFx0Y2FzZSBHdWlDZWxsVmlldy5DSEVDS0JPWDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNIRUNLQk9YO1xuXG5cdFx0XHRjYXNlIEd1aUNlbGxWaWV3LkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIENlbGxWaWV3LlRFWFQ7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==