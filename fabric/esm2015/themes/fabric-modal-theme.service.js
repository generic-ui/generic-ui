import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme';
export class FabricModalThemeService {
    constructor() {
        this.fabricTheme$ = new BehaviorSubject(Theme.FABRIC);
    }
    onTheme() {
        return this.fabricTheme$.asObservable();
    }
    changeTheme(theme) {
        const fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
        this.fabricTheme$.next(fabricTheme);
    }
    convertToTheme(theme) {
        switch (theme.toLowerCase()) {
            case 'fabric':
                return Theme.FABRIC;
            case 'material':
                return Theme.MATERIAL;
            case 'generic':
                return Theme.GENERIC;
            case 'light':
                return Theme.LIGHT;
            case 'dark':
                return Theme.DARK;
            default:
                return Theme.FABRIC;
        }
    }
}
FabricModalThemeService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBSWhDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHa0IsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFrQzFFLENBQUM7SUFoQ0EsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQXFCO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBYTtRQUMzQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUU1QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRXJCLEtBQUssVUFBVTtnQkFDZCxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFdkIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBRXBCLEtBQUssTUFBTTtnQkFDVixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFbkI7Z0JBQ0MsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7O1lBbkNELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljTW9kYWxUaGVtZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmFicmljVGhlbWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUaGVtZT4oVGhlbWUuRkFCUklDKTtcblxuXHRvblRoZW1lKCk6IE9ic2VydmFibGU8VGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNUaGVtZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VUaGVtZSh0aGVtZTogc3RyaW5nIHwgVGhlbWUpOiB2b2lkIHtcblx0XHRjb25zdCBmYWJyaWNUaGVtZSA9IHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycgPyB0aGlzLmNvbnZlcnRUb1RoZW1lKHRoZW1lKSA6IHRoZW1lO1xuXHRcdHRoaXMuZmFicmljVGhlbWUkLm5leHQoZmFicmljVGhlbWUpO1xuXHR9XG5cblx0Y29udmVydFRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblx0XHR9XG5cdH1cblxufVxuIl19