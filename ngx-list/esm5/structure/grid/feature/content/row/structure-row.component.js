/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { RowSelectToggleType } from '../../../../source/core/domain/formation/core/row-select-toggle-type';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowComponent, _super);
    function StructureRowComponent(changeDetectorRef, elRef, renderer2, structureId, formationWarehouse, formationCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elRef = elRef;
        _this.renderer2 = renderer2;
        _this.structureId = structureId;
        _this.formationWarehouse = formationWarehouse;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.detailsEnabled = false;
        _this.checkboxSelection = false;
        _this.selectedItem = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureRowComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.entity !== undefined && changes.entity.currentValue !== undefined) {
            this.checkSelectedItem();
        }
        if (changes.rowClass !== undefined && changes.rowClass.currentValue !== undefined) {
            this.updateRowClass();
        }
        if (changes.rowStyle !== undefined && changes.rowStyle.currentValue !== undefined) {
            this.updateRowStyle();
        }
    };
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            _this.row = row;
            /** @type {?} */
            var prevValue = _this.selectedItem;
            _this.checkSelectedItem();
            if (prevValue !== _this.selectedItem) {
                if (prevValue) {
                    _this.renderer2.removeClass(_this.elRef.nativeElement, 'selected');
                }
                else {
                    _this.renderer2.addClass(_this.elRef.nativeElement, 'selected');
                }
                _this.changeDetectorRef.detectChanges();
            }
        }));
    };
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.updateRowClass();
        this.updateRowStyle();
    };
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.selectRow = /**
     * @return {?}
     */
    function () {
        event.stopPropagation();
        this.formationCommandDispatcher.toggleSelectedRow(this.entity.getId(), RowSelectToggleType.ADD, this.structureId);
    };
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.checkSelectedItem = /**
     * @return {?}
     */
    function () {
        if (this.row) {
            /** @type {?} */
            var prevValue = this.selectedItem;
            this.selectedItem = this.row.isSelected(this.entity.getId());
            if (prevValue !== this.selectedItem) {
                if (prevValue) {
                    this.renderer2.removeClass(this.elRef.nativeElement, 'selected');
                }
                else {
                    this.renderer2.addClass(this.elRef.nativeElement, 'selected');
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    StructureRowComponent.prototype.updateRowStyle = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.rowStyle) {
            return;
        }
        if (typeof this.rowStyle.style === 'string') {
            /** @type {?} */
            var rowStyle = this.rowStyle.style || '';
            this.renderRowStyles(rowStyle);
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            /** @type {?} */
            var rowStyle = this.rowStyle.styleFunction(this.entity.getData(), this.index);
            this.renderRowStyles(rowStyle);
        }
    };
    /**
     * @private
     * @param {?=} rowStyle
     * @return {?}
     */
    StructureRowComponent.prototype.renderRowStyles = /**
     * @private
     * @param {?=} rowStyle
     * @return {?}
     */
    function (rowStyle) {
        if (rowStyle === void 0) { rowStyle = ''; }
        /** @type {?} */
        var styles = rowStyle.split(';');
        for (var i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            var separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.renderer2.setStyle(this.elRef.nativeElement, separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
        return rowStyle;
    };
    /**
     * @private
     * @return {?}
     */
    StructureRowComponent.prototype.updateRowClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.rowClass) {
            return;
        }
        /** @type {?} */
        var clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (this.entity) {
                clazz = this.rowClass.classFunction(this.entity.getData(), this.index) || '';
            }
        }
        if (clazz) {
            this.renderer2.addClass(this.elRef.nativeElement, clazz);
        }
    };
    StructureRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-row',
                    template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureRowComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: StructureId },
        { type: FormationWarehouse },
        { type: FormationCommandInvoker }
    ]; };
    StructureRowComponent.propDecorators = {
        entity: [{ type: Input }],
        columns: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        searchPhrase: [{ type: Input }],
        index: [{ type: Input }],
        rowStyle: [{ type: Input }],
        rowClass: [{ type: Input }],
        detailsEnabled: [{ type: Input }],
        checkboxSelection: [{ type: Input }]
    };
    return StructureRowComponent;
}(SmartComponent));
export { StructureRowComponent };
if (false) {
    /** @type {?} */
    StructureRowComponent.prototype.entity;
    /** @type {?} */
    StructureRowComponent.prototype.columns;
    /** @type {?} */
    StructureRowComponent.prototype.editMode;
    /** @type {?} */
    StructureRowComponent.prototype.cellEditing;
    /** @type {?} */
    StructureRowComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureRowComponent.prototype.index;
    /** @type {?} */
    StructureRowComponent.prototype.rowStyle;
    /** @type {?} */
    StructureRowComponent.prototype.rowClass;
    /** @type {?} */
    StructureRowComponent.prototype.detailsEnabled;
    /** @type {?} */
    StructureRowComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureRowComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.row;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.formationCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSzNFO0lBTTJDLGlEQUFjO0lBb0N4RCwrQkFBNkIsaUJBQW9DLEVBQzdDLEtBQWlCLEVBQ2pCLFNBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QywwQkFBbUQ7UUFMdkUsWUFNQyxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN4QjtRQVA0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFkdkUsb0JBQWMsR0FBWSxLQUFL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QkFHTCxLQUFLOytCQUdMLEtBQUs7d0JBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7aUNBR0wsS0FBSztvQ0FHTCxLQUFLOztJQXdKUCw0QkFBQztDQUFBLEFBM0xELENBTTJDLGNBQWMsR0FxTHhEO1NBckxZLHFCQUFxQjs7O0lBRWpDLHVDQUNtQjs7SUFFbkIsd0NBQ3lDOztJQUV6Qyx5Q0FDa0I7O0lBRWxCLDRDQUNxQjs7SUFFckIsNkNBQ3FCOztJQUVyQixzQ0FDYzs7SUFFZCx5Q0FDc0I7O0lBRXRCLHlDQUNzQjs7SUFFdEIsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDZDQUE4Qjs7Ozs7SUFFOUIsb0NBQWtDOzs7OztJQUV0QixrREFBcUQ7Ozs7O0lBQzlELHNDQUFrQzs7Ozs7SUFDbEMsMENBQXFDOzs7OztJQUNyQyw0Q0FBeUM7Ozs7O0lBQ3pDLG1EQUF1RDs7Ozs7SUFDdkQsMkRBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEd1aVJvd0NsYXNzLCBHdWlSb3dTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9ncmlkL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcm93Jyxcblx0dGVtcGxhdGVVcmw6IGAuL3N0cnVjdHVyZS1yb3cuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRlbnRpdHk6IEl0ZW1FbnRpdHk7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRpbmRleDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1N0eWxlOiBHdWlSb3dTdHlsZTtcblxuXHRASW5wdXQoKVxuXHRyb3dDbGFzczogR3VpUm93Q2xhc3M7XG5cblx0QElucHV0KClcblx0ZGV0YWlsc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlbGVjdGVkSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLmVudGl0eSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuZW50aXR5LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNoZWNrU2VsZWN0ZWRJdGVtKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucm93Q2xhc3MgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLnJvd0NsYXNzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5yb3dTdHlsZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMucm93U3R5bGUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJvdyA9IHJvdztcblx0XHRcdFx0bGV0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLnVwZGF0ZVJvd0NsYXNzKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzZWxlY3RSb3coKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3RlZFJvdyh0aGlzLmVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjaGVja1NlbGVjdGVkSXRlbSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3cpIHtcblxuXHRcdFx0bGV0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMucm93LmlzU2VsZWN0ZWQodGhpcy5lbnRpdHkuZ2V0SWQoKSk7XG5cblx0XHRcdGlmIChwcmV2VmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG5cblx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93U3R5bGUoKSB7XG5cblx0XHRpZiAoIXRoaXMucm93U3R5bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGUgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdGxldCByb3dTdHlsZSA9IHRoaXMucm93U3R5bGUuc3R5bGUgfHwgJyc7XG5cblx0XHRcdHRoaXMucmVuZGVyUm93U3R5bGVzKHJvd1N0eWxlKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHRsZXQgcm93U3R5bGUgPSB0aGlzLnJvd1N0eWxlLnN0eWxlRnVuY3Rpb24odGhpcy5lbnRpdHkuZ2V0RGF0YSgpLCB0aGlzLmluZGV4KTtcblxuXHRcdFx0dGhpcy5yZW5kZXJSb3dTdHlsZXMocm93U3R5bGUpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJSb3dTdHlsZXMocm93U3R5bGU6IHN0cmluZyA9ICcnKSB7XG5cblx0XHRjb25zdCBzdHlsZXMgPSByb3dTdHlsZS5zcGxpdCgnOycpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3Qgc2VwYXJhdGVkU3R5bGVzID0gc3R5bGVzW2ldLnNwbGl0KCc6Jyk7XG5cblx0XHRcdGlmIChzZXBhcmF0ZWRTdHlsZXNbMF0gJiYgc2VwYXJhdGVkU3R5bGVzWzFdKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgc2VwYXJhdGVkU3R5bGVzWzBdLnRyaW0oKSwgc2VwYXJhdGVkU3R5bGVzWzFdLnRyaW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByb3dTdHlsZTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlUm93Q2xhc3MoKSB7XG5cblx0XHRpZiAoIXRoaXMucm93Q2xhc3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgY2xheno6IHN0cmluZztcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5yb3dDbGFzcy5jbGFzcyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzcyB8fCAnJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93Q2xhc3MuY2xhc3NGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYgKHRoaXMuZW50aXR5KSB7XG5cdFx0XHRcdGNsYXp6ID0gdGhpcy5yb3dDbGFzcy5jbGFzc0Z1bmN0aW9uKHRoaXMuZW50aXR5LmdldERhdGEoKSwgdGhpcy5pbmRleCkgfHwgJyc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXp6KSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXp6KTtcblx0XHR9XG5cdH1cblxufVxuIl19