import { SchemaPublisher } from '../../../../../core/schema/src/api/schema.publisher';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { GuiRowColoring, GuiTheme } from '../../core/api/gui.grid.public-api';
import { GuiGridThemeConverter } from './gui.grid.theme.converter';
import { GuiGridRowColoringConverter } from './coloring/gui.grid.row-coloring.converter';
export declare class GuiGridThemeCommandInvoker {
    private readonly schemaCommandInvoker;
    private readonly gridThemeConverter;
    private readonly gridRowColoringConverter;
    constructor(schemaCommandInvoker: SchemaPublisher, gridThemeConverter: GuiGridThemeConverter, gridRowColoringConverter: GuiGridRowColoringConverter);
    setTheme(theme: string | GuiTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    setRowColoring(rowColoring: string | GuiRowColoring, schemaId: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
}
