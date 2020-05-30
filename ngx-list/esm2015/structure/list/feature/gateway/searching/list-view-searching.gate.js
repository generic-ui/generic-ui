/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { SearchCommandDispatcher } from '../../../../search/domain-api/search.command-dispatcher';
import { SearchEventRepository } from '../../../../search/domain-api/search.event-repository';
export class ListViewSearchingGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} searchEventRepository
     */
    constructor(structureId, searchCommandDispatcher, searchEventRepository) {
        super();
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
            .onSearchPhrase(this.structureId)
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
    { type: StructureId },
    { type: SearchCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFPOUYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLElBQUk7Ozs7OztJQVE5QyxZQUE2QixXQUF3QixFQUNqQyx1QkFBZ0QsRUFDaEQscUJBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBSG9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUpoRSx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU0vRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNqRjtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFWUSxXQUFXO1lBR1gsdUJBQXVCO1lBQ3ZCLHFCQUFxQjs7O3dCQVM1QixLQUFLO2tDQUdMLE1BQU07Ozs7SUFIUCwwQ0FDd0I7O0lBRXhCLG9EQUMrRDs7Ozs7SUFFbkQsNENBQXlDOzs7OztJQUNsRCx3REFBaUU7Ozs7O0lBQ2pFLHNEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9nYXRlJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tzZWFyY2hpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlYXJjaGluZ0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWFyY2hQaHJhc2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdzZWFyY2hpbmcnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcodGhpcy5zZWFyY2hpbmcsIHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZWFyY2hFdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vblNlYXJjaFBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=