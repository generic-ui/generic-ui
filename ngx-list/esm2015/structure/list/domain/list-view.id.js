/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../../../composition/domain-api/read/composition.read-model-root-id';
export class ListViewId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new CompositionReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbGlzdC12aWV3LmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRWpILE1BQU0sT0FBTyxVQUFXLFNBQVEsV0FBVzs7OztJQUUxQyxZQUFZLEVBQVU7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0lkIGV4dGVuZHMgQWdncmVnYXRlSWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbFJvb3RJZCgpOiBSZWFkTW9kZWxSb290SWQge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxufVxuIl19