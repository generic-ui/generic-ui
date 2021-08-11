/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../source/core/api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../source/core/api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../source/core/api/row-selection';
var SelectAllComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectAllComponent, _super);
    function SelectAllComponent(changeDetectorRef, elementRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.rowSelectionModeRepository = rowSelectionModeRepository;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.formationWarehouse = formationWarehouse;
        _this.modeMulti = false;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectAllComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationWarehouse
            .onMode(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.modeMulti = mode === RowSelectionMode.MULTIPLE;
            _this.changeDetectorRef.detectChanges();
        }));
        this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowSelectedReadModel
         * @return {?}
         */
        function (rowSelectedReadModel) {
            _this.selectAllChecked = rowSelectedReadModel.isAllSelected();
            _this.selectAllIndeterminate = rowSelectedReadModel.isIndeterminate();
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    SelectAllComponent.prototype.toggleSelectAll = /**
     * @return {?}
     */
    function () {
        if (this.selectAllIndeterminate) {
            this.formationCommandDispatcher.unselectAll(this.structureId);
        }
        else {
            if (this.selectAllChecked) {
                this.formationCommandDispatcher.unselectAll(this.structureId);
            }
            else {
                this.formationCommandDispatcher.selectAll(this.structureId);
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    SelectAllComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-select-all';
    };
    SelectAllComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-select-all',
                    template: "\n\n\t\t<gui-checkbox *ngIf=\"modeMulti\"\n\t\t\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t\t\t  [indeterminate]=\"selectAllIndeterminate\"\n\t\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t\t  (changed)=\"toggleSelectAll()\">\n\t\t</gui-checkbox>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SelectAllComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: RowSelectionModeRepository },
        { type: FormationCommandInvoker },
        { type: FormationWarehouse }
    ]; };
    return SelectAllComponent;
}(SmartComponent));
export { SelectAllComponent };
if (false) {
    /** @type {?} */
    SelectAllComponent.prototype.selectAllChecked;
    /** @type {?} */
    SelectAllComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    SelectAllComponent.prototype.modeMulti;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.rowSelectionModeRepository;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SelectAllComponent.prototype.formationWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVsRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVoRjtJQWV3Qyw4Q0FBYztJQVFyRCw0QkFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsMEJBQXNELEVBQ3RELDBCQUFtRCxFQUNuRCxrQkFBc0M7UUFMMUQsWUFNQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FDcEM7UUFQNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVAxRCxlQUFTLEdBQVksS0FBSyxDQUFDOztJQVMzQixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBcEJBLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDcEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsb0JBQTBDO1lBQ3JELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUVDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFFTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUQ7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRVMsNENBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7O2dCQXhFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdRQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBeEJpQyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFFakUsV0FBVztnQkFLWCwwQkFBMEI7Z0JBSjFCLHVCQUF1QjtnQkFFdkIsa0JBQWtCOztJQStFM0IseUJBQUM7Q0FBQSxBQTFFRCxDQWV3QyxjQUFjLEdBMkRyRDtTQTNEWSxrQkFBa0I7OztJQUU5Qiw4Q0FBMEI7O0lBRTFCLG9EQUFnQzs7SUFFaEMsdUNBQTJCOzs7OztJQUVmLCtDQUFxRDs7Ozs7SUFFOUQseUNBQXlDOzs7OztJQUN6Qyx3REFBdUU7Ozs7O0lBQ3ZFLHdEQUFvRTs7Ozs7SUFDcEUsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0LWFsbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNoZWNrYm94ICpuZ0lmPVwibW9kZU11bHRpXCJcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInNlbGVjdEFsbENoZWNrZWRcIlxuXHRcdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRcdFx0ICBbZ3VpLXRvb2x0aXBdPVwiJ1NlbGVjdCdcIlxuXHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0QWxsKClcIj5cblx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uTW9kZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5tb2RlTXVsdGkgPSBtb2RlID09PSBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93U2VsZWN0ZWRSZWFkTW9kZWw6IFJvd1NlbGVjdGVkUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzQWxsU2VsZWN0ZWQoKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNJbmRldGVybWluYXRlKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RBbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWxlY3QtYWxsJztcblx0fVxuXG59XG4iXX0=