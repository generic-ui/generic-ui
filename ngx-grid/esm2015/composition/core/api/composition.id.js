/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../domain-read/composition.read-model-root-id';
export class CompositionId extends AggregateId {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTNGLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVzs7OztJQUU3QyxZQUFZLEVBQVU7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQsIFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbklkIGV4dGVuZHMgQWdncmVnYXRlSWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbFJvb3RJZCgpOiBSZWFkTW9kZWxSb290SWQge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxuXG59XG4iXX0=