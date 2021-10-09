/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Gate } from '../../../../common/cdk/component/gate';
import { SchemaCommandInvoker } from '../../../core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
var ThemeGridGate = /** @class */ (function (_super) {
    tslib_1.__extends(ThemeGridGate, _super);
    function ThemeGridGate(schemaId, schemaCommandInvoker, schemaEventRepository) {
        var _this = _super.call(this) || this;
        _this.schemaId = schemaId;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.schemaEventRepository = schemaEventRepository;
        _this.horizontalGridChanged = new EventEmitter();
        _this.verticalGridChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ThemeGridGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('verticalGrid', changes)) {
            this.schemaCommandInvoker.setVerticalGrid(this.verticalGrid, this.schemaId);
        }
        if (this.isDefined('horizontalGrid', changes)) {
            this.schemaCommandInvoker.setHorizontalGrid(this.horizontalGrid, this.schemaId);
        }
    };
    /**
     * @return {?}
     */
    ThemeGridGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeAndEmit(this.schemaEventRepository.onHorizontalGridChanged(this.schemaId), this.horizontalGridChanged);
        this.subscribeAndEmit(this.schemaEventRepository.onVerticalGridChanged(this.schemaId), this.verticalGridChanged);
    };
    ThemeGridGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[verticalGrid][horizontalGrid]'
                },] }
    ];
    /** @nocollapse */
    ThemeGridGate.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: SchemaCommandInvoker },
        { type: SchemaEventRepository }
    ]; };
    ThemeGridGate.propDecorators = {
        verticalGrid: [{ type: Input }],
        horizontalGrid: [{ type: Input }],
        horizontalGridChanged: [{ type: Output }],
        verticalGridChanged: [{ type: Output }]
    };
    return ThemeGridGate;
}(Gate));
export { ThemeGridGate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZ3JpZC5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9nYXRlL2dyaWQvdGhlbWUtZ3JpZC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGO0lBR21DLHlDQUFJO0lBY3RDLHVCQUE2QixRQUErQixFQUN4QyxvQkFBMEMsRUFDMUMscUJBQTRDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QixjQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUN4QywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFQaEUsMkJBQXFCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEUseUJBQW1CLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBTWhFLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEY7SUFDRixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBRUMsSUFBSSxDQUFDLGdCQUFnQixDQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQzFCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FDeEIsQ0FBQztJQUNILENBQUM7O2dCQTdDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZDQUE2QztpQkFDdkQ7Ozs7Z0JBUFEscUJBQXFCO2dCQUZyQixvQkFBb0I7Z0JBQ3BCLHFCQUFxQjs7OytCQVc1QixLQUFLO2lDQUdMLEtBQUs7d0NBR0wsTUFBTTtzQ0FHTixNQUFNOztJQWdDUixvQkFBQztDQUFBLEFBOUNELENBR21DLElBQUksR0EyQ3RDO1NBM0NZLGFBQWE7OztJQUV6QixxQ0FDc0I7O0lBRXRCLHVDQUN3Qjs7SUFFeEIsOENBQ2tFOztJQUVsRSw0Q0FDZ0U7Ozs7O0lBRXBELGlDQUFnRDs7Ozs7SUFDekQsNkNBQTJEOzs7OztJQUMzRCw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdmVydGljYWxHcmlkXVtob3Jpem9udGFsR3JpZF0nXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lR3JpZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KClcblx0aG9yaXpvbnRhbEdyaWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHZlcnRpY2FsR3JpZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUV2ZW50UmVwb3NpdG9yeTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxUaGVtZUdyaWRHYXRlPik6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd2ZXJ0aWNhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQsIHRoaXMuc2NoZW1hSWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnaG9yaXpvbnRhbEdyaWQnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZENoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zY2hlbWFFdmVudFJlcG9zaXRvcnkub25WZXJ0aWNhbEdyaWRDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRDaGFuZ2VkXG5cdFx0KTtcblx0fVxufVxuIl19