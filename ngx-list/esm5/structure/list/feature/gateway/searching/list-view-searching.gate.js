/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, EventEmitter, Input, Output } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
var ListViewSearchingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSearchingGate, _super);
    function ListViewSearchingGate(changeDetectorRef, structureId, searchCommandDispatcher, searchEventRepository) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.searchEventRepository = searchEventRepository;
        _this.searchPhraseChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewSearchingGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('searching', simpleChanges)) {
            this.searchCommandDispatcher.setSearchingConfig(this.searching, this.structureId);
        }
    };
    /**
     * @return {?}
     */
    ListViewSearchingGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchEventRepository
            .onSearchPhrase(this.structureId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.searchPhraseChanged.emit(phrase);
        }));
    };
    ListViewSearchingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[searching]'
                },] }
    ];
    /** @nocollapse */
    ListViewSearchingGate.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: SearchCommandInvoker },
        { type: SearchEventRepository }
    ]; };
    ListViewSearchingGate.propDecorators = {
        searching: [{ type: Input }],
        searchPhraseChanged: [{ type: Output }]
    };
    return ListViewSearchingGate;
}(Gate));
export { ListViewSearchingGate };
if (false) {
    /** @type {?} */
    ListViewSearchingGate.prototype.searching;
    /** @type {?} */
    ListViewSearchingGate.prototype.searchPhraseChanged;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ListViewSearchingGate.prototype.searchEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRzVGO0lBRzJDLGlEQUFJO0lBUTlDLCtCQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLHFCQUE0QztRQUhoRSxZQUlDLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3hCO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3QywyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBTGhFLHlCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztJQU8vRCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRjtJQUNGLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUNwRCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWM7WUFDekIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBVlEsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUdYLG9CQUFvQjtnQkFDcEIscUJBQXFCOzs7NEJBUTVCLEtBQUs7c0NBR0wsTUFBTTs7SUE0QlIsNEJBQUM7Q0FBQSxBQXBDRCxDQUcyQyxJQUFJLEdBaUM5QztTQWpDWSxxQkFBcUI7OztJQUVqQywwQ0FDd0I7O0lBRXhCLG9EQUMrRDs7Ozs7SUFFbkQsa0RBQXFEOzs7OztJQUM5RCw0Q0FBeUM7Ozs7O0lBQ3pDLHdEQUE4RDs7Ozs7SUFDOUQsc0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tzZWFyY2hpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlYXJjaGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzZWFyY2hpbmcnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcodGhpcy5zZWFyY2hpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2VhcmNoRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25TZWFyY2hQaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=