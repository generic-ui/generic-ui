import { GuiRowSelectionMode, GuiRowSelectionType } from '../../core/api/gui.grid.public-api';
import { RowSelection, RowSelectionMode, RowSelectionType } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
import { FormationCustomSelectionConfig } from '../../../../../core/structure/formation/src/api/custom/formation.custom-selection.config';
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
            if (selection.custom !== undefined) {
                const customSelection = this.convertCustomSelection(selection.custom);
                builder.witCustomSelection(customSelection);
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
    convertCustomSelection(config) {
        let formationConfig = new FormationCustomSelectionConfig();
        if (config?.enabled) {
            formationConfig.enabled = config.enabled;
        }
        if (config?.selections && Array.isArray(config?.selections)) {
            formationConfig.selections =
                config.selections.map((customSelection) => {
                    if (typeof customSelection === 'string') {
                        return customSelection;
                    }
                    else {
                        return customSelection;
                    }
                });
        }
        return formationConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL3NyYy9mZWF0dXJlL3Jvdy1zZWxlY3Rpb24vZ3VpLmdyaWQucm93LXNlbGVjdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQU1OLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUksT0FBTyxFQUNOLDhCQUE4QixFQUU5QixNQUFNLDBGQUEwRixDQUFDO0FBR2xHLE1BQU0sT0FBTyw0QkFBNEI7SUFFeEMsT0FBTyxDQUFDLFNBQW9DO1FBRTNDLE1BQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTNDLElBQUksT0FBTyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBRU4sSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7Z0JBQy9DLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM3RDtZQUVELElBQUksU0FBUyxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFD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QUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLE9BQU8sQ0FBQztTQUNmO0lBQ0YsQ0FBQztJQUVPLHNCQUFzQixDQUFDLE1BQTZCO1FBQzNELElBQUksZUFBZSxHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztRQUUzRCxJQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUU7WUFDcEIsZUFBZSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxNQUFNLEVBQUUsVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBRTVELGVBQWUsQ0FBQyxVQUFVO2dCQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQTBFLEVBQUUsRUFBRTtvQkFFcEcsSUFBSSxPQUFPLGVBQWUsS0FBSyxRQUFRLEVBQUU7d0JBQ3hDLE9BQWdCLGVBQTRDLENBQUM7cUJBQzdEO3lCQUFNO3dCQUNOLE9BQU8sZUFBbUQsQ0FBQztxQkFDM0Q7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEd1aVJvd0N1c3RvbVNlbGVjdGlvbixcblx0R3VpUm93Q3VzdG9tU2VsZWN0aW9uRnVuY3Rpb24sXG5cdEd1aVJvd0N1c3RvbVNlbGVjdGlvblR5cGUsXG5cdEd1aVJvd1NlbGVjdGlvbixcblx0R3VpUm93U2VsZWN0aW9uSWRNYXRjaGVyLFxuXHRHdWlSb3dTZWxlY3Rpb25Nb2RlLFxuXHRHdWlSb3dTZWxlY3Rpb25UeXBlXG59IGZyb20gJy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uLCBSb3dTZWxlY3Rpb25Nb2RlLCBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtcblx0Rm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uQ29uZmlnLFxuXHRGb3JtYXRpb25DdXN0b21TZWxlY3Rpb25GdW5jdGlvblxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9jdXN0b20vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24uY29uZmlnJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVNlbGVjdFR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9jdXN0b20vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3QtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUm93U2VsZWN0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHNlbGVjdGlvbjogYm9vbGVhbiB8IEd1aVJvd1NlbGVjdGlvbik6IFJvd1NlbGVjdGlvbiB7XG5cblx0XHRjb25zdCBidWlsZGVyID0gbmV3IFJvd1NlbGVjdGlvbi5CdWlsZGVyKCk7XG5cblx0XHRpZiAodHlwZW9mIHNlbGVjdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gYnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24pLmJ1aWxkKCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoRW5hYmxlZChzZWxlY3Rpb24uZW5hYmxlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24uc2VsZWN0ZWRSb3dJbmRleGVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoU2VsZWN0ZWRSb3dJbmRleGVzKHNlbGVjdGlvbi5zZWxlY3RlZFJvd0luZGV4ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLnNlbGVjdGVkUm93SWRzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0YnVpbGRlci53aXRoU2VsZWN0ZWRSb3dJZHMoc2VsZWN0aW9uLnNlbGVjdGVkUm93SWRzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5tb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3QgbW9kZSA9IHRoaXMuY29udmVydE1vZGUoc2VsZWN0aW9uLm1vZGUpO1xuXG5cdFx0XHRcdGJ1aWxkZXIud2l0aE1vZGUobW9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxlY3Rpb24udHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSB0aGlzLmNvbnZlcnRUeXBlKHNlbGVjdGlvbi50eXBlKTtcblxuXHRcdFx0XHRidWlsZGVyLndpdGhUeXBlKHR5cGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uLm1hdGNoZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBtYXRjaGVyID0gdGhpcy5jb252ZXJ0TWF0Y2hlcihzZWxlY3Rpb24ubWF0Y2hlcik7XG5cblx0XHRcdFx0YnVpbGRlci53aXRoTWF0Y2hlcihtYXRjaGVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdGlvbi5jdXN0b20gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBjdXN0b21TZWxlY3Rpb24gPSB0aGlzLmNvbnZlcnRDdXN0b21TZWxlY3Rpb24oc2VsZWN0aW9uLmN1c3RvbSk7XG5cblx0XHRcdFx0YnVpbGRlci53aXRDdXN0b21TZWxlY3Rpb24oY3VzdG9tU2VsZWN0aW9uKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1aWxkZXIuYnVpbGQoKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydE1vZGUobW9kZTogc3RyaW5nIHwgR3VpUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXG5cdFx0aWYgKHR5cGVvZiBtb2RlID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRjYXNlICdzaW5nbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdFx0Y2FzZSAnbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLlNJTkdMRTpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uTW9kZS5TSU5HTEU7XG5cblx0XHRcdFx0Y2FzZSBHdWlSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFOlxuXHRcdFx0XHRcdHJldHVybiBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdGNhc2UgJ3Jvdyc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5SQURJTztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5ST1c6XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUk9XO1xuXG5cdFx0XHRcdGNhc2UgR3VpUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5DSEVDS0JPWDtcblxuXHRcdFx0XHRjYXNlIEd1aVJvd1NlbGVjdGlvblR5cGUuUkFESU86XG5cdFx0XHRcdFx0cmV0dXJuIFJvd1NlbGVjdGlvblR5cGUuUkFESU87XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gUm93U2VsZWN0aW9uVHlwZS5ST1c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0TWF0Y2hlcihtYXRjaGVyOiBzdHJpbmcgfCBHdWlSb3dTZWxlY3Rpb25JZE1hdGNoZXIpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuXG5cdFx0aWYgKHR5cGVvZiBtYXRjaGVyID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIChpdGVtOiBhbnkpID0+IGl0ZW1bbWF0Y2hlcl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtYXRjaGVyO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEN1c3RvbVNlbGVjdGlvbihjb25maWc6IEd1aVJvd0N1c3RvbVNlbGVjdGlvbik6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZyB7XG5cdFx0bGV0IGZvcm1hdGlvbkNvbmZpZyA9IG5ldyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb25Db25maWcoKTtcblxuXHRcdGlmIChjb25maWc/LmVuYWJsZWQpIHtcblx0XHRcdGZvcm1hdGlvbkNvbmZpZy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZz8uc2VsZWN0aW9ucyAmJiBBcnJheS5pc0FycmF5KGNvbmZpZz8uc2VsZWN0aW9ucykpIHtcblxuXHRcdFx0Zm9ybWF0aW9uQ29uZmlnLnNlbGVjdGlvbnMgPVxuXHRcdFx0XHRjb25maWcuc2VsZWN0aW9ucy5tYXAoKGN1c3RvbVNlbGVjdGlvbjogR3VpUm93Q3VzdG9tU2VsZWN0aW9uVHlwZSB8IEd1aVJvd0N1c3RvbVNlbGVjdGlvbkZ1bmN0aW9uKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNlbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiA8dW5rbm93bj5jdXN0b21TZWxlY3Rpb24gYXMgRm9ybWF0aW9uQ3VzdG9tU2VsZWN0VHlwZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNlbGVjdGlvbiBhcyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb25GdW5jdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtYXRpb25Db25maWc7XG5cdH1cblxufVxuIl19