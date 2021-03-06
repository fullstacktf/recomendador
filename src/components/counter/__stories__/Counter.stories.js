import Counter from "../Counter.vue";

export default {
  title: "Counter",
  component: Counter,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Counter },
  template: "<Counter/>"
});

export const ByDefault = Template.bind({});
ByDefault.args = {};
