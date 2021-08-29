/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowSelectToggleType } from '../../../../source/core/domain/formation/core/row-select-toggle-type';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StyleModifier } from '../../../../../common/cdk/dom/style/style-modifier';
import { ClassModifier } from '../../../../../common/cdk/dom/class/class-modifier';
import { CssClassModifier } from '../../../../common/css-class/css-class.modifier';
var StructureRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowComponent, _super);
    function StructureRowComponent(changeDetectorRef, elRef, structureId, formationWarehouse, formationCommandDispatcher, cssClassModifier) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elRef = elRef;
        _this.structureId = structureId;
        _this.formationWarehouse = formationWarehouse;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.cssClassModifier = cssClassModifier;
        _this.detailsEnabled = false;
        _this.checkboxSelection = false;
        _this.selectedItem = false;
        _this.styleModifier = new StyleModifier(_this.elRef.nativeElement);
        _this.classModifier = new ClassModifier(_this.elRef.nativeElement);
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
            this.updateRowClass(changes.entity.previousValue);
            this.updateRowStyle(changes.entity.previousValue);
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
                    _this.cssClassModifier.unselect(_this.elRef.nativeElement);
                }
                else {
                    _this.cssClassModifier.select(_this.elRef.nativeElement);
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
                    this.cssClassModifier.unselect(this.elRef.nativeElement);
                }
                else {
                    this.cssClassModifier.select(this.elRef.nativeElement);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    StructureRowComponent.prototype.calculateRowStyle = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (!this.rowStyle) {
            return '';
        }
        if (typeof this.rowStyle.style === 'string') {
            return this.rowStyle.style || '';
        }
        if (typeof this.rowStyle.styleFunction === 'function') {
            return this.rowStyle.styleFunction(entity.getData(), entity.getPosition());
        }
    };
    /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    StructureRowComponent.prototype.updateRowStyle = /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    function (prevEntity) {
        if (prevEntity) {
            /** @type {?} */
            var rowStylesToRemove = this.calculateRowStyle(prevEntity);
            this.removeRowStyles(rowStylesToRemove);
        }
        /** @type {?} */
        var rowStylesToAdd = this.calculateRowStyle(this.entity);
        this.renderRowStyles(rowStylesToAdd);
    };
    /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    StructureRowComponent.prototype.removeRowStyles = /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    function (rowStyle) {
        if (!rowStyle) {
            return;
        }
        /** @type {?} */
        var styles = rowStyle.split(';');
        for (var i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            var separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().removeStyleByName(separatedStyles[0].trim());
            }
        }
    };
    /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    StructureRowComponent.prototype.renderRowStyles = /**
     * @private
     * @param {?} rowStyle
     * @return {?}
     */
    function (rowStyle) {
        if (!rowStyle) {
            return;
        }
        /** @type {?} */
        var styles = rowStyle.split(';');
        for (var i = 0; i < styles.length; i += 1) {
            /** @type {?} */
            var separatedStyles = styles[i].split(':');
            if (separatedStyles[0] && separatedStyles[1]) {
                this.styleModifier.getHost().setStyleByName(separatedStyles[0].trim(), separatedStyles[1].trim());
            }
        }
    };
    /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    StructureRowComponent.prototype.updateRowClass = /**
     * @private
     * @param {?=} prevEntity
     * @return {?}
     */
    function (prevEntity) {
        if (prevEntity) {
            /** @type {?} */
            var toRemoveClass = this.calculateRowClass(prevEntity);
            if (toRemoveClass) {
                this.classModifier.getHost().remove(toRemoveClass);
            }
        }
        /** @type {?} */
        var toAddClass = this.calculateRowClass(this.entity);
        if (toAddClass) {
            this.classModifier.getHost().add(toAddClass);
        }
    };
    /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    StructureRowComponent.prototype.calculateRowClass = /**
     * @private
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (!this.rowClass) {
            return '';
        }
        /** @type {?} */
        var clazz;
        if (typeof this.rowClass.class === 'string') {
            clazz = this.rowClass.class || '';
        }
        if (typeof this.rowClass.classFunction === 'function') {
            if (entity) {
                clazz = this.rowClass.classFunction(entity.getData(), entity.getPosition()) || '';
            }
        }
        return clazz;
    };
    /**
     * @protected
     * @return {?}
     */
    StructureRowComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-row';
    };
    StructureRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-row]',
                    template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n\t<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<div *ngFor=\"let column of columns; trackBy: trackByFn\" [cellEditingEnabled]=\"cellEditing\"\n\t [cell]=\"column\"\n\t [editMode]=\"editMode\"\n\t [entity]=\"entity\"\n\t [searchPhrase]=\"searchPhrase\"\n\t [style.width.px]=\"column.width\"\n\t class=\"gui-cell\"\n\t gui-structure-cell>\n</div>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureRowComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: FormationWarehouse },
        { type: FormationCommandInvoker },
        { type: CssClassModifier }
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
    StructureRowComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.classModifier;
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
    /**
     * @type {?}
     * @private
     */
    StructureRowComponent.prototype.cssClassModifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9JLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBR3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFJbkY7SUFNMkMsaURBQWM7SUF3Q3hELCtCQUE2QixpQkFBb0MsRUFDN0MsS0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLDBCQUFtRCxFQUNuRCxnQkFBa0M7UUFMdEQsWUFNQyxrQkFBTSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsU0FHL0I7UUFUNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGlC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aURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBHdWlSb3dDbGFzcywgR3VpUm93U3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFN0eWxlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9zdHlsZS9zdHlsZS1tb2RpZmllcic7XG5pbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vY2xhc3MvY2xhc3MtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jc3MtY2xhc3MvY3NzLWNsYXNzLm1vZGlmaWVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLXJvd10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGluZGV4OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93U3R5bGU6IEd1aVJvd1N0eWxlO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NsYXNzOiBHdWlSb3dDbGFzcztcblxuXHRASW5wdXQoKVxuXHRkZXRhaWxzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VsZWN0ZWRJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByb3c6IFJvd1NlbGVjdGVkUmVhZE1vZGVsO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjc3NDbGFzc01vZGlmaWVyOiBDc3NDbGFzc01vZGlmaWVyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUm93Q29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMuZW50aXR5ICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5lbnRpdHkuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblx0XHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoY2hhbmdlcy5lbnRpdHkucHJldmlvdXNWYWx1ZSk7XG5cdFx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKGNoYW5nZXMuZW50aXR5LnByZXZpb3VzVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd0NsYXNzICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dDbGFzcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy51cGRhdGVSb3dDbGFzcygpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5yb3dTdHlsZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy51cGRhdGVSb3dTdHlsZSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJvdyA9IHJvdztcblx0XHRcdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXG5cdFx0XHRcdGlmIChwcmV2VmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG5cblx0XHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIudW5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLnNlbGVjdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcblxuXHRcdHRoaXMudXBkYXRlUm93Q2xhc3MoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd1N0eWxlKCk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlbGVjdFJvdygpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHRoaXMuZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuQURELCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoZWNrU2VsZWN0ZWRJdGVtKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvdykge1xuXG5cdFx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuXHRcdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLnJvdy5pc1NlbGVjdGVkKHRoaXMuZW50aXR5LmdldElkKCkpO1xuXG5cdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdGlmIChwcmV2VmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIudW5zZWxlY3QodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuc2VsZWN0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVJvd1N0eWxlKGVudGl0eTogSXRlbUVudGl0eSk6IHN0cmluZyB7XG5cblx0XHRpZiAoIXRoaXMucm93U3R5bGUpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dTdHlsZS5zdHlsZSB8fCAnJztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93U3R5bGUuc3R5bGVGdW5jdGlvbihlbnRpdHkuZ2V0RGF0YSgpLCBlbnRpdHkuZ2V0UG9zaXRpb24oKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dTdHlsZShwcmV2RW50aXR5PzogSXRlbUVudGl0eSkge1xuXG5cdFx0aWYgKHByZXZFbnRpdHkpIHtcblx0XHRcdGNvbnN0IHJvd1N0eWxlc1RvUmVtb3ZlID0gdGhpcy5jYWxjdWxhdGVSb3dTdHlsZShwcmV2RW50aXR5KTtcblxuXHRcdFx0dGhpcy5yZW1vdmVSb3dTdHlsZXMocm93U3R5bGVzVG9SZW1vdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJvd1N0eWxlc1RvQWRkID0gdGhpcy5jYWxjdWxhdGVSb3dTdHlsZSh0aGlzLmVudGl0eSk7XG5cblx0XHR0aGlzLnJlbmRlclJvd1N0eWxlcyhyb3dTdHlsZXNUb0FkZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVJvd1N0eWxlcyhyb3dTdHlsZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXJvd1N0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0gcm93U3R5bGUuc3BsaXQoJzsnKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHNlcGFyYXRlZFN0eWxlcyA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuXG5cdFx0XHRpZiAoc2VwYXJhdGVkU3R5bGVzWzBdICYmIHNlcGFyYXRlZFN0eWxlc1sxXSkge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZVN0eWxlQnlOYW1lKHNlcGFyYXRlZFN0eWxlc1swXS50cmltKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyUm93U3R5bGVzKHJvd1N0eWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICghcm93U3R5bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzdHlsZXMgPSByb3dTdHlsZS5zcGxpdCgnOycpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0Y29uc3Qgc2VwYXJhdGVkU3R5bGVzID0gc3R5bGVzW2ldLnNwbGl0KCc6Jyk7XG5cblx0XHRcdGlmIChzZXBhcmF0ZWRTdHlsZXNbMF0gJiYgc2VwYXJhdGVkU3R5bGVzWzFdKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0U3R5bGVCeU5hbWUoc2VwYXJhdGVkU3R5bGVzWzBdLnRyaW0oKSwgc2VwYXJhdGVkU3R5bGVzWzFdLnRyaW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVSb3dDbGFzcyhwcmV2RW50aXR5PzogSXRlbUVudGl0eSk6IHZvaWQge1xuXG5cdFx0aWYgKHByZXZFbnRpdHkpIHtcblx0XHRcdGNvbnN0IHRvUmVtb3ZlQ2xhc3MgPSB0aGlzLmNhbGN1bGF0ZVJvd0NsYXNzKHByZXZFbnRpdHkpO1xuXG5cdFx0XHRpZiAodG9SZW1vdmVDbGFzcykge1xuXHRcdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZSh0b1JlbW92ZUNsYXNzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCB0b0FkZENsYXNzID0gdGhpcy5jYWxjdWxhdGVSb3dDbGFzcyh0aGlzLmVudGl0eSk7XG5cblx0XHRpZiAodG9BZGRDbGFzcykge1xuXHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQodG9BZGRDbGFzcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVSb3dDbGFzcyhlbnRpdHk6IEl0ZW1FbnRpdHkpOiBzdHJpbmcge1xuXG5cdFx0aWYgKCF0aGlzLnJvd0NsYXNzKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0bGV0IGNsYXp6OiBzdHJpbmc7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucm93Q2xhc3MuY2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjbGF6eiA9IHRoaXMucm93Q2xhc3MuY2xhc3MgfHwgJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJvd0NsYXNzLmNsYXNzRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmIChlbnRpdHkpIHtcblx0XHRcdFx0Y2xhenogPSB0aGlzLnJvd0NsYXNzLmNsYXNzRnVuY3Rpb24oZW50aXR5LmdldERhdGEoKSwgZW50aXR5LmdldFBvc2l0aW9uKCkpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGF6ejtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtcm93Jztcblx0fVxuXG59XG4iXX0=