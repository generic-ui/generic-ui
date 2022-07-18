import { GuiTheme } from '../../core/api/gui.grid.public-api';
import { SchemaTheme } from '../../../../../core/schema/src/api/theme/schema-theme';
export declare class GuiGridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    convertToGuiTheme(theme: SchemaTheme): GuiTheme;
    private convertString;
    private convertEnum;
}
