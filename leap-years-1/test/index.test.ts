import { doesNotThrow } from "assert/strict";
import main from "../src/index.ts";

describe('Primary index tests', () => {
    it('should run', () => {
        doesNotThrow(() => main(), 'Main should not have thrown.');
    });
});