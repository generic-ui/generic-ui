/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../read/store/read-model.store';
/**
 * @abstract
 * @template I, R, B, A
 */
export class InMemoryReadModelStore extends ReadModelStore {
    /**
     * @protected
     * @param {?} inMemoryStore
     */
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        // const aggregateId = readModelRootId.toAggregateId() as B; // TODO remove as
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore
            .getAll()
            .map((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => this.toReadModel(aggregate)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryReadModelStore.prototype.inMemoryStore;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryReadModelStore.prototype.toReadModel = function (aggregate) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkucmVhZC1tb2RlbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQU90RSxNQUFNLE9BQWdCLHNCQUdPLFNBQVEsY0FBb0I7Ozs7O0lBRXhELFlBQXVDLGFBQWtDO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRDhCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUV6RSxDQUFDOzs7OztJQUlELE9BQU8sQ0FBQyxXQUFjO1FBRXJCLDhFQUE4RTtRQUU5RSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ25CLE1BQU0sRUFBRTthQUNSLEdBQUc7Ozs7UUFBQyxDQUFDLFNBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxXQUFjOztjQUN4QixZQUFZLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyRSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBRUQ7Ozs7OztJQXpCc0IsK0NBQW1EOzs7Ozs7SUFJekUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPEkgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsXG5cdFIgZXh0ZW5kcyBSZWFkTW9kZWxSb290PEk+LFxuXHRCIGV4dGVuZHMgQWdncmVnYXRlSWQsXG5cdEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEI+PiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPEksIFI+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPEIsIEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQSk6IFI7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQik6IE9wdGlvbmFsPFI+IHtcblxuXHRcdC8vIGNvbnN0IGFnZ3JlZ2F0ZUlkID0gcmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSBhcyBCOyAvLyBUT0RPIHJlbW92ZSBhc1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IFJlYWRvbmx5QXJyYXk8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmVcblx0XHRcdFx0ICAgLmdldEFsbCgpXG5cdFx0XHRcdCAgIC5tYXAoKGFnZ3JlZ2F0ZTogQSkgPT4gdGhpcy50b1JlYWRNb2RlbChhZ2dyZWdhdGUpKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlOiBPcHRpb25hbDxBPiA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZS5tYXAodGhpcy50b1JlYWRNb2RlbC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iXX0=