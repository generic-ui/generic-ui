import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
import * as i0 from "@angular/core";
export declare class CommandStream extends HermesSubject<Command<AggregateId>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandStream, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandStream>;
}
//# sourceMappingURL=command.stream.d.ts.map