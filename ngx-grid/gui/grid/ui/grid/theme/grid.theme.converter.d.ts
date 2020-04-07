import { GuiTheme } from '../../../ui-api/grid.api';
import { SchemaTheme } from '../../../../../lib/schema/domain/schema-theme';
export declare class GridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    private convertString;
    private convertEnum;
}
