/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, EventEmitter, Input, Output } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
export class ListViewSearchingGate extends Gate {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} searchEventRepository
     */
    constructor(changeDetectorRef, structureId, searchCommandDispatcher, searchEventRepository) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.searchPhraseChanged = new EventEmitter();
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (this.isDefined('searching', simpleChanges)) {
            this.searchCommandDispatcher.setSearchingConfig(this.searching, this.structureId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchEventRepository
            .onSearchPhrase(this.structureId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.searchPhraseChanged.emit(phrase);
        }));
    }
}
ListViewSearchingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[searching]'
            },] }
];
/** @nocollapse */
ListViewSearchingGate.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: SearchCommandInvoker },
    { type: SearchEventRepository }
];
ListViewSearchingGate.propDecorators = {
    searching: [{ type: Input }],
    searchPhraseChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFNNUYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLElBQUk7Ozs7Ozs7SUFROUMsWUFBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHVCQUE2QyxFQUM3QyxxQkFBNEM7UUFDL0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFKRyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBc0I7UUFDN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUxoRSx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU8vRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRjtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3BELElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjthQUNwQzs7OztZQVZRLGlCQUFpQjtZQUNqQixXQUFXO1lBR1gsb0JBQW9CO1lBQ3BCLHFCQUFxQjs7O3dCQVE1QixLQUFLO2tDQUdMLE1BQU07Ozs7SUFIUCwwQ0FDd0I7O0lBRXhCLG9EQUMrRDs7Ozs7SUFFbkQsa0RBQXFEOzs7OztJQUM5RCw0Q0FBeUM7Ozs7O0lBQ3pDLHdEQUE4RDs7Ozs7SUFDOUQsc0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tzZWFyY2hpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlYXJjaGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzZWFyY2hpbmcnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcodGhpcy5zZWFyY2hpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2VhcmNoRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25TZWFyY2hQaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=