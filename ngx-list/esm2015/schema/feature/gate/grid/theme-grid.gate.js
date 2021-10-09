/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Gate } from '../../../../common/cdk/component/gate';
import { SchemaCommandInvoker } from '../../../core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
export class ThemeGridGate extends Gate {
    /**
     * @param {?} schemaId
     * @param {?} schemaCommandInvoker
     * @param {?} schemaEventRepository
     */
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.horizontalGridChanged = new EventEmitter();
        this.verticalGridChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('verticalGrid', changes)) {
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid, this.schemaId);
        }
        if (this.isDefined('horizontalGrid', changes)) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid, this.schemaId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndEmit(this.schemaEventRepository.onHorizontalGridChanged(this.schemaId), this.horizontalGridChanged);
        this.subscribeAndEmit(this.schemaEventRepository.onVerticalGridChanged(this.schemaId), this.verticalGridChanged);
    }
}
ThemeGridGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[verticalGrid][horizontalGrid]'
            },] }
];
/** @nocollapse */
ThemeGridGate.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: SchemaCommandInvoker },
    { type: SchemaEventRepository }
];
ThemeGridGate.propDecorators = {
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    horizontalGridChanged: [{ type: Output }],
    verticalGridChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ThemeGridGate.prototype.verticalGrid;
    /** @type {?} */
    ThemeGridGate.prototype.horizontalGrid;
    /** @type {?} */
    ThemeGridGate.prototype.horizontalGridChanged;
    /** @type {?} */
    ThemeGridGate.prototype.verticalGridChanged;
    /**
     * @type {?}
     * @private
     */
    ThemeGridGate.prototype.schemaId;
    /**
     * @type {?}
     * @private
     */
    ThemeGridGate.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    ThemeGridGate.prototype.schemaEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZ3JpZC5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9nYXRlL2dyaWQvdGhlbWUtZ3JpZC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNMUYsTUFBTSxPQUFPLGFBQWMsU0FBUSxJQUFJOzs7Ozs7SUFjdEMsWUFBNkIsUUFBK0IsRUFDeEMsb0JBQTBDLEVBQzFDLHFCQUE0QztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQUhvQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFQaEUsMEJBQXFCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEUsd0JBQW1CLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFNaEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRjtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FDeEIsQ0FBQztJQUNILENBQUM7OztZQTdDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZDQUE2QzthQUN2RDs7OztZQVBRLHFCQUFxQjtZQUZyQixvQkFBb0I7WUFDcEIscUJBQXFCOzs7MkJBVzVCLEtBQUs7NkJBR0wsS0FBSztvQ0FHTCxNQUFNO2tDQUdOLE1BQU07Ozs7SUFUUCxxQ0FDc0I7O0lBRXRCLHVDQUN3Qjs7SUFFeEIsOENBQ2tFOztJQUVsRSw0Q0FDZ0U7Ozs7O0lBRXBELGlDQUFnRDs7Ozs7SUFDekQsNkNBQTJEOzs7OztJQUMzRCw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdmVydGljYWxHcmlkXVtob3Jpem9udGFsR3JpZF0nXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lR3JpZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUV2ZW50UmVwb3NpdG9yeTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxUaGVtZUdyaWRHYXRlPik6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd2ZXJ0aWNhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaG9yaXpvbnRhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnkub25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkXG5cdFx0KTtcblx0fVxufVxuIl19