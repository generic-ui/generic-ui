import { Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../api/theme/schema-theme';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { Injectable } from '@angular/core';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
import * as i0 from "@angular/core";
import * as i1 from "./schema.dispatcher";
import * as i2 from "../../../structure/core/api/structure.command-invoker";
import * as i3 from "@generic-ui/fabric";
export class SchemaDomainCommandInvoker extends SchemaCommandInvoker {
    constructor(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        super();
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
        this.fabricModalThemeService = fabricModalThemeService;
    }
    create(schemaId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    setTheme(theme, schemaId, structureId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    }
    setRowColoring(rowColoring, schemaId) {
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    setVerticalGrid(verticalGrid, schemaId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    toSchemaRowColoring(coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                return SchemaRowColoring.NONE;
        }
    }
    toFabricTheme(schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                return Theme.FABRIC;
        }
    }
}
SchemaDomainCommandInvoker.ɵfac = function SchemaDomainCommandInvoker_Factory(t) { return new (t || SchemaDomainCommandInvoker)(i0.ɵɵinject(i1.SchemaDispatcher), i0.ɵɵinject(i2.StructureCommandInvoker), i0.ɵɵinject(i3.FabricModalThemeService)); };
SchemaDomainCommandInvoker.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchemaDomainCommandInvoker, factory: SchemaDomainCommandInvoker.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaDomainCommandInvoker, [{
        type: Injectable
    }], function () { return [{ type: i1.SchemaDispatcher }, { type: i2.StructureCommandInvoker }, { type: i3.FabricModalThemeService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQTJCLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFJckUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjtJQUVuRSxZQUE2QixnQkFBa0MsRUFDM0MsdUJBQWdELEVBQ2hELHVCQUFnRDtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQUhvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUVwRSxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFrQixFQUN4QixRQUErQixFQUMvQixXQUF3QjtRQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUN6RixJQUFJLENBQUMsdUJBQXVCLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBd0IsRUFBRSxRQUErQjtRQUV2RSxNQUFNLGlCQUFpQixHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsZUFBZSxDQUFDLFlBQXFCLEVBQUUsUUFBK0I7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGlCQUFpQixDQUFDLGNBQXVCLEVBQUUsUUFBK0I7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU8sbUJBQW1CLENBQUMsUUFBcUI7UUFDaEQsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFFL0IsS0FBSyxXQUFXLENBQUMsR0FBRztnQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7WUFFOUIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFFL0I7Z0JBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7U0FDL0I7SUFDRixDQUFDO0lBRU8sYUFBYSxDQUFDLFdBQXdCO1FBRTdDLFFBQVEsV0FBVyxFQUFFO1lBQ3BCLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDbEI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3BCO1lBRUQsS0FBSyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNyQjtZQUVELEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDbkI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3RCO1lBRUQ7Z0JBQ0MsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBRXJCO0lBQ0YsQ0FBQzs7b0dBaEZXLDBCQUEwQjtnRkFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLCBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU2NoZW1hQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljTW9kYWxUaGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLmNyZWF0ZShzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lLFxuXHRcdFx0IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHQgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0XHR0aGlzLmZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLmNoYW5nZVRoZW1lKHRoaXMudG9GYWJyaWNUaGVtZSh0aGVtZSkpOyAvLyBUT0RPIGdpdGh1YiAjMjE2MlxuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNjaGVtYVJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyA9IHRoaXMudG9TY2hlbWFSb3dDb2xvcmluZyhyb3dDb2xvcmluZyk7XG5cblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0Um93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgdG9TY2hlbWFSb3dDb2xvcmluZyhjb2xvcmluZzogUm93Q29sb3JpbmcpOiBTY2hlbWFSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZykge1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk5PTkU6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0Y2FzZSBSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b0ZhYnJpY1RoZW1lKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSk6IFRoZW1lIHtcblxuXHRcdHN3aXRjaCAoc2NoZW1hVGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHR9XG5cdH1cbn1cbiJdfQ==