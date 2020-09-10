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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sd0JBQXdCO0lBRHJDO1FBR2tCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBNkJoRCxDQUFDOzs7O0lBM0JBLE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQWE7UUFDNUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRXZCLEtBQUssU0FBUztnQkFDYixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7O1lBL0JELFVBQVU7Ozs7Ozs7SUFHViwwQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGhlbWUkID0gbmV3IFN1YmplY3Q8VGhlbWU+KCk7XG5cblx0b25UaGVtZSgpOiBPYnNlcnZhYmxlPFRoZW1lPiB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dFRoZW1lKHRoZW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lJC5uZXh0KHRoaXMudG9UaGVtZSh0aGVtZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0fVxuXHR9XG59XG4iXX0=