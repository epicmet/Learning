import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import { addBug, getUnresolvedBugs, resolveBug } from "../bugs";

describe("bugSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  const createState = () => ({
    entities: {
      bugs: {
        list: [],
      },
    },
  });

  it("should add the bug to the store if it's saved to the server ", async () => {
    const bug = { describtion: "a" };
    const savedBug = { ...bug, id: 1 };

    fakeAxios.onPost("/bugs").reply(200, savedBug);
    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add the bug to the store if it's not saved to the server", async () => {
    const bug = { describtion: "a" };

    fakeAxios.onPost("/bugs").reply(500);
    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });

  it("should resolve the bug in store if the server responded with success", async () => {
    const bug = { describtion: "a" };
    const savedBug = { ...bug, resolved: false, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug);
    fakeAxios.onPatch("/bugs/:id");
    store.dispatch(addBug({ describtion: "a" }));

    await store.dispatch(resolveBug(1));

    expect(bugsSlice().list[0]).toHaveProperty("resolved", true);
  });

  describe("selectors", () => {
    it("getUnresolvedBugs", () => {
      const state = createState();
      state.entities.bugs.list = [
        { id: 1, resolved: true },
        { id: 2 },
        { id: 3 },
      ];
      const result = getUnresolvedBugs(state);

      expect(result).toHaveLength(2);
    });
  });
});
