import { GuiRowSelectionMode, GuiRowSelectionType } from '../../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../structure/source/core/api/row-selection';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yb3ctc2VsZWN0aW9uL2d1aS5ncmlkLnJvdy1zZWxlY3Rpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFMUgsTUFBTSxPQUFPLDRCQUE0QjtJQUV4QyxPQUFPLENBQUMsU0FBb0M7UUFFM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0MsSUFBSSxPQUFPLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFFTixJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtJQUVGLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBa0M7UUFFckQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFN0IsUUFBUSxJQUFJLEVBQUU7Z0JBQ2IsS0FBSyxRQUFRO29CQUNaLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxLQUFLLFVBQVU7b0JBQ2QsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7YUFBTTtZQUNOLFFBQVEsSUFBSSxFQUFFO2dCQUViLEtBQUssbUJBQW1CLENBQUMsTUFBTTtvQkFDOUIsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLEtBQUssbUJBQW1CLENBQUMsUUFBUTtvQkFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBRWxDO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1NBQ0Q7SUFFRixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQWtDO1FBRXJELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRTdCLFFBQVEsSUFBSSxFQUFFO2dCQUNiLEtBQUssS0FBSztvQkFDVCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDN0IsS0FBSyxVQUFVO29CQUNkLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNsQztvQkFDQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM3QjtTQUNEO2FBQU07WUFDTixRQUFRLElBQUksRUFBRTtnQkFFYixLQUFLLG1CQUFtQixDQUFDLEdBQUc7b0JBQzNCLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUU3QixLQUFLLG1CQUFtQixDQUFDLFFBQVE7b0JBQ2hDLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUVsQztvQkFDQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM3QjtTQUNEO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93U2VsZWN0aW9uLCBHdWlSb3dTZWxlY3Rpb25Nb2RlLCBHdWlSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24sIFJvd1NlbGVjdGlvbk1vZGUsIFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgR3VpR3JpZFJvd1NlbGVjdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChzZWxlY3Rpb246IGJvb2xlYW4gfCBHdWlSb3dTZWxlY3Rpb24pOiBSb3dTZWxlY3Rpb24ge1xuXG5cdFx0Y29uc3QgYnVpbGRlciA9IG5ldyBSb3dTZWxlY3Rpb24uQnVpbGRlcigpO1xuXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3Rpb24gPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuIGJ1aWxkZXIud2l0aEVuYWJsZWQoc2VsZWN0aW9uKS5idWlsZCgpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChzZWxlY3Rpb24uZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGJ1aWxkZXIud2l0aEVuYWJsZWQoc2VsZWN0aW9uLmVuYWJsZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLm1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBtb2RlID0gdGhpcy5jb252ZXJ0TW9kZShzZWxlY3Rpb24ubW9kZSk7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoTW9kZShtb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi50eXBlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IHRoaXMuY29udmVydFR5cGUoc2VsZWN0aW9uLnR5cGUpO1xuXG5cdFx0XHRcdGJ1aWxkZXIud2l0aFR5cGUodHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBidWlsZGVyLmJ1aWxkKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRNb2RlKG1vZGU6IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvbk1vZGUpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblxuXHRcdGlmICh0eXBlb2YgbW9kZSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ3NpbmdsZSc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0XHRjYXNlICdtdWx0aXBsZSc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlKHR5cGU6IHN0cmluZyB8IEd1aVJvd1NlbGVjdGlvblR5cGUpOiBSb3dTZWxlY3Rpb25UeXBlIHtcblxuXHRcdGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3Jvdyc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuUk9XOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25UeXBlLlJPVztcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==