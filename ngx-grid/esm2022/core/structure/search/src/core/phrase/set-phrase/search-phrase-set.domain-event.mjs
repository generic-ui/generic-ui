import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    phrase;
    initial;
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, { phrase, initial }, 'SearchPhraseSetDomainEvent');
        this.phrase = phrase;
        this.initial = initial;
    }
    getPhrase() {
        return this.phrase;
    }
    isInitial() {
        return this.initial;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2NvcmUvcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXJHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFHL0M7SUFDQTtJQUZwQixZQUFZLFdBQXdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFnQjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFGbkQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwaHJhc2U6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIHsgcGhyYXNlLCBpbml0aWFsIH0sICdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19