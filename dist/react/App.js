import React, { useState, version } from 'https://cdn.skypack.dev/react';
export const App = ({ name, onNameChange }) => {
    const [count, setCount] = useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null,
            "React ",
            version),
        "Current name is ",
        React.createElement("code", null, name),
        React.createElement("label", null,
            "Type to change name",
            React.createElement("input", { value: name, onChange: (e) => {
                    const input = e.currentTarget;
                    setCount(count + 1);
                    onNameChange(input.value);
                } })),
        React.createElement("p", null,
            "Changed internally ",
            React.createElement("code", null, count),
            " times")));
};
//# sourceMappingURL=App.js.map