import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import TopBar from "./TopBar/index";

const Wrap = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px;
  /* min-height: 100vh; */
  /* max-height: 100vh; */
  overflow: auto;
  width: 100vw;
`;

const PageWrapper = ({ children }) => {
  return (
    <Wrap>
      <>
        <TopBar />
        {children}
      </>
    </Wrap>
  );
};
export default PageWrapper;
