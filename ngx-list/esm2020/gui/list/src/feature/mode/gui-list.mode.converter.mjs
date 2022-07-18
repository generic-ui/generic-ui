import { ListViewMode } from '../../../../../core/list-view/src/domain/mode/list-view-mode';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2d1aS9saXN0L3NyYy9mZWF0dXJlL21vZGUvZ3VpLWxpc3QubW9kZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVqRSxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLE9BQU8sQ0FBQyxJQUFpQjtRQUV4QixJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QjthQUFNO1lBQ04sT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9saXN0LXZpZXcvc3JjL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IEd1aUxpc3RNb2RlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZ3VpLmxpc3QucHVibGljLWFwaSc7XG5cbmV4cG9ydCBjbGFzcyBHdWlMaXN0TW9kZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChtb2RlOiBHdWlMaXN0TW9kZSk6IExpc3RWaWV3TW9kZSB7XG5cblx0XHRpZiAobW9kZSA9PT0gR3VpTGlzdE1vZGUuTElTVCkge1xuXHRcdFx0cmV0dXJuIExpc3RWaWV3TW9kZS5MSVNUO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gTGlzdFZpZXdNb2RlLkNBUkQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=