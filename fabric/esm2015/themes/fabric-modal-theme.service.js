import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme';
import * as i0 from "@angular/core";
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
FabricModalThemeService.ɵfac = function FabricModalThemeService_Factory(t) { return new (t || FabricModalThemeService)(); };
FabricModalThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricModalThemeService, factory: FabricModalThemeService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricModalThemeService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUloQyxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBR2tCLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBa0N6RTtJQWhDQSxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBcUI7UUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUVuQjtnQkFDQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDckI7SUFDRixDQUFDOzs4RkFsQ1csdUJBQXVCOzZFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FEbkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNUaGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lPihUaGVtZS5GQUJSSUMpO1xuXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY1RoZW1lJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBzdHJpbmcgfCBUaGVtZSk6IHZvaWQge1xuXHRcdGNvbnN0IGZhYnJpY1RoZW1lID0gdHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoaXMuY29udmVydFRvVGhlbWUodGhlbWUpIDogdGhlbWU7XG5cdFx0dGhpcy5mYWJyaWNUaGVtZSQubmV4dChmYWJyaWNUaGVtZSk7XG5cdH1cblxuXHRjb252ZXJ0VG9UaGVtZSh0aGVtZTogc3RyaW5nKTogVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=