import { GuiTheme } from '../../../domain-api/grid.api';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export declare class GridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    convertToGuiTheme(theme: SchemaTheme): GuiTheme;
    private convertString;
    private convertEnum;
}
