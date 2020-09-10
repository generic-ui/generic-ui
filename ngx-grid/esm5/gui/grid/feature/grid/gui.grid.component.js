/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { guiGridProviders } from './gui.grid.providers';
import { structureParentComponent } from '../../../../structure/core/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/domain-api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/domain-api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/domain-api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/domain-api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/domain-api/schema.command-invoker';
var GuiGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiGridComponent, _super);
    function GuiGridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker) {
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
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker).provide();
    };
    GuiGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-grid',
                    template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
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
        { type: SchemaCommandInvoker }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUV6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFjLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDdEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDM0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUY7SUFtQnNDLDRDQUFjO0lBY25ELDBCQUFrRCxV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Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkluaXQsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEd1aUdyaWRHYXRld2F5IH0gZnJvbSAnLi9ndWkuZ3JpZC1nYXRld2F5JztcbmltcG9ydCB7IGd1aUdyaWRQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5ncmlkLnByb3ZpZGVycyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvc3RydWN0dXJlLXBhcmVudC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHdWlHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuL3JlZ2lzdGVyL2d1aS5ncmlkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBHdWlHcmlkUmVnaXN0ZXIgfSBmcm9tICcuL3JlZ2lzdGVyL2d1aS5ncmlkLnJlZ2lzdGVyJztcbmltcG9ydCB7IEd1aUdyaWRBcGksIEd1aUdyaWRBcGlQcm92aWRlciB9IGZyb20gJy4vYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWdyaWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmdyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3VpLmdyaWQubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUdyaWRQcm92aWRlcnMsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogc3RydWN0dXJlUGFyZW50Q29tcG9uZW50LFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEd1aUdyaWRDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1ncmlkXSc6IGBcInRydWVcImAsXG5cdFx0J1tzdHlsZS5oZWlnaHRdJzogJ21heEhlaWdodCdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHdWlHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3VpR3JpZEdhdGV3YXkgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwcml2YXRlIGxvY2FsR3JpZElkOiBzdHJpbmc7XG5cblx0cHVibGljIGFwaTogR3VpR3JpZEFwaTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUmVnaXN0ZXI6IEd1aUdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkSWRHZW5lcmF0b3I6IEd1aUdyaWRJZEdlbmVyYXRvcixcblx0XHRcdFx0Ly8gZGVsZWdhdGVcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZERpc3BhdGNoZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXJcblx0KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBuZXcgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIoXG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5ncmlkVGhlbWVDb252ZXJ0ZXIsXG5cdFx0XHR0aGlzLmdyaWRSb3dDb2xvcmluZ0NvbnZlcnRlclxuXHRcdCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXRBcGkoKTtcblxuXHRcdGxldCBncmlkSWQgPSB0aGlzLmdyaWRJZDtcblxuXHRcdGlmIChncmlkSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Z3JpZElkID0gdGhpcy5ncmlkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpO1xuXHRcdH1cblxuXHRcdHRoaXMubG9jYWxHcmlkSWQgPSBncmlkSWQ7XG5cblx0XHR0aGlzLmV4cG9zZUdyaWRJZCgpO1xuXG5cdFx0Ly8gcmVnaXN0ZXJcblx0XHR0aGlzLmdyaWRSZWdpc3Rlci5yZWdpc3RlcihncmlkSWQsIHRoaXMsIHRoaXMuc3RydWN0dXJlUmVmLmdldFN0cnVjdHVyZUlkKCkpO1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHdpbmRvd1snZ2V0R3VpR3JpZCddID0gKGdyaWRJZDogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZ3JpZENvbnNvbGVDb25maWcgPSB0aGlzLmdyaWRSZWdpc3Rlci5nZXRWYWx1ZXMoZ3JpZElkKTtcblxuXHRcdFx0XHRpZiAoZ3JpZENvbnNvbGVDb25maWcpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hcGk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmdyaWRSZWdpc3Rlci51bnJlZ2lzdGVyKHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0Z2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuXHR9XG5cblx0Z2V0R3JpZElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlR3JpZElkKCk6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpLWdyaWQtaWQnLCB0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdEFwaSgpOiB2b2lkIHtcblx0XHR0aGlzLmFwaSA9IG5ldyBHdWlHcmlkQXBpUHJvdmlkZXIoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJlZi5zdHJ1Y3R1cmVJZCxcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlclxuXHRcdCkucHJvdmlkZSgpO1xuXHR9XG5cbn1cbiJdfQ==