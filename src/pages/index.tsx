import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Background,
  DownArrow,
  Presentation,
  Text,
  Container,
} from "../styles/Home";

const App: React.FC = () => {
  return (
    <Container height="100vh">
      <Background />
      <DownArrow>
        <ArrowDownIcon
          bgSize="contain"
          boxSize="24"
          color="red.900"
          style={{ zIndex: 999 }}
        />
      </DownArrow>
      <Presentation>
        <Text>Hi, i'm Thiago Robles!</Text>
      </Presentation>
    </Container>
  );
};

export default App;
