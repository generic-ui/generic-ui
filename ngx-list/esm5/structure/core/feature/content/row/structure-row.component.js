/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
import { ItemEntity } from '../../../../source/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { RowSelectToggleType } from '../../../../source/domain/formation/core/row-select-toggle-type';
import { FormationWarehouse } from '../../../../source/domain-api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowComponent, _super);
    function StructureRowComponent(changeDetectorRef, elRef, renderer2, structureId, formationWarehouse, formationCommandDispatcher) {
        var _this = _super.call(this) || this;
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
    StructureRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-row',
                    template: "<!--<div class=\"gui-structure-cell-container\" >-->\n\n<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-cell gui-row-checkbox\">\n\t<gui-checkbox (changed)=\"selectRow()\" [checked]=\"selectedItem\"></gui-checkbox>\n<!--\t<input type=\"checkbox\" [checked]=\"selectedItem\" />-->\n</div>\n\n<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[searchPhrase]=\"searchPhrase\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n\n<!--</div>-->\n\n<!--<div *ngIf=\"detailsEnabled\"-->\n<!--\t [ngStyle]=\"{'transform': 'translateY(32px)'}\"-->\n<!--\t class=\"gui-structure-row-details\">-->\n\n<!--\tDETAILS PANEL-->\n\n<!--</div>-->\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBNEIsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6SyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDNUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUkzRTtJQU0yQyxpREFBYztJQThCeEQsK0JBQTZCLGlCQUFvQyxFQUM3QyxLQUFpQixFQUNqQixTQUFvQixFQUNwQixXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsMEJBQW1EO1FBTHZFLFlBTUMsaUJBQU8sU0FDUDtRQVA0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFkdkUsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFHaEMsdUJB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RVAsNEJBQUM7Q0FBQSxBQXhHRCxDQU0yQyxjQUFjLEdBa0d4RDtTQWxHWSxxQkFBcUI7OztJQUVqQyx1Q0FDbUI7O0lBRW5CLHdDQUN5Qzs7SUFFekMseUNBQ2tCOztJQUVsQiw0Q0FDcUI7O0lBRXJCLDZDQUNxQjs7SUFFckIsc0NBQ2M7O0lBRWQsK0NBQ2dDOztJQUVoQyxrREFDbUM7O0lBRW5DLDZDQUE4Qjs7Ozs7SUFFOUIsb0NBQWtDOzs7OztJQUV0QixrREFBcUQ7Ozs7O0lBQzlELHNDQUFrQzs7Ozs7SUFDbEMsMENBQXFDOzs7OztJQUNyQyw0Q0FBeUM7Ozs7O0lBQ3pDLG1EQUF1RDs7Ozs7SUFDdkQsMkRBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1yb3cnLFxuXHR0ZW1wbGF0ZVVybDogYC4vc3RydWN0dXJlLXJvdy5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGVudGl0eTogSXRlbUVudGl0eTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+O1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGluZGV4OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0ZGV0YWlsc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRjaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlbGVjdGVkSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5lbnRpdHkgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmVudGl0eS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jaGVja1NlbGVjdGVkSXRlbSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93OiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJvdyA9IHJvdztcblx0XHRcdFx0bGV0IHByZXZWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG5cdFx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZEl0ZW0oKTtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuXG5cdFx0XHRcdFx0aWYgKHByZXZWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHR0cmFja0J5Rm4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlbGVjdFJvdygpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHRoaXMuZW50aXR5LmdldElkKCksIFJvd1NlbGVjdFRvZ2dsZVR5cGUuQURELCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNoZWNrU2VsZWN0ZWRJdGVtKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnJvdykge1xuXG5cdFx0XHRsZXQgcHJldlZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5yb3cuaXNTZWxlY3RlZCh0aGlzLmVudGl0eS5nZXRJZCgpKTtcblxuXHRcdFx0aWYgKHByZXZWYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcblxuXHRcdFx0XHRpZiAocHJldlZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==