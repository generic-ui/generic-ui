/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiRowSelectionMode, GuiRowSelectionType } from '../../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../structure/source/core/api/row-selection';
export class GuiGridRowSelectionConverter {
    /**
     * @param {?} selection
     * @return {?}
     */
    convert(selection) {
        /** @type {?} */
        const builder = new RowSelection.Builder();
        if (typeof selection === 'boolean') {
            return builder.withEnabled(selection).build();
        }
        else {
            if (selection.enabled !== undefined) {
                builder.withEnabled(selection.enabled);
            }
            if (selection.mode !== undefined) {
                /** @type {?} */
                const mode = this.convertMode(selection.mode);
                builder.withMode(mode);
            }
            if (selection.type !== undefined) {
                /** @type {?} */
                const type = this.convertType(selection.type);
                builder.withType(type);
            }
            return builder.build();
        }
    }
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    convertMode(mode) {
        if (typeof mode === 'string') {
            switch (mode) {
                case 'single':
                    return RowSelectionMode.SINGLE;
                case 'multiple':
                    return RowSelectionMode.MULTIPLE;
                default:
                    return RowSelectionMode.SINGLE;
            }
        }
        else {
            switch (mode) {
                case GuiRowSelectionMode.SINGLE:
                    return RowSelectionMode.SINGLE;
                case GuiRowSelectionMode.MULTIPLE:
                    return RowSelectionMode.MULTIPLE;
                default:
                    break;
            }
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertType(type) {
        if (typeof type === 'string') {
            switch (type) {
                case 'row':
                    return RowSelectionType.ROW;
                case 'checkbox':
                    return RowSelectionType.CHECKBOX;
                default:
                    return RowSelectionType.ROW;
            }
        }
        else {
            switch (type) {
                case GuiRowSelectionType.ROW:
                    return RowSelectionType.ROW;
                case GuiRowSelectionType.CHECKBOX:
                    return RowSelectionType.CHECKBOX;
                default:
                    break;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEgsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTFILE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBRXhDLE9BQU8sQ0FBQyxTQUFvQzs7Y0FFckMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTtRQUUxQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUM7YUFBTTtZQUVOLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTs7c0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBRTdDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFOztzQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFFN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLElBQWtDO1FBRXJELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRTdCLFFBQVEsSUFBSSxFQUFFO2dCQUNiLEtBQUssUUFBUTtvQkFDWixPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFDaEMsS0FBSyxVQUFVO29CQUNkLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNsQztvQkFDQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzthQUNoQztTQUNEO2FBQU07WUFDTixRQUFRLElBQUksRUFBRTtnQkFFYixLQUFLLG1CQUFtQixDQUFDLE1BQU07b0JBQzlCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUVoQyxLQUFLLG1CQUFtQixDQUFDLFFBQVE7b0JBQ2hDLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUVsQztvQkFDQyxNQUFNO2FBQ1A7U0FDRDtJQUVGLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFrQztRQUVyRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUU3QixRQUFRLElBQUksRUFBRTtnQkFDYixLQUFLLEtBQUs7b0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFDbEM7b0JBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDN0I7U0FDRDthQUFNO1lBQ04sUUFBUSxJQUFJLEVBQUU7Z0JBRWIsS0FBSyxtQkFBbUIsQ0FBQyxHQUFHO29CQUMzQixPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFFN0IsS0FBSyxtQkFBbUIsQ0FBQyxRQUFRO29CQUNoQyxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFFbEM7b0JBQ0MsTUFBTTthQUNQO1NBQ0Q7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dTZWxlY3Rpb24sIEd1aVJvd1NlbGVjdGlvbk1vZGUsIEd1aVJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiwgUm93U2VsZWN0aW9uTW9kZSwgUm93U2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvcm93LXNlbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHNlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbik6IFJvd1NlbGVjdGlvbiB7XG5cblx0XHRjb25zdCBidWlsZGVyID0gbmV3IFJvd1NlbGVjdGlvbi5CdWlsZGVyKCk7XG5cblx0XHRpZiAodHlwZW9mIHNlbGVjdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gYnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24pLmJ1aWxkKCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24uZW5hYmxlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24ubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IG1vZGUgPSB0aGlzLmNvbnZlcnRNb2RlKHNlbGVjdGlvbi5tb2RlKTtcblxuXHRcdFx0XHRidWlsZGVyLndpdGhNb2RlKG1vZGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCB0eXBlID0gdGhpcy5jb252ZXJ0VHlwZShzZWxlY3Rpb24udHlwZSk7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoVHlwZSh0eXBlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydE1vZGUobW9kZTogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBtb2RlID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnc2luZ2xlJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cdFx0XHRcdGNhc2UgJ211bHRpcGxlJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlICdyb3cnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25UeXBlLlJPVzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==