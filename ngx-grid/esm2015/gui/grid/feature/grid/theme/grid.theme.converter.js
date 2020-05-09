/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../domain-api/grid.api';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
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
     * @param {?} theme
     * @return {?}
     */
    convertToGuiTheme(theme) {
        switch (theme) {
            case SchemaTheme.MATERIAL:
                return GuiTheme.MATERIAL;
            case SchemaTheme.FABRIC:
                return GuiTheme.FABRIC;
            case SchemaTheme.LIGHT:
                return GuiTheme.LIGHT;
            case SchemaTheme.DARK:
                return GuiTheme.DARK;
            case SchemaTheme.GENERIC:
                return GuiTheme.GENERIC;
            default:
                return GuiTheme.GENERIC;
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
            case 'generic':
                return SchemaTheme.GENERIC;
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
            case GuiTheme.GENERIC:
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC90aGVtZS9ncmlkLnRoZW1lLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUc5RSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUU5QixPQUFPLENBQUMsS0FBd0I7UUFFL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFFRixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWtCO1FBRW5DLFFBQVEsS0FBSyxFQUFFO1lBRWQsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FFekI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsS0FBYTs7Y0FFNUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU5QyxRQUFRLFlBQVksRUFBRTtZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssU0FBUztnQkFDYixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBRTNCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWU7UUFFbEMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFN0IsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDcEIsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUUzQjtJQUVGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5leHBvcnQgY2xhc3MgR3JpZFRoZW1lQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdGlmICh0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0U3RyaW5nKHRoZW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEVudW0odGhlbWUpO1xuXHRcdH1cblxuXHR9XG5cblx0Y29udmVydFRvR3VpVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogR3VpVGhlbWUge1xuXG5cdFx0c3dpdGNoICh0aGVtZSkge1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdFx0cmV0dXJuIEd1aVRoZW1lLkRBUks7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdFx0cmV0dXJuIEd1aVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5HRU5FUklDO1xuXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U3RyaW5nKHRoZW1lOiBzdHJpbmcpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRjb25zdCBsb3dlcmVkVGhlbWUgPSB0aGVtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVGhlbWUpIHtcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bSh0aGVtZTogR3VpVGhlbWUpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5HRU5FUklDOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==