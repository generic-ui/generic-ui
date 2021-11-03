import { CommandStream } from './command.stream';
import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import * as i0 from "@angular/core";
export declare class CommandDispatcher {
    private readonly commandStream;
    constructor(commandStream: CommandStream);
    dispatch(command: Command<AggregateId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandDispatcher>;
}
//# sourceMappingURL=command.dispatcher.d.ts.map