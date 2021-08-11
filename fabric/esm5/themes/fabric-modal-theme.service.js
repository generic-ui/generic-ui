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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJ0aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hDO0lBQUE7UUFHa0IsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUErQjFFLENBQUM7Ozs7SUE3QkEseUNBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEtBQXFCOztZQUMxQixXQUFXLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ2xGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDM0IsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFFNUIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRXZCLEtBQUssU0FBUztnQkFDYixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFdEIsS0FBSyxPQUFPO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7Z0JBaENELFVBQVU7O0lBa0NYLDhCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FqQ1ksdUJBQXVCOzs7Ozs7SUFFbkMsK0NBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY1RoZW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGhlbWU+KFRoZW1lLkZBQlJJQyk7XG5cblx0b25UaGVtZSgpOiBPYnNlcnZhYmxlPFRoZW1lPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFicmljVGhlbWUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlVGhlbWUodGhlbWU6IHN0cmluZyB8IFRoZW1lKTogdm9pZCB7XG5cdFx0Y29uc3QgZmFicmljVGhlbWUgPSB0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnID8gdGhpcy5jb252ZXJ0VG9UaGVtZSh0aGVtZSkgOiB0aGVtZTtcblx0XHR0aGlzLmZhYnJpY1RoZW1lJC5uZXh0KGZhYnJpY1RoZW1lKTtcblx0fVxuXG5cdGNvbnZlcnRUb1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==