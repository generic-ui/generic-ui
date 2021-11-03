import { StructureId } from '../../../../core/api/structure.id';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetRowHeightBasedOnThemeCommand extends StructureCommand {
    private readonly theme;
    constructor(structureId: StructureId, theme: SchemaTheme);
    getTheme(): number;
}
//# sourceMappingURL=set-row-height-based-on-theme.command.d.ts.map