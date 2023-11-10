import { RecordManager } from '../record/record.manager';
import { NotFoundKey } from '../key/not-found-key';
export class ContainerRecord {
    keyRegister;
    containerProvider;
    recordManager = new RecordManager();
    collectionRecords = new Map();
    constructor(keyRegister, containerProvider) {
        this.keyRegister = keyRegister;
        this.containerProvider = containerProvider;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL2NvbnRhaW5lci9jb250YWluZXItcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxPQUFPLGVBQWU7SUFPVDtJQUNBO0lBTkQsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFFcEMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQWdDLENBQUM7SUFFN0UsWUFDa0IsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRHBDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFdEQsQ0FBQztJQUVELE9BQU8sQ0FBSSxLQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUJBQWlCLENBQUksS0FBZTtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxRQUF1QjtRQUVsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBZSxFQUFFLEVBQUU7WUFFbkMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUU7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Q0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDM0M7U0FDRDtRQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztJQUV6QyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlSZWdpc3RlciB9IGZyb20gJy4uL2tleS9rZXkucmVnaXN0ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyUHJvdmlkZXIgfSBmcm9tICcuL2NvbnRhaW5lci1wcm92aWRlcic7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4uL3Rva2VuJztcbmltcG9ydCB7IFJlY29yZE1hbmFnZXIgfSBmcm9tICcuLi9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi4va2V5L2tleSc7XG5pbXBvcnQgeyBSZWNvcmRGYWN0b3J5IH0gZnJvbSAnLi4vcHJvdmlkZXIvcmVjb3JkLmZhY3RvcnknO1xuaW1wb3J0IHsgRGVwZW5kZW5jeSB9IGZyb20gJy4uL3Byb3ZpZGVyL2RlcGVuZGVuY3knO1xuaW1wb3J0IHsgTm90Rm91bmRLZXkgfSBmcm9tICcuLi9rZXkvbm90LWZvdW5kLWtleSc7XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJSZWNvcmQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcmVjb3JkTWFuYWdlciA9IG5ldyBSZWNvcmRNYW5hZ2VyKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2xsZWN0aW9uUmVjb3JkcyA9IG5ldyBNYXA8S2V5PGFueT4sIFJlYWRvbmx5QXJyYXk8YW55Pj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGtleVJlZ2lzdGVyOiBLZXlSZWdpc3Rlcixcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lclByb3ZpZGVyOiBDb250YWluZXJQcm92aWRlclxuXHQpIHtcblx0fVxuXG5cdHJlc29sdmU8VD4odG9rZW46IFRva2VuPFQ+KTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXJSZXNvbHZlKHRva2VuKSE7XG5cdH1cblxuXHRyZXNvbHZlQ29sbGVjdGlvbjxUPih0b2tlbjogVG9rZW48VD4pOiBSZWFkb25seUFycmF5PFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5pbm5lclJlc29sdmVDb2xsZWN0aW9uKHRva2VuKSE7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnJlY29yZE1hbmFnZXIuY2xlYXIoKTtcblx0XHR0aGlzLmNvbGxlY3Rpb25SZWNvcmRzLmNsZWFyKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVEZXBlbmRlbmNpZXMocHJvdmlkZXI6IFJlY29yZEZhY3RvcnkpOiBSZWFkb25seUFycmF5PGFueT4ge1xuXG5cdFx0Y29uc3QgZGVwcyA9IHByb3ZpZGVyLmdldERlcHMoKTtcblxuXHRcdHJldHVybiBkZXBzLm1hcCgoZGVwOiBEZXBlbmRlbmN5KSA9PiB7XG5cblx0XHRcdGlmIChkZXAuaXNDb2xsZWN0aW9uKCkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJSZXNvbHZlQ29sbGVjdGlvbihkZXAuZ2V0VG9rZW4oKSwgZGVwLmlzT3B0aW9uYWwoKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlRGVwZW5kZW5jeShkZXApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlRGVwZW5kZW5jeTxUPihkZXA6IERlcGVuZGVuY3kpOiBUIHwgbnVsbCB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXJSZXNvbHZlKGRlcC5nZXRUb2tlbigpLCBkZXAuaXNPcHRpb25hbCgpKTtcblx0fVxuXG5cdHByaXZhdGUgaW5uZXJSZXNvbHZlPFQ+KHRva2VuOiBUb2tlbjxUPiwgaXNPcHRpb25hbD86IGJvb2xlYW4pOiBUIHwgbnVsbCB7XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLmtleVJlZ2lzdGVyLmdldEtleSh0b2tlbik7XG5cblx0XHRpZiAoa2V5IGluc3RhbmNlb2YgTm90Rm91bmRLZXkpIHtcblxuXHRcdFx0aWYgKGlzT3B0aW9uYWwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3Ioa2V5LmdldEVycm9yKCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5yZWNvcmRNYW5hZ2VyLmhhcyhrZXkpKSB7XG5cblx0XHRcdGNvbnN0IHJlY29yZEZhY3RvcnkgPSB0aGlzLmNvbnRhaW5lclByb3ZpZGVyLmdldFJlY29yZEZhY3Rvcnkoa2V5KTtcblxuXHRcdFx0Y29uc3QgZGVwc0luc3RhbmNlcyA9IHRoaXMucmVzb2x2ZURlcGVuZGVuY2llcyhyZWNvcmRGYWN0b3J5KTtcblxuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSByZWNvcmRGYWN0b3J5LmNyZWF0ZShkZXBzSW5zdGFuY2VzKTtcblxuXHRcdFx0dGhpcy5yZWNvcmRNYW5hZ2VyLnNldChrZXksIGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZWNvcmRNYW5hZ2VyLmdldChrZXkpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbm5lclJlc29sdmVDb2xsZWN0aW9uPFQ+KHRva2VuOiBUb2tlbjxUPiwgaXNPcHRpb25hbCA9IGZhbHNlKTogUmVhZG9ubHlBcnJheTxUPiB8IG51bGwge1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5rZXlSZWdpc3Rlci5nZXRLZXkodG9rZW4pO1xuXG5cdFx0aWYgKGtleSBpbnN0YW5jZW9mIE5vdEZvdW5kS2V5KSB7XG5cblx0XHRcdGlmIChpc09wdGlvbmFsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGtleS5nZXRFcnJvcigpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvblJlY29yZHMuaGFzKGtleSkpIHtcblxuXHRcdFx0Y29uc3QgbXVsdGlGYWN0b3J5ID0gdGhpcy5jb250YWluZXJQcm92aWRlci5nZXRDb2xsZWN0aW9uUmVjb3JkRmFjdG9yeShrZXkpO1xuXG5cdFx0XHRpZiAobXVsdGlGYWN0b3J5KSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXlPZkRlcHMgPVxuXHRcdFx0XHRcdG11bHRpRmFjdG9yeS5nZXREZXBzKClcblx0XHRcdFx0XHRcdFx0XHQubWFwKChkZXBzOiBBcnJheTxEZXBlbmRlbmN5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGVwcy5tYXAoKGRlcDogRGVwZW5kZW5jeSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChkZXAuaXNDb2xsZWN0aW9uKCkpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmlubmVyUmVzb2x2ZUNvbGxlY3Rpb24oZGVwLmdldFRva2VuKCksIGRlcC5pc09wdGlvbmFsKCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJlc29sdmVEZXBlbmRlbmN5KGRlcCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnN0IGluc3RhbmNlcyA9IG11bHRpRmFjdG9yeS5jcmVhdGUoYXJyYXlPZkRlcHMpO1xuXG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvblJlY29yZHMuc2V0KGtleSwgaW5zdGFuY2VzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uUmVjb3Jkcy5nZXQoa2V5KSE7XG5cblx0fVxufVxuIl19