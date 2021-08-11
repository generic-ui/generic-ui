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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJ0aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBSWhDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFHa0IsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUErQjFFLENBQUM7Ozs7SUE3QkEsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFxQjs7Y0FDMUIsV0FBVyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRTVCLEtBQUssUUFBUTtnQkFDWixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssT0FBTztnQkFDWCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztTQUNuQjtJQUNGLENBQUM7OztZQWhDRCxVQUFVOzs7Ozs7O0lBR1YsK0NBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY1RoZW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGhlbWU+KFRoZW1lLkZBQlJJQyk7XG5cblx0b25UaGVtZSgpOiBPYnNlcnZhYmxlPFRoZW1lPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFicmljVGhlbWUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlVGhlbWUodGhlbWU6IHN0cmluZyB8IFRoZW1lKTogdm9pZCB7XG5cdFx0Y29uc3QgZmFicmljVGhlbWUgPSB0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnID8gdGhpcy5jb252ZXJ0VG9UaGVtZSh0aGVtZSkgOiB0aGVtZTtcblx0XHR0aGlzLmZhYnJpY1RoZW1lJC5uZXh0KGZhYnJpY1RoZW1lKTtcblx0fVxuXG5cdGNvbnZlcnRUb1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==