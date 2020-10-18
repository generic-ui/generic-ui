/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { guiGridProviders } from './gui.grid.providers';
import { structureParentComponent } from '../../../../structure/grid/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/core/api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/core/api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureCommandDispatcher } from '../../../../structure/core/api/structure.command-dispatcher';
var GuiGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiGridComponent, _super);
    function GuiGridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.gridRegister = gridRegister;
        _this.gridIdGenerator = gridIdGenerator;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.formationWarehouse = formationWarehouse;
        _this.sourceCommandDispatcher = sourceCommandDispatcher;
        _this.searchCommandInvoker = searchCommandInvoker;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.structureCommandDispatcher = structureCommandDispatcher;
        _this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(_this.schemaCommandInvoker, _this.gridThemeConverter, _this.gridRowColoringConverter);
        return _this;
    }
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initApi();
        /** @type {?} */
        var gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            function (gridId) {
                /** @type {?} */
                var gridConsoleConfig = _this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return _this.api;
                }
                else {
                    return undefined;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridRegister.unregister(this.localGridId);
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getGridId = /**
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.exposeGridId = /**
     * @private
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.initApi = /**
     * @private
     * @return {?}
     */
    function () {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher).provide();
    };
    GuiGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-grid',
                    template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                    providers: tslib_1.__spread(guiGridProviders, [
                        {
                            provide: structureParentComponent,
                            useExisting: GuiGridComponent
                        }
                    ]),
                    host: {
                        '[class.gui-grid]': "\"true\"",
                        '[style.height]': 'maxHeight'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-grid{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GuiGridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: GuiGridRegister },
        { type: GuiGridIdGenerator },
        { type: FormationCommandInvoker },
        { type: FormationWarehouse },
        { type: SourceCommandInvoker },
        { type: SearchCommandInvoker },
        { type: SchemaCommandInvoker },
        { type: StructureCommandDispatcher }
    ]; };
    GuiGridComponent.propDecorators = {
        structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
        gridId: [{ type: Input }]
    };
    return GuiGridComponent;
}(GuiGridGateway));
export { GuiGridComponent };
if (false) {
    /** @type {?} */
    GuiGridComponent.prototype.structureRef;
    /** @type {?} */
    GuiGridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.localGridId;
    /** @type {?} */
    GuiGridComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridThemeCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridIdGenerator;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.sourceCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.searchCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.structureCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFjLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDekcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0s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RXBELHNEQUFvRTs7Ozs7SUFDcEUsOENBQXVEOzs7OztJQUN2RCxtREFBOEQ7Ozs7O0lBQzlELGdEQUEyRDs7Ozs7SUFDM0QsZ0RBQTJEOzs7OztJQUMzRCxzREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkluaXQsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEd1aUdyaWRHYXRld2F5IH0gZnJvbSAnLi9ndWkuZ3JpZC1nYXRld2F5JztcbmltcG9ydCB7IGd1aUdyaWRQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5ncmlkLnByb3ZpZGVycyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuL3JlZ2lzdGVyL2d1aS5ncmlkLnJlZ2lzdGVyJztcbmltcG9ydCB7IEd1aUdyaWRBcGksIEd1aUdyaWRBcGlQcm92aWRlciB9IGZyb20gJy4vYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB9IGZyb20gJy4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ncmlkJyxcblx0dGVtcGxhdGVVcmw6ICcuL2d1aS5ncmlkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL2d1aS5ncmlkLm5neC5zY3NzJ1xuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5ndWlHcmlkUHJvdmlkZXJzLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCxcblx0XHRcdHVzZUV4aXN0aW5nOiBHdWlHcmlkQ29tcG9uZW50XG5cdFx0fVxuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZ3JpZF0nOiBgXCJ0cnVlXCJgLFxuXHRcdCdbc3R5bGUuaGVpZ2h0XSc6ICdtYXhIZWlnaHQnXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbXBvbmVudCBleHRlbmRzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRzdHJ1Y3R1cmVSZWY6IGFueTtcblxuXHRASW5wdXQoKVxuXHRncmlkSWQ6IHN0cmluZzsgLy8gY2FuIGJlIHNldCBvbmNlXG5cblx0cHJpdmF0ZSBsb2NhbEdyaWRJZDogc3RyaW5nO1xuXG5cdHB1YmxpYyBhcGk6IEd1aUdyaWRBcGk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFJlZ2lzdGVyOiBHdWlHcmlkUmVnaXN0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ3JpZElkR2VuZXJhdG9yOiBHdWlHcmlkSWRHZW5lcmF0b3IsXG5cdFx0XHRcdC8vIGRlbGVnYXRlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmREaXNwYXRjaGVyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IG5ldyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcihcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyXG5cdFx0KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdndWktZ3JpZC1pZCcsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCkucHJvdmlkZSgpO1xuXHR9XG5cbn1cbiJdfQ==