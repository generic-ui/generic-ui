import { GuiRowSelectionMode, GuiRowSelectionType } from '../../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../structure/formation/core/api/row-selected/row-selection';
export class GuiGridRowSelectionConverter {
    convert(selection) {
        const builder = new RowSelection.Builder();
        if (typeof selection === 'boolean') {
            return builder.withEnabled(selection).build();
        }
        else {
            if (selection.enabled !== undefined) {
                builder.withEnabled(selection.enabled);
            }
            if (selection.mode !== undefined) {
                const mode = this.convertMode(selection.mode);
                builder.withMode(mode);
            }
            if (selection.type !== undefined) {
                const type = this.convertType(selection.type);
                builder.withType(type);
            }
            return builder.build();
        }
    }
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
                    return RowSelectionMode.SINGLE;
            }
        }
    }
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
                    return RowSelectionType.ROW;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFFMUksTUFBTSxPQUFPLDRCQUE0QjtJQUV4QyxPQUFPLENBQUMsU0FBb0M7UUFFM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0MsSUFBSSxPQUFPLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFFTixJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtJQUVGLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBa0M7UUFFckQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFN0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ2IsS0FBSyxRQUFRO29CQUNaLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxLQUFLLFVBQVU7b0JBQ2QsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7YUFBTTtZQUNOLFFBQVEsSUFBSSxFQUFFO2dCQUViLEtBQUssbUJBQW1CLENBQUMsTUFBTTtvQkFDOUIsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLEtBQUssbUJBQW1CLENBQUMsUUFBUTtvQkFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBRWxDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7SUFFRixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQWtDO1FBRXJELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRTdCLFFBQVEsSUFBSSxFQUFFO2dCQUNiLEtBQUssS0FBSztvQkFDVCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDN0IsS0FBSyxVQUFVO29CQUNkLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNsQztvQkFDQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM3QjtTQUNEO2FBQU07WUFDTixRQUFRLElBQUksRUFBRTtnQkFFYixLQUFLLG1CQUFtQixDQUFDLEdBQUc7b0JBQzNCLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUU3QixLQUFLLG1CQUFtQixDQUFDLFFBQVE7b0JBQ2hDLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUVsQztvQkFDQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM3QjtTQUNEO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93U2VsZWN0aW9uLCBHdWlSb3dTZWxlY3Rpb25Nb2RlLCBHdWlSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24sIFJvd1NlbGVjdGlvbk1vZGUsIFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2NvcmUvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRSb3dTZWxlY3Rpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoc2VsZWN0aW9uOiBib29sZWFuIHwgR3VpUm93U2VsZWN0aW9uKTogUm93U2VsZWN0aW9uIHtcblxuXHRcdGNvbnN0IGJ1aWxkZXIgPSBuZXcgUm93U2VsZWN0aW9uLkJ1aWxkZXIoKTtcblxuXHRcdGlmICh0eXBlb2Ygc2VsZWN0aW9uID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiBidWlsZGVyLndpdGhFbmFibGVkKHNlbGVjdGlvbikuYnVpbGQoKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRidWlsZGVyLndpdGhFbmFibGVkKHNlbGVjdGlvbi5lbmFibGVkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5tb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3QgbW9kZSA9IHRoaXMuY29udmVydE1vZGUoc2VsZWN0aW9uLm1vZGUpO1xuXG5cdFx0XHRcdGJ1aWxkZXIud2l0aE1vZGUobW9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24udHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSB0aGlzLmNvbnZlcnRUeXBlKHNlbGVjdGlvbi50eXBlKTtcblxuXHRcdFx0XHRidWlsZGVyLndpdGhUeXBlKHR5cGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnVpbGRlci5idWlsZCgpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0TW9kZShtb2RlOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25Nb2RlKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cblx0XHRpZiAodHlwZW9mIG1vZGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdzaW5nbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdFx0Y2FzZSAnbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlICdyb3cnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25UeXBlLlJPVzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLkNIRUNLQk9YO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=