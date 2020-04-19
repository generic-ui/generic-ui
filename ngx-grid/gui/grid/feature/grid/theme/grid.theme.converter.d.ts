import { GuiTheme } from '../../../feature-api/grid.api';
import { SchemaTheme } from '../../../../../lib/schema/domain/theme/schema-theme';
export declare class GridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    convertToGuiTheme(theme: SchemaTheme): GuiTheme;
    private convertString;
    private convertEnum;
}
