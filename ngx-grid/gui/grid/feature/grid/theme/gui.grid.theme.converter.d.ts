import { GuiTheme } from '../../../domain-api/gui.grid.public-api';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export declare class GuiGridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    convertToGuiTheme(theme: SchemaTheme): GuiTheme;
    private convertString;
    private convertEnum;
}
