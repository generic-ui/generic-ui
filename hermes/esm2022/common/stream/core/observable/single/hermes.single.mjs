import { HermesObservable } from '../hermes.observable';
import { HermesSingleSubscriber } from '../subscriber/hermes.single-subscriber';
export class HermesSingle extends HermesObservable {
    createSubscriber(next, error, complete) {
        return new HermesSingleSubscriber({
            next,
            error,
            complete
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL2NvcmUvb2JzZXJ2YWJsZS9zaW5nbGUvaGVybWVzLnNpbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUdoRixNQUFNLE9BQU8sWUFBZ0IsU0FBUSxnQkFBbUI7SUFFcEMsZ0JBQWdCLENBQ2xDLElBQXlCLEVBQ3pCLEtBQTRCLEVBQzVCLFFBQXFCO1FBR3JCLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQztZQUNqQyxJQUFJO1lBQ0osS0FBSztZQUNMLFFBQVE7U0FDUixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uL3N1YnNjcmliZXIvaGVybWVzLnN1YnNjcmliZXInO1xuaW1wb3J0IHsgSGVybWVzU2luZ2xlU3Vic2NyaWJlciB9IGZyb20gJy4uL3N1YnNjcmliZXIvaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyJztcblxuXG5leHBvcnQgY2xhc3MgSGVybWVzU2luZ2xlPFQ+IGV4dGVuZHMgSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0cHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZVN1YnNjcmliZXIoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblxuXHRcdHJldHVybiBuZXcgSGVybWVzU2luZ2xlU3Vic2NyaWJlcih7XG5cdFx0XHRuZXh0LFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRjb21wbGV0ZVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=