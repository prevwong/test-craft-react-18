import "./styles.css";
import { Editor, Frame, Element, useNode } from "@craftjs/core";

const Button = () => {
  const {
    connectors: { connect, drag }
  } = useNode();

  return <button ref={(dom) => connect(drag(dom))}>Btn</button>;
};

export default function App() {
  return (
    <div className="App">
      <Editor resolver={{ Button }}>
        <Frame>
          <Element is="div" canvas>
            <h1>Hello CodeSandbox</h1>
            <Button />
            <h2>Start editing to see some magic happen!</h2>
          </Element>
        </Frame>
      </Editor>
    </div>
  );
}
