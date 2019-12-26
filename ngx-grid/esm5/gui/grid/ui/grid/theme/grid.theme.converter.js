/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../ui-api/grid.api';
import { SchemaTheme } from '../../../../../lib/structure/domain/schema/schema-theme';
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
            default:
                return SchemaTheme.FABRIC;
        }
    };
    return GridThemeConverter;
}());
export { GridThemeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEY7SUFBQTtJQTREQSxDQUFDOzs7OztJQTFEQSxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBd0I7UUFFL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFFRixDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsS0FBYTs7WUFFNUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU5QyxRQUFRLFlBQVksRUFBRTtZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUUzQjtJQUVGLENBQUM7Ozs7OztJQUVPLHdDQUFXOzs7OztJQUFuQixVQUFvQixLQUFlO1FBRWxDLFFBQVEsS0FBSyxFQUFFO1lBRWQsS0FBSyxRQUFRLENBQUMsUUFBUTtnQkFDckIsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssUUFBUSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUUzQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUUzQjtJQUVGLENBQUM7SUFFRix5QkFBQztBQUFELENBQUMsQUE1REQsSUE0REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkVGhlbWVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0aWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodGhlbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh0aGVtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRUaGVtZSA9IHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUaGVtZSkge1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bSh0aGVtZTogR3VpVGhlbWUpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==