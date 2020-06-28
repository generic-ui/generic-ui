/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../domain-api/schema.warehouse';
import { SchemaRowColoring } from '../../domain/coloring/schema-row-coloring';
import { SchemaTheme } from '../../domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../domain-api/schema.command-dispatcher';
import { SchemaReadModelRootId } from '../../domain-api/read/schema.read-model-root-id';
import { RowColoring } from '../../domain-api/row-coloring';
var StructureSchemaMangerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSchemaMangerComponent, _super);
    function StructureSchemaMangerComponent(changeDetectorRef, schemaReadModelRootId, schemaCommandService, schemaReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.schemaCommandService = schemaCommandService;
        _this.schemaReadModelService = schemaReadModelService;
        _this.coloring = Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaRowColoring[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }));
        _this.themes = Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaTheme[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.schemaReadModelService
            .onRowColoring(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowColoring
         * @return {?}
         */
        function (rowColoring) {
            _this.selectedRowColoring = SchemaRowColoring[rowColoring];
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onTheme(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} schemaTheme
         * @return {?}
         */
        function (schemaTheme) {
            _this.selectedTheme = SchemaTheme[schemaTheme];
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onVerticalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} verticalGrid
         * @return {?}
         */
        function (verticalGrid) {
            _this.verticalGrid = verticalGrid;
            _this.changeDetectorRef.detectChanges();
        }));
        this.schemaReadModelService
            .onHorizontalGrid(this.schemaReadModelRootId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} horizontalGrid
         * @return {?}
         */
        function (horizontalGrid) {
            _this.horizontalGrid = horizontalGrid;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.schemaCommandService.setTheme(this.toTheme(theme), this.schemaReadModelRootId);
    };
    /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleRowColoring = /**
     * @param {?} schemaRowColoring
     * @return {?}
     */
    function (schemaRowColoring) {
        this.schemaCommandService.setRowColoring(this.toRowColoring(schemaRowColoring), this.schemaReadModelRootId);
    };
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleVerticalGrid = /**
     * @param {?} verticalGrid
     * @return {?}
     */
    function (verticalGrid) {
        this.schemaCommandService.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    };
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toggleHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    function (horizontalGrid) {
        this.schemaCommandService.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
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
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    StructureSchemaMangerComponent.prototype.toRowColoring = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring.toLowerCase()) {
            case 'none':
                return RowColoring.NONE;
            case 'odd':
                return RowColoring.ODD;
            case 'even':
                return RowColoring.EVEN;
        }
    };
    StructureSchemaMangerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-schema-manager',
                    template: "\n\t\t<div class=\"gui-schema-manager\">\n\t\t\t<div class=\"gui-dialog-title\">Theme manager:</div>\n\t\t\t<div class=\"gui-structure-schema-manager-select\">\n\t\t\t\t<span>Theme:</span>\n\t\t\t\t<gui-select [options]=\"themes\"\n\t\t\t\t\t\t\t[selected]=\"selectedTheme\"\n\t\t\t\t\t\t\t[placeholder]=\"'Select theme'\"\n\t\t\t\t\t\t\t(optionChanged)=\"toggleTheme($event)\">\n\t\t\t\t</gui-select>\n\t\t\t</div>\n\t\t\t<div class=\"gui-structure-schema-manager-select\">\n\t\t\t\t<span>Row coloring:</span>\n\t\t\t\t<gui-select [options]=\"coloring\"\n\t\t\t\t\t\t\t[selected]=\"selectedRowColoring\"\n\t\t\t\t\t\t\t(optionChanged)=\"toggleRowColoring($event)\">\n\t\t\t\t</gui-select>\n\t\t\t</div>\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\"\n\t\t\t\t\t\t  (changed)=\"toggleVerticalGrid($event)\">Vertical grid\n\t\t\t</gui-checkbox>\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\"\n\t\t\t\t\t\t  (changed)=\"toggleHorizontalGrid($event)\">Horizontal grid\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureSchemaMangerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: SchemaReadModelRootId },
        { type: SchemaCommandDispatcher },
        { type: SchemaWarehouse }
    ]; };
    return StructureSchemaMangerComponent;
}(Reactive));
export { StructureSchemaMangerComponent };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVEO0lBK0JvRCwwREFBUTtJQWUzRCx3Q0FBb0IsaUJBQW9DLEVBQzdDLHFCQUE0QyxFQUM1QyxvQkFBNkMsRUFDN0Msc0JBQXVDO1FBSGxELFlBSUMsaUJBQU8sU0FDUDtRQUxtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QjtRQUM3Qyw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQWlCO1FBaEJsRCxjQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFXLElBQUssT0FB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QVEsR0FrSDNEO1NBbEhZLDhCQUE4Qjs7O0lBRTFDLGtEQUU4Qzs7SUFFOUMsZ0RBRStDOztJQUUvQyw2REFBNEI7O0lBQzVCLHVEQUFzQjs7SUFDdEIsc0RBQXNCOztJQUN0Qix3REFBd0I7Ozs7O0lBRVosMkRBQTRDOzs7OztJQUNyRCwrREFBb0Q7Ozs7O0lBQ3BELDhEQUFxRDs7Ozs7SUFDckQsZ0VBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9yb3ctY29sb3JpbmcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNjaGVtYS1tYW5hZ2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWRpYWxvZy10aXRsZVwiPlRoZW1lIG1hbmFnZXI6PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1zZWxlY3RcIj5cblx0XHRcdFx0PHNwYW4+VGhlbWU6PC9zcGFuPlxuXHRcdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJ0aGVtZXNcIlxuXHRcdFx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRUaGVtZVwiXG5cdFx0XHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCInU2VsZWN0IHRoZW1lJ1wiXG5cdFx0XHRcdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVRoZW1lKCRldmVudClcIj5cblx0XHRcdFx0PC9ndWktc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1zZWxlY3RcIj5cblx0XHRcdFx0PHNwYW4+Um93IGNvbG9yaW5nOjwvc3Bhbj5cblx0XHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiY29sb3JpbmdcIlxuXHRcdFx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRSb3dDb2xvcmluZ1wiXG5cdFx0XHRcdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cInRvZ2dsZVJvd0NvbG9yaW5nKCRldmVudClcIj5cblx0XHRcdFx0PC9ndWktc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInZlcnRpY2FsR3JpZFwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZVZlcnRpY2FsR3JpZCgkZXZlbnQpXCI+VmVydGljYWwgZ3JpZFxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImhvcml6b250YWxHcmlkXCJcblx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlSG9yaXpvbnRhbEdyaWQoJGV2ZW50KVwiPkhvcml6b250YWwgZ3JpZFxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb2xvcmluZyA9IE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHR0aGVtZXMgPSBPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdFx0ICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHRcdCAgIC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0c2VsZWN0ZWRSb3dDb2xvcmluZzogc3RyaW5nO1xuXHRzZWxlY3RlZFRoZW1lOiBzdHJpbmc7XG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblx0aG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hQ29tbWFuZFNlcnZpY2U6IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHNjaGVtYVJlYWRNb2RlbFNlcnZpY2U6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dDb2xvcmluZyA9IFNjaGVtYVJvd0NvbG9yaW5nW3Jvd0NvbG9yaW5nXTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRUaGVtZSA9IFNjaGVtYVRoZW1lW3NjaGVtYVRoZW1lXTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uVmVydGljYWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZlcnRpY2FsR3JpZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnZlcnRpY2FsR3JpZCA9IHZlcnRpY2FsR3JpZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZCA9IGhvcml6b250YWxHcmlkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlVGhlbWUodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0VGhlbWUodGhpcy50b1RoZW1lKHRoZW1lKSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3Jpbmc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0Um93Q29sb3JpbmcodGhpcy50b1Jvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nKSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlSG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvUm93Q29sb3JpbmcoY29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cdFx0fVxuXHR9XG59XG4iXX0=