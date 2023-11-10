import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme';
import * as i0 from "@angular/core";
export class FabricModalThemeService {
    fabricTheme$ = new BehaviorSubject(Theme.FABRIC);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricModalThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricModalThemeService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricModalThemeService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUdoQyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxCLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekUsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQXFCO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBYTtRQUMzQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUU1QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRXJCLEtBQUssVUFBVTtnQkFDZCxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFdkIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUV0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBRXBCLEtBQUssTUFBTTtnQkFDVixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFbkI7Z0JBQ0MsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzt3R0FsQ1csdUJBQXVCOzRHQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNUaGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lPihUaGVtZS5GQUJSSUMpO1xuXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY1RoZW1lJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBzdHJpbmcgfCBUaGVtZSk6IHZvaWQge1xuXHRcdGNvbnN0IGZhYnJpY1RoZW1lID0gdHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoaXMuY29udmVydFRvVGhlbWUodGhlbWUpIDogdGhlbWU7XG5cdFx0dGhpcy5mYWJyaWNUaGVtZSQubmV4dChmYWJyaWNUaGVtZSk7XG5cdH1cblxuXHRjb252ZXJ0VG9UaGVtZSh0aGVtZTogc3RyaW5nKTogVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=