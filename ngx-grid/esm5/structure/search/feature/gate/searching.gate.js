/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
/**
 * @abstract
 */
var SearchingGate = /** @class */ (function (_super) {
    tslib_1.__extends(SearchingGate, _super);
    function SearchingGate(structureId, searchEventRepository, searchCommandInvoker) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.searchEventRepository = searchEventRepository;
        _this.searchCommandInvoker = searchCommandInvoker;
        _this.searchPhraseChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    SearchingGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('searching', changes)) {
            /** @type {?} */
            var searching = void 0;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.searchCommandInvoker.setSearchingConfig(searching, this.structureId);
        }
    };
    /**
     * @return {?}
     */
    SearchingGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeAndEmit(this.searchEventRepository.onSearchPhrase(this.structureId.toReadModelRootId()), this.searchPhraseChanged);
    };
    SearchingGate.propDecorators = {
        searching: [{ type: Input }],
        searchPhraseChanged: [{ type: Output }]
    };
    return SearchingGate;
}(Gate));
export { SearchingGate };
if (false) {
    /** @type {?} */
    SearchingGate.prototype.searching;
    /** @type {?} */
    SearchingGate.prototype.searchPhraseChanged;
    /**
     * @type {?}
     * @protected
     */
    SearchingGate.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    SearchingGate.prototype.searchEventRepository;
    /**
     * @type {?}
     * @protected
     */
    SearchingGate.prototype.searchCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoaW5nLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZmVhdHVyZS9nYXRlL3NlYXJjaGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFRN0Q7SUFBNEMseUNBQUk7SUFRL0MsdUJBQXlDLFdBQXdCLEVBQ3ZDLHFCQUE0QyxFQUM1QyxvQkFBMEM7UUFGcEUsWUFHQyxpQkFBTyxTQUNQO1FBSndDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUpwRSx5QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFNL0QsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRTs7Z0JBRXJDLFNBQVMsU0FBYztZQUUzQixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hDLFNBQVMsR0FBRztvQkFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3ZCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQjtZQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDL0UsSUFBSSxDQUFDLG1CQUFtQixDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7NEJBcENBLEtBQUs7c0NBR0wsTUFBTTs7SUFtQ1Isb0JBQUM7Q0FBQSxBQXhDRCxDQUE0QyxJQUFJLEdBd0MvQztTQXhDcUIsYUFBYTs7O0lBRWxDLGtDQUNrQzs7SUFFbEMsNENBQytEOzs7OztJQUV6QyxvQ0FBMkM7Ozs7O0lBQzFELDhDQUErRDs7Ozs7SUFDL0QsNkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VhcmNoaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgU2VhcmNoQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTZWFyY2hpbmdHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzZWFyY2hpbmcnLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRsZXQgc2VhcmNoaW5nOiBTZWFyY2hDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZWFyY2hpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zZWFyY2hpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHRoaXMuc2VhcmNoaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5zZWFyY2hFdmVudFJlcG9zaXRvcnkub25TZWFyY2hQaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKSxcblx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZFxuXHRcdCk7XG5cdH1cblxufVxuIl19