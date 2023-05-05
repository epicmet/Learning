import { describe, test } from "node:test";
import assert from "node:assert";
import { ensureTrailingForwardSlash } from "./app.js";

describe("ensureTrailingForwardSlash function", () => {
  test("adds slash", () => {
    const initialStr = "http://127.0.0.1/pages/about";
    const ensuredString = ensureTrailingForwardSlash(initialStr);

    assert.notStrictEqual(initialStr, ensuredString);
    assert(ensuredString.endsWith("/"));
  });

  test("does nothing incase of existing slash", () => {
    const initialStr = "http://0.0.0.0/dashboard/profile/";
    const ensuredString = ensureTrailingForwardSlash(initialStr);

    assert.strictEqual(initialStr, ensuredString);
    assert(ensuredString.endsWith("/"));
  });
});
