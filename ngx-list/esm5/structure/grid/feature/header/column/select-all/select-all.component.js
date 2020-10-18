/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../source/core/api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { FormationWarehouse } from '../../../../../source/core/api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../source/core/api/row-selection';
var SelectAllComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectAllComponent, _super);
    function SelectAllComponent(changeDetectorRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
    SelectAllComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-select-all',
                    template: "\n\n\t\t<gui-checkbox *ngIf=\"modeMulti\"\n\t\t\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t\t\t  [indeterminate]=\"selectAllIndeterminate\"\n\t\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t\t  (changed)=\"toggleSelectAll()\">\n\t\t</gui-checkbox>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-select-all]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    SelectAllComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRWxHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGO0lBa0J3Qyw4Q0FBYztJQVFyRCw0QkFBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLDBCQUFzRCxFQUN0RCwwQkFBbUQsRUFDbkQsa0JBQXNDO1FBSjFELFlBS0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFONEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQU4xRCxlQUFTLEdBQVksS0FBSyxDQUFDOztJQVEzQixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBcEJBLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDcEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsb0JBQTBDO1lBQ3JELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUVDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFFTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUQ7U0FDRDtJQUNGLENBQUM7O2dCQXRFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdRQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLHdCQUF3QixFQUFFLE1BQU07cUJBQ2hDO2lCQUNEOzs7O2dCQTNCaUMsaUJBQWlCO2dCQUUxQyxXQUFXO2dCQUtYLDBCQUEwQjtnQkFKMUIsdUJBQXVCO2dCQUV2QixrQkFBa0I7O0lBNkUzQix5QkFBQztDQUFBLEFBeEVELENBa0J3QyxjQUFjLEdBc0RyRDtTQXREWSxrQkFBa0I7OztJQUU5Qiw4Q0FBMEI7O0lBRTFCLG9EQUFnQzs7SUFFaEMsdUNBQTJCOzs7OztJQUVmLCtDQUFxRDs7Ozs7SUFDOUQseUNBQXlDOzs7OztJQUN6Qyx3REFBdUU7Ozs7O0lBQ3ZFLHdEQUFvRTs7Ozs7SUFDcEUsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0LWFsbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNoZWNrYm94ICpuZ0lmPVwibW9kZU11bHRpXCJcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInNlbGVjdEFsbENoZWNrZWRcIlxuXHRcdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRcdFx0ICBbZ3VpLXRvb2x0aXBdPVwiJ1NlbGVjdCdcIlxuXHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0QWxsKClcIj5cblx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXNlbGVjdC1hbGxdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHRtb2RlTXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbk1vZGUodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kZU11bHRpID0gbW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0FsbFNlbGVjdGVkKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0QWxsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19