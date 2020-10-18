/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @abstract
 * @template I, A
 */
export class PersistStateStore {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} anemia
     * @return {?}
     */
    set(anemia) {
        this.state.set(anemia.getId(), anemia);
    }
    /**
     * @param {?} anemias
     * @return {?}
     */
    setMany(anemias) {
        anemias.forEach((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => {
            this.set(anemia);
        }));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.state.values());
    }
    /**
     * @return {?}
     */
    clear() {
        this.state.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersistStateStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdC9wZXJzaXN0LXN0YXRlLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBS3BELE1BQU0sT0FBZ0IsaUJBQWlCO0lBQXZDO1FBRWtCLFVBQUssR0FBbUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXVCcEQsQ0FBQzs7Ozs7SUFyQkEsR0FBRyxDQUFDLE1BQVM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBaUI7UUFDeEIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQVMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QjtRQUMzQixPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDs7Ozs7O0lBdkJBLGtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNpc3RBbmVtaWEgfSBmcm9tICcuL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdFN0YXRlU3RvcmU8SSBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgQSBleHRlbmRzIFBlcnNpc3RBbmVtaWE8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBNYXA8c3RyaW5nLCBBPiA9IG5ldyBNYXAoKTtcblxuXHRzZXQoYW5lbWlhOiBBKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQoYW5lbWlhLmdldElkKCksIGFuZW1pYSk7XG5cdH1cblxuXHRzZXRNYW55KGFuZW1pYXM6IEFycmF5PEE+KTogdm9pZCB7XG5cdFx0YW5lbWlhcy5mb3JFYWNoKChhbmVtaWE6IEEpID0+IHtcblx0XHRcdHRoaXMuc2V0KGFuZW1pYSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8QT4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnN0YXRlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8QT4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc3RhdGUudmFsdWVzKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG59XG4iXX0=