import configureStore from "../configureStore";
import { addBug } from "../bugs";

describe("bugSlice", () => {
  it("should handle the addBug action", async () => {
    const store = configureStore();
    const bug = { describtion: "a" };
    const result = await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});
