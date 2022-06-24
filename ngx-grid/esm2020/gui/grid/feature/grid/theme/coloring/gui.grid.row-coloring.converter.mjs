import { GuiRowColoring } from '../../../../core/api/gui.grid.public-api';
import { RowColoring } from '../../../../../../core/schema/api/row-coloring/row-coloring';
export class GuiGridRowColoringConverter {
    convert(rowColoring) {
        if (typeof rowColoring === 'string') {
            return this.convertString(rowColoring);
        }
        else {
            return this.convertEnum(rowColoring);
        }
    }
    convertToGuiRowColoring(value) {
        switch (value) {
            case RowColoring.NONE:
                return GuiRowColoring.NONE;
            case RowColoring.EVEN:
                return GuiRowColoring.EVEN;
            case RowColoring.ODD:
                return GuiRowColoring.ODD;
            default:
                return GuiRowColoring.EVEN;
        }
    }
    convertString(rowColoring) {
        const loweredRowColoring = rowColoring.toLocaleLowerCase();
        switch (loweredRowColoring) {
            case 'none':
                return RowColoring.NONE;
            case 'even':
                return RowColoring.EVEN;
            case 'odd':
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
    convertEnum(rowColoring) {
        switch (rowColoring) {
            case GuiRowColoring.NONE:
                return RowColoring.NONE;
            case GuiRowColoring.EVEN:
                return RowColoring.EVEN;
            case GuiRowColoring.ODD:
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucm93LWNvbG9yaW5nLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZ3VpL2dyaWQvZmVhdHVyZS9ncmlkL3RoZW1lL2NvbG9yaW5nL2d1aS5ncmlkLnJvdy1jb2xvcmluZy5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUcxRixNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLE9BQU8sQ0FBQyxXQUFvQztRQUUzQyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyQztJQUVGLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFrQjtRQUN6QyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUU1QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBRTNCO2dCQUNDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztTQUU1QjtJQUNGLENBQUM7SUFFTyxhQUFhLENBQUMsV0FBbUI7UUFFeEMsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzRCxRQUFRLGtCQUFrQixFQUFFO1lBRTNCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLEtBQUs7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztTQUV6QjtJQUVGLENBQUM7SUFFTyxXQUFXLENBQUMsV0FBMkI7UUFFOUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLGNBQWMsQ0FBQyxHQUFHO2dCQUN0QixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBRXpCO0lBRUYsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkUm93Q29sb3JpbmdDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0aWYgKHR5cGVvZiByb3dDb2xvcmluZyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcocm93Q29sb3JpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bShyb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb252ZXJ0VG9HdWlSb3dDb2xvcmluZyh2YWx1ZTogUm93Q29sb3JpbmcpOiBHdWlSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoICh2YWx1ZSkge1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBHdWlSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEd1aVJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcocm93Q29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRSb3dDb2xvcmluZyA9IHJvd0NvbG9yaW5nLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRSb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0Y2FzZSAnb2RkJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0ocm93Q29sb3Jpbmc6IEd1aVJvd0NvbG9yaW5nKTogUm93Q29sb3Jpbmcge1xuXG5cdFx0c3dpdGNoIChyb3dDb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRjYXNlIEd1aVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=