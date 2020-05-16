/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../domain-api/read/schema.read-model-root-id';
export class SchemaId extends AggregateId {
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
        return new SchemaReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluL3NjaGVtYS5pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR3JGLE1BQU0sT0FBTyxRQUFTLFNBQVEsV0FBVzs7OztJQUV4QyxZQUFZLEVBQVU7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNjaGVtYUlkIGV4dGVuZHMgQWdncmVnYXRlSWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbFJvb3RJZCgpOiBTY2hlbWFSZWFkTW9kZWxSb290SWQge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hUmVhZE1vZGVsUm9vdElkKHRoaXMuZ2V0SWQoKSk7XG5cdH1cbn1cbiJdfQ==