import { StructureCommand } from '../../../../structure-core/core/structure.command';
export class SetSearchPhraseCommand extends StructureCommand {
    constructor(structureId, phrase, initial) {
        super(structureId, 'SetSearchPhraseCommand');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvcGhyYXNlL3NldC1waHJhc2Uvc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUVyRixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBRTNELFlBQVksV0FBd0IsRUFDaEIsTUFBYyxFQUNkLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUYxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFNldFNlYXJjaFBocmFzZUNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGhyYXNlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGhyYXNlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGhyYXNlO1xuXHR9XG5cblx0aXNJbml0aWFsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWw7XG5cdH1cblxufVxuIl19