import styled from "styled-components";

const Box = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgb(234, 234, 234);
  cursor: pointer;
`;

function SettingsColors() {
  return (
    <div>
      <Box>
        <p>공개설정</p>
      </Box>

      <Box>
        <p>색상</p>
      </Box>
    </div>
  );
}

export default SettingsColors;
