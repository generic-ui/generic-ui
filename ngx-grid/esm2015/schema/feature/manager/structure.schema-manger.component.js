/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDialogThemeService } from '@generic-ui/fabric';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaRowColoring } from '../../core/api/schema-row-coloring';
import { SchemaTheme } from '../../core/api/schema-theme';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/domain-read/schema.read-model-root-id';
import { RowColoring } from '../../core/api/row-coloring';
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
			<div class="gui-dialog-title">{{'themeManagerModalTitle' | translate}}</div>
			<div class="gui-structure-schema-manager-select">
				<span>{{'themeManagerModalTheme' | translate}}</span>
				<gui-select [options]="themes"
							[selected]="selectedTheme"
							[placeholder]="'Select theme'"
							(optionChanged)="toggleTheme($event)">
				</gui-select>
			</div>
			<div class="gui-structure-schema-manager-select">
				<span>{{'themeManagerModalRowColoring' | translate}}</span>
				<gui-select [options]="coloring"
							[selected]="selectedRowColoring"
							(optionChanged)="toggleRowColoring($event)">
				</gui-select>
			</div>
			<gui-checkbox [checked]="verticalGrid"
						  (changed)="toggleVerticalGrid($event)">{{'themeManagerModalVerticalGrid' | translate}}
			</gui-checkbox>
			<gui-checkbox [checked]="horizontalGrid"
						  (changed)="toggleHorizontalGrid($event)">{{'themeManagerModalHorizontalGrid' | translate}}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFrQzFELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxRQUFROzs7Ozs7OztJQWUzRCxZQUE2QixpQkFBb0MsRUFDN0MscUJBQTRDLEVBQzVDLG9CQUEwQyxFQUMxQyxzQkFBdUMsRUFDdkMsa0JBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBTG9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUI7UUFDdkMsdUJB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dUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBM0NpQyxpQkFBaUI7WUFTMUMscUJBQXFCO1lBRHJCLG9CQUFvQjtZQUhwQixlQUFlO1lBSGYsd0JBQXdCOzs7O0lBNENoQyxrREFFOEM7O0lBRTlDLGdEQUUrQzs7SUFFL0MsNkRBQTRCOztJQUM1Qix1REFBc0I7O0lBQ3RCLHNEQUFzQjs7SUFDdEIsd0RBQXdCOzs7OztJQUVaLDJEQUFxRDs7Ozs7SUFDOUQsK0RBQTZEOzs7OztJQUM3RCw4REFBMkQ7Ozs7O0lBQzNELGdFQUF3RDs7Ozs7SUFDeEQsNERBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LWNvbG9yaW5nJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNjaGVtYS1tYW5hZ2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRpYWxvZy10aXRsZVwiPnt7J3RoZW1lTWFuYWdlck1vZGFsVGl0bGUnIHwgdHJhbnNsYXRlfX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLXNlbGVjdFwiPlxuXHRcdFx0XHQ8c3Bhbj57eyd0aGVtZU1hbmFnZXJNb2RhbFRoZW1lJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJ0aGVtZXNcIlxuXHRcdFx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRUaGVtZVwiXG5cdFx0XHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IHRoZW1lJ1wiXG5cdFx0XHRcdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVRoZW1lKCRldmVudClcIj5cblx0XHRcdFx0PC9ndWktc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1zZWxlY3RcIj5cblx0XHRcdFx0PHNwYW4+e3sndGhlbWVNYW5hZ2VyTW9kYWxSb3dDb2xvcmluZycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cblx0XHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiY29sb3JpbmdcIlxuXHRcdFx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRSb3dDb2xvcmluZ1wiXG5cdFx0XHRcdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVJvd0NvbG9yaW5nKCRldmVudClcIj5cblx0XHRcdFx0PC9ndWktc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInZlcnRpY2FsR3JpZFwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZVZlcnRpY2FsR3JpZCgkZXZlbnQpXCI+e3sndGhlbWVNYW5hZ2VyTW9kYWxWZXJ0aWNhbEdyaWQnIHwgdHJhbnNsYXRlfX1cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJob3Jpem9udGFsR3JpZFwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZUhvcml6b250YWxHcmlkKCRldmVudClcIj57eyd0aGVtZU1hbmFnZXJNb2RhbEhvcml6b250YWxHcmlkJyB8IHRyYW5zbGF0ZX19XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbG9yaW5nID0gT2JqZWN0LmtleXMoU2NoZW1hUm93Q29sb3JpbmcpXG5cdFx0XHRcdFx0IC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFSb3dDb2xvcmluZ1trZXldKVxuXHRcdFx0XHRcdCAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdHRoZW1lcyA9IE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0XHQgICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdFx0ICAgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHRzZWxlY3RlZFJvd0NvbG9yaW5nOiBzdHJpbmc7XG5cdHNlbGVjdGVkVGhlbWU6IHN0cmluZztcblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kU2VydmljZTogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsU2VydmljZTogU2NoZW1hV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1RoZW1lU2VydmljZTogRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd0NvbG9yaW5nID0gU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFRoZW1lID0gU2NoZW1hVGhlbWVbc2NoZW1hVGhlbWVdO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25WZXJ0aWNhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmVydGljYWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gdmVydGljYWxHcmlkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Ib3Jpem9udGFsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChob3Jpem9udGFsR3JpZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmhvcml6b250YWxHcmlkID0gaG9yaXpvbnRhbEdyaWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVUaGVtZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRUaGVtZSh0aGlzLnRvVGhlbWUodGhlbWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdFx0dGhpcy5kaWFsb2dUaGVtZVNlcnZpY2UubmV4dFRoZW1lKHRoZW1lKTtcblx0fVxuXG5cdHRvZ2dsZVJvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFJvd0NvbG9yaW5nKHRoaXMudG9Sb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZyksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZVZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1RoZW1lKHRoZW1lOiBzdHJpbmcpOiBTY2hlbWFUaGVtZSB7XG5cdFx0c3dpdGNoICh0aGVtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ2ZhYnJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlICdnZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgJ2xpZ2h0Jzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlICdkYXJrJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkRBUks7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b1Jvd0NvbG9yaW5nKGNvbG9yaW5nOiBzdHJpbmcpOiBSb3dDb2xvcmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZy50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuTk9ORTtcblxuXHRcdFx0Y2FzZSAnb2RkJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLk9ERDtcblxuXHRcdFx0Y2FzZSAnZXZlbic6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5FVkVOO1xuXHRcdH1cblx0fVxufVxuIl19