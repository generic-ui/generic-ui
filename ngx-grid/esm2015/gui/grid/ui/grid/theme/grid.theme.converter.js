/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../../grid/app/grid.api';
import { SchemaTheme } from '../../../../../lib/structure/domain/schema/schema-theme';
export class GridThemeConverter {
    /**
     * @param {?} theme
     * @return {?}
     */
    convert(theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertString(theme) {
        /** @type {?} */
        const loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertEnum(theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFOUIsT0FBTyxDQUFDLEtBQXdCO1FBRS9CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQWE7O2NBRTVCLFlBQVksR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7UUFFOUMsUUFBUSxZQUFZLEVBQUU7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssT0FBTztnQkFDWCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FFM0I7SUFFRixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBZTtRQUVsQyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FFM0I7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvYXBwL2dyaWQuYXBpJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc2NoZW1hL3NjaGVtYS10aGVtZSc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRUaGVtZUNvbnZlcnRlciB7XG5cblx0Y29udmVydCh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRpZiAodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyh0aGVtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHRoZW1lKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyh0aGVtZTogc3RyaW5nKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFRoZW1lID0gdGhlbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFRoZW1lKSB7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHRoZW1lOiBHdWlUaGVtZSk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5NQVRFUklBTDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkZBQlJJQzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5MSUdIVDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkRBUks6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19