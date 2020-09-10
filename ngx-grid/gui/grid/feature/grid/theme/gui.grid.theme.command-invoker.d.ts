import { SchemaCommandInvoker } from '../../../../../schema/domain-api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureId } from '../../../../../structure/core/domain/structure.id';
import { GuiRowColoring, GuiTheme } from '../../../domain-api/gui.grid.public-api';
import { GuiGridThemeConverter } from './gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './coloring/gui.grid.row-coloring.converter';
export declare class GuiGridThemeCommandInvoker {
    private readonly schemaCommandInvoker;
    private readonly gridThemeConverter;
    private readonly gridRowColoringConverter;
    constructor(schemaCommandInvoker: SchemaCommandInvoker, gridThemeConverter: GuiGridThemeConverter, gridRowColoringConverter: GuiGridRowColoringConverter);
    setTheme(theme: string | GuiTheme, schemaId?: SchemaReadModelRootId, structureId?: StructureId): void;
    setRowColoring(rowColoring: string | GuiRowColoring, schemaId?: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
}
