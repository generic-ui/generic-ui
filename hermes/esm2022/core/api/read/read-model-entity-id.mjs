/**
 * @deprecated
 */
export class ReadModelEntityId {
    uid;
    constructor(uid) {
        this.uid = uid;
    }
    toString() {
        return this.uid;
    }
    getId() {
        return this.uid;
    }
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1lbnRpdHktaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9hcGkvcmVhZC9yZWFkLW1vZGVsLWVudGl0eS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBaUI7SUFFWixHQUFHLENBQVM7SUFFN0IsWUFBc0IsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQTJCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgUmVhZE1vZGVsRW50aXR5SWQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdWlkOiBzdHJpbmc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHVpZDogc3RyaW5nKSB7XG5cdFx0dGhpcy51aWQgPSB1aWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0ZXF1YWxzKGVudGl0eUlkOiBSZWFkTW9kZWxFbnRpdHlJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVpZCA9PT0gZW50aXR5SWQuZ2V0SWQoKTtcblx0fVxufVxuIl19