import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import { addBug } from "../bugs";

describe("bugSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  it("should handle the addBug action", async () => {
    const bug = { describtion: "a" };
    const savedBug = { ...bug, id: 1 };

    fakeAxios.onPost("/bugs").reply(200, savedBug);
    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should handle the addBug action", async () => {
    const bug = { describtion: "a" };

    fakeAxios.onPost("/bugs").reply(500);
    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });
});
