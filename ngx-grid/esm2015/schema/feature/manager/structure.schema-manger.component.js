/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../domain-api/schema.warehouse';
import { SchemaRowColoring } from '../../domain/coloring/schema-row-coloring';
import { SchemaTheme } from '../../domain/theme/schema-theme';
import { SchemaCommandInvoker } from '../../domain-api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../domain-api/read/schema.read-model-root-id';
import { RowColoring } from '../../domain-api/row-coloring';
import { FabricDialogThemeService } from '@generic-ui/fabric';
export class StructureSchemaMangerComponent extends Reactive {
    /**
     * @param {?} changeDetectorRef
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCommandService
     * @param {?} schemaReadModelService
     * @param {?} dialogThemeService
     */
    constructor(changeDetectorRef, schemaReadModelRootId, schemaCommandService, schemaReadModelService, dialogThemeService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaCommandService = schemaCommandService;
        this.schemaReadModelService = schemaReadModelService;
        this.dialogThemeService = dialogThemeService;
        this.coloring = Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaRowColoring[key]))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
        this.themes = Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaTheme[key]))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.schemaReadModelService
            .onRowColoring(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowColoring
         * @return {?}
         */
        (rowColoring) => {
            this.selectedRowColoring = SchemaRowColoring[rowColoring];
            this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onTheme(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} schemaTheme
         * @return {?}
         */
        (schemaTheme) => {
            this.selectedTheme = SchemaTheme[schemaTheme];
            this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onVerticalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} verticalGrid
         * @return {?}
         */
        (verticalGrid) => {
            this.verticalGrid = verticalGrid;
            this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onHorizontalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} horizontalGrid
         * @return {?}
         */
        (horizontalGrid) => {
            this.horizontalGrid = horizontalGrid;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    toggleTheme(theme) {
        this.schemaCommandService.setTheme(this.toTheme(theme), this.schemaReadModelRootId);
        this.dialogThemeService.nextTheme(theme);
    }
    /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    toggleRowColoring(schemaRowColoring) {
        this.schemaCommandService.setRowColoring(this.toRowColoring(schemaRowColoring), this.schemaReadModelRootId);
    }
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    toggleVerticalGrid(verticalGrid) {
        this.schemaCommandService.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    toggleHorizontalGrid(horizontalGrid) {
        this.schemaCommandService.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
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
        }
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    toRowColoring(coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
        }
    }
}
StructureSchemaMangerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-schema-manager',
                template: `
		<div class="gui-schema-manager">
			<div class="gui-dialog-title">Theme manager:</div>
			<div class="gui-structure-schema-manager-select">
				<span>Theme:</span>
				<gui-select [options]="themes"
							[selected]="selectedTheme"
							[placeholder]="'Select theme'"
							(optionChanged)="toggleTheme($event)">
				</gui-select>
			</div>
			<div class="gui-structure-schema-manager-select">
				<span>Row coloring:</span>
				<gui-select [options]="coloring"
							[selected]="selectedRowColoring"
							(optionChanged)="toggleRowColoring($event)">
				</gui-select>
			</div>
			<gui-checkbox [checked]="verticalGrid"
						  (changed)="toggleVerticalGrid($event)">Vertical grid
			</gui-checkbox>
			<gui-checkbox [checked]="horizontalGrid"
						  (changed)="toggleHorizontalGrid($event)">Horizontal grid
			</gui-checkbox>
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StructureSchemaMangerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: SchemaReadModelRootId },
    { type: SchemaCommandInvoker },
    { type: SchemaWarehouse },
    { type: FabricDialogThemeService }
];
if (false) {
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.coloring;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.themes;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.selectedRowColoring;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.selectedTheme;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.verticalGrid;
    /** @type {?} */
    StructureSchemaMangerComponent.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.dialogThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFpQzlELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxRQUFROzs7Ozs7OztJQWUzRCxZQUE2QixpQkFBb0MsRUFDN0MscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxzQkFBdUMsRUFDdkMsa0JBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBTG9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUI7UUFDdkMsdUJB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dUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBeENpQyxpQkFBaUI7WUFNMUMscUJBQXFCO1lBRHJCLG9CQUFvQjtZQUhwQixlQUFlO1lBTWYsd0JBQXdCOzs7O0lBbUNoQyxrREFFOEM7O0lBRTlDLGdEQUUrQzs7SUFFL0MsNkRBQTRCOztJQUM1Qix1REFBc0I7O0lBQ3RCLHNEQUFzQjs7SUFDdEIsd0RBQXdCOzs7OztJQUVaLDJEQUFxRDs7Ozs7SUFDOUQsK0RBQTZEOzs7OztJQUM3RCw4REFBMkQ7Ozs7O0lBQzNELGdFQUF3RDs7Ozs7SUFDeEQsNERBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1zY2hlbWEtbWFuYWdlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1kaWFsb2ctdGl0bGVcIj5UaGVtZSBtYW5hZ2VyOjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItc2VsZWN0XCI+XG5cdFx0XHRcdDxzcGFuPlRoZW1lOjwvc3Bhbj5cblx0XHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwidGhlbWVzXCJcblx0XHRcdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkVGhlbWVcIlxuXHRcdFx0XHRcdFx0XHRbcGxhY2Vob2xkZXJdPVwiJ1NlbGVjdCB0aGVtZSdcIlxuXHRcdFx0XHRcdFx0XHQob3B0aW9uQ2hhbmdlZCk9XCJ0b2dnbGVUaGVtZSgkZXZlbnQpXCI+XG5cdFx0XHRcdDwvZ3VpLXNlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItc2VsZWN0XCI+XG5cdFx0XHRcdDxzcGFuPlJvdyBjb2xvcmluZzo8L3NwYW4+XG5cdFx0XHRcdDxndWktc2VsZWN0IFtvcHRpb25zXT1cImNvbG9yaW5nXCJcblx0XHRcdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkUm93Q29sb3JpbmdcIlxuXHRcdFx0XHRcdFx0XHQob3B0aW9uQ2hhbmdlZCk9XCJ0b2dnbGVSb3dDb2xvcmluZygkZXZlbnQpXCI+XG5cdFx0XHRcdDwvZ3VpLXNlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJ2ZXJ0aWNhbEdyaWRcIlxuXHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVWZXJ0aWNhbEdyaWQoJGV2ZW50KVwiPlZlcnRpY2FsIGdyaWRcblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJob3Jpem9udGFsR3JpZFwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZUhvcml6b250YWxHcmlkKCRldmVudClcIj5Ib3Jpem9udGFsIGdyaWRcblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29sb3JpbmcgPSBPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdFx0XHQgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHRcdFx0IC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0dGhlbWVzID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdHNlbGVjdGVkUm93Q29sb3Jpbmc6IHN0cmluZztcblx0c2VsZWN0ZWRUaGVtZTogc3RyaW5nO1xuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRTZXJ2aWNlOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxTZXJ2aWNlOiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nVGhlbWVTZXJ2aWNlOiBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZ1tyb3dDb2xvcmluZ107XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkVGhlbWUgPSBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV07XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSB2ZXJ0aWNhbEdyaWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhvcml6b250YWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVRoZW1lKHRoZW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFRoZW1lKHRoaXMudG9UaGVtZSh0aGVtZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0XHR0aGlzLmRpYWxvZ1RoZW1lU2VydmljZS5uZXh0VGhlbWUodGhlbWUpO1xuXHR9XG5cblx0dG9nZ2xlUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3Jpbmc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0Um93Q29sb3JpbmcodGhpcy50b1Jvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nKSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlSG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvUm93Q29sb3JpbmcoY29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cdFx0fVxuXHR9XG59XG4iXX0=