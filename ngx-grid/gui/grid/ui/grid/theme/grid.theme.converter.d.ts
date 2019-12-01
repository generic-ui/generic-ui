import { GuiTheme } from '../../../../grid/app/grid.api';
import { SchemaTheme } from '../../../../../lib/structure/domain/schema/schema-theme';
export declare class GridThemeConverter {
    convert(theme: string | GuiTheme): SchemaTheme;
    private convertString;
    private convertEnum;
}
