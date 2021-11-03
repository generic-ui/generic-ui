import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaRowColoring } from '../../core/api/row-coloring/schema-row-coloring';
import { SchemaTheme } from '../../core/api/theme/schema-theme';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/api/schema.read-model-root-id';
import { RowColoring } from '../../core/api/row-coloring/row-coloring';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureId } from '../../../structure/core/api/structure.id';
export class StructureSchemaMangerComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaCommandInvoker, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaWarehouse = schemaWarehouse;
        this.coloring = Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
        this.themes = Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .filter((val) => !Number.isInteger(val))
            .map((value) => {
            return {
                value: value,
                name: value
            };
        });
    }
    ngOnInit() {
        this.hermesSubscribe(this.schemaWarehouse.onRowColoring(this.schemaReadModelRootId), (rowColoring) => {
            this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        });
        this.hermesSubscribe(this.schemaWarehouse.onTheme(this.schemaReadModelRootId), (schemaTheme) => {
            this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        });
        this.hermesSubscribe(this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId), (verticalGrid) => {
            this.verticalGrid = verticalGrid;
        });
        this.hermesSubscribe(this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId), (horizontalGrid) => {
            this.horizontalGrid = horizontalGrid;
        });
    }
    toggleTheme(theme) {
        this.schemaCommandInvoker.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    }
    toggleRowColoring(schemaRowColoring) {
        this.schemaCommandInvoker.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    }
    toggleVerticalGrid(verticalGrid) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    toggleHorizontalGrid(horizontalGrid) {
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    }
    toTheme(theme) {
        switch (theme.toLowerCase()) {
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'generic':
                return SchemaTheme.GENERIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    toRowColoring(coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
            default:
                return RowColoring.NONE;
        }
    }
    getSelectorName() {
        return 'gui-structure-schema-manager';
    }
}
StructureSchemaMangerComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-schema-manager]',
                template: "<div class=\"gui-schema-manager gui-flex gui-flex-col\">\n\n\t<div class=\"gui-dialog-title\">{{'themeManagerModalTitle' | guiTranslate}}</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col gui-mb-10\">\n\t\t<span class=\"gui-mb-4\">{{'themeManagerModalTheme' | guiTranslate}}</span>\n\t\t<gui-select (optionChanged)=\"toggleTheme($event)\"\n\t\t\t\t\t[options]=\"themes\"\n\t\t\t\t\t[placeholder]=\"'Select theme'\"\n\t\t\t\t\t[selected]=\"selectedTheme\">\n\t\t</gui-select>\n\t</div>\n\n\t<div class=\"gui-structure-schema-manager-select gui-flex gui-flex-col\">\n\n\t\t<span class=\"gui-mb-4\">\n\t\t\t{{'themeManagerModalRowColoring' | guiTranslate}}\n\t\t</span>\n\n\t\t<gui-select (optionChanged)=\"toggleRowColoring($event)\"\n\t\t\t\t\t[options]=\"coloring\"\n\t\t\t\t\t[selected]=\"selectedRowColoring\">\n\t\t</gui-select>\n\t</div>\n\n\t<gui-checkbox (changed)=\"toggleVerticalGrid($event)\"\n\t\t\t\t  [checked]=\"verticalGrid\"\n\t\t\t\t  class=\"gui-mt-14\">\n\t\t{{'themeManagerModalVerticalGrid' | guiTranslate}}\n\t</gui-checkbox>\n\n\t<gui-checkbox (changed)=\"toggleHorizontalGrid($event)\"\n\t\t\t\t  [checked]=\"horizontalGrid\"\n\t\t\t\t  class=\"gui-mt-10\">\n\t\t{{'themeManagerModalHorizontalGrid' | guiTranslate}}\n\t</gui-checkbox>\n\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
StructureSchemaMangerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SchemaReadModelRootId },
    { type: SchemaCommandInvoker },
    { type: SchemaWarehouse }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBU3ZFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxjQUFjO0lBOEJqRSxZQUE2QixpQkFBb0MsRUFDOUQsS0FBaUIsRUFDQSxXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQU5KLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1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SUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLGl5Q0FBdUQ7Z0JBQ3ZELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O1lBbEJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBVWpFLFdBQVc7WUFIWCxxQkFBcUI7WUFEckIsb0JBQW9CO1lBSHBCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2xvcmluZzogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cblx0dGhlbWVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRzZWxlY3RlZFJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb247XG5cblx0c2VsZWN0ZWRUaGVtZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dDb2xvcmluZyA9IHtcblx0XHRcdFx0XHR2YWx1ZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddLFxuXHRcdFx0XHRcdG5hbWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkVGhlbWUgPSB7XG5cdFx0XHRcdFx0dmFsdWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXSxcblx0XHRcdFx0XHRuYW1lOiBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZS5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQodmVydGljYWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gdmVydGljYWxHcmlkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHR0b2dnbGVUaGVtZSh0aGVtZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRvVGhlbWUodGhlbWUudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZzogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnRvUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHByaXZhdGUgdG9UaGVtZSh0aGVtZTogc3RyaW5nKTogU2NoZW1hVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9Sb3dDb2xvcmluZyhjb2xvcmluZzogc3RyaW5nKTogUm93Q29sb3Jpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgJ29kZCc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5PREQ7XG5cblx0XHRcdGNhc2UgJ2V2ZW4nOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk5PTkU7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcic7XG5cdH1cbn1cbiJdfQ==