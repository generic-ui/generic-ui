/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme';
export class FabricModalThemeService {
    constructor() {
        this.fabricTheme$ = new BehaviorSubject(Theme.FABRIC);
    }
    /**
     * @return {?}
     */
    onTheme() {
        return this.fabricTheme$.asObservable();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    changeTheme(theme) {
        /** @type {?} */
        const fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
        this.fabricTheme$.next(fabricTheme);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricModalThemeService.prototype.fabricTheme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJ0aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBSWhDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHa0IsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFrQzFFLENBQUM7Ozs7SUFoQ0EsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFxQjs7Y0FDMUIsV0FBVyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUVuQjtnQkFDQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDckI7SUFDRixDQUFDOzs7WUFuQ0QsVUFBVTs7Ozs7OztJQUdWLCtDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNUaGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lPihUaGVtZS5GQUJSSUMpO1xuXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY1RoZW1lJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBzdHJpbmcgfCBUaGVtZSk6IHZvaWQge1xuXHRcdGNvbnN0IGZhYnJpY1RoZW1lID0gdHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoaXMuY29udmVydFRvVGhlbWUodGhlbWUpIDogdGhlbWU7XG5cdFx0dGhpcy5mYWJyaWNUaGVtZSQubmV4dChmYWJyaWNUaGVtZSk7XG5cdH1cblxuXHRjb252ZXJ0VG9UaGVtZSh0aGVtZTogc3RyaW5nKTogVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=