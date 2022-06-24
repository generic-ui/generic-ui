import { RecordManager } from '../record/record.manager';
import { NotFoundKey } from '../key/not-found-key';
export class ContainerRecord {
    constructor(keyRegister, containerProvider) {
        this.keyRegister = keyRegister;
        this.containerProvider = containerProvider;
        this.recordManager = new RecordManager();
        this.collectionRecords = new Map();
    }
    resolve(token) {
        return this.innerResolve(token);
    }
    resolveCollection(token) {
        return this.innerResolveCollection(token);
    }
    clear() {
        this.recordManager.clear();
        this.collectionRecords.clear();
    }
    resolveDependencies(provider) {
        const deps = provider.getDeps();
        return deps.map((dep) => {
            if (dep.isCollection()) {
                return this.innerResolveCollection(dep.getToken(), dep.isOptional());
            }
            else {
                return this.resolveDependency(dep);
            }
        });
    }
    resolveDependency(dep) {
        return this.innerResolve(dep.getToken(), dep.isOptional());
    }
    innerResolve(token, isOptional) {
        const key = this.keyRegister.getKey(token);
        if (key instanceof NotFoundKey) {
            if (isOptional) {
                return null;
            }
            else {
                throw new Error(key.getError());
            }
        }
        if (!this.recordManager.has(key)) {
            const recordFactory = this.containerProvider.getRecordFactory(key);
            const depsInstances = this.resolveDependencies(recordFactory);
            const instance = recordFactory.create(depsInstances);
            this.recordManager.set(key, instance);
        }
        return this.recordManager.get(key);
    }
    innerResolveCollection(token, isOptional = false) {
        const key = this.keyRegister.getKey(token);
        if (key instanceof NotFoundKey) {
            if (isOptional) {
                return null;
            }
            else {
                throw new Error(key.getError());
            }
        }
        if (!this.collectionRecords.has(key)) {
            const multiFactory = this.containerProvider.getCollectionRecordFactory(key);
            if (multiFactory) {
                const arrayOfDeps = multiFactory.getDeps()
                    .map((deps) => {
                    return deps.map((dep) => {
                        if (dep.isCollection()) {
                            return this.innerResolveCollection(dep.getToken(), dep.isOptional());
                        }
                        else {
                            return this.resolveDependency(dep);
                        }
                    });
                });
                const instances = multiFactory.create(arrayOfDeps);
                this.collectionRecords.set(key, instances);
            }
        }
        return this.collectionRecords.get(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL2NvbnRhaW5lci9jb250YWluZXItcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxPQUFPLGVBQWU7SUFNM0IsWUFDa0IsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRHBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFOckMsa0JBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXBDLHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFnQyxDQUFDO0lBTTdFLENBQUM7SUFFRCxPQUFPLENBQUksS0FBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQixDQUFJLEtBQWU7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsUUFBdUI7UUFFbEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWUsRUFBRSxFQUFFO1lBRW5DLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUN2QixP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RyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7SUFFekMsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5UmVnaXN0ZXIgfSBmcm9tICcuLi9rZXkva2V5LnJlZ2lzdGVyJztcbmltcG9ydCB7IENvbnRhaW5lclByb3ZpZGVyIH0gZnJvbSAnLi9jb250YWluZXItcHJvdmlkZXInO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuLi90b2tlbic7XG5pbXBvcnQgeyBSZWNvcmRNYW5hZ2VyIH0gZnJvbSAnLi4vcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4uL2tleS9rZXknO1xuaW1wb3J0IHsgUmVjb3JkRmFjdG9yeSB9IGZyb20gJy4uL3Byb3ZpZGVyL3JlY29yZC5mYWN0b3J5JztcbmltcG9ydCB7IERlcGVuZGVuY3kgfSBmcm9tICcuLi9wcm92aWRlci9kZXBlbmRlbmN5JztcbmltcG9ydCB7IE5vdEZvdW5kS2V5IH0gZnJvbSAnLi4va2V5L25vdC1mb3VuZC1rZXknO1xuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyUmVjb3JkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHJlY29yZE1hbmFnZXIgPSBuZXcgUmVjb3JkTWFuYWdlcigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sbGVjdGlvblJlY29yZHMgPSBuZXcgTWFwPEtleTxhbnk+LCBSZWFkb25seUFycmF5PGFueT4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBrZXlSZWdpc3RlcjogS2V5UmVnaXN0ZXIsXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjb250YWluZXJQcm92aWRlcjogQ29udGFpbmVyUHJvdmlkZXJcblx0KSB7XG5cdH1cblxuXHRyZXNvbHZlPFQ+KHRva2VuOiBUb2tlbjxUPik6IFQge1xuXHRcdHJldHVybiB0aGlzLmlubmVyUmVzb2x2ZSh0b2tlbikhO1xuXHR9XG5cblx0cmVzb2x2ZUNvbGxlY3Rpb248VD4odG9rZW46IFRva2VuPFQ+KTogUmVhZG9ubHlBcnJheTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXJSZXNvbHZlQ29sbGVjdGlvbih0b2tlbikhO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5yZWNvcmRNYW5hZ2VyLmNsZWFyKCk7XG5cdFx0dGhpcy5jb2xsZWN0aW9uUmVjb3Jkcy5jbGVhcigpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlRGVwZW5kZW5jaWVzKHByb3ZpZGVyOiBSZWNvcmRGYWN0b3J5KTogUmVhZG9ubHlBcnJheTxhbnk+IHtcblxuXHRcdGNvbnN0IGRlcHMgPSBwcm92aWRlci5nZXREZXBzKCk7XG5cblx0XHRyZXR1cm4gZGVwcy5tYXAoKGRlcDogRGVwZW5kZW5jeSkgPT4ge1xuXG5cdFx0XHRpZiAoZGVwLmlzQ29sbGVjdGlvbigpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVyUmVzb2x2ZUNvbGxlY3Rpb24oZGVwLmdldFRva2VuKCksIGRlcC5pc09wdGlvbmFsKCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVzb2x2ZURlcGVuZGVuY3koZGVwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZURlcGVuZGVuY3k8VD4oZGVwOiBEZXBlbmRlbmN5KTogVCB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLmlubmVyUmVzb2x2ZShkZXAuZ2V0VG9rZW4oKSwgZGVwLmlzT3B0aW9uYWwoKSk7XG5cdH1cblxuXHRwcml2YXRlIGlubmVyUmVzb2x2ZTxUPih0b2tlbjogVG9rZW48VD4sIGlzT3B0aW9uYWw/OiBib29sZWFuKTogVCB8IG51bGwge1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5rZXlSZWdpc3Rlci5nZXRLZXkodG9rZW4pO1xuXG5cdFx0aWYgKGtleSBpbnN0YW5jZW9mIE5vdEZvdW5kS2V5KSB7XG5cblx0XHRcdGlmIChpc09wdGlvbmFsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGtleS5nZXRFcnJvcigpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMucmVjb3JkTWFuYWdlci5oYXMoa2V5KSkge1xuXG5cdFx0XHRjb25zdCByZWNvcmRGYWN0b3J5ID0gdGhpcy5jb250YWluZXJQcm92aWRlci5nZXRSZWNvcmRGYWN0b3J5KGtleSk7XG5cblx0XHRcdGNvbnN0IGRlcHNJbnN0YW5jZXMgPSB0aGlzLnJlc29sdmVEZXBlbmRlbmNpZXMocmVjb3JkRmFjdG9yeSk7XG5cblx0XHRcdGNvbnN0IGluc3RhbmNlID0gcmVjb3JkRmFjdG9yeS5jcmVhdGUoZGVwc0luc3RhbmNlcyk7XG5cblx0XHRcdHRoaXMucmVjb3JkTWFuYWdlci5zZXQoa2V5LCBpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucmVjb3JkTWFuYWdlci5nZXQoa2V5KTtcblx0fVxuXG5cdHByaXZhdGUgaW5uZXJSZXNvbHZlQ29sbGVjdGlvbjxUPih0b2tlbjogVG9rZW48VD4sIGlzT3B0aW9uYWwgPSBmYWxzZSk6IFJlYWRvbmx5QXJyYXk8VD4gfCBudWxsIHtcblxuXHRcdGNvbnN0IGtleSA9IHRoaXMua2V5UmVnaXN0ZXIuZ2V0S2V5KHRva2VuKTtcblxuXHRcdGlmIChrZXkgaW5zdGFuY2VvZiBOb3RGb3VuZEtleSkge1xuXG5cdFx0XHRpZiAoaXNPcHRpb25hbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihrZXkuZ2V0RXJyb3IoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmNvbGxlY3Rpb25SZWNvcmRzLmhhcyhrZXkpKSB7XG5cblx0XHRcdGNvbnN0IG11bHRpRmFjdG9yeSA9IHRoaXMuY29udGFpbmVyUHJvdmlkZXIuZ2V0Q29sbGVjdGlvblJlY29yZEZhY3Rvcnkoa2V5KTtcblxuXHRcdFx0aWYgKG11bHRpRmFjdG9yeSkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5T2ZEZXBzID1cblx0XHRcdFx0XHRtdWx0aUZhY3RvcnkuZ2V0RGVwcygpXG5cdFx0XHRcdFx0XHRcdFx0Lm1hcCgoZGVwczogQXJyYXk8RGVwZW5kZW5jeT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRlcHMubWFwKChkZXA6IERlcGVuZGVuY3kpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGVwLmlzQ29sbGVjdGlvbigpKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lclJlc29sdmVDb2xsZWN0aW9uKGRlcC5nZXRUb2tlbigpLCBkZXAuaXNPcHRpb25hbCgpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlRGVwZW5kZW5jeShkZXApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZXMgPSBtdWx0aUZhY3RvcnkuY3JlYXRlKGFycmF5T2ZEZXBzKTtcblxuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25SZWNvcmRzLnNldChrZXksIGluc3RhbmNlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvblJlY29yZHMuZ2V0KGtleSkhO1xuXG5cdH1cbn1cbiJdfQ==