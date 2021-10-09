/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
/**
 * @abstract
 */
export class SearchingGate extends Gate {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} searchEventRepository
     * @param {?} searchCommandInvoker
     */
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super();
        this.structureId = structureId;
        this.searchEventRepository = searchEventRepository;
        this.searchCommandInvoker = searchCommandInvoker;
        this.searchPhraseChanged = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('searching', changes)) {
            /** @type {?} */
            let searching;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeAndEmit(this.searchEventRepository.onSearchPhrase(this.structureId.toReadModelRootId()), this.searchPhraseChanged);
    }
}
SearchingGate.propDecorators = {
    searching: [{ type: Input }],
    searchPhraseChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoaW5nLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZmVhdHVyZS9nYXRlL3NlYXJjaGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVE3RCxNQUFNLE9BQWdCLGFBQWMsU0FBUSxJQUFJOzs7Ozs7O0lBUS9DLFlBQXlDLFdBQXdCLEVBQ3ZDLHFCQUE0QyxFQUM1QyxvQkFBMEM7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFIZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSnBFLHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTS9ELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7O2dCQUVyQyxTQUF1QjtZQUUzQixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hDLFNBQVMsR0FBRztvQkFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3ZCLENBQUM7YUFDRjtpQkFBTTtnQkFDTixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQjtZQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQy9FLElBQUksQ0FBQyxtQkFBbUIsQ0FDeEIsQ0FBQztJQUNILENBQUM7Ozt3QkFwQ0EsS0FBSztrQ0FHTCxNQUFNOzs7O0lBSFAsa0NBQ2tDOztJQUVsQyw0Q0FDK0Q7Ozs7O0lBRXpDLG9DQUEyQzs7Ozs7SUFDMUQsOENBQStEOzs7OztJQUMvRCw2Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWFyY2hpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNlYXJjaGluZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3NlYXJjaGluZycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBzZWFyY2hpbmc6IFNlYXJjaENvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNlYXJjaGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNlYXJjaGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VhcmNoaW5nID0gdGhpcy5zZWFyY2hpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIuc2V0U2VhcmNoaW5nQ29uZmlnKHNlYXJjaGluZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNlYXJjaEV2ZW50UmVwb3NpdG9yeS5vblNlYXJjaFBocmFzZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpLFxuXHRcdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=