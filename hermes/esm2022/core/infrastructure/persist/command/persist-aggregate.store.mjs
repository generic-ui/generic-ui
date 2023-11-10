import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { CoreContainer } from '../../../api/core.container';
export class PersistAggregateStore extends AggregateStore {
    stateStore;
    aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister.register(this);
    }
    save(aggregate) {
        this.saveValue(aggregate);
    }
    findById(aggregateId) {
        return this.getValue(aggregateId);
    }
    saveValue(aggregate) {
        const anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    }
    getValue(aggregateId) {
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0L2NvbW1hbmQvcGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBTWhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RCxNQUFNLE9BQWdCLHFCQUNyQixTQUFRLGNBQW9CO0lBSVc7SUFGdEIsc0JBQXNCLEdBQTJCLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUVoSCxZQUF1QyxVQUFxQztRQUMzRSxLQUFLLEVBQUUsQ0FBQztRQUQ4QixlQUFVLEdBQVYsVUFBVSxDQUEyQjtRQUUzRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFNRCxJQUFJLENBQUMsU0FBWTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsV0FBYztRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLFNBQVMsQ0FBQyxTQUFZO1FBRTdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLFFBQVEsQ0FBQyxXQUFjO1FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLnN0b3JlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9zdG9yZS9hZ2dyZWdhdGUtc3RvcmUucmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi4vcGVyc2lzdC1hbmVtaWEnO1xuaW1wb3J0IHsgUGVyc2lzdFN0YXRlU3RvcmUgfSBmcm9tICcuLi9wZXJzaXN0LXN0YXRlLnN0b3JlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvcmUuY29udGFpbmVyJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdEFnZ3JlZ2F0ZVN0b3JlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRCBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPFJlYWRNb2RlbFJvb3RJZD4+XG5cdGV4dGVuZHMgQWdncmVnYXRlU3RvcmU8SSwgRD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3RlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdGF0ZVN0b3JlOiBQZXJzaXN0U3RhdGVTdG9yZTxhbnksIEE+KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIucmVnaXN0ZXIodGhpcyk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b0FuZW1pYShhZ2dyZWdhdGU6IEQpOiBBO1xuXG5cdGFic3RyYWN0IGZyb21BbmVtaWEoYW5lbWlhOiBBKTogRDtcblxuXHRzYXZlKGFnZ3JlZ2F0ZTogRCk6IHZvaWQge1xuXHRcdHRoaXMuc2F2ZVZhbHVlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRmaW5kQnlJZChhZ2dyZWdhdGVJZDogSSk6IE9wdGlvbmFsPEQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRwcml2YXRlIHNhdmVWYWx1ZShhZ2dyZWdhdGU6IEQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFuZW1pYSA9IHRoaXMudG9BbmVtaWEoYWdncmVnYXRlKTtcblxuXHRcdHRoaXMuc3RhdGVTdG9yZS5zZXQoYW5lbWlhKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxEPiB7XG5cdFx0Y29uc3Qgb3B0QW5lbWlhID0gdGhpcy5zdGF0ZVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QW5lbWlhLm1hcCh0aGlzLmZyb21BbmVtaWEpO1xuXHR9XG5cbn1cbiJdfQ==