import React from "react";
import { shallow, mount } from "enzyme";

import CopyTask from "./CopyTask";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = mount(<CopyTask />);
  expect(wrapper.state("error")).toEqual(null);
});
