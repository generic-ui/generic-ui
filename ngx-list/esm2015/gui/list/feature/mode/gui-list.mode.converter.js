import { ListViewMode } from '../../../../structure/list/core/domain/mode/list-view-mode';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2d1aS9saXN0L2ZlYXR1cmUvbW9kZS9ndWktbGlzdC5tb2RlLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWpFLE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsT0FBTyxDQUFDLElBQWlCO1FBRXhCLElBQUksSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IEd1aUxpc3RNb2RlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0TW9kZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChtb2RlOiBHdWlMaXN0TW9kZSk6IExpc3RWaWV3TW9kZSB7XG5cblx0XHRpZiAobW9kZSA9PT0gR3VpTGlzdE1vZGUuTElTVCkge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=