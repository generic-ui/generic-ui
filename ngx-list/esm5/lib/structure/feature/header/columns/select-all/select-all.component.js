/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { StructureId } from '../../../../domain/structure.id';
import { FormationCommandDispatcher } from '../../../../../../structure/source/domain-api/formation/formation.command-dispatcher';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { FormationWarehouse } from '../../../../../../structure/source/domain-api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../../structure/source/domain-api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../../structure/source/domain-api/row-selection';
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
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SelectAllComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: RowSelectionModeRepository },
        { type: FormationCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvY29sdW1ucy9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDbEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBRWpILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRGQUE0RixDQUFDO0FBQ3hJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRS9GO0lBY3dDLDhDQUFjO0lBUXJELDRCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsMEJBQXNELEVBQ3RELDBCQUFzRCxFQUN0RCxrQkFBc0M7UUFKMUQsWUFLQyxpQkFBTyxTQUNQO1FBTjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUFRM0IsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUFBLGlCQXNCQztRQXBCQSxJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBc0I7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQ3BELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLG9CQUEwQztZQUNyRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0QsS0FBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFFQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDOztnQkFsRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxnUUFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBdkJRLGlCQUFpQjtnQkFFakIsV0FBVztnQkFLWCwwQkFBMEI7Z0JBSjFCLDBCQUEwQjtnQkFFMUIsa0JBQWtCOztJQXlFM0IseUJBQUM7Q0FBQSxBQXBFRCxDQWN3QyxjQUFjLEdBc0RyRDtTQXREWSxrQkFBa0I7OztJQUU5Qiw4Q0FBMEI7O0lBRTFCLG9EQUFnQzs7SUFFaEMsdUNBQTJCOzs7OztJQUVmLCtDQUFxRDs7Ozs7SUFDOUQseUNBQXlDOzs7OztJQUN6Qyx3REFBdUU7Ozs7O0lBQ3ZFLHdEQUF1RTs7Ozs7SUFDdkUsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0LWFsbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNoZWNrYm94ICpuZ0lmPVwibW9kZU11bHRpXCJcblx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInNlbGVjdEFsbENoZWNrZWRcIlxuXHRcdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRcdFx0ICBbZ3VpLXRvb2x0aXBdPVwiJ1NlbGVjdCdcIlxuXHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0QWxsKClcIj5cblx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbk1vZGUodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kZU11bHRpID0gbW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0FsbFNlbGVjdGVkKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0QWxsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19