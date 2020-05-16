/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandDispatcher } from '../../../domain-api/source/source.command-dispatcher';
import { ChangedValueEmitter } from '../../../../composition/domain-api/read/edit/changed-value.emitter';
import { EditEventType } from '../../../../composition/domain-api/read/edit/state/edit.event-type';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
import { StructureCellEditState } from '../../edit/structure.cell-edit.state';
import { ItemEntity } from '../../../domain/source/item.entity';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
var StructureCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, elementRef, structureCellEditArchive, structureCellEditStore, cellEditCloseAllService, sourceCommandService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureCellEditStore = structureCellEditStore;
        _this.cellEditCloseAllService = cellEditCloseAllService;
        _this.sourceCommandService = sourceCommandService;
        _this.inEditMode = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // if (changes.editMode !== undefined) {
        // 	if (this.editMode) {
        // 		this.cellEditingEnabled = true;
        // 		this.enterEditMode(false);
        // 	} else if (!this.editMode) {
        // 		this.exitEditMode();
        // 	}
        // }
        //
        // if (!this.editMode) {
        // 	this.exitEditMode();
        // }
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cellEditCloseAllService
            .onCloseAll()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.exitEditMode();
        }));
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.isCellEditingEnabled = /**
     * @return {?}
     */
    function () {
        return this.cellEditingEnabled && this.cell.isCellEditingEnabled();
    };
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    StructureCellComponent.prototype.enterEditMode = /**
     * @param {?=} forceCheck
     * @return {?}
     */
    function (forceCheck) {
        var _this = this;
        if (forceCheck === void 0) { forceCheck = true; }
        if (!this.isCellEditingEnabled()) {
            return;
        }
        this.cellEditCloseAllService.closeAll();
        timer(0)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.inEditMode = true;
            _this.valueChanges$ = new ChangedValueEmitter();
            _this.status$ = new ChangedValueEmitter();
            _this.editContext = {
                status: _this.status$,
                valueChanges: _this.valueChanges$,
                value: _this.cell.getValue(_this.entity).value,
                focus: forceCheck,
                parent: _this.elementRef
            };
            _this.observeFieldStatus();
            _this.observeValueChanges();
            _this.publishEditEnter();
            if (!forceCheck) {
                _this.changeDetectorRef.markForCheck();
            }
            else {
                _this.changeDetectorRef.detectChanges();
            }
        }));
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.exitEditMode = /**
     * @return {?}
     */
    function () {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.submitChangesAndExit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemId = this.entity.getId();
        /** @type {?} */
        var updatedValue = this.actualValue;
        /** @type {?} */
        var fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
        this.exitEditMode();
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeFieldStatus = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.status$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            switch (status) {
                case EditEventType.SUBMIT:
                    _this.submitChangesAndExit();
                    _this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    _this.exitEditMode();
                    _this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$
            .on()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.actualValue = value;
        }));
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.structureCellEditStore.next(state);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.ENTER);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditCancel = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.CANCEL);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditSubmit = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.SUBMIT);
    };
    StructureCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-cell[entity][cell]',
                    template: "<ng-container *ngIf=\"!cell.isBooleanDataType() || (cell.isBooleanDataType() && !this.isCellEditingEnabled())\">\n\n\t<span (click)=\"enterEditMode()\"\n\t\t  *ngIf=\"!inEditMode\"\n\t\t  [ngClass]=\"{'gui-cell-view': true,'gui-align-left': cell.isAlignLeft(),'gui-align-center': cell.isAlignCenter(),'gui-align-right': cell.isAlignRight()}\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\tcontext: { element: cell.getValue(entity, searchPhrase) }\">\n\t\t</ng-container>\n\t</span>\n\n\t<span *ngIf=\"inEditMode\"\n\t\t  class=\"gui-cell-edit-mode\">\n\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\tcontext: editContext\">\n\t\t</ng-container>\n\t</span>\n\n\n\t<!--\t<span *ngIf=\"inEditMode\"-->\n\t<!--\t\t  class=\"gui-cell-edit-mode\">-->\n\n\t<!--\t\t<gui-structure-cell-edit [cell]=\"cell\"-->\n\t<!--\t\t\t\t\t\t\t\t [entity]=\"entity\">-->\n\t<!--\t\t</gui-structure-cell-edit>-->\n\t<!--\t</span>-->\n\n\n</ng-container>\n\n<ng-container *ngIf=\"cell.isBooleanDataType() && this.isCellEditingEnabled()\">\n\t<gui-structure-cell-edit-boolean [cell]=\"cell\"\n\t\t\t\t\t\t\t\t\t [entity]=\"entity\">\n\t</gui-structure-cell-edit-boolean>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureCellEditArchive },
        { type: StructureCellEditStore },
        { type: StructureCellEditCloseAllService },
        { type: SourceCommandDispatcher }
    ]; };
    StructureCellComponent.propDecorators = {
        entity: [{ type: Input }],
        cell: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditingEnabled: [{ type: Input }],
        searchPhrase: [{ type: Input }]
    };
    return StructureCellComponent;
}(SmartComponent));
export { StructureCellComponent };
if (false) {
    /** @type {?} */
    StructureCellComponent.prototype.entity;
    /** @type {?} */
    StructureCellComponent.prototype.cell;
    /** @type {?} */
    StructureCellComponent.prototype.editMode;
    /** @type {?} */
    StructureCellComponent.prototype.cellEditingEnabled;
    /** @type {?} */
    StructureCellComponent.prototype.searchPhrase;
    /** @type {?} */
    StructureCellComponent.prototype.inEditMode;
    /** @type {?} */
    StructureCellComponent.prototype.editContext;
    /** @type {?} */
    StructureCellComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellComponent.prototype.status$;
    /** @type {?} */
    StructureCellComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.cellEditCloseAllService;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.sourceCommandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbkcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3BHO0lBTTRDLGtEQUFjO0lBMkJ6RCxnQ0FBNkIsaUJBQW9DLEVBQzdDLFVBQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCxzQkFBOEMsRUFDOUMsdUJBQXlELEVBQ3pELG9CQUE2QztRQUxqRSxZQU1DLGlCQUFPLFNBQ1A7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUFrQztRQUN6RCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO1FBZmpFLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQWlCNUIsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFFakMsd0NBQXdDO1FBQ3hDLHdCQUF3QjtRQUN4QixvQ0FBb0M7UUFDcEMsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyx5QkFBeUI7UUFDekIsS0FBSztRQUNMLElBQUk7UUFDSixFQUFFO1FBQ0Ysd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixJQUFJO0lBQ0wsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLHVCQUF1QjthQUMxQixVQUFVLEVBQUU7YUFDWixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFEQUFvQjs7O0lBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsOENBQWE7Ozs7SUFBYixVQUFjLFVBQTBCO1FBQXhDLGlCQXNDQztRQXRDYSwyQkFBQSxFQUFBLGlCQUEwQjtRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDakMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDTixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7OztRQUFDO1lBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFdkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7WUFDL0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFpQixDQUFDO1lBRXhELEtBQUksQ0FBQyxXQUFXLEdBQUc7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTztnQkFDcEIsWUFBWSxFQUFFLEtBQUksQ0FBQyxhQUFhO2dCQUNoQyxLQUFLLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUs7Z0JBQzVDLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsS0FBSSxDQUFDLFVBQVU7YUFDdkIsQ0FBQztZQUVGLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBRTNCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXhCLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0QztpQkFBTTtnQkFDTixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdkM7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELHFEQUFvQjs7O0lBQXBCOztZQUVPLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTs7WUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1FBRWxDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sbURBQWtCOzs7O0lBQTFCO1FBQUEsaUJBd0JDO1FBdEJBLElBQUksQ0FBQyxPQUFPO2FBQ1YsRUFBRSxFQUFFO2FBQ0osSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFxQjtZQUVoQyxRQUFRLE1BQU0sRUFBRTtnQkFDZixLQUFLLGFBQWEsQ0FBQyxNQUFNO29CQUN4QixLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBRVAsS0FBSyxhQUFhLENBQUMsTUFBTTtvQkFDeEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFFUDtvQkFDQyxNQUFNO2FBQ1A7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sb0RBQW1COzs7O0lBQTNCO1FBQUEsaUJBVUM7UUFSQSxJQUFJLENBQUMsYUFBYTthQUNoQixFQUFFLEVBQUU7YUFDSixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVU7WUFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxpREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLEtBQTZCO1FBQ3JELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxpREFBZ0I7Ozs7SUFBeEI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTyxrREFBaUI7Ozs7SUFBekI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxrREFBaUI7Ozs7SUFBekI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBckxELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO29CQUM1Qywrc0NBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQTdCQSxpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBV0Ysd0JBQXdCO2dCQUN4QixzQkFBc0I7Z0JBT3RCLGdDQUFnQztnQkFOaEMsdUJBQXVCOzs7eUJBaUI5QixLQUFLO3VCQUdMLEtBQUs7MkJBR0wsS0FBSztxQ0FHTCxLQUFLOytCQUdMLEtBQUs7O0lBa0tQLDZCQUFDO0NBQUEsQUF0TEQsQ0FNNEMsY0FBYyxHQWdMekQ7U0FoTFksc0JBQXNCOzs7SUFFbEMsd0NBQ21COztJQUVuQixzQ0FDK0I7O0lBRS9CLDBDQUNrQjs7SUFFbEIsb0RBQzRCOztJQUU1Qiw4Q0FDcUI7O0lBRXJCLDRDQUE0Qjs7SUFFNUIsNkNBQWlCOztJQUVqQiwrQ0FBd0M7O0lBRXhDLHlDQUFrQzs7SUFFbEMsNkNBQWlCOzs7OztJQUVMLG1EQUFxRDs7Ozs7SUFDOUQsNENBQXVDOzs7OztJQUN2QywwREFBbUU7Ozs7O0lBQ25FLHdEQUErRDs7Ozs7SUFDL0QseURBQTBFOzs7OztJQUMxRSxzREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENoYW5nZWRWYWx1ZUVtaXR0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgRWRpdEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3N0YXRlL2VkaXQuZXZlbnQtdHlwZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY2VsbFtlbnRpdHldW2NlbGxdJyxcblx0dGVtcGxhdGVVcmw6IGBzdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQuaHRtbGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0ZW50aXR5OiBJdGVtRW50aXR5O1xuXG5cdEBJbnB1dCgpXG5cdGNlbGw6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcjtcblxuXHRASW5wdXQoKVxuXHRlZGl0TW9kZTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRjZWxsRWRpdGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblx0aW5FZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0dmFsdWVDaGFuZ2VzJDogQ2hhbmdlZFZhbHVlRW1pdHRlcjxhbnk+O1xuXG5cdHN0YXR1cyQ6IENoYW5nZWRWYWx1ZUVtaXR0ZXI8YW55PjtcblxuXHRhY3R1YWxWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdENsb3NlQWxsU2VydmljZTogU3RydWN0dXJlQ2VsbEVkaXRDbG9zZUFsbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdC8vIGlmIChjaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdGlmICh0aGlzLmVkaXRNb2RlKSB7XG5cdFx0Ly8gXHRcdHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkID0gdHJ1ZTtcblx0XHQvLyBcdFx0dGhpcy5lbnRlckVkaXRNb2RlKGZhbHNlKTtcblx0XHQvLyBcdH0gZWxzZSBpZiAoIXRoaXMuZWRpdE1vZGUpIHtcblx0XHQvLyBcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBpZiAoIXRoaXMuZWRpdE1vZGUpIHtcblx0XHQvLyBcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdFx0Ly8gfVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuY2VsbEVkaXRDbG9zZUFsbFNlcnZpY2Vcblx0XHRcdC5vbkNsb3NlQWxsKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5leGl0RWRpdE1vZGUoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNDZWxsRWRpdGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2VsbEVkaXRpbmdFbmFibGVkICYmIHRoaXMuY2VsbC5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpO1xuXHR9XG5cblx0ZW50ZXJFZGl0TW9kZShmb3JjZUNoZWNrOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlLmNsb3NlQWxsKCk7XG5cblx0XHR0aW1lcigwKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluRWRpdE1vZGUgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdHVzJCA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyPEVkaXRFdmVudFR5cGU+KCk7XG5cblx0XHRcdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzJCxcblx0XHRcdFx0XHR2YWx1ZUNoYW5nZXM6IHRoaXMudmFsdWVDaGFuZ2VzJCxcblx0XHRcdFx0XHR2YWx1ZTogdGhpcy5jZWxsLmdldFZhbHVlKHRoaXMuZW50aXR5KS52YWx1ZSxcblx0XHRcdFx0XHRmb2N1czogZm9yY2VDaGVjayxcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuZWxlbWVudFJlZlxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMub2JzZXJ2ZUZpZWxkU3RhdHVzKCk7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZVZhbHVlQ2hhbmdlcygpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaEVkaXRFbnRlcigpO1xuXG5cdFx0XHRcdGlmICghZm9yY2VDaGVjaykge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdH1cblxuXHRleGl0RWRpdE1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5pbkVkaXRNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRzdWJtaXRDaGFuZ2VzQW5kRXhpdCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IHRoaXMuZW50aXR5LmdldElkKCksXG5cdFx0XHR1cGRhdGVkVmFsdWUgPSB0aGlzLmFjdHVhbFZhbHVlLFxuXHRcdFx0ZmllbGRJZCA9IHRoaXMuY2VsbC5jb2x1bW5GaWVsZElkO1xuXG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5lZGl0SXRlbShuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZElkLCB1cGRhdGVkVmFsdWUpKTtcblxuXHRcdHRoaXMuZXhpdEVkaXRNb2RlKCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVGaWVsZFN0YXR1cygpOiB2b2lkIHtcblxuXHRcdHRoaXMuc3RhdHVzJFxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0dXM6IEVkaXRFdmVudFR5cGUpID0+IHtcblxuXHRcdFx0XHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5TVUJNSVQ6XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdENoYW5nZXNBbmRFeGl0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1Ymxpc2hFZGl0U3VibWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRWRpdEV2ZW50VHlwZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmV4aXRFZGl0TW9kZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdWJsaXNoRWRpdENhbmNlbCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMkXG5cdFx0XHQub24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5hY3R1YWxWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0U3RhdGUoc3RhdGU6IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmUubmV4dChzdGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFZGl0RW50ZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRWRpdFN0YXRlKFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuRU5URVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdENhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUwpO1xuXHR9XG5cblx0cHJpdmF0ZSBwdWJsaXNoRWRpdFN1Ym1pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hFZGl0U3RhdGUoU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5TVUJNSVQpO1xuXHR9XG59XG4iXX0=