import { shallow } from "enzyme";
import TenantItemCard from "./TenantItemCard";

const TENANT_ITEM_DATA = {
  id: "id",
  name: "name",
  description: "description",
  code: "code",
  type: "type",
  status: "status"
};

const TEST_HANDLE_CLICK = () => console.log("CLICK");

describe("TenantItemCard component", () => {
  it("should render TenantItemCard", () => {
    const component = shallow(
      <TenantItemCard data={TENANT_ITEM_DATA} onClick={TEST_HANDLE_CLICK} />
    );
    expect(component).toMatchSnapshot();
  });
  it("should render TenantItemCard once", () => {
    const component = shallow(
      <TenantItemCard data={TENANT_ITEM_DATA} onClick={TEST_HANDLE_CLICK} />
    );
    const wrapper = component.find(".makeStyles-root-1");
    expect(wrapper.length).toBe(1);
  });
});
