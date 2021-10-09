/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
export class SourceLoadingGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} sourceCommandInvoker
     */
    constructor(structureId, sourceCommandInvoker) {
        super();
        this.structureId = structureId;
        this.sourceCommandInvoker = sourceCommandInvoker;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('loading', changes)) {
            this.sourceCommandInvoker.setLoading(this.loading, this.structureId);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SourceLoadingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[loading]'
            },] }
];
/** @nocollapse */
SourceLoadingGate.ctorParameters = () => [
    { type: StructureId },
    { type: SourceCommandInvoker }
];
SourceLoadingGate.propDecorators = {
    loading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SourceLoadingGate.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    SourceLoadingGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SourceLoadingGate.prototype.sourceCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3NvdXJjZS9zb3VyY2UtbG9hZGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU1oRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSTs7Ozs7SUFLMUMsWUFBNkIsV0FBd0IsRUFDakMsb0JBQTBDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFOUQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBcUM7UUFHaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7YUFDbEM7Ozs7WUFMUSxXQUFXO1lBRlgsb0JBQW9COzs7c0JBVTNCLEtBQUs7Ozs7SUFBTixvQ0FDaUI7Ozs7O0lBRUwsd0NBQXlDOzs7OztJQUNsRCxpREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2xvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VMb2FkaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNvdXJjZUxvYWRpbmdHYXRlPik6IHZvaWQge1xuXG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2xvYWRpbmcnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlci5zZXRMb2FkaW5nKHRoaXMubG9hZGluZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cbn1cbiJdfQ==