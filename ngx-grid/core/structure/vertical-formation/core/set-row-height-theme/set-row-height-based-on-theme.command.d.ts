import { StructureId } from '../../../structure-core/api/global/structure.id';
import { SchemaTheme } from '../../../../schema/api/theme/schema-theme';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetRowHeightBasedOnThemeCommand extends StructureCommand {
    private readonly theme;
    constructor(structureId: StructureId, theme: SchemaTheme);
    getTheme(): number;
}
