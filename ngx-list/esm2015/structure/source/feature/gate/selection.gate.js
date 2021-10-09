/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { RowSelection } from '../../core/api/row-selection';
/**
 * @abstract
 */
export class SelectionGate extends Gate {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} formationEventService
     * @param {?} formationCommandDispatcher
     * @param {?} rowSelectionTypeArchive
     */
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super();
        this.structureId = structureId;
        this.formationEventService = formationEventService;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationCommandDispatcher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.rowSelectionTypeArchive.next(this.rowSelection.getType());
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationCommandDispatcher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemsSelected.emit(items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i.getSource())));
            this.selectedRows.emit(items);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SelectionGate.propDecorators = {
    rowSelection: [{ type: Input }],
    itemsSelected: [{ type: Output }],
    selectedRows: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectionGate.prototype.rowSelection;
    /** @type {?} */
    SelectionGate.prototype.itemsSelected;
    /** @type {?} */
    SelectionGate.prototype.selectedRows;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @protected
     */
    SelectionGate.prototype.rowSelectionTypeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFPNUQsTUFBTSxPQUFnQixhQUFjLFNBQVEsSUFBSTs7Ozs7Ozs7SUFXL0MsWUFBeUMsV0FBd0IsRUFDdkMscUJBQStDLEVBQy9DLDBCQUFtRCxFQUNuRCx1QkFBZ0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFKZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSMUUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3BFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUY7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFGO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7MkJBOUNBLEtBQUs7NEJBR0wsTUFBTTsyQkFHTixNQUFNOzs7O0lBTlAscUNBQzJCOztJQUUzQixzQ0FDc0Q7O0lBRXRELHFDQUNvRTs7Ozs7SUFFOUMsb0NBQTJDOzs7OztJQUMxRCw4Q0FBa0U7Ozs7O0lBQ2xFLG1EQUFzRTs7Ozs7SUFDdEUsZ0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWxlY3Rpb25HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogUm93U2VsZWN0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8U2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTZWxlY3Rpb25HYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdyb3dTZWxlY3Rpb24nLCBjaGFuZ2VzKSkge1xuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzRW5hYmxlZERlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFNlbGVjdGlvbih0aGlzLnJvd1NlbGVjdGlvbi5pc0VuYWJsZWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc1R5cGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZS5uZXh0KHRoaXMucm93U2VsZWN0aW9uLmdldFR5cGUoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc01vZGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5jaGFuZ2VNb2RlKHRoaXMucm93U2VsZWN0aW9uLmdldE1vZGUoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFNlbGVjdGVkUm93PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtcy5tYXAoaSA9PiBpLmdldFNvdXJjZSgpKSk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQoaXRlbXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==