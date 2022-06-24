import { ListViewMode } from '../../../../core/list-view/domain/mode/list-view-mode';
import { GuiListMode } from '../../core/api/gui.list.public-api';
export class GuiListModeConverter {
    convert(mode) {
        if (mode === GuiListMode.LIST) {
            return ListViewMode.LIST;
        }
        else {
            return ListViewMode.CARD;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2d1aS9saXN0L2ZlYXR1cmUvbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWpFLE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsT0FBTyxDQUFDLElBQWlCO1FBRXhCLElBQUksSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2xpc3Qtdmlldy9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBHdWlMaXN0TW9kZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2d1aS5saXN0LnB1YmxpYy1hcGknO1xuXG5leHBvcnQgY2xhc3MgR3VpTGlzdE1vZGVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQobW9kZTogR3VpTGlzdE1vZGUpOiBMaXN0Vmlld01vZGUge1xuXG5cdFx0aWYgKG1vZGUgPT09IEd1aUxpc3RNb2RlLkxJU1QpIHtcblx0XHRcdHJldHVybiBMaXN0Vmlld01vZGUuTElTVDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5DQVJEO1xuXHRcdH1cblx0fVxufVxuIl19