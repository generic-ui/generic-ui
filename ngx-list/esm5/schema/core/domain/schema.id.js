/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
var SchemaId = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaId, _super);
    function SchemaId(id) {
        return _super.call(this, id) || this;
    }
    /**
     * @return {?}
     */
    SchemaId.prototype.toReadModelRootId = /**
     * @return {?}
     */
    function () {
        return new SchemaReadModelRootId(this.getId());
    };
    return SchemaId;
}(AggregateId));
export { SchemaId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3pFO0lBQThCLG9DQUFXO0lBRXhDLGtCQUFZLEVBQVU7ZUFDckIsa0JBQU0sRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELG9DQUFpQjs7O0lBQWpCO1FBQ0MsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQVRELENBQThCLFdBQVcsR0FTeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSWQgZXh0ZW5kcyBBZ2dyZWdhdGVJZCB7XG5cblx0Y29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKGlkKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsUm9vdElkKCk6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFSZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxufVxuIl19