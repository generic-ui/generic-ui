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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQztJQUFBO1FBR2tCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBNkJoRCxDQUFDOzs7O0lBM0JBLDBDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDRDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTywwQ0FBTzs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzVCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztTQUNuQjtJQUNGLENBQUM7O2dCQS9CRCxVQUFVOztJQWdDWCwrQkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLHdCQUF3Qjs7Ozs7O0lBRXBDLDBDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB0aGVtZSQgPSBuZXcgU3ViamVjdDxUaGVtZT4oKTtcblxuXHRvblRoZW1lKCk6IE9ic2VydmFibGU8VGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZSQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0VGhlbWUodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWUkLm5leHQodGhpcy50b1RoZW1lKHRoZW1lKSk7XG5cdH1cblxuXHRwcml2YXRlIHRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblx0XHR9XG5cdH1cbn1cbiJdfQ==