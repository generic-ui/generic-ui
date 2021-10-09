/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Theme } from '../../themes/theme';
export class FabricDialogThemeService {
    constructor() {
        this.theme$ = new Subject();
    }
    /**
     * @return {?}
     */
    onTheme() {
        return this.theme$.asObservable();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    nextTheme(theme) {
        this.theme$.next(this.toTheme(theme));
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    toTheme(theme) {
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
FabricDialogThemeService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDialogThemeService.prototype.theme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBR2tCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBZ0NoRCxDQUFDOzs7O0lBOUJBLE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQWE7UUFDNUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRXZCLEtBQUssU0FBUztnQkFDYixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRW5CO2dCQUNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNyQjtJQUNGLENBQUM7OztZQWxDRCxVQUFVOzs7Ozs7O0lBR1YsMENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lJCA9IG5ldyBTdWJqZWN0PFRoZW1lPigpO1xuXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdG5leHRUaGVtZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy50aGVtZSQubmV4dCh0aGlzLnRvVGhlbWUodGhlbWUpKTtcblx0fVxuXG5cdHByaXZhdGUgdG9UaGVtZSh0aGVtZTogc3RyaW5nKTogVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxufVxuIl19