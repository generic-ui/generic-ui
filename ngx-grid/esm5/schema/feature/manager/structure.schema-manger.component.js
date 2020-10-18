/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDialogThemeService } from '@generic-ui/fabric';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../core/api/schema.warehouse';
import { SchemaRowColoring } from '../../core/api/schema-row-coloring';
import { SchemaTheme } from '../../core/api/schema-theme';
import { SchemaCommandInvoker } from '../../core/api/schema.command-invoker';
import { SchemaReadModelRootId } from '../../core/domain-read/schema.read-model-root-id';
import { RowColoring } from '../../core/api/row-coloring';
var StructureSchemaMangerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSchemaMangerComponent, _super);
    function StructureSchemaMangerComponent(changeDetectorRef, schemaReadModelRootId, schemaCommandService, schemaReadModelService, dialogThemeService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.schemaCommandService = schemaCommandService;
        _this.schemaReadModelService = schemaReadModelService;
        _this.dialogThemeService = dialogThemeService;
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
        this.dialogThemeService.nextTheme(theme);
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
                    template: "\n\t\t<div class=\"gui-schema-manager\">\n\t\t\t<div class=\"gui-dialog-title\">{{'themeManagerModalTitle' | translate}}</div>\n\t\t\t<div class=\"gui-structure-schema-manager-select\">\n\t\t\t\t<span>{{'themeManagerModalTheme' | translate}}</span>\n\t\t\t\t<gui-select [options]=\"themes\"\n\t\t\t\t\t\t\t[selected]=\"selectedTheme\"\n\t\t\t\t\t\t\t[placeholder]=\"'Select theme'\"\n\t\t\t\t\t\t\t(optionChanged)=\"toggleTheme($event)\">\n\t\t\t\t</gui-select>\n\t\t\t</div>\n\t\t\t<div class=\"gui-structure-schema-manager-select\">\n\t\t\t\t<span>{{'themeManagerModalRowColoring' | translate}}</span>\n\t\t\t\t<gui-select [options]=\"coloring\"\n\t\t\t\t\t\t\t[selected]=\"selectedRowColoring\"\n\t\t\t\t\t\t\t(optionChanged)=\"toggleRowColoring($event)\">\n\t\t\t\t</gui-select>\n\t\t\t</div>\n\t\t\t<gui-checkbox [checked]=\"verticalGrid\"\n\t\t\t\t\t\t  (changed)=\"toggleVerticalGrid($event)\">{{'themeManagerModalVerticalGrid' | translate}}\n\t\t\t</gui-checkbox>\n\t\t\t<gui-checkbox [checked]=\"horizontalGrid\"\n\t\t\t\t\t\t  (changed)=\"toggleHorizontalGrid($event)\">{{'themeManagerModalHorizontalGrid' | translate}}\n\t\t\t</gui-checkbox>\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureSchemaMangerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: SchemaReadModelRootId },
        { type: SchemaCommandInvoker },
        { type: SchemaWarehouse },
        { type: FabricDialogThemeService }
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
    /**
     * @type {?}
     * @private
     */
    StructureSchemaMangerComponent.prototype.dialogThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3N0cnVjdHVyZS5zY2hlbWEtbWFuZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzFEO0lBK0JvRCwwREFBUTtJQWUzRCx3Q0FBNkIsaUJBQW9DLEVBQzdDLHFCQUE0QyxFQUM1QyxvQkFBMEMsRUFDMUMsc0JBQXVDLEVBQ3ZDLGtCQUE0QztRQUpoRSxZQUtDLGlCQUFPLFNBQ1A7UUFONEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QywyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjtRQUN2Qyx3QkFBa0IsR0FBbEIsa0JBQWtCLENB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Q0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBM0NpQyxpQkFBaUI7Z0JBUzFDLHFCQUFxQjtnQkFEckIsb0JBQW9CO2dCQUhwQixlQUFlO2dCQUhmLHdCQUF3Qjs7SUE4SmpDLHFDQUFDO0NBQUEsQUFuSkQsQ0ErQm9ELFFBQVEsR0FvSDNEO1NBcEhZLDhCQUE4Qjs7O0lBRTFDLGtEQUU4Qzs7SUFFOUMsZ0RBRStDOztJQUUvQyw2REFBNEI7O0lBQzVCLHVEQUFzQjs7SUFDdEIsc0RBQXNCOztJQUN0Qix3REFBd0I7Ozs7O0lBRVosMkRBQXFEOzs7OztJQUM5RCwrREFBNkQ7Ozs7O0lBQzdELDhEQUEyRDs7Ozs7SUFDM0QsZ0VBQXdEOzs7OztJQUN4RCw0REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yb3ctY29sb3JpbmcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktc2NoZW1hLW1hbmFnZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktZGlhbG9nLXRpdGxlXCI+e3sndGhlbWVNYW5hZ2VyTW9kYWxUaXRsZScgfCB0cmFuc2xhdGV9fTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItc2VsZWN0XCI+XG5cdFx0XHRcdDxzcGFuPnt7J3RoZW1lTWFuYWdlck1vZGFsVGhlbWUnIHwgdHJhbnNsYXRlfX08L3NwYW4+XG5cdFx0XHRcdDxndWktc2VsZWN0IFtvcHRpb25zXT1cInRoZW1lc1wiXG5cdFx0XHRcdFx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFRoZW1lXCJcblx0XHRcdFx0XHRcdFx0W3BsYWNlaG9sZGVyXT1cIidTZWxlY3QgdGhlbWUnXCJcblx0XHRcdFx0XHRcdFx0KG9wdGlvbkNoYW5nZWQpPVwidG9nZ2xlVGhlbWUoJGV2ZW50KVwiPlxuXHRcdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLXNlbGVjdFwiPlxuXHRcdFx0XHQ8c3Bhbj57eyd0aGVtZU1hbmFnZXJNb2RhbFJvd0NvbG9yaW5nJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuXHRcdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJjb2xvcmluZ1wiXG5cdFx0XHRcdFx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFJvd0NvbG9yaW5nXCJcblx0XHRcdFx0XHRcdFx0KG9wdGlvbkNoYW5nZWQpPVwidG9nZ2xlUm93Q29sb3JpbmcoJGV2ZW50KVwiPlxuXHRcdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwidmVydGljYWxHcmlkXCJcblx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlVmVydGljYWxHcmlkKCRldmVudClcIj57eyd0aGVtZU1hbmFnZXJNb2RhbFZlcnRpY2FsR3JpZCcgfCB0cmFuc2xhdGV9fVxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImhvcml6b250YWxHcmlkXCJcblx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlSG9yaXpvbnRhbEdyaWQoJGV2ZW50KVwiPnt7J3RoZW1lTWFuYWdlck1vZGFsSG9yaXpvbnRhbEdyaWQnIHwgdHJhbnNsYXRlfX1cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29sb3JpbmcgPSBPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdFx0XHQgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHRcdFx0IC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0dGhlbWVzID0gT2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHRcdCAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0XHQgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdHNlbGVjdGVkUm93Q29sb3Jpbmc6IHN0cmluZztcblx0c2VsZWN0ZWRUaGVtZTogc3RyaW5nO1xuXHR2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW47XG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRTZXJ2aWNlOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxTZXJ2aWNlOiBTY2hlbWFXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nVGhlbWVTZXJ2aWNlOiBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93Q29sb3JpbmcgPSBTY2hlbWFSb3dDb2xvcmluZ1tyb3dDb2xvcmluZ107XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkVGhlbWUgPSBTY2hlbWFUaGVtZVtzY2hlbWFUaGVtZV07XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSB2ZXJ0aWNhbEdyaWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhvcml6b250YWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGhvcml6b250YWxHcmlkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSBob3Jpem9udGFsR3JpZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVRoZW1lKHRoZW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFRoZW1lKHRoaXMudG9UaGVtZSh0aGVtZSksIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0XHR0aGlzLmRpYWxvZ1RoZW1lU2VydmljZS5uZXh0VGhlbWUodGhlbWUpO1xuXHR9XG5cblx0dG9nZ2xlUm93Q29sb3Jpbmcoc2NoZW1hUm93Q29sb3Jpbmc6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0Um93Q29sb3JpbmcodGhpcy50b1Jvd0NvbG9yaW5nKHNjaGVtYVJvd0NvbG9yaW5nKSwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlVmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0dG9nZ2xlSG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRwcml2YXRlIHRvVGhlbWUodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblx0XHRzd2l0Y2ggKHRoZW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgJ2dlbmVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvUm93Q29sb3JpbmcoY29sb3Jpbmc6IHN0cmluZyk6IFJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdHJldHVybiBSb3dDb2xvcmluZy5OT05FO1xuXG5cdFx0XHRjYXNlICdvZGQnOlxuXHRcdFx0XHRyZXR1cm4gUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlICdldmVuJzpcblx0XHRcdFx0cmV0dXJuIFJvd0NvbG9yaW5nLkVWRU47XG5cdFx0fVxuXHR9XG59XG4iXX0=