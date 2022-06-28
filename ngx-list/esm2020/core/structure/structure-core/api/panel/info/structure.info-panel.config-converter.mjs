import { StructureInfoPanelConfig } from './structure.info-panel.config';
export class StructureInfoPanelConfigConverter {
    convert(config) {
        let infoDialog, columnsManager, sourceSize, schemaManager;
        if (config.infoDialog !== undefined) {
            infoDialog = config.infoDialog;
        }
        if (config.columnsManager !== undefined) {
            columnsManager = config.columnsManager;
        }
        if (config.schemaManager !== undefined) {
            schemaManager = config.schemaManager;
        }
        if (config.sourceSize !== undefined) {
            sourceSize = config.sourceSize;
        }
        return new StructureInfoPanelConfig(config.enabled, infoDialog, columnsManager, schemaManager, sourceSize);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RSxNQUFNLE9BQU8saUNBQWlDO0lBRTdDLE9BQU8sQ0FBQyxNQUF1QjtRQUU5QixJQUFJLFVBQVUsRUFDYixjQUFjLEVBQ2QsVUFBVSxFQUNWLGFBQWEsQ0FBQztRQUVmLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDcEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDL0I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQ3hDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUN2QyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNyQztRQUVELElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDcEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDL0I7UUFFRCxPQUFPLElBQUksd0JBQXdCLENBQ2xDLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxhQUFhLEVBQ2IsVUFBVSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogSW5mb1BhbmVsQ29uZmlnKTogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRcdGxldCBpbmZvRGlhbG9nLFxuXHRcdFx0Y29sdW1uc01hbmFnZXIsXG5cdFx0XHRzb3VyY2VTaXplLFxuXHRcdFx0c2NoZW1hTWFuYWdlcjtcblxuXHRcdGlmIChjb25maWcuaW5mb0RpYWxvZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpbmZvRGlhbG9nID0gY29uZmlnLmluZm9EaWFsb2c7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5jb2x1bW5zTWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5zTWFuYWdlciA9IGNvbmZpZy5jb2x1bW5zTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnNjaGVtYU1hbmFnZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c2NoZW1hTWFuYWdlciA9IGNvbmZpZy5zY2hlbWFNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuc291cmNlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzb3VyY2VTaXplID0gY29uZmlnLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcoXG5cdFx0XHRjb25maWcuZW5hYmxlZCxcblx0XHRcdGluZm9EaWFsb2csXG5cdFx0XHRjb2x1bW5zTWFuYWdlcixcblx0XHRcdHNjaGVtYU1hbmFnZXIsXG5cdFx0XHRzb3VyY2VTaXplKTtcblx0fVxufVxuIl19