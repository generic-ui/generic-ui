import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export declare class SetRowHeightBasedOnThemeCommand extends Command {
    private readonly theme;
    constructor(structureId: StructureId, theme: SchemaTheme);
    getTheme(): number;
}
