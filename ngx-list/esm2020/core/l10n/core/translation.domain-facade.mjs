import { TranslationFacade } from '../api/translation.facade';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
import { HermesReplaySubject } from '@generic-ui/hermes';
export class TranslationDomainFacade extends TranslationFacade {
    constructor() {
        super();
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new HermesReplaySubject(1);
    }
    getTranslation() {
        return this.dictionary.getTranslation();
    }
    onTranslation() {
        return this.dictionary$.toObservable();
    }
    setDefaultTranslation() {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    }
    changeTranslation(change) {
        this.changeTranslationAndPropagate(change);
    }
    setResolver(resolver) {
        this.setResolverAndPropagate(resolver);
    }
    changeTranslationAndPropagate(change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
    setResolverAndPropagate(resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9sMTBuL2NvcmUvdHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFvQixtQkFBbUIsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsaUJBQWlCO0lBUTdEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFQUSx1QkFBa0IsR0FBZ0IsYUFBYSxDQUFDO1FBRWhELGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTFDLGdCQUFXLEdBQStCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJdEYsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELHFCQUFxQjtRQUNwQixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQXlCO1FBQzFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdEO1FBQzNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sNkJBQTZCLENBQUMsTUFBdUM7UUFFNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLHVCQUF1QixDQUFDLFFBQWdEO1FBRS9FLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IGVuVHJhbnNsYXRpb24gfSBmcm9tICcuL2xhbmcvZW4nO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNSZXBsYXlTdWJqZWN0LCBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Eb21haW5GYWNhZGUgZXh0ZW5kcyBUcmFuc2xhdGlvbkZhY2FkZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkZWZhdWx0VHJhbnNsYXRpb246IFRyYW5zbGF0aW9uID0gZW5UcmFuc2xhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRpY3Rpb25hcnk6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeSQ6IEhlcm1lc1N1YmplY3Q8VHJhbnNsYXRpb24+ID0gbmV3IEhlcm1lc1JlcGxheVN1YmplY3QoMSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldFRyYW5zbGF0aW9uKCk6IFRyYW5zbGF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmdldFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRvblRyYW5zbGF0aW9uKCk6IEhlcm1lc09ic2VydmFibGU8VHJhbnNsYXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5kaWN0aW9uYXJ5JC50b09ic2VydmFibGUoKTtcblx0fVxuXG5cdHNldERlZmF1bHRUcmFuc2xhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKHRoaXMuZGVmYXVsdFRyYW5zbGF0aW9uKTtcblx0fVxuXG5cdGNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZVRyYW5zbGF0aW9uQW5kUHJvcGFnYXRlKGNoYW5nZSk7XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyKTtcblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSB8IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuY2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFJlc29sdmVyQW5kUHJvcGFnYXRlKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5LnNldFJlc29sdmVyKHJlc29sdmVyKTtcblxuXHRcdHRoaXMuZGljdGlvbmFyeSQubmV4dCh0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKSk7XG5cdH1cbn1cbiJdfQ==