/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../domain/structure.id';
import { FormationCommandInvoker } from '../../../../../source/domain-api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { FormationWarehouse } from '../../../../../source/domain-api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/domain-api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../source/domain-api/row-selection';
var SelectAllComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectAllComponent, _super);
    function SelectAllComponent(changeDetectorRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        var _this = _super.call(this) || this;
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
                        '[class.gui-select-all]': 'true',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbnMvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUVwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVsRjtJQWtCd0MsOENBQWM7SUFRckQsNEJBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QiwwQkFBc0QsRUFDdEQsMEJBQW1ELEVBQ25ELGtCQUFzQztRQUoxRCxZQUtDLGlCQUFPLFNBQ1A7UUFONEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQU4xRCxlQUFTLEdBQVksS0FBSyxDQUFDOztJQVEzQixDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBcEJBLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDcEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsb0JBQTBDO1lBQ3JELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUVDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFFTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUQ7U0FDRDtJQUNGLENBQUM7O2dCQXRFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdRQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLHdCQUF3QixFQUFFLE1BQU07cUJBQ2hDO2lCQUNEOzs7O2dCQTNCaUMsaUJBQWlCO2dCQUUxQyxXQUFXO2dCQUtYLDBCQUEwQjtnQkFKMUIsdUJBQXVCO2dCQUV2QixrQkFBa0I7O0lBNkUzQix5QkFBQztDQUFBLEFBeEVELENBa0J3QyxjQUFjLEdBc0RyRDtTQXREWSxrQkFBa0I7OztJQUU5Qiw4Q0FBMEI7O0lBRTFCLG9EQUFnQzs7SUFFaEMsdUNBQTJCOzs7OztJQUVmLCtDQUFxRDs7Ozs7SUFDOUQseUNBQXlDOzs7OztJQUN6Qyx3REFBdUU7Ozs7O0lBQ3ZFLHdEQUFvRTs7Ozs7SUFDcEUsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvcm93LXNlbGVjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zZWxlY3QtYWxsJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY2hlY2tib3ggKm5nSWY9XCJtb2RlTXVsdGlcIlxuXHRcdFx0XHRcdCAgW2NoZWNrZWRdPVwic2VsZWN0QWxsQ2hlY2tlZFwiXG5cdFx0XHRcdFx0ICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3RBbGxJbmRldGVybWluYXRlXCJcblx0XHRcdFx0XHQgIFtndWktdG9vbHRpcF09XCInU2VsZWN0J1wiXG5cdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3RBbGwoKVwiPlxuXHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VsZWN0LWFsbF0nOiAndHJ1ZScsXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QWxsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHRtb2RlTXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Nb2RlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogUm93U2VsZWN0aW9uTW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGVNdWx0aSA9IG1vZGUgPT09IFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dTZWxlY3RlZFJlYWRNb2RlbDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNBbGxTZWxlY3RlZCgpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdEFsbCgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==