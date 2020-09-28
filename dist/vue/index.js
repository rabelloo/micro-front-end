import { defineComponent, version, openBlock, createBlock, Fragment, createVNode, toDisplayString, createTextVNode, reactive, createApp, h } from 'https://cdn.skypack.dev/vue@^3.0.0';

var script = defineComponent({
    data: function () {
        return { count: 0, version: version };
    },
    props: {
        name: String,
        onNameChange: Function,
    },
    methods: {
        onInput: function (e) {
            var _a;
            var input = e.currentTarget;
            this.count++;
            (_a = this.onNameChange) === null || _a === void 0 ? void 0 : _a.call(this, input.value);
        },
    },
});

const _hoisted_1 = /*#__PURE__*/createTextVNode(" Current name is ");
const _hoisted_2 = /*#__PURE__*/createTextVNode(" Type to change name ");
const _hoisted_3 = /*#__PURE__*/createTextVNode(" Changed internally ");
const _hoisted_4 = /*#__PURE__*/createTextVNode(" times ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Fragment, null, [
    createVNode("h1", null, "Vue " + toDisplayString(_ctx.version), 1 /* TEXT */),
    _hoisted_1,
    createVNode("code", null, toDisplayString(_ctx.name), 1 /* TEXT */),
    createVNode("label", null, [
      _hoisted_2,
      createVNode("input", {
        value: _ctx.name,
        onInput: _cache[1] || (_cache[1] = (...args) => (_ctx.onInput(...args)))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["value"])
    ]),
    createVNode("p", null, [
      _hoisted_3,
      createVNode("code", null, toDisplayString(_ctx.count), 1 /* TEXT */),
      _hoisted_4
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;

var root = document.createElement('div');
var props;
var render$1 = function (_a) {
    var state = _a.state, setState = _a.setState;
    if (!props) {
        props = reactive({
            name: '',
            onNameChange: function (name) {
                props.name = name;
            },
        });
        createApp({
            render: function () { return h(script, props); },
        }).mount(root);
    }
    props.name = state.name;
    props.onNameChange = function (name) { return setState({ name: name }); };
};

export { render$1 as render, root };
//# sourceMappingURL=index.js.map
