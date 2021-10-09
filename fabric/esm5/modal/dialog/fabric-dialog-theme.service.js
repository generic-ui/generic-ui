/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Theme } from '../../themes/theme';
var FabricDialogThemeService = /** @class */ (function () {
    function FabricDialogThemeService() {
        this.theme$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricDialogThemeService.prototype.onTheme = /**
     * @return {?}
     */
    function () {
        return this.theme$.asObservable();
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    FabricDialogThemeService.prototype.nextTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme$.next(this.toTheme(theme));
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    FabricDialogThemeService.prototype.toTheme = /**
     * @private
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
    FabricDialogThemeService.decorators = [
        { type: Injectable }
    ];
    return FabricDialogThemeService;
}());
export { FabricDialogThemeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDialogThemeService.prototype.theme$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQztJQUFBO1FBR2tCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBZ0NoRCxDQUFDOzs7O0lBOUJBLDBDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDRDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTywwQ0FBTzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzVCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUVuQjtnQkFDQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDckI7SUFDRixDQUFDOztnQkFsQ0QsVUFBVTs7SUFtQ1gsK0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSx3QkFBd0I7Ozs7OztJQUVwQywwQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdGhlbWUkID0gbmV3IFN1YmplY3Q8VGhlbWU+KCk7XG5cblx0b25UaGVtZSgpOiBPYnNlcnZhYmxlPFRoZW1lPiB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0bmV4dFRoZW1lKHRoZW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnRoZW1lJC5uZXh0KHRoaXMudG9UaGVtZSh0aGVtZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cdFx0fVxuXHR9XG59XG4iXX0=