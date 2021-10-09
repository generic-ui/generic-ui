/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} changeDetectorRef
     * @param {?} elRef
     * @param {?} structureId
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCommandInvoker
     * @param {?} schemaWarehouse
     */
    constructor(changeDetectorRef, elRef, structureId, schemaReadModelRootId, schemaCommandInvoker, schemaWarehouse) {
        super(changeDetectorRef, elRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaWarehouse = schemaWarehouse;
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
        (val) => !Number.isInteger(val)))
            .map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return {
                value: value,
                name: value
            };
        }));
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
        (val) => !Number.isInteger(val)))
            .map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return {
                value: value,
                name: value
            };
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.schemaWarehouse.onRowColoring(this.schemaReadModelRootId), (/**
         * @param {?} rowColoring
         * @return {?}
         */
        (rowColoring) => {
            this.selectedRowColoring = {
                value: SchemaRowColoring[rowColoring],
                name: SchemaRowColoring[rowColoring]
            };
        }));
        this.hermesSubscribe(this.schemaWarehouse.onTheme(this.schemaReadModelRootId), (/**
         * @param {?} schemaTheme
         * @return {?}
         */
        (schemaTheme) => {
            this.selectedTheme = {
                value: SchemaTheme[schemaTheme],
                name: SchemaTheme[schemaTheme]
            };
        }));
        this.hermesSubscribe(this.schemaWarehouse.onVerticalGrid(this.schemaReadModelRootId), (/**
         * @param {?} verticalGrid
         * @return {?}
         */
        (verticalGrid) => {
            this.verticalGrid = verticalGrid;
        }));
        this.hermesSubscribe(this.schemaWarehouse.onHorizontalGrid(this.schemaReadModelRootId), (/**
         * @param {?} horizontalGrid
         * @return {?}
         */
        (horizontalGrid) => {
            this.horizontalGrid = horizontalGrid;
        }));
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    toggleTheme(theme) {
        this.schemaCommandInvoker.setTheme(this.toTheme(theme.value), this.schemaReadModelRootId, this.structureId);
    }
    /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    toggleRowColoring(schemaRowColoring) {
        this.schemaCommandInvoker.setRowColoring(this.toRowColoring(schemaRowColoring.value), this.schemaReadModelRootId);
    }
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    toggleVerticalGrid(verticalGrid) {
        this.schemaCommandInvoker.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    toggleHorizontalGrid(horizontalGrid) {
        this.schemaCommandInvoker.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
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
            default:
                break;
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
            default:
                break;
        }
    }
    /**
     * @protected
     * @return {?}
     */
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
            }] }
];
/** @nocollapse */
StructureSchemaMangerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SchemaReadModelRootId },
    { type: SchemaCommandInvoker },
    { type: SchemaWarehouse }
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
    StructureSchemaMangerComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.schemaWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVN2RSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBOEJqRSxZQUE2QixpQkFBb0MsRUFDOUQsS0FBaUIsRUFDQSxXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsb0JBQTBDLEVBQzFDLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQU5KLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5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QyxDQUFDOzs7WUE3SUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLGl5Q0FBdUQ7Z0JBQ3ZELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQWxCaUMsaUJBQWlCO1lBQWEsVUFBVTtZQVVqRSxXQUFXO1lBSFgscUJBQXFCO1lBRHJCLG9CQUFvQjtZQUhwQixlQUFlOzs7O0lBa0J2QixrREFRYzs7SUFFZCxnREFRZTs7SUFFZiw2REFBcUM7O0lBRXJDLHVEQUErQjs7SUFFL0Isc0RBQXNCOztJQUV0Qix3REFBd0I7Ozs7O0lBRVosMkRBQXFEOzs7OztJQUU5RCxxREFBeUM7Ozs7O0lBQ3pDLCtEQUE2RDs7Ozs7SUFDN0QsOERBQTJEOzs7OztJQUMzRCx5REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2xvcmluZzogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiA9IE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfSk7XG5cblx0dGhlbWVzOiBBcnJheTxHdWlTZWxlY3RPcHRpb24+ID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbmFtZTogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRzZWxlY3RlZFJvd0NvbG9yaW5nOiBHdWlTZWxlY3RPcHRpb247XG5cblx0c2VsZWN0ZWRUaGVtZTogR3VpU2VsZWN0T3B0aW9uO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFXYXJlaG91c2U6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dDb2xvcmluZyA9IHtcblx0XHRcdFx0XHR2YWx1ZTogU2NoZW1hUm93Q29sb3Jpbmdbcm93Q29sb3JpbmddLFxuXHRcdFx0XHRcdG5hbWU6IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkVGhlbWUgPSB7XG5cdFx0XHRcdFx0dmFsdWU6IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXSxcblx0XHRcdFx0XHRuYW1lOiBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZS5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQodmVydGljYWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMudmVydGljYWxHcmlkID0gdmVydGljYWxHcmlkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc2NoZW1hV2FyZWhvdXNlLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpLFxuXHRcdFx0KGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHR0b2dnbGVUaGVtZSh0aGVtZTogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRvVGhlbWUodGhlbWUudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHR0b2dnbGVSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZzogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnRvUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3JpbmcudmFsdWUpLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdHByaXZhdGUgdG9UaGVtZSh0aGVtZTogc3RyaW5nKTogU2NoZW1hVGhlbWUge1xuXHRcdHN3aXRjaCAodGhlbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0XHRjYXNlICdmYWJyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlICdsaWdodCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSAnZGFyayc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvUm93Q29sb3JpbmcoY29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXInO1xuXHR9XG59XG4iXX0=