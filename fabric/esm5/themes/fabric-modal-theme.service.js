/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme';
var FabricModalThemeService = /** @class */ (function () {
    function FabricModalThemeService() {
        this.fabricTheme$ = new BehaviorSubject(Theme.FABRIC);
    }
    /**
     * @return {?}
     */
    FabricModalThemeService.prototype.onTheme = /**
     * @return {?}
     */
    function () {
        return this.fabricTheme$.asObservable();
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    FabricModalThemeService.prototype.changeTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        /** @type {?} */
        var fabricTheme = typeof theme === 'string' ? this.convertToTheme(theme) : theme;
        this.fabricTheme$.next(fabricTheme);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    FabricModalThemeService.prototype.convertToTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
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
    };
    FabricModalThemeService.decorators = [
        { type: Injectable }
    ];
    return FabricModalThemeService;
}());
export { FabricModalThemeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricModalThemeService.prototype.fabricTheme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJ0aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hDO0lBQUE7UUFHa0IsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFrQzFFLENBQUM7Ozs7SUFoQ0EseUNBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEtBQXFCOztZQUMxQixXQUFXLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ2xGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDM0IsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRXZCLEtBQUssU0FBUztnQkFDYixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRW5CO2dCQUNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNyQjtJQUNGLENBQUM7O2dCQW5DRCxVQUFVOztJQXFDWCw4QkFBQztDQUFBLEFBckNELElBcUNDO1NBcENZLHVCQUF1Qjs7Ozs7O0lBRW5DLCtDQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNUaGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lPihUaGVtZS5GQUJSSUMpO1xuXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY1RoZW1lJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNoYW5nZVRoZW1lKHRoZW1lOiBzdHJpbmcgfCBUaGVtZSk6IHZvaWQge1xuXHRcdGNvbnN0IGZhYnJpY1RoZW1lID0gdHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoaXMuY29udmVydFRvVGhlbWUodGhlbWUpIDogdGhlbWU7XG5cdFx0dGhpcy5mYWJyaWNUaGVtZSQubmV4dChmYWJyaWNUaGVtZSk7XG5cdH1cblxuXHRjb252ZXJ0VG9UaGVtZSh0aGVtZTogc3RyaW5nKTogVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=