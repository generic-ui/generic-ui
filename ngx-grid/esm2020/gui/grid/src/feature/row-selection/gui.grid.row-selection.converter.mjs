import { GuiRowSelectionMode, GuiRowSelectionType } from '../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
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
            if (selection.selectedRowIndexes !== undefined) {
                builder.withSelectedRowIndexes(selection.selectedRowIndexes);
            }
            if (selection.selectedRowIds !== undefined) {
                builder.withSelectedRowIds(selection.selectedRowIds);
            }
            if (selection.mode !== undefined) {
                const mode = this.convertMode(selection.mode);
                builder.withMode(mode);
            }
            if (selection.type !== undefined) {
                const type = this.convertType(selection.type);
                builder.withType(type);
            }
            if (selection.matcher !== undefined) {
                const matcher = this.convertMatcher(selection.matcher);
                builder.withMatcher(matcher);
            }
            return builder.build();
        }
    }
    convertMode(mode) {
        if (typeof mode === 'string') {
            switch (mode.toLowerCase()) {
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
            switch (type.toLowerCase()) {
                case 'row':
                    return RowSelectionType.ROW;
                case 'checkbox':
                    return RowSelectionType.CHECKBOX;
                case 'radio':
                    return RowSelectionType.RADIO;
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
                case GuiRowSelectionType.RADIO:
                    return RowSelectionType.RADIO;
                default:
                    return RowSelectionType.ROW;
            }
        }
    }
    convertMatcher(matcher) {
        if (typeof matcher === 'string') {
            return (item) => item[matcher];
        }
        else {
            return matcher;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL3NyYy9mZWF0dXJlL3Jvdy1zZWxlY3Rpb24vZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE2QyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUU5SSxNQUFNLE9BQU8sNEJBQTRCO0lBRXhDLE9BQU8sQ0FBQyxTQUFvQztRQUUzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUzQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUM7YUFBTTtZQUVOLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO2dCQUMvQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLFNBQVMsQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO2dCQUMzQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFOUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV2RCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFFRixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQWtDO1FBRXJELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRTdCLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUMzQixLQUFLLFFBQVE7b0JBQ1osT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssVUFBVTtvQkFDZCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFDbEM7b0JBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7YUFDaEM7U0FDRDthQUFNO1lBQ04sUUFBUSxJQUFJLEVBQUU7Z0JBRWIsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNO29CQUM5QixPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFFaEMsS0FBSyxtQkFBbUIsQ0FBQyxRQUFRO29CQUNoQyxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztnQkFFbEM7b0JBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7YUFDaEM7U0FDRDtJQUVGLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBa0M7UUFFckQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFN0IsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQzNCLEtBQUssS0FBSztvQkFDVCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDN0IsS0FBSyxVQUFVO29CQUNkLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxLQUFLLE9BQU87b0JBQ1gsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQy9CO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzdCO1NBQ0Q7YUFBTTtZQUNOLFFBQVEsSUFBSSxFQUFFO2dCQUViLEtBQUssbUJBQW1CLENBQUMsR0FBRztvQkFDM0IsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBRTdCLEtBQUssbUJBQW1CLENBQUMsUUFBUTtvQkFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7Z0JBRWxDLEtBQUssbUJBQW1CLENBQUMsS0FBSztvQkFDN0IsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBRS9CO29CQUNDLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzdCO1NBQ0Q7SUFDRixDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQTBDO1FBRWhFLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ04sT0FBTyxPQUFPLENBQUM7U0FDZjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd1NlbGVjdGlvbiwgR3VpUm93U2VsZWN0aW9uSWRNYXRjaGVyLCBHdWlSb3dTZWxlY3Rpb25Nb2RlLCBHdWlSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24sIFJvd1NlbGVjdGlvbk1vZGUsIFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHNlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbik6IFJvd1NlbGVjdGlvbiB7XG5cblx0XHRjb25zdCBidWlsZGVyID0gbmV3IFJvd1NlbGVjdGlvbi5CdWlsZGVyKCk7XG5cblx0XHRpZiAodHlwZW9mIHNlbGVjdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gYnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24pLmJ1aWxkKCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24uZW5hYmxlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24uc2VsZWN0ZWRSb3dJbmRleGVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoU2VsZWN0ZWRSb3dJbmRleGVzKHNlbGVjdGlvbi5zZWxlY3RlZFJvd0luZGV4ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLnNlbGVjdGVkUm93SWRzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoU2VsZWN0ZWRSb3dJZHMoc2VsZWN0aW9uLnNlbGVjdGVkUm93SWRzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5tb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3QgbW9kZSA9IHRoaXMuY29udmVydE1vZGUoc2VsZWN0aW9uLm1vZGUpO1xuXG5cdFx0XHRcdGJ1aWxkZXIud2l0aE1vZGUobW9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24udHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSB0aGlzLmNvbnZlcnRUeXBlKHNlbGVjdGlvbi50eXBlKTtcblxuXHRcdFx0XHRidWlsZGVyLndpdGhUeXBlKHR5cGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBtYXRjaGVyID0gdGhpcy5jb252ZXJ0TWF0Y2hlcihzZWxlY3Rpb24ubWF0Y2hlcik7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoTWF0Y2hlcihtYXRjaGVyKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydE1vZGUobW9kZTogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBtb2RlID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRjYXNlICdzaW5nbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdFx0Y2FzZSAnbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdGNhc2UgJ3Jvdyc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5SQURJTztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5ST1c6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuUkFESU86XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUkFESU87XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0TWF0Y2hlcihtYXRjaGVyOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25JZE1hdGNoZXIpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuXG5cdFx0aWYgKHR5cGVvZiBtYXRjaGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIChpdGVtOiBhbnkpID0+IGl0ZW1bbWF0Y2hlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtYXRjaGVyO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=