import Account from "../Account.vue";

export default {
  title: "Account",
  component: Account,
  argType: {
    backgroundColor: { control: "green" }
  }
};

const Template = () => ({
  components: { Account },
  template: "<Account/>"
});
export const ByDefault = Template.bind({});
ByDefault.args = {};
