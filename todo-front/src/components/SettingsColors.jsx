import styled from "styled-components";
import SlidingPane from "react-sliding-pane";
import { useState } from "react";
import ViewAuth from "./ViewAuth";

const Box = styled.button`
  padding: 20px 0;
  border-bottom: 1px solid rgb(234, 234, 234);
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: #fff;
  border: 0;
  text-align: left;
  font-size: 15px;
`;

function SettingsColors() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  return (
    <div>
      <Box
        onClick={() => setState({ isPaneOpen: true })}
        style={{ borderBottom: "1px solid rgb(234,234,234)" }}
      >
        <p>공개설정</p>
      </Box>

      <Box
        onClick={() => setState({ isPaneOpen: true })}
        style={{ borderBottom: "1px solid rgb(234,234,234)" }}
      >
        <p>색상</p>
      </Box>
      <SlidingPane
        isOpen={state.isPaneOpen}
        from="bottom"
        width="300px"
        onRequestClose={() => setState({ isPaneOpen: false })}
      >
        <ViewAuth />
      </SlidingPane>
    </div>
  );
}

export default SettingsColors;
