/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../ui-api/grid.api';
import { SchemaTheme } from '../../../../../lib/schema/domain/schema-theme';
var GridThemeConverter = /** @class */ (function () {
    function GridThemeConverter() {
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convert = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convertString = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        /** @type {?} */
        var loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            case 'generic':
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convertEnum = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            case GuiTheme.GENERIC:
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    return GridThemeConverter;
}());
export { GridThemeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHNUU7SUFBQTtJQWtFQSxDQUFDOzs7OztJQWhFQSxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBd0I7UUFFL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFFRixDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsS0FBYTs7WUFFNUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU5QyxRQUFRLFlBQVksRUFBRTtZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssU0FBUztnQkFDYixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBRTNCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sd0NBQVc7Ozs7O0lBQW5CLFVBQW9CLEtBQWU7UUFFbEMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFN0IsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDcEIsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUUzQjtJQUVGLENBQUM7SUFFRix5QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zY2hlbWEvZG9tYWluL3NjaGVtYS10aGVtZSc7XG5cblxuZXhwb3J0IGNsYXNzIEdyaWRUaGVtZUNvbnZlcnRlciB7XG5cblx0Y29udmVydCh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRpZiAodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFN0cmluZyh0aGVtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFbnVtKHRoZW1lKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFN0cmluZyh0aGVtZTogc3RyaW5nKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0Y29uc3QgbG93ZXJlZFRoZW1lID0gdGhlbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFRoZW1lKSB7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY29udmVydEVudW0odGhlbWU6IEd1aVRoZW1lKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0c3dpdGNoICh0aGVtZSkge1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuRkFCUklDOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkxJR0hUOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuREFSSzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuR0VORVJJQzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=