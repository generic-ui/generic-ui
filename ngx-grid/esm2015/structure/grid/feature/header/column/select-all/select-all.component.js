/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../source/core/api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { FormationWarehouse } from '../../../../../source/core/api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/core/api/formation/mode/row-selection-mode.repository';
import { RowSelectionMode } from '../../../../../source/core/api/row-selection';
export class SelectAllComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} rowSelectionModeRepository
     * @param {?} formationCommandDispatcher
     * @param {?} formationWarehouse
     */
    constructor(changeDetectorRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.modeMulti = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationWarehouse
            .onMode(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.modeMulti = mode === RowSelectionMode.MULTIPLE;
            this.changeDetectorRef.detectChanges();
        }));
        this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowSelectedReadModel
         * @return {?}
         */
        (rowSelectedReadModel) => {
            this.selectAllChecked = rowSelectedReadModel.isAllSelected();
            this.selectAllIndeterminate = rowSelectedReadModel.isIndeterminate();
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    toggleSelectAll() {
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
    }
}
SelectAllComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-select-all',
                template: `

		<gui-checkbox *ngIf="modeMulti"
					  [checked]="selectAllChecked"
					  [indeterminate]="selectAllIndeterminate"
					  [gui-tooltip]="'Select'"
					  (changed)="toggleSelectAll()">
		</gui-checkbox>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-select-all]': 'true'
                }
            }] }
];
/** @nocollapse */
SelectAllComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: RowSelectionModeRepository },
    { type: FormationCommandInvoker },
    { type: FormationWarehouse }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFvQmhGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjOzs7Ozs7OztJQVFyRCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsMEJBQXNELEVBQ3RELDBCQUFtRCxFQUNuRCxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFMRyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUF5QjtRQUNuRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFELGNBQVMsR0FBWSxLQUFLLENBQUM7SUFRM0IsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsa0JBQWtCO2FBQ3JCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxvQkFBMEMsRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFFZCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDOzs7WUF0RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7O0VBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsd0JBQXdCLEVBQUUsTUFBTTtpQkFDaEM7YUFDRDs7OztZQTNCaUMsaUJBQWlCO1lBRTFDLFdBQVc7WUFLWCwwQkFBMEI7WUFKMUIsdUJBQXVCO1lBRXZCLGtCQUFrQjs7OztJQXlCMUIsOENBQTBCOztJQUUxQixvREFBZ0M7O0lBRWhDLHVDQUEyQjs7Ozs7SUFFZiwrQ0FBcUQ7Ozs7O0lBQzlELHlDQUF5Qzs7Ozs7SUFDekMsd0RBQXVFOzs7OztJQUN2RSx3REFBb0U7Ozs7O0lBQ3BFLGdEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlbGVjdC1hbGwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1jaGVja2JveCAqbmdJZj1cIm1vZGVNdWx0aVwiXG5cdFx0XHRcdFx0ICBbY2hlY2tlZF09XCJzZWxlY3RBbGxDaGVja2VkXCJcblx0XHRcdFx0XHQgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdEFsbEluZGV0ZXJtaW5hdGVcIlxuXHRcdFx0XHRcdCAgW2d1aS10b29sdGlwXT1cIidTZWxlY3QnXCJcblx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZVNlbGVjdEFsbCgpXCI+XG5cdFx0PC9ndWktY2hlY2tib3g+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zZWxlY3QtYWxsXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEFsbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRzZWxlY3RBbGxDaGVja2VkOiBib29sZWFuO1xuXG5cdHNlbGVjdEFsbEluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG5cblx0bW9kZU11bHRpOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHQub25Nb2RlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogUm93U2VsZWN0aW9uTW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGVNdWx0aSA9IG1vZGUgPT09IFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3dTZWxlY3RlZFJlYWRNb2RlbDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNBbGxTZWxlY3RlZCgpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdEFsbCgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==