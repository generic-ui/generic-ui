import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { SchemaTheme } from '../../../../../schema/src/api/theme/schema-theme';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetRowHeightBasedOnThemeCommand extends StructureCommand {
    private readonly theme;
    constructor(structureId: StructureId, theme: SchemaTheme);
    getTheme(): number;
}
